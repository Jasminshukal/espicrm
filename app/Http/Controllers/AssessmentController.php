<?php

namespace App\Http\Controllers;

use App\Http\Requests\Assessment\AddAssessment;
use App\Models\Activity;
use App\Models\Application;
use Illuminate\Support\Facades\Auth;
use App\Models\assessment;
use Illuminate\Http\Request;
use App\Models\University;
use App\Models\Course;
use App\Models\Enquiry;
use App\Models\Intact;
use DataTables;
use App\Models\User;
use App\Mail\AddAssessments;
use Illuminate\Support\Facades\Mail;

class AssessmentController extends Controller
{
    public function __construct()
    {
        $this->AutoAddApplication=false;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = assessment::select('*')->where('status', '!=', 'approved')
            ->groupBy('enquiry_id')
            ->with('University','Course','User','Enquiry','University.Country');

            if(\Auth::user()->roles->pluck('name')->first()=="counsellor")
            {
                $data->where('added_by_id',\Auth::user()->id);
            }

            return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('status', function($row){
                            return ucfirst($row->status);
                    })
                    ->addColumn('date', function($model) {
                        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $model->created_at)->format('d/m/Y H:i:s');
                    })
                    ->addColumn('assign_to', function($row){
                        if(empty($row->assign_id))
                        {
                            $assign_to="Not-Assigned yet";
                        }else{
                            $assign_to=$row->user->name;
                        }
                        return $assign_to;
                    })

                    ->addColumn('action', function($row){
                        $btn ="<div class='row'>
                        <div class='col-md-4'>";
                        $btn .='<div class="dropdown show">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                          <a title="Approved" class="dropdown-item" href="'.route('assessment.status',["id"=>$row->id,"status"=>"approved"]).'">Approved</a>
                          <a title="On-Hold" class="dropdown-item" href="'.route('assessment.status',["id"=>$row->id,"status"=>"on-hold"]).'">On-Hold</a>
                          <a title="Rejected" class="dropdown-item" href="'.route('assessment.status',["id"=>$row->id,"status"=>"rejected"]).'">Rejected</a>
                        </div>
                      </div>';
                      $btn .="</div>";

                      $btn="<a href='".route('Assessment.Add',$row->enquiry_id) ."' class='btn btn-info'>Show</a>";

                    //   if(Auth::user()->hasRole('Admin') || Auth::user()->hasRole('super-admin'))
                    //   {
                    //       $users=User::where("company_id",Auth::user()->company_id)->get();
                    //   }
                    //   if(isset($users))
                    //   {
                    //     $btn .="<div class='col-md-8'>";
                    //     if(empty($row->assign_id))
                    //     {
                    //         $btn .="<select name='assign[]' onchange='assign_action(this.value,".$row->id.")' class='assign form-control'>";
                    //         if(empty($row->assign_id))
                    //         {
                    //             $btn .="<option value=''>select assign</option>";
                    //         }
                    //         foreach($users as $user)
                    //         {
                    //             $btn .="<option value='$user->id'";
                    //             if($user->id==$row->assign_id)
                    //             {
                    //                 $btn .="selected";
                    //             }
                    //             $btn .= '>' . $user->name . '</option>';
                    //         }
                    //     $btn .="</select>";
                    //     }

                    //     $btn .="</div>";
                    //   }
                      $btn .="</div>";
                      return $btn;

                    })
                    ->addColumn('assign', function($row){

                    })
                    ->rawColumns(['action'])
                    ->make(true);
        }
        return view('assessment.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create($enquiry)
    {
        $university=University::all();
        $course=Course::all();
        $intake=Intact::groupBy('month')->orderBy('id', 'asc')->get();
        $assessment=assessment::where('enquiry_id',$enquiry)->with('AddedBy')->get();
        $enquiry_detail=Enquiry::with('Details')->has('Details')->where('id',$enquiry)->first();
        if(empty($enquiry_detail))
        {
            return redirect()->route('EnquiryDetail.add',['id'=>$enquiry])->withError("Details doesn't exist. Please fill the details.");
            abort(401, 'Page not found');
        }
        return view('assessment.add',compact('enquiry','university','course','intake','assessment','enquiry_detail'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddAssessment $AddAssessment)
    {
        if(isset($AddAssessment->country_id))
        {
            $totassesment=count($AddAssessment->country_id);
            for($i=0;$i<$totassesment;$i++)
            {
                if($AddAssessment->country_id[$i])
                {

                    $data[]=[
                        'university_id' =>$AddAssessment->university_id[$i],
                        'course_id' => $AddAssessment->course_id[$i],
                        'intact_month_id' =>$AddAssessment->intact_month_id[$i],
                        'intact_year_id' =>$AddAssessment->intact_year_id[$i],
                        'enquiry_id' => $AddAssessment->enquiry_id,
                        'added_by_id'=>\Auth::user()->id,
                        'specialization'=>$AddAssessment->specialization[$i],
                        'level'=>$AddAssessment->level[$i],
                        'duration'=>$AddAssessment->duration[$i],
                        'app_fee'=>$AddAssessment->app_fee[$i],
                        'tution_fee'=>$AddAssessment->tution_fee[$i],
                        'program_link'=>$AddAssessment->course_link[$i],
                        'remarks'=>$AddAssessment->remarks,
                        'type'=>"default",
                        'location'=>"default",
                        'status'=>"process",
                        'created_at'=>\Carbon\Carbon::now()->toDateTimeString()
                    ];
                }

            }
            //add a maniple assessment function

            //but for now we have add only one
            $enquiry=Enquiry::find($AddAssessment->enquiry_id);
            $enquiry->status="assign";
            $enquiry->save();
            $assessment=assessment::insert($data);
                //A Trigger to display in student detail
                EnqActivity("Add New Assessment",$data[0]['enquiry_id']);
                // Add Mail to studant
                // $enquiry=Enquiry::find($data[0]['enquiry_id']);
                // Mail::to($enquiry->email)->send(new AddAssessments($enquiry));

            if($this->AutoAddApplication==true)
            {
                $validated['application_id']=$this->generateUniqueCode();
                $Application=Application::create($validated);
            }
        }
        return redirect(route('Assessment.Add',$AddAssessment->enquiry_id))->with('success','Assessment');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\assessment  $assessment
     * @return \Illuminate\Http\Response
     */
    public function show(assessment $assessment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\assessment  $assessment
     * @return \Illuminate\Http\Response
     */
    public function edit(assessment $assessment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\assessment  $assessment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, assessment $assessment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\assessment  $assessment
     * @return \Illuminate\Http\Response
     */
    public function destroy($assessment)
    {
        $assessment=assessment::find($assessment);
        $assessment->status="Remove";
        $assessment->save();
        EnqActivity("Remove Assessment ",$assessment->enquiry_id);
        return redirect(route('Assessment.Add',$assessment->enquiry_id));
    }

    public function status_change(Request $request)
    {
        // $request->status
        assessment::where("id",$request->id)->update(["status"=>$request->status]);
        if($request->status=="approved")
        {
            $assessment=assessment::find($request->id)->toArray();
            $assessment['application_id'] ="ESPI_".$this->generateUniqueCode();
            Application::create($assessment);
            // $application=new Application();
            // $application->enquiry_id=$assessment->enquiry_id;
            // $application->university_id=$assessment->university_id;
            // $application->course_id=$assessment->course_id;
            // $application->intact_year_id=$assessment->intact_year_id;
            // $application->intact_month_id=$assessment->intact_month_id;
            // $application->added_by_id=$assessment->added_by_id;
            // $application->company_id=$assessment->company_id;
            // $application->save();
            return redirect(route('Application.index'));

        }
        return redirect(route('assessments.index'));
    }

    public function assessmentAssign(Request $request)
    {
        assessment::where("id",$request->assessment_id)->update(["assign_id"=>$request->user_id]);
    }

    public function EmailNotifyAssessment($enquiry_id,Request $request)
    {
        $Enquiry = Enquiry::where('id',$enquiry_id)->first();
        $Assessment=assessment::where('enquiry_id',$enquiry_id)->where('status','!=','apply')->get();

        //$enquiry=Enquiry::find($enquiry_id);

        // $enquiry = Enquiry::with('Assessment')
        // ->whereHas('Assessment', function ($query) {
        //     $query->Enquiry('status','NOT','apply');
        // })->where('id',$enquiry_id)->get();
        $cc=array();
        if(isset($request->cc_mail))
        {
            $cc=explode(',',$request->cc_mail);
        }

        if(isset($Enquiry->email))
        {
            Mail::to($Enquiry->email)->cc($cc)->send(new AddAssessments($Enquiry,$Assessment));
            return redirect()->back()->withSuccess('Send Mail SuccessFully');
        }
        else
        {
            return false;
        }
    }

    public function generateUniqueCode()
    {
        do {
            $code = random_int(10000000, 99999999);
        } while (Application::where("application_id", "=", $code)->first());
        return $code;
    }
}

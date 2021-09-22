<?php

namespace App\Http\Controllers;

use App\Http\Requests\University\AddUniversity;
use App\Http\Requests\University\EditUniversity;
use App\Http\Requests\University\UniversityImport;
use App\Models\University;
use App\Models\UniversityCampus;
use App\Models\Country;
use App\Models\CsvData;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\Auth;
use App\Imports\ImportUniversity;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Intact;

class UniversityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('permission:view-university');
        $this->middleware('permission:create-university', ['only' => ['create','store']]);
        $this->middleware('permission:update-university', ['only' => ['edit','update']]);
        $this->middleware('permission:destroy-university', ['only' => ['destroy']]);
    }
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = University::select('*')->with('Course');
            return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('action', function($row){
                        $btn="";
                        if(Auth::user()->hasAnyPermission(['view-course'])){
                           $btn .= ' <a href="'.route('course.detail',$row->id).'" title="View Course" class="btn btn-primary btn-sm" data-row="'.route('course.detail',$row->id).'">Course</a>';
                        }
                        if(Auth::user()->hasAnyPermission(['update-university'])){
                           $btn .= '<a href="'.route('University.edit',$row->id).'" title="Edit University" class="edit btn btn-primary btn-sm mt-2"  data-row="'.route('University.edit',$row->id).'">Edit</a>';
                        }
                        return $btn;
                    })
                    ->rawColumns(['action'])
                    ->make(true);
        }
        return view('university.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $intake=Intact::select('month','id')->groupBy('month')->orderBy('id','asc')->get();
       
        $intakeYear=Intact::select('year','id')->groupBy('year')->orderBy('id','asc')->get();
        
        return view("university.add",compact("intake","intakeYear"));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AddUniversity $AddUniversity)
    {  
        $validated = $AddUniversity->validated();
        
        $validated['added_by']=\Auth::user()->id;
        
        $validated['intake_year']=$AddUniversity->intake_year;
        $validated['intake_month']=$AddUniversity->intake_month;
        $validated['provision_state']=$AddUniversity->provision_state;
        $validated['application_fees']=$AddUniversity->application_fees;

        $validated['d_req_aca_per']=$AddUniversity->d_req_aca_per;
        $validated['d_req_aca_gpa']=$AddUniversity->d_req_aca_gpa;
        $validated['d_req_lan_per']=$AddUniversity->d_req_lan_per;
        $validated['d_req_lan_gpa']=$AddUniversity->d_req_lan_gpa;

        $validated['g_req_aca_per']=$AddUniversity->g_req_aca_per;
        $validated['g_req_aca_gpa']=$AddUniversity->g_req_aca_gpa;
        $validated['g_req_lan_per']=$AddUniversity->g_req_lan_per;
        $validated['g_req_lan_gpa']=$AddUniversity->g_req_lan_gpa;

        $validated['pg_req_aca_per']=$AddUniversity->pg_req_aca_per;
        $validated['pg_req_aca_gpa']=$AddUniversity->pg_req_aca_gpa;
        $validated['pg_req_lan_per']=$AddUniversity->pg_req_lan_per;
        $validated['pg_req_lan_gpa']=$AddUniversity->pg_req_lan_gpa;

        $validated['ten_req_aca_per']=$AddUniversity->ten_req_aca_per;
        $validated['ten_req_aca_gpa']=$AddUniversity->ten_req_aca_gpa;
        $validated['ten_req_lan_per']=$AddUniversity->ten_req_lan_per;
        $validated['ten_req_lan_gpa']=$AddUniversity->ten_req_lan_gpa;

        $validated['twelve_req_aca_per']=$AddUniversity->twelve_req_aca_per;
        $validated['twelve_req_aca_gpa']=$AddUniversity->twelve_req_aca_gpa;
        $validated['twelve_req_lan_per']=$AddUniversity->twelve_req_lan_per;
        $validated['twelve_req_lan_gpa']=$AddUniversity->twelve_req_lan_gpa;
        
        if($AddUniversity->news_letter)
        {
            $avatarPath = $AddUniversity->file('news_letter');
            $avatarName = time() . '.' . $avatarPath->getClientOriginalExtension();
            $file = $AddUniversity->file('news_letter');
            // generate a new filename. getClientOriginalExtension() for the file extension
            $filename = 'news-letter-' . time() . '.' . $file->getClientOriginalExtension();
            // save to storage/app/photos as the new $filename
            $path = $file->storeAs('news_letter', $filename);
            $validated['news_letter'] =$filename;
        }
        

        $university=University::create($validated);
        
        //university campus saving
        
        if(isset($AddUniversity->campus_name))
        {
            $totCampus=count($AddUniversity->campus_name);
            for($i=0;$i<$totCampus;$i++)
            {
                $data[]=[
                    'university_id'=>$university->id,
                    'campus_name'=>$AddUniversity->campus_name[$i],
                    'campus_country'=>$AddUniversity->campus_country[$i],
                    'campus_address'=>$AddUniversity->campus_address[$i],
                    'campus_fees'=>$AddUniversity->campus_fees[$i],
                    'company_id'=>\Auth::user()->company_id,
                ];
            }
            if(isset($data))
            {
                UniversityCampus::insert($data);
            }
        }
        
        //UniversityCampus
        return redirect(route('University.index'))->with('success','University');;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function show(University $university)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $intake=Intact::select('month')->groupBy('month')->orderBy('id','asc')->get();
        $intakeYear=Intact::select('year')->groupBy('year')->orderBy('id','asc')->get();

       $university=University::find($id);
       return view("university.edit",compact("university",'intake','intakeYear'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function update(EditUniversity $request,$university)
    {
        $validated = $request->validated();
        $university=University::where("id",$university)->update($validated);
        return redirect(route('University.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\University  $university
     * @return \Illuminate\Http\Response
     */
    public function destroy(University $university)
    {
        //
    }

    public function getUniversityFromCountry($country_id)
    {
        return University::where('country_id',$country_id)
        ->with(['Course' => function ($query) {

        }])->get();

        if($university->relation()->exists())
        {
            return $university;
        }
        else
        {
            return "";
        }
    }

    public function UniversityImport()
    {
        return view("university.import_form");
    }

    public function processImport(Request $request) 
    {
        $validated = $request->validate([
            'file' => 'mimes:csv,xlsx,xls'
        ]);
        $data = Excel::toArray(new ImportUniversity(), request()->file('file'));
        return view("university.import_fields",compact("data"));
       
    }
    
    function university_import_save(Request $request)
    {
       
        $totuniversity=count($request->name);
        for($i=0;$i<$totuniversity;$i++)
        {
            $country = Country::firstOrNew(array('name' => $request->country[$i]));
            $intake_year = Intact::firstOrNew(array('year' => $request->intake_year[$i]));
            $intake_month = Intact::firstOrNew(array('month' => $request->intake_month[$i]));
        
            $university = University::firstOrNew(array('name' => $request->name[$i]));
            $university->description = $request->description[$i];
            $university->address=$request->address[$i];
            $university->phone=$request->phone[$i];
            $university->email=$request->email[$i];
            $university->status="active";
            $university->country_id=$country->id;
            $university->provision_state=$request->provision_state[$i];
            $university->intake_year=$request->intake_year->id;
            $university->intake_month=$request->intake_month->id;
            $university->application_fees=$request->application_fees[$i];
            $university->web=$request->web[$i];

            $university->d_req_aca_per=$request->d_req_aca_per[$i];
            $university->d_req_aca_gpa=$request->d_req_aca_gpa[$i];
            $university->d_req_lan_per=$request->d_req_lan_per[$i];
            $university->d_req_lan_gpa=$request->d_req_lan_gpa[$i];

            $university->g_req_aca_per=$request->g_req_aca_per[$i];
            $university->g_req_aca_gpa=$request->g_req_aca_gpa[$i];
            $university->g_req_lan_per=$request->g_req_lan_per[$i];
            $university->g_req_lan_gpa=$request->g_req_lan_gpa[$i];

            $university->pg_req_aca_per=$request->pg_req_aca_per[$i];
            $university->pg_req_aca_gpa=$request->pg_req_aca_gpa[$i];
            $university->pg_req_lan_per=$request->pg_req_lan_per[$i];
            $university->pg_req_lan_gpa=$request->pg_req_lan_gpa[$i];

            $university->ten_req_aca_per=$request->ten_req_aca_per[$i];
            $university->ten_req_aca_gpa=$request->ten_req_aca_gpa[$i];
            $university->ten_req_lan_per=$request->ten_req_lan_per[$i];
            $university->ten_req_lan_gpa=$request->ten_req_lan_gpa[$i];

            $university->twelve_req_aca_per=$request->twelve_req_aca_per[$i];
            $university->twelve_req_aca_gpa=$request->twelve_req_aca_gpa[$i];
            $university->twelve_req_lan_per=$request->twelve_req_lan_per[$i];
            $university->twelve_req_lan_gpa=$request->twelve_req_lan_gpa[$i];

            $university->company_id=\Auth::user()->company_id;
            $university->added_by=\Auth::user()->id;
            $university->save();

            if($request->campus_name[$i])
            {
                $campus_name=explode("###",$request->campus_name[$i]);
                $totCampus=count($campus_name);
                $campus_country=explode("###",$request->campus_country[$i]);
                $campus_address=explode("###",$request->campus_address[$i]);
                $campus_fees=explode("###",$request->campus_fees[$i]);
                for($j=0;$j<$totCampus;$j++)
                {
                    $campus_check=UniversityCampus::where("campus_name",$campus_name[$j])
                    ->where("university_id",$university->id)
                    ->first();
                    if(empty($requirements_check)){
                        $campus_check=new UniversityCampus();
                    }
                    $campus_check->university_id=$university->id;
                    $country=Country::firstOrNew(array('name'=>trim($campus_country[$i])));

                    $campus_check->campus_name=$campus_name[$j] ?? "";
                    $campus_check->campus_country=$country->id ?? "";
                    $campus_check->campus_fees=$campus_fees[$j] ?? "";
                    $campus_check->campus_address=$campus_address[$j] ?? "";
    
                    $campus_check->company_id=\Auth::user()->company_id;
                    $campus_check->save();
                }
            }
        }
        return redirect(route('University.index'))->with("success","University");
    }
}

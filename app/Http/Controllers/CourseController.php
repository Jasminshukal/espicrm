<?php

namespace App\Http\Controllers;

use App\Http\Requests\Course\Addcourse;
use App\Http\Requests\Course\Editcourse;
use App\Models\Course;
use App\Models\University;
use Illuminate\Http\Request;
use DataTables;
use App\Models\CourseRecruitments;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = Course::select('*')->with('University');
            return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('action', function($row){
                        $btn = ' <a href="'.route('Course.edit',$row->id).'" class="edit btn btn-primary btn-sm" data-row="'.route('Course.edit',$row->id).'">Edit</a>';
                            return $btn;
                    })
                    ->rawColumns(['action'])
                    ->make(true);
        }
        $uni=0;
        return view('course.index',compact('uni'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $university=University::all();
        $university_selected=$request->input('university');
        if(isset($university))
        {
            return view('course.add',compact('university_selected','university'));
        }
        else
        {


        }

        // $request
    }

    /**
     * Store a newly created resource in storage.
     *
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Addcourse $addcourse)
    {
        $validated = $addcourse->validated();
        $validated['added_by']=\Auth::user()->id;
        $validated['company_id']=\Auth::user()->company_id;
        $course=Course::create($validated);
        return redirect(route('Course.index'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit($id,Request $request)
    {
        $Course=Course::find($id);
        $university=University::all();
        $university_selected=$request->input('university');
        $course_requirements=CourseRecruitments::where("course_id",$id)
        ->where("status","status")
        ->get();
        if(isset($university))
        {
            return view('course.edit',compact('university_selected','university','Course','course_requirements'));
        }
        else
        {


        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Editcourse $request,$course)
    {
        $validated = $request->validated();
        $validated['added_by']=\Auth::user()->id;
        $validated['company_id']=\Auth::user()->company_id;
        $course=Course::where("id",$course)->update($validated);

        return redirect(route('Course.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy(Course $course)
    {
        //
    }

    public function CourseDetail($uni,Request $request)
    {
       
        if ($request->ajax()) {
            $data = Course::select('*')->where('university_id',$uni)->with('University');
            
            return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('action', function($row){
                           $btn = ' <a href="'.route('Course.edit',$row->id).'" class="edit btn btn-primary btn-sm" data-row="'.route('Course.edit',$row->id).'">Edit</a>';
                           
                            return $btn;
                    })
                    ->rawColumns(['action'])
                    ->make(true);
        }
       
        return view('course.index',compact('uni'));
        // return view('course.index');
    }

    public function getCourseFromUniversity($uni)
    {
        return Course::where('university_id',$uni)->get();
    }

    public function CourseDetail_edit(Request $request)
    {
        $university=University::all();
        $data=Course::find($request->course);
        return view('course.edit',compact('university','data'));
    }
}

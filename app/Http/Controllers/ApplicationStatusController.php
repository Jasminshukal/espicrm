<?php

namespace App\Http\Controllers;

use App\Models\ApplicationStatus;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\Redirect;

class ApplicationStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if ($request->ajax()) {
            $data = ApplicationStatus::select('*')->with('Country');

            return Datatables::of($data)
                    ->addIndexColumn()
                    ->addColumn('action', function($row){
                            return "<a class='btn btn-info' onclick='edit_status(".$row->id.");'>Edit</a> <a class='btn btn-danger' onclick='delet_status(".$row->id.")'>Delete</a>";
                    })
                    ->addColumn('date', function($model) {
                        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $model->created_at)->format('d/m/Y H:i:s');
                    })
                    ->rawColumns(['action','processor_id'])
                    ->make(true);
        }
        return view('ApplicationStatus.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'status' => 'required',
            'countries_id' => 'required',
        ]);
        $applicationStatus= new ApplicationStatus();
        $applicationStatus->company_id=\Auth::user()->company_id;
        $applicationStatus->status=$request->status;
        $applicationStatus->countries_id=$request->countries_id;
        $applicationStatus->save();
        return redirect()->back()->withSuccess('Application Status.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ApplicationStatus  $applicationStatus
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return ApplicationStatus::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ApplicationStatus  $applicationStatus
     * @return \Illuminate\Http\Response
     */
    public function edit(ApplicationStatus $applicationStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ApplicationStatus  $applicationStatus
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,$applicationStatus)
    {
        $request->validate([
            'status' => 'required',
            'countries_id' => 'required',
        ]);
        $applicationStatus=ApplicationStatus::find($applicationStatus);
        $applicationStatus->company_id=\Auth::user()->company_id;
        $applicationStatus->status=$request->status;
        $applicationStatus->countries_id=$request->countries_id;
        $applicationStatus->save();
        return redirect()->back()->withInfo('Updated Aplication Status.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ApplicationStatus  $applicationStatus
     * @return \Illuminate\Http\Response
     */
    public function destroy($applicationStatus)
    {
        ApplicationStatus::find($applicationStatus)->delete();
        return json_encode(['active'=>1]);
    }
}

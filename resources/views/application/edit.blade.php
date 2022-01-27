@extends('layouts.theam');

@section('title')
Edit Application
@endsection

@section('css')
<link href="{{ asset('assets/css/tables/table-basic.css') }}" rel="stylesheet" type="text/css" />
@endsection

@section('content')
<div class="col-md-12">
    <div class="row justify-content-center">
        <div class="col-md-12">
        <div class="card">
                <div class="card-header">Application Edit</div>
                <div class="card-body">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                        @endif
                    <form method="POST" action="{{ route('Application.update',$Application->id) }}">
                        @csrf
                        @method('patch')
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="country">University</label>
                                    <input type="text" readonly class="form-control" value="{{ $university->name }}">
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="city">Course</label>
                                    <input type="text" readonly class="form-control" value="{{ $course->name }}">
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="intact_month_id">Intake Month</label>
                                    <input type="intact_month" readonly value="{{ $intact->month }}" name="intact_month" id="intact_month" class="form-control" required>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="intact_year_id">Intake Year</label>
                                    <input type="intact_month" readonly value="2021" name="intact_month" class="form-control" required>
                                </div>
                            </div>

                            {{-- <div class="col-md-6">
                                <div class="form-group">
                                    <label for="status">Status</label>
                                    <select name="status" id="" class="form-control">
                                        @foreach ($status as $item)
                                        <option value="{{ $item->status }}"
                                        @if ($Application->status==$item->status)
                                        selected
                                        @endif
                                        >{{ $item->status }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div> --}}

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="status">Processor</label>
                                    <select name="processor_id" id="" class="form-control">
                                        @foreach ($processor as $item)
                                        <option value="{{ $item->id }}"
                                        @if ($Application->processor_id==$item->id)
                                        selected
                                        @endif
                                        >{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="status">Forward To</label>
                                    <input type="text" name="associated_with" id="" class="form-control" value="{{ $Application->associated_with }}" required>
                                </div>
                            </div>

                            {{-- <div class="col-md-6">
                                <div class="form-group">
                                    <label for="status">Remark</label>
                                    <textarea name="remark" class="form-control" required>{{ $Application->remark }}</textarea>
                                </div>
                            </div> --}}

                            <div class="col-md-12 text-center">

                                <input type="submit" class="btn btn-primary" value="{{ __('enquire.submit_btn') }}">
                                <a href="{{route('Application.index')}}" class="btn btn-danger" >{{ __('enquire.cancel_btn_btn') }}</a>
                            </div>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
<br>
<div class="col-md-12 mt-5">
    <div class="row justify-content-center">
        <div class="col-md-12">
        <div class="card">
                <div class="card-header">Status</div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered table-hover table-condensed mb-4">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Responsible Person</th>
                                    <th>Note</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($status as $item)
                                <tr>
                                    <td>{{ $item->status }}</td>
                                    <td>{{ $remark[$item->id]['user'] ?? "Not Set Yet" }}</td>
                                    <td>{{ $remark[$item->id]['remark'] ?? "Not Set Yet" }}</td>
                                    <td class="text-center">
                                        @if(isset($remark[$item->id]))
                                            <span class="@if($remark[$item->id]['is_not_applicable']==0) text-success @else text-danger @endif">@if($remark[$item->id]['is_not_applicable']==0) Complete @else Not Applicable @endif </span></td>
                                        @else
                                            <ul class="table-controls">
                                                <li>
                                                    <a href="javascript:void(0);" data-item="{{ $item }}" class="apply_status bs-tooltip"  data-toggle="tooltip" data-placement="top" title="Apply"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0);" class="NaStatus bs-tooltip" data-item="{{ $item }}" data-toggle="tooltip" data-placement="top" title="Not Applicable"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg></a>
                                                </li>
                                            </ul>

                                        @endif
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Responsible Person</th>
                                    <th>Note</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="col-md-12 mt-5">
    <div class="row justify-content-center">
        <div class="col-md-12">
        <div class="card">
                <div class="card-header">Documents</div>
                <div class="card-body">
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif

                    @foreach ($documents as $item)
                        <div class="card component-card_6">
                            <div class="card-body ">
                                <div class="">
                                    <h4 class="card-text">{{ $item->name }} </h4>
                                    <h6 class="rating-count"><span class="badge outline-badge-primary"> {{ $item->status }} </span></h6>
                                    <h6 class="rating-count"><a href='{{ asset($item->file_name) }}' target="_blank" class='btn btn-info'>Show</a></h6>
                                </div>
                            </div>
                        </div>
                    @endforeach

                </div>
            </div>

        </div>
    </div>
</div>

{{-- <button type="button" class="btn btn-primary mb-2 mr-2" data-toggle="modal" data-target="#ChangeStatusModel">
    Launch modal
  </button> --}}

  <form action="{{ route('Application.StatusRemark',$Application->id) }}" method="POST">
    @csrf
      <div class="modal fade" id="ChangeStatusModel" tabindex="-1" role="dialog" aria-labelledby="ChangeStatusModelLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="ChangeStatusModelLabel">Apply Status</h5>
                      <button type="button" class="close text-danger" data-dismiss="modal" aria-label="Close" >
                          X
                      </button>
                  </div>
                  <input type="hidden" name="is_not_applicable" id="applicableLabel" value="0">
                  <input type="hidden" name="status_id" id="statusLabel">
                  <div class="modal-body">
                    <div class="form-group mb-4">
                        <label class="control-label">Note :</label>
                        <textarea name="remark" class="form-control" required></textarea>
                    </div>
                  </div>
                  <div class="modal-footer">
                      <button class="btn btn-danger" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                      <button type="submit" class="btn btn-primary">Save</button>
                  </div>
              </div>
          </div>
      </div>
  </form>
@endsection

@section('js')
    <script>
        $(".apply_status").click(function(e){
            $("#ChangeStatusModelLabel").html("Apply To Status");
            $("#statusLabel").val($(this).data('item').id);
            $("#ChangeStatusModel").modal("show");
        });
        $(".NaStatus").click(function(){
            $("#ChangeStatusModelLabel").html("Not Applicable.");
            $("#statusLabel").val($(this).data('item').id);
            $("#applicableLabel").val(1);
            $("#ChangeStatusModel").modal("show");
        });
    </script>
@endsection

<form method="POST" action="{{ route('assessments.store') }}">
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add {{ $enquiry_detail->first_name }}'s Assessment</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

                @csrf
                <div class="row">
                    @include('assessment.popup_form')
                    {{-- <input type="submit" class="btn btn-primary" value="{{ __('enquire.submit_btn') }}"> --}}
                    {{-- <a href="{{route('assessments.index')}}" class="btn btn-danger" >{{ __('enquire.cancel_btn_btn') }}</a> --}}
                </div>
                <div class="row" id="student_detail_secation" style="display: none;">
                    <div class="col-md-12">
                        <x-EnquiryDetailPopUp type="error" :message="$enquiry_detail" class="mt-4"/>
                    </div>
                </div>




        </div>
        <div class="modal-footer">
            <a href="#" id="student_detail_secation_hendel" class="btn btn-warning"  onclick="ShowDetail('#student_detail_secation')"> Show Student Detail </a>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</form>

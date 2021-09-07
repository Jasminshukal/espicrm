<div class="row" id="assessment_body">
<div class="col-md-6">
    <div class="form-group">
        <label for="country">Type of Assessment</label>
        <select class="form-control" name="assessment_status" id="assessment_status">
		    <option value="">Select Assessment</option>
			<option value="2">General Assesment</option>
			<option value="3">Assesmment 2</option>
			<option value="4">Assesmment 3</option>
			<option value="5">Assesmment 4</option>
		</select>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <label for="country">Country</label>
        <select name="university_id" id="country" class="form-control" required>
            <option value="0" disabled selected>Select Country</option>
            @forelse ( get_country() as $uni)
                <option value="{{ $uni->id }}">{{ ucfirst($uni->name) }}</option>
            @empty
                <option value="#">No University Availabe </option>
            @endforelse
        </select>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
        <label for="university">University</label>
        <select name="university_id" id="University" class="form-control" required>
            <option value="0" disabled selected>Select University</option>
            @forelse ( $university as $uni)
                <option value="{{ $uni->id }}">{{ ucfirst($uni->name) }}</option>
            @empty
                <option value="#">No University Avalible </option>
            @endforelse
        </select>
    </div>
</div>
<input type="hidden" name="enquiry_id" value="{{ $enquiry }}">
<div class="col-md-6">
    <div class="form-group">
        <label for="course_id">Course</label>
        <select name="course_id" id="course_id" class="form-control" required>
            <option value="0" disabled selected>Select Course</option>
            @forelse ( $course as $city)
                <option value="{{ $city->id }}">{{ ucfirst($city->name) }}</option>
            @empty
                <option value="#">No Course Avalible </option>
            @endforelse
        </select>
    </div>
</div>

<div class="col-md-6">
<div class="form-group">
    <label for="status">Other Course</label>
    <input type="text" name="other_course" class="form-control">
</div>
</div>

<div class="col-md-6">
<div class="form-group">
    <label for="status">Location</label>
    <input type="text" name="apply_location" class="form-control">
</div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="intact_month_id">Intake Month</label>
        {{-- <input type="intact_month" value="{{old('intact_month')}}" name="intact_month" id="intact_month" class="form-control" required> --}}
        <select name="intact_month_id" id="" class="form-control" required>
            @forelse ($intake as $item_intack)
                <option value="{{ $item_intack->id }}">{{ $item_intack->month }}</option>
            @empty
                <option value="01">jan</option>
            @endforelse
        </select>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="intact_year_id">Intake Year</label>
        <select name="intact_year_id" id="intact_year_id" class="form-control" required>
            <option value="01">2021</option>
            <option value="02">2022</option>
        </select>
    </div>
</div>
<div class="col-md-6">
<div class="form-group">
        <label for="status">Status</label>
        <select name="status" id="status" class="form-control" required>
            <option value="#" selected disabled>Status</option>
            {{-- <option value="approved">Approved</option> --}}
            <option value="process" selected>In Process</option>
            <option value="rejected">Rejected</option>
            <option value="on-hold">On-Hold</option>
        </select>
    </div>
</div>
<button class="btn btn-danger btn-sm add_assessment">+</button>
</div>
@section('js')
<script>
$(".add_assessment").click(function(e){
    e.preventDefault();
    var data='<div class="col-md-6">';
    data +='<div class="form-group">';
    data +='<label for="country">Country</label>';
    data +='<select name="university_id" class="form-control">';
    data +='<option value="0" disabled selected>Select Country</option>';
    data +='</select>';
    data +='</div>';
    data +='</div>';

    data +='<div class="col-md-6">';
    data +='<div class="form-group">';
    data +='<label for="university">University</label>';
    data +='<select name="university_id" class="form-control">';
    data +='<option value="0" disabled selected>Select University</option>';
    data +='</select>';
    data +='</div>';
    data +='</div>';

    data +='<div class="col-md-6">';
    data +='<div class="form-group">';
    data +='<label for="university">Course</label>';
    data +='<select name="university_id" class="form-control">';
    data +='<option value="0" disabled selected>Select Course</option>';
    data +='</select>';
    data +='</div>';
    data +='</div>';

    data +='<div class="col-md-6">';
    data +='<div class="form-group">';
    data +='<label for="university">Other Course</label>';
    data +='<input type="text" name="other_couse" class="form-control">';
    data +='</div>';
    data +='</div>';

    $("#assessment_body").append(data);
})
</script>
@endsection
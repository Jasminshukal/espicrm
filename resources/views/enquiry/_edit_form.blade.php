
<div class="col-md-12" id="user_exist" style="color:red">

</div>
<div class="col-md-3">
    {{-- row 1  --}}
    <div class="form-group">
        <label for="email" class="mandatory">Email</label>
        <input type="email" name="email" id="email" value="{{$enquiry->email}}" class="form-control" required>
        <!-- <a style="margin-top:5px" onclick="otp_generate()" id="generate_otp">Generate OTP</a>
        <label class="error_msg" style='color:red'></label> -->
    </div>
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="mandatory">First Name</label>
        <input type="text" name="first_name" id="first_name" value="{{$enquiry->first_name}}" class="form-control" required>
    </div>
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email">Middle Name</label>
        <input type="text" name="middle_name" id="middle_name" value="{{$enquiry->middle_name}}" class="@error('middle_name') is-invalid @enderror form-control">
    </div>
    @error('middle_name')
    <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="mandatory">Last Name</label>
        <input type="text" name="last_name" id="last_name" value="{{$enquiry->last_name}}" class="form-control" required>
    </div>
</div>


<div class="col-md-3">
    <div class="form-group">
        <label for="phone" >Passport No</label>
        <input type="text" value="{{$enquiry->passport_no}}" name="passport_no" id="passport_no" class="form-control">
    </div>
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="phone" class="mandatory">Phone</label>
        <input type="number" min="1111111111" max="9999999999" maxlength="10" value="{{$enquiry->phone}}" name="phone" id="phone" class="form-control" required>
    </div>
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="phone" class="">Alternate</label>
        <input type="number" min="1111111111" max="9999999999" maxlength="10" value="{{$enquiry->alternate}}" name="alternate" id="alternate" class="form-control">
    </div>
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="education" class="mandatory">Current / Last Education</label>
        <select name="education" id="education" class="form-control" required>
            <option value="">Current / Last Education</option>
            <option @if($enquiry->education == "10th") selected @endif value="10th">10th</option>
            <option @if($enquiry->education == "diploma") selected @endif value="diploma">Diploma</option>
            <option @if($enquiry->education == "12th") selected @endif value="12th">12th</option>
            <option @if($enquiry->education == "Under-Graduate") selected @endif value="Under-Graduate">Under-Graduate</option>
            <option @if($enquiry->education == "Graduate") selected @endif value="Graduate">Graduate</option>
            <option @if($enquiry->education == "Post-Graduate") selected @endif value="Post-Graduate">Post-Graduate</option>
            <option @if($enquiry->education == "PHD/Doctorate") selected @endif value="PHD/Doctorate">PHD/Doctorate</option>
        </select>
    </div>
</div>

<div class="col-md-12">
    <div class="form-group">
        <label for="address" class="mandatory">Address</label>
        <textarea name="address" id="address" cols="0" rows="5" class="form-control" required>{{$enquiry->address}}</textarea>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="country" class="mandatory">Country</label>
        <select name="country_id" id="country" class="form-control" required>

            @forelse ( get_country() as $country)
                <option @if($enquiry->country_id == $country->id) selected @endif value="{{ $country->id }}">{{ ucfirst($country->name) }}</option>
            @empty
                <option value="#">No Country Available </option>
            @endforelse
        </select>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="state" class="mandatory">State</label>

        <select name="state_id" id="state" value="{{old('state_id')}}" class="form-control" required>
            @forelse ( get_state() as $state)
                <option @if($enquiry->state_id == $state->id) selected @endif value="{{ $state->id }}">{{ ucfirst($state->name) }}</option>
            @empty
                <option value="#">No state Available </option>
            @endforelse
        </select>
        {{-- <input type="text" name="state" id="state" class="form-control" required> --}}
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="city" class="mandatory">City</label>
        <select name="city_id" id="city" class="form-control" required>
        <option value="{{old('city_id')}}">{{old('city_id')}}</option>
            @forelse ( get_city() as $city)
                <option @if($enquiry->city_id == $city->id) selected @endif value="{{ $city->id }}">{{ ucfirst($city->name) }}</option>
            @empty
                <option value="#">No city Available </option>
            @endforelse
        </select>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="city" class="mandatory">Pincode</label>
        <input type="number" min="111111" value="{{$enquiry->postal_code}}" max="999999" name="postal_code" id="postal_code" class="form-control" required>
    </div>
</div>


<div class="col-md-6">
    <div class="form-group">
        <label for="dob" class="mandatory">DOB</label>
        <input type="text" value="{{$enquiry->dob}}" name="dob" class="disableFuturedate form-control" required>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="gender" class="mandatory">Gender</label>
        <select name="gender" id="gender" class="form-control" required>
            <option @if($enquiry->gender == "female") selected @endif value="female">Female</option>
            <option @if($enquiry->gender == "male") selected @endif value="male">Male</option>
        </select>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
    <label for="name">Preferred Country</label>
    {{-- <input type="text"   value="" class="form-control tagging" required> --}}
    <select class="form-control tagging" name="preferred_country" id="preferred_country">
    @foreach (config('espi.enquires_detail.country_interested') as $item)
        <option value="{{ $item }}">{{ $item }}</option>
    @endforeach
    </select>
    </div>
</div>
<div class="col-md-6">
    <div class="form-group">
    <label for="name">Are You interested for Coaching at ESPI ?</label>
    {{-- <input type="text"   value="" class="form-control tagging" required> --}}
    <select name="coaching" class="form-control" required>
        <option selected disabled>Please Select</option>
        <option value="yes" @if($enquiry->status=='Coaching') selected @endif>Yes</option>
        <option value="no">No</option>
    </select>
    </select>
    </div>
</div>


<div class="col-md-6">
    <div class="form-group">
        <label for="country">Know About Us</label>
        <select name="reference_source" id="reference_source" class="form-control">
            <option value="" selected>Know About Us</option>
			<option @if($enquiry->reference_source == "Facebook") selected @endif value="Facebook">Facebook</option>
			<option @if($enquiry->reference_source == "Instagram") selected @endif value="Instagram">Instagram</option>
			<option @if($enquiry->reference_source == "Newspaper") selected @endif value="Newspaper">Newspaper</option>
			<option @if($enquiry->reference_source == "Google") selected @endif value="Google">Google</option>
			<option @if($enquiry->reference_source == "Hordings") selected @endif value="Hordings">Hordings</option>
			<option @if($enquiry->reference_source == "Reference") selected @endif value="Reference" selected="">Reference</option>
			<option @if($enquiry->reference_source == "Seminar") selected @endif value="Seminar">Seminar</option>
			<option @if($enquiry->reference_source == "Agent") selected @endif value="Agent">Agent</option>
			<option @if($enquiry->reference_source == "Classes") selected @endif value="Classes">Classes</option>
        </select>
    </div>
</div>

<div class="col-md-6" id="ref_code_div">
    <div class="form-group">
        <label id="ref_code_label">Reference Code</label>
        <input type="text" name="reference_code" value="{{$enquiry->reference_code}}" id="ref_code" class="form-control">
    </div>
</div>

<div class="col-md-6" id="ref_name_div">
    <div class="form-group">
    <label id="ref_name_label">Reference Name</label>
    <input type="text" name="reference_name" value="{{$enquiry->reference_name}}" id="ref_name" class="form-control">
    </div>
</div>

<div class="col-md-6" id="ref_phone_div">
    <div class="form-group">
        <label id="ref_phone_label">Reference Phone</label>
        <input type="text" name="reference_phone" value="{{$enquiry->reference_phone}}" id="ref_phone" class="form-control">
    </div>
</div>


<div class="col-md-6">
    <div class="form-group">
        <label for="gender">Remarks</label>
        <input type="text" value="{{$enquiry->remarks}}" name="remarks" id="remarks" class="form-control">
    </div>
</div>








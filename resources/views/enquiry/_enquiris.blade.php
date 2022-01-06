{{-- @if ($errors->any())
     @foreach ($errors->all() as $error)
         <div>{{$error}}</div>
     @endforeach
 @endif --}}

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="mandatory">Email</label>
        <input type="email" name="email" id="email" value="{{ old('email') }}"
            class="@error('email') is-invalid @enderror form-control" required>
    </div>
    @error('email')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="mandatory">First Name</label>
        <input type="text" name="first_name" id="first_name" value="{{ old('first_name') }}"
            class="@error('first_name') is-invalid @enderror form-control" required>
    </div>
    @error('first_name')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="">Middle Name</label>
        <input type="text" name="middle_name" id="middle_name" value="{{ old('middle_name') }}"
            class="@error('middle_name') is-invalid @enderror form-control">
    </div>
    @error('middle_name')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="mandatory">Last Name</label>
        <input type="text" name="last_name" id="last_name" value="{{ old('last_name') }}"
            class="@error('last_name') is-invalid @enderror form-control" required>
    </div>
    @error('last_name')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="email" class="">Passport No</label>
        <input type="text" name="passport_number" id="passport_number" value="{{ old('passport_number') }}"
            class="@error('passport_number') is-invalid @enderror form-control">
    </div>
    @error('passport_number')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-3">
    <div class="form-group">
        <label for="phone" class="mandatory">Phone</label>
        <input type="number" min="1111111111" max="9999999999" maxlength="10" value="{{ old('phone') }}" name="phone"
            id="phone" class="@error('phone') is-invalid @enderror form-control" required>
    </div>
    @error('phone')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="education" class="mandatory">Current Education Status</label>
        <select name="education" id="education" class="@error('education') is-invalid @enderror form-control" required>
            <option value="">Current Education Status</option>
            <option @if (old('education') == '10th') selected @endif value="10th">10th</option>
            <option @if (old('education') == 'diploma') selected @endif value="diploma">Diploma</option>
            <option @if (old('education') == '12th') selected @endif value="12th">12th</option>
            <option @if (old('education') == 'Under-Graduate') selected @endif value="Under-Graduate">Under-Graduate</option>
            <option @if (old('education') == 'Graduate') selected @endif value="Graduate">Graduate</option>
            <option @if (old('education') == 'Post-Graduate') selected @endif value="Post-Graduate">Post-Graduate</option>
            <option @if (old('education') == 'PHD/Doctorate') selected @endif value="PHD/Doctorate">PHD/Doctorate</option>
        </select>
    </div>
    @error('education')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-12">
    <div class="form-group">
        <label for="address" class="mandatory">Address</label>
        <textarea name="address" id="address" cols="0" rows="5"
            class="@error('address') is-invalid @enderror form-control" required>{{ old('address') }}</textarea>
    </div>
    @error('address')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>


{{-- row 2 --}}
<div class="col-md-6">
    <div class="form-group">
        <label for="country" class="mandatory">Country</label>
        <select name="country_id" id="country" class="@error('country_id') is-invalid @enderror form-control" required>

            @forelse ( get_country() as $country)
                <option @if ($country->id == 101) selected @endif @if (old('country_id') == $country->id) selected @endif value="{{ $country->id }}">{{ ucfirst($country->name) }}</option>
            @empty
                <option value="#">No Country Available </option>
            @endforelse
        </select>
    </div>
    @error('country_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="state" class="mandatory">State</label>

        <select name="state_id" id="state" class="@error('state_id') is-invalid @enderror form-control" required>
            <option value="#">Select State</option>
            @if (old('state_id'))
                <option value="{{ old('state_id') }}">{{ old('state_id') }}</option>

            @endif
            @forelse ( get_state() as $state)
                <option @if (old('state_id') == $state->id) selected @endif value="{{ $state->id }}">{{ ucfirst($state->name) }}</option>
            @empty
                <option value="#">No state Available </option>
            @endforelse
        </select>
        {{-- <input type="text" name="state" id="state" class="form-control" required> --}}
    </div>
</div>

{{-- row 3 --}}
<div class="col-md-6">
    <div class="form-group">
        <label for="city" class="mandatory">City</label>
        <select name="city_id" id="city" class="@error('city_id') is-invalid @enderror form-control" required>
            <option value="{{ old('city_id') }}">{{ old('city_id') }}</option>
            @forelse ( get_city() as $city)
                <option @if (old('city_id') == $city->id) selected @endif value="{{ $city->id }}">{{ ucfirst($city->name) }}</option>
            @empty
                <option value="">No city Available </option>
            @endforelse
        </select>
    </div>
    @error('city_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="pincode">Pincode</label>
        <input type="number" min="111111" value="{{ old('postal_code') }}" max="999999" name="postal_code"
            id="postal_code" class="@error('postal_code') is-invalid @enderror form-control" required>
    </div>
    @error('postal_code')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>



<div class="col-md-6">
    <div class="form-group">
        <label for="dob" class="mandatory">DOB</label>
        <input type="date" value="{{ old('dob') }}" id="dob" name="dob"
            class="form-control @error('dob') is-invalid @enderror" required>
    </div>
    @error('dob')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="gender" class="mandatory">Gender</label>
        <select name="gender" value="{{ old('gender') }}" id="gender"
            class="form-control @error('gender') is-invalid @enderror" required>
            <option value="">Select Gender</option>
            <option @if(old('gender')=="female") selected @endif value="female">Female</option>
            <option @if(old('gender')=="male") selected @endif value="male">Male</option>
        </select>
    </div>
    @error('gender')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="name">Preferred Country</label>
        {{-- <input type="text"   value="" class="form-control tagging" required> --}}
        <select class="form-control tagging" name="preferred_country" id="preferred_country">
            <option selected disabled>Please Select Country</option>
            @foreach (config('espi.enquires_detail.country_interested') as $item)
                <option value="{{ $item }}">{{ $item }}</option>
            @endforeach
        </select>
    </div>
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="user" class="mandatory">Select Counsellor</label>
        <select name="counsellor_id" id="user" class="@error('counsellor_id') is-invalid @enderror form-control"
            required>
            <option value="" selected>Select Counsellor</option>
            @foreach ($user as $item)
                <option @if (old('counsellor_id') == $item->id) selected @endif value="{{ $item->id }}">{{ $item->name }}</option>
            @endforeach
        </select>
    </div>
    @error('counsellor_id')
        <div class="alert alert-danger">{{ $message }}</div>
    @enderror
</div>

<div class="col-md-6">
    <div class="form-group">
        <label for="country">Know About Us {{ old('reference_source') }}</label>
        <select name="reference_source" id="reference_source" class="form-control">
            <option value="" selected>Know About Us</option>
            <option @if(old('reference_source') == 'Facebook') selected @endif value="Facebook">Facebook</option>
            <option @if(old('reference_source') == 'Instagram') selected @endif value="Instagram">Instagram</option>
            <option @if(old('reference_source') == 'Newspaper') selected @endif value="Newspaper">Newspaper</option>
            <option @if(old('reference_source') == 'Google') selected @endif value="Google">Google</option>
            <option @if(old('reference_source') == 'Hordings') selected @endif value="Hordings">Hordings</option>
            <option @if(old('reference_source') == 'Reference') selected @endif value="Reference">Reference</option>
            <option @if(old('reference_source') == 'Seminar') selected @endif value="Seminar">Seminar</option>
            <option @if(old('reference_source') == 'Agent') selected @endif value="Agent">Agent</option>
            <option @if(old('reference_source') == 'Classes') selected @endif value="Classes">Classes</option>
            <option @if(old('reference_source') == 'Relatives') selected @endif value="Relatives">Relatives</option>
            <option @if(old('reference_source') == 'Friends') selected @endif value="Friends">Friends</option>
        </select>
    </div>
</div>

<div class="col-md-6" id="ref_code_div">
    <div class="form-group">
        <label id="ref_code_label">Reference Code</label>
        <input type="text" name="reference_code" value="{{ old('reference_code') }}" id="ref_code"
            class="form-control">
    </div>
</div>

<div class="col-md-6" id="ref_name_div">
    <div class="form-group">
        <label id="ref_name_label">Reference Name</label>
        <input type="text" name="reference_name" value="{{ old('reference_name') }}" id="ref_name"
            class="form-control">
    </div>
</div>

<div class="col-md-6" id="ref_phone_div">
    <div class="form-group">
        <label id="ref_phone_label">Reference Phone</label>
        <input type="number" min="1111111111" max="9999999999" maxlength="10" name="reference_phone"
            value="{{ old('reference_phone') }}" id="ref_phone" class="form-control">
    </div>
</div>


<div class="col-md-6">
    <div class="form-group">
        <label for="gender">Remarks</label>
        <input type="text" value="{{ old('remarks') }}" name="remarks" id="remarks" class="form-control">
    </div>
</div>

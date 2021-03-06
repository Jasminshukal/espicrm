@if ($message = Session::get('success'))
<div class="col-md-12">
    <div class="alert alert-success alert-block">
        <button type="button" class="close" data-dismiss="alert">×</button>
        <p>{{ __('enquire.message',['code' =>$message]) }}</p>
    </div>
</div>
@endif


@if ($message = Session::get('warning'))
<div class="col-md-12">
    <div class="alert alert-warning alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>
</div>
@endif


@if ($message = Session::get('error'))
<div class="col-md-12">
    <div class="alert alert-danger alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>
</div>
@endif


@if ($message = Session::get('info'))
<div class="col-md-12">
    <div class="alert alert-info alert-block">

        <button type="button" class="close" data-dismiss="alert">×</button>

        <strong>{{ $message }}</strong>

    </div>
</div>
@endif

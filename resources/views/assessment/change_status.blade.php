@extends('layouts.theam')

@section('title')
Add Course
@endsection

@section('content')
<div class="col-md-12">
    <div class="row justify-content-center">
        <div class="col-md-8">
        <div class="card">
                <div class="card-header">{{ __('Add Assessment') }}</div>
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
                    <form method="POST" action="{{ route('assessments.store') }}">
                        @csrf
                        <div class="row">
                            @include('assessment.add_changeform')
                            
                        </div>

                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection

@extends('layouts.theam')

@section('title')
Add User
@endsection
<script src="plugins/ocr/js/mrz-worker.bundle-min-wrapped.js"></script>
<script src="plugins/ocr/js/demo.bundle-min.js"></script>
<meta name="csrf-token" content="{{ csrf_token() }}" />
@section('content')
<div class="col-md-12">
    <div class="row justify-content-center">
        <div class="col-md-12 col-xs-12">
        <div class="card">
                <div class="card-header">{{ __('Add Passport') }}</div>
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
                        <form method="POST" action="{{ route('users.store') }}">
                        @csrf
                        <div class="row">
                          <div class="col-md-12">
                         
                            <div class="input">
                              <input type="file" id="photo" name="photo" accept="image/png, image/jpeg"/>
                            </div>
                            <!--div class="image">
                              <img id="image"></img>
                            </div-->
                            </div>
                            <div class="col-md-6">
                            <div id="parsed"></div>
                            </div>
                            <div class="col-md-6">
                            <div id="detected"></div>
                            </div>
                            </div>
                            <div class="col-md-12">
                            <div class="progress">
                              <div class="gradient">
                                <div class="progress-wrapper">
                                  <div class="progress-text"></div>
                                  <progress></progress>
                                </div>
                              </div>
                            </div>
                            </div>
                        </div> 
                        </form>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection

    <style>

      html, body {
        padding: 0;
        margin: 0;
      }

      pre {
        font-size: small;
      }

      input {
        margin-top: 1em;
      }

      img {
        max-width: 60%;
        margin: 1em;
      }

      div.progress.visible {
        visibility: visible;
      }

      div.progress {
        visibility: hidden;
        margin: 0;
        padding: 0;
        position: fixed;
        top: 0;
        background-color: white;
        width: 100%;
        height: 100%;
      }

      div.gradient {
        padding: 0;
        margin: 0;
        width: 100%;
        height: 100%;
        display: fixed;
        top: 0;
        left: 0;

        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.32+100 */
        background: -moz-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 100%); /* FF3.6-15 */
        background: -webkit-radial-gradient(center, ellipse cover, rgba(0,0,0,0) 0%,rgba(0,0,0,0.25) 100%); /* Chrome10-25,Safari5.1-6 */
        background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0.25) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#52000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      div.progress-wrapper {
        font-size: 2em;
        padding: 2em;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 40%;
        border: 2px solid black;
        background: white;
        box-shadow: 0.5em 0.5em 0.5em rgba(0,0,0,0.25);
        border-radius: 0.2em;

      }

      progress {
        width: 100%;
        margin: 0.2em;
      }

      div.wrapper {
        padding: 5px;
      }

      div.wrapper, div.wrapper > div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      #parsed .error {
        padding: 0px 1em;
        max-width: 60%;

      }

      div#detected{
        margin-bottom: 1em;
        flex-direction: column-reverse;
      }

      canvas {
        max-width: 100%;
        margin: 5px;
      }

      canvas[title=crop] {
        max-width: 100%;
        margin: 0px 5px;
      }

      @media screen and (orientation: landscape) {
      }

      @media screen and (orientation: portrait) {
      }


    </style>
 
  <body>
  
  </body>
  <script src="assets/js/libs/jquery-3.1.1.min.js"></script>
  <script>
    $(document).ready(function(){
      var passport_content=$(".passport_data").val();
    });
    </script>
</html>

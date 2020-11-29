@extends('backend.auth.master')
@section('content')
@php
    use Libs\FormBuilder\FormBuilder;
@endphp
<style>
    #login-page{
        position: relative;
    }

    #loader {
        width: 100%;
        height: 100%;
        position: absolute;
        background: lightblue;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease-in;
        z-index: 9999;
        opacity: .5;
    }
</style>
    <div class="card overflow-hidden" id="login-page">
        <div id="loader">
            <div class="spinner-border text-primary m-1" style="z-index: 9999999"></div>
        </div>
        <div class="bg-soft-primary">
            <div class="row">
                <div class="col-7">
                    <div class="text-primary p-4">
                        <h5 class="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                    </div>
                </div>
                <div class="col-5 align-self-end">
                    <img src="{{ assets('qbackend/assets/images/profile-img.png') }}" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="card-body pt-0">
            <div>
                <a href="#">
                    <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                            <img src="{{ assets('qbackend/assets/images/logo.svg') }}" alt="" class="rounded-circle" height="34">
                        </span>
                    </div>
                </a>
            </div>
            <div class="p-2">
                @php
                    echo FormBuilder::open([
                        'id' => 'frmLogin',
                        'action' => route('backend.auth.login'),
                        'method' => 'POST',
                        'class' => 'form-horizontal qqq'
                    ]);

                    echo FormBuilder::label('email', 'Email')->qInput('email', 'email', '', ['placeholder' => 'Enter email']);
                    echo FormBuilder::label('password', 'Password')->qInput('password', 'password', '', ['placeholder' => 'Enter password']);
                    echo FormBuilder::label('remember', 'Remember', ['class' => 'custom-control-label'])->qInput('checkbox', 'remember', '', ['class' =>'custom-control-input']);

                @endphp


                    <div class="mt-3">
                        {!! FormBuilder::button('submit', 'Login', ['class' => 'btn btn-primary btn-block waves-effect waves-light']) !!}
                    </div>



                    <div class="mt-4 text-center">
                        <h5 class="font-size-14 mb-3">Sign in with</h5>

                        <ul class="list-inline">
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="social-list-item bg-primary text-white border-primary">
                                    <i class="mdi mdi-facebook"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="social-list-item bg-info text-white border-info">
                                    <i class="mdi mdi-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="social-list-item bg-danger text-white border-danger">
                                    <i class="mdi mdi-google"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mt-4 text-center">
                        <a href="auth-recoverpw.html" class="text-muted"><i class="mdi mdi-lock mr-1"></i> Forgot your password?</a>
                    </div>
                {!! FormBuilder::close() !!}
            </div>

        </div>
    </div>
@endsection

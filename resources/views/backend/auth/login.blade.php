@extends('backend.auth.master')
@section('content')
    <div class="card overflow-hidden">
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
            @if($errors->any())
                @foreach ($errors->all() as $error)
                    <div>{{ $error }}</div>
                @endforeach
            @endif
            <div class="p-2">
                <form class="form-horizontal" action="{{ route('backend.auth.checkLogin') }}" method="post" autocomplete="off">
                    @csrf
                    <div class="form-group">
                        <label for="email">Username</label>
                        <input type="text" class="form-control parsley-error" id="email" name="email" placeholder="Enter email">
                        <ul class="parsley-errors-list filled" id="parsley-id-19" aria-hidden="false"><li class="parsley-required">This value is required.</li></ul>
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password" placeholder="Enter password">
                    </div>

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="remember" name="remember"/>
                        <label class="custom-control-label" for="remember">Remember me</label>
                    </div>

                    <div class="mt-3">
                        <button class="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
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
                </form>
            </div>

        </div>
    </div>
@endsection

@extends('backend.layouts.master')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Categories</h4>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div id="{{ config('backend.reactjs.prefixElement') }}backend_category_form"></div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    <div id="{{ config('backend.reactjs.prefixElement') }}backend_category_list"></div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script-footer-end')
<script src="{{ asset('js/app.js') }}"></script>
@endsection

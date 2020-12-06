@extends('backend.layouts.master')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0 font-size-18">Categories</h4>
            </div>
        </div>
    </div>
    <div id="{{ config('backend.reactjs.prefixElement') }}backend_page_category_list"></div>
@endsection

@section('script-footer-end')
<script src="{{ asset('js/app.js') }}"></script>
@endsection

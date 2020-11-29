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
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title mb-4">Create New Categories</h4>

                    {!! \Libs\FormBuilder\FormBuilder::label('name', 'Name')->qActiveInput('text', $model, 'name') !!}
                    {!! \Libs\FormBuilder\FormBuilder::label('slug', 'Slug')->qActiveInput('text', $model, 'slug_id') !!}
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
                </div>
            </div>
        </div>
    </div>
@endsection

<div class="col-md-9">
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                {!! \Libs\FormBuilder\FormBuilder::activeInput('text', $model, 'name') !!}
            </div>


            <div class="form-group">
                <label for="">Permalink: http://woo-warehouse.server871186894.internet-server.dk/blog/2020/11/27/sdfs/</label>
            </div>

            <div class="form-group">
                {!! \Libs\FormBuilder\FormBuilder::activeInput('textarea', $model, 'content') !!}
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-body">
            hhhhhh vvv
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                {!! \Libs\FormBuilder\FormBuilder::button('button', 'Save drafts', ['class' => 'btn btn-outline-dark waves-effect waves-light']) !!}
                {!! \Libs\FormBuilder\FormBuilder::button('button', 'Preview', ['class' => 'btn btn-outline-dark waves-effect waves-light float-right']) !!}
            </div>
            <div class="form-group">
                <lable>Status</lable> Drafts
            </div>
        </div>
    </div>
</div>

@section('script-footer-end')
    <script src="{{ assets('qbackend/assets/libs/ckeditor/ckeditor.js') }}"></script>
    <script>
        CKEDITOR.replace( 'content' );
    </script>
@endsection

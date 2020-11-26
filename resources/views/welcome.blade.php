@php
    echo \Libs\FormBuilder\FormBuilder::open();
    echo \Libs\FormBuilder\FormBuilder::label('for', 'name')->qSelect('text', ['name' => 'Quach Hoai Nam', 'age' => 18], '', ['class' => 'qhn-select']);
    echo \Libs\FormBuilder\FormBuilder::close();
@endphp

<?php
namespace App\Http\Requests\Api;

use App\Components\FormRequest;
use Illuminate\Validation\Rule;

class CategoryRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:50',
            'slug' => 'required|max:50',
            'description' => 'max:300',
            //'parent_id' => 'required|exists:App\Models\Category,id',
            'parent_id' => [
                'required',
                Rule::exists('category')->where(function($query) {
                    $query->where('parent_id', 0);
                }),
            ]
        ];
    }
}
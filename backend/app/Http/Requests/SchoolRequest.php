<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SchoolRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required|unique:schools,name',
            'cnpj' => 'required|unique:schools,cnpj',
            'phone' => 'required',
            'email' => 'required|unique:schools,email',
            'address' => 'required'
        ];
    }
}

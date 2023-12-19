<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StudentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required',
            'cpf' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'school_id' => 'required',
            'birth_date' => 'required'
        ];
    }
}

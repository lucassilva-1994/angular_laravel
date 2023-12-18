<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'cpf' => 'required',
            'birth_date' => 'required|date',
            'school_id' => 'required'
        ];
    }
}

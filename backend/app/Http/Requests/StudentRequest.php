<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StudentRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => ['required','max:100'],
            'cpf' => ['required', 'max:11',Rule::unique('students')->ignore($this->id)],
            'email' => ['required','max:100', Rule::unique('students')->ignore($this->id)],
            'phone' => ['required','max:11'],
            'birth_date' => ['required','date'],
            'school_id' => ['required'],
        ];
    }
}

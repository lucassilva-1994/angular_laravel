<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SchoolRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => ['required','max:100', Rule::unique('schools')->ignore($this->id)],
            'cnpj' => ['required','max:14', Rule::unique('schools')->ignore($this->id)],
            'phone' => ['required','max:11'],
            'email' => ['required','max:100', Rule::unique('schools')->ignore($this->id)],
            'address' => ['nullable','max:100']
        ];
    }
}

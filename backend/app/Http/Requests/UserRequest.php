<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            'name' => ['required','max:100'],
            'username' => ['required','max:100', Rule::unique('users')],
            'email' => ['required','max:100', Rule::unique('users')],
            'password' => ['required','max:100']
        ];
    }
}

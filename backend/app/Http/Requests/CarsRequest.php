<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CarsRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'brand' => 'required',
            'model' => 'required',
            'color' => 'required',
            'year'  => 'required|numeric'
        ];
    }
}

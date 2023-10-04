<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;

class CarsController extends Controller
{
    public function store(Request $request){
        $car = Car::create($request->all());
        if($car){
            return response()->json(['Sucesso']);
        }
        return response()->json(['Falha ao registrar veiculo.']);
    }
}

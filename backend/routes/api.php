<?php

use App\Http\Controllers\CarsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('all',[CarsController::class, 'all']);
Route::get('listById/{id}',[CarsController::class, 'listById']);
Route::post('/store',[CarsController::class,'store']);
Route::delete('delete/{id}',[CarsController::class,'delete']);

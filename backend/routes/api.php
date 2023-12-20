<?php
use App\Http\Controllers\{
    EmployeesController,
    SchoolsController,
    StudentsController,
    JobsController,
    UsersController
};
use Illuminate\Support\Facades\Route;
Route::controller(UsersController::class)->group(function(){
    Route::post('/signin','signIn');
    Route::post('/signup','signUp');
    Route::post('/signout','signOut')->middleware('auth:sanctum');
});

Route::controller(SchoolsController::class)->prefix('/schools')->group(function(){
    Route::get('/get','get');
    Route::get('/getById/{id}','getById');
    Route::post('/create','create');
    Route::put('/update/{id}','update');
    Route::delete('/delete/{id}','delete');
});

Route::controller(EmployeesController::class)->prefix('/employees')->group(function(){
    Route::get('/get','get');
    Route::get('/getById/{id}','getById');
    Route::post('/create','create');
    Route::put('/update/{id}','update');
    Route::delete('/delete/{id}','delete');
});

Route::controller(StudentsController::class)->prefix('/students')->group(function(){
    Route::get('/get','get');
    Route::get('/getById/{id}','getById');
    Route::post('/create','create');
    Route::put('/update/{id}','update');
    Route::delete('/delete/{id}','delete');
});

Route::controller(JobsController::class)->prefix('/jobs')->group(function(){
    Route::get('/get','get');
    Route::get('/getById/{id}','getById');
    Route::post('/create','create');
    Route::put('/update/{id}','update');
    Route::delete('/delete/{id}','delete');
});

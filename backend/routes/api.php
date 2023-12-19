<?php
use App\Http\Controllers\{
    EmployeesController,
    SchoolsController,
    StudentsController,
    JobsController
};
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


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

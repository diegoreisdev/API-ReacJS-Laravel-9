<?php

use App\Http\Controllers\Api\NotaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(NotaController::class)->group(function() {
    Route::get('/notas', 'index');
    Route::post('/nota', 'store');
    Route::get('/nota/{id}', 'show');
    Route::put('/nota/{id}', 'update');
    Route::delete('/nota/{id}', 'destroy');
});

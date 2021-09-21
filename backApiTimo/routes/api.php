<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutoController;
use App\Http\Controllers\CategoriaController;

Route::get('produto/{id}', [ProdutoController::class, 'show'])->name('produto.show');
Route::post('produto', [ProdutoController::class, 'store'])->name('produto.create');
Route::get('produto', [ProdutoController::class, 'index'])->name('produto.read');
Route::put('produto/{id}', [ProdutoController::class, 'update'])->name('produto.update');
Route::delete('produto/{id}', [ProdutoController::class, 'destroy'])->name('produto.delete');

Route::get('categoria/{id}', [CategoriaController::class, 'show'])->name('categoria.show');
Route::post('categoria', [CategoriaController::class, 'store'])->name('categoria.create');
Route::get('categoria', [CategoriaController::class, 'index'])->name('categoria.read');
Route::put('categoria', [CategoriaController::class, 'update'])->name('categoria.update');
Route::delete('categoria', [CategoriaController::class, 'destroy'])->name('categoria.delete');


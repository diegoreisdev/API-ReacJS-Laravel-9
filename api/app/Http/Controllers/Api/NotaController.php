<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Nota;
use Illuminate\Http\Request;

class NotaController extends Controller
{
    /* MÉTODO RESPONSÁVEL POR TRAZER TODAS AS ANOTAÇÕES */
    public function index()
    {
        return Nota::all();
    }

    /* MÉTODO RESPONSÁVEL POR SALVAR AS ANOTAÇÕES */
    public function store(Request $request)
    {
        return Nota::create($request->all());
    }

    /* MÉTODO RESPONSÁVEL POR EXIBIR TODAS AS ANOTAÇÕES */
    public function show($id)
    {
        return Nota::find($id);      
    }

    /* MÉTODO RESPONSÁVEL POR ATUALIZAR AS ANOTAÇÕES */
    public function update(Request $request, $id)
    {
        $nota = Nota::find($id);
        return $nota->update($request->all());
    }

    /* MÉTODO RESPONSÁVEL POR APAGAR AS ANOTAÇÕES */
    public function destroy($id)
    {
       return Nota::destroy($id);     
    }
}

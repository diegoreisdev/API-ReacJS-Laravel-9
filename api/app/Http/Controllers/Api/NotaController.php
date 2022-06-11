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
        $notas = Nota::all();
        return $notas;
    }

    /* MÉTODO RESPONSÁVEL POR SALVAR AS ANOTAÇÕES */
    public function store(Request $request)
    {
        $nota = new Nota();
        $nota->titulo = $request->titulo;
        $nota->descricao = $request->descricao;

        $nota->save();
    }

    /* MÉTODO RESPONSÁVEL POR EXIBIR TODAS AS ANOTAÇÕES */
    public function show($id)
    {
        $nota = Nota::find($id);
        return $nota;
    }

    /* MÉTODO RESPONSÁVEL POR ATUALIZAR AS ANOTAÇÕES */
    public function update(Request $request, $id)
    {
        $nota = Nota::findOrFail($request->id);
        $nota->titulo = $request->titulo;
        $nota->descricao = $request->descricao;

        $nota->save();
        return $nota;
    }

    /* MÉTODO RESPONSÁVEL POR APAGAR AS ANOTAÇÕES */
    public function destroy($id)
    {
       $nota = Nota::destroy($id);
       return $nota;
    }
}

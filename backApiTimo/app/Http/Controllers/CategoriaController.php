<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use App\Http\Requests\CategoriaRequest;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = Categoria::get();
        return $this->sendData($categorias);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoriaRequest $request)
    {
        $data = $request->validated();
        $categoria = Categoria::create($data);
        if (isset($produto)){
            return $this->sendMessage("Produto Cadastrada com Sucesso", $categoria);
        } else {
            return $this->sendError("Erro ao cadastrar a Produto");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categoria = Categoria::find($id);
        if (isset($categoria)){
            return $this->sendData($categoria);
        } else {
            return $this->sendError("Categoria Não Encontrada",404) ;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update(CategoriaRequest $request, $id)
    {
        if (!isset($categoria)){
            return $this->sendError("Categoria Não Encontrada",404) ;
        }

        $data = $request->validated();
        $success = $categoria->update($data);

        if ($success){
            return $this->sendMessage("Categoria alterada com sucesso");
        } else {
            return $this->sendError("Erro ao alterar o Categoria") ;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categoria = Categoria::find($id);

        if (!isset($categoria)){
            return $this->sendError("Categoria Não Encontrada",404) ;
        }

        $success = $categoria->delete();

        if ($success){
            return $this->sendMessage("Categoria removido com sucesso");
        } else {
            return $this->sendError("Erro ao remover o Categoria") ;
        }
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;
use App\Http\Requests\ProdutoRequest;

class ProdutoController extends Controller
{

    public function index()
    {
        $produtos = Produto::get();
        return $this->sendData($produtos);
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
    public function store(ProdutoRequest $request)
    {
        $data = $request->validated();
        $produto = Produto::create($data);
        if (isset($produto)){
            return $this->sendMessage("Produto Cadastrada com Sucesso", $produto);
        } else {
            return $this->sendError("Erro ao cadastrar a Produto");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $produto = Produto::find($id);
        if (isset($produto)){
            return $this->sendData($produto);
        } else {
            return $this->sendError("Produto Não Encontrada",404) ;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function edit(Produto $produto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function update(ProdutoRequest $request, $id)
    {
        if (!isset($produto)){
            return $this->sendError("Produto Não Encontrada",404) ;
        }

        $data = $request->validated();
        $success = $produto->update($data);

        if ($success){
            return $this->sendMessage("Produto alterada com sucesso");
        } else {
            return $this->sendError("Erro ao alterar o Produto") ;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $produto = Produto::find($id);

        if (!isset($produto)){
            return $this->sendError("Produto Não Encontrada",404) ;
        }

        $success = $produto->delete();

        if ($success){
            return $this->sendMessage("Produto removido com sucesso");
        } else {
            return $this->sendError("Erro ao remover o Produto") ;
        }
    }
}

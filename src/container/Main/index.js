import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Navbar';
import Produtos from '../../view/Produtos';
import Carrinho from '../../view/Carrinho';

import { MainContent } from "./style";

import produtos from '../../data/produtos.json';
import Footer from "../Footer";
import CadastroCliente from "../../view/CadastroCliente";

export default function Main() {
    var [estoque, setEstoque] = useState(() => {
        return obterEstoqueLocalStorage();
    });
    
    var [carrinho, setCarrinho] = useState(() => {
        return obterCarrinhoLocalStorage();
    });

    var [totalProdutos, setTotalProdutos] = useState(0);

    useEffect(() => {
        gravarEstoqueLocalStorage(estoque);
    }, [estoque])

    useEffect(() => {        
        let total = carrinho === null ? 0 : carrinho.reduce((total, produto) => total + produto.quantidade, 0);
        setTotalProdutos(total);
        gravarCarrinhoLocalStorage(carrinho);
    }, [carrinho])

    function limpaCarrinho() {
        console.log('Limpa carrinho');
        setEstoque(produtos);
        setCarrinho([]);
    }

    function obterEstoqueLocalStorage() {
        let estoque =  JSON.parse(localStorage.getItem('estoque-wdrstore'));

        if (estoque === null) {
            estoque = produtos;
            gravarEstoqueLocalStorage(estoque);
        }

        return estoque;
    }

    function obterCarrinhoLocalStorage() {
        let carrinho =  JSON.parse(localStorage.getItem('carrinho-wdrstore'));

        if (carrinho === null) {
            carrinho = [];
        }

        return carrinho;
    }

    function gravarEstoqueLocalStorage(estoque) {
        localStorage.setItem('estoque-wdrstore', JSON.stringify(estoque));
    }

    function gravarCarrinhoLocalStorage(carrinho) {
        localStorage.setItem('carrinho-wdrstore', JSON.stringify(carrinho));
    }

    function adicionaCarrinho(id) {
        let indexEstoque = estoque.findIndex(x => x.id === id);
        if (estoque[indexEstoque].quantidadeDisponivel > 0) {
            --estoque[indexEstoque].quantidadeDisponivel;
            let novoEstoque = [...estoque];
            setEstoque(novoEstoque);

            let indexCarrinho = carrinho.findIndex(x => x.id === id);
            if (indexCarrinho === -1) {
                carrinho.push({
                    id,
                    descricao: estoque[indexEstoque].descricao,
                    quantidade: 1,
                    preco: estoque[indexEstoque].preco,
                    foto: estoque[indexEstoque].foto,
                })
            } else {
                ++carrinho[indexCarrinho].quantidade;
            }
            let novoCarrinho = [...carrinho]
            setCarrinho(novoCarrinho);
        }
    }

    function removeCarrinho(id) {
        let indexCarrinho = carrinho.findIndex(x => x.id === id);
        let indexEstoque = estoque.findIndex(x => x.id === id);
        estoque[indexEstoque].quantidadeDisponivel += carrinho[indexCarrinho].quantidade;
        carrinho[indexCarrinho].quantidade = 0;
        let novoEstoque = [...estoque];
        setEstoque(novoEstoque);
        let novoCarrinho = [...carrinho.filter(x=> x.id !== id)];
        setCarrinho(novoCarrinho);
    }

    return (
        <>
            <Navbar totalProdutos={totalProdutos}/>
            <MainContent>
                <Switch>
                    <Route exact path="/" 
                    component={() => <Produtos estoque={estoque}
                        adicionaCarrinho={adicionaCarrinho}/>
                    }/>
                    <Route exact path="/carrinho"
                    component={() => <Carrinho carrinho={carrinho}
                        removeCarrinho={removeCarrinho}/>
                    }/>
                    <Route exact path="/checkout"
                    component={() => <CadastroCliente carrinho={carrinho}
                    limpaCarrinho={limpaCarrinho}/>
                    }/>
                </Switch>
                
            </MainContent>
            <Footer/>           
        </>
    )
}
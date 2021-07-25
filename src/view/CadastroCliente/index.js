import { useState } from "react";
import { useHistory } from "react-router-dom";

import { FaCheck } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

import { Form } from 'react-bootstrap';

import { ClientForm } from "./style";

export default function CadastroCliente({carrinho, limpaCarrinho}) {
    const history = useHistory();
    
    const [clientes] = useState(() => {
        return obterClientesLocalStorage();
    });
    const [pedidos] = useState(() => {
        return obterPedidosLocalStorage();
    });
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');

    function obterClientesLocalStorage() {
        let clientes =  JSON.parse(localStorage.getItem('clientes-wdrstore'));

        if (clientes === null) {
            clientes = [];
        }

        return clientes;
    }

    function obterPedidosLocalStorage() {
        let pedidos =  JSON.parse(localStorage.getItem('pedidos-wdrstore'));

        if (pedidos === null) {
            pedidos = [];
        }

        return pedidos;
    }

    function handleForm(e) {
        e.preventDefault();
        const cliente = {
          id: clientes.length + 1,
          cpf: cpf,
          nome: nome,
          email: email,
          telefone: telefone,
          endereco: endereco,
          bairro: bairro,
          cidade: cidade,
          cep: cep,
        }
        const newClientes = [...clientes, cliente];
        localStorage.setItem('clientes-wdrstore',JSON.stringify(newClientes));
        const carrinhoAtual = [...carrinho];
        const pedido = {
            cliente,
            produtos: carrinhoAtual,
        }
        const newPedidos = [...pedidos, pedido];
        localStorage.setItem('pedidos-wdrstore',JSON.stringify(newPedidos));
        limpaCarrinho();
        history.push("/");
    }

    function voltarCarrinho(e) {
        e.preventDefault();
        history.push("/carrinho");
    }

    return (
        <div className="App-container">
            <h1 className="App-title">Dados do Cliente</h1>
            <ClientForm>
                <Form onSubmit={handleForm}>
                    <Form.Group className="mb-3" controlId="cpf">
                        <Form.Label>CPF</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu CPF. Ex.: 123.456.789-01" 
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="nome">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu nome"
                        value={nome} 
                        onChange={e => setNome(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="telefone">
                        <Form.Label>Telefone</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu telefone. Ex: (11) 99998-7865"
                        value={telefone} 
                        onChange={e => setTelefone(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Informe o seu e-mail"
                        value={email} 
                        onChange={e => setEmail(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="endereco">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu Endereço"
                        value={endereco} 
                        onChange={e => setEndereco(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cep">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu CEP. Ex.: 123456-78"
                        value={cep} 
                        onChange={e => setCep(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="bairro">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" placeholder="Informe o seu Bairro"
                        value={bairro} 
                        onChange={e => setBairro(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="cidade">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" placeholder="Informe a sua Cidade"
                        value={cidade} 
                        onChange={e => setCidade(e.target.value)} required/>
                    </Form.Group>

                    <div class="form-footer">
                        <button type="submit">
                            <FaCheck size="14px"/><span>  Confirmar </span>                        
                        </button>
                        <button onClick={voltarCarrinho}>
                            <MdCancel size="14px"/><span>  Cancelar </span>                        
                        </button>
                    </div>                        
                </Form>
            </ClientForm>
        </div>    
    )
}
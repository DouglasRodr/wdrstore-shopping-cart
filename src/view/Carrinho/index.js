import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

import { ProductCart, ReturnLink, TotalContainer, CheckoutContainer, CheckoutLink } from "./style";

export default function Carrinho({carrinho, removeCarrinho}) {
    return (
        <div className="App-container">
            <h1 className="App-title">Meu carrinho</h1>
            <ProductCart>
                {carrinho.length > 0             
                    ?   <ul className="cart-list">
                            {carrinho.map((produto) => (  
                                <li className="cart-item" key={produto.id}>
                                    <div className="img-container">
                                        <img src={produto.foto} alt="Imagem do produto"/>
                                    </div>
                                    <div className="description-container">
                                        <h4 className="title">{produto.descricao}</h4> 
                                        <h5 className="quantity">
                                            Quantidade: {produto.quantidade} x R$ {produto.preco.toLocaleString('pt-BR')}
                                        </h5>
                                        <h4 className="total">
                                            Total: R$ {(produto.quantidade * produto.preco).toLocaleString('pt-BR')}
                                        </h4>                      
                                    </div>
                                    <div className="actions-container">
                                        <button className="remove-cart-button" onClick={() => removeCarrinho(produto.id)}>
                                            <MdDelete size="18px"/><span>   Remover</span>
                                        </button>
                                    </div>                                                       
                                </li>
                            ))}
                        </ul>
                    :   <div className="empty-cart">
                            <h1>Seu carrinho está vazio</h1>
                            <ReturnLink to="/">Ver Ofertas</ReturnLink>
                        </div>
                }     
            </ProductCart>
            {carrinho.length > 0 &&
                <>
                    <TotalContainer>
                        <h1>
                            Total: R$ {carrinho.reduce((total, produto) => 
                            total + (produto.quantidade * produto.preco), 0).toLocaleString('pt-BR')}
                        </h1>
                    </TotalContainer>
                    <CheckoutContainer>
                        <ReturnLink to="/">Ver Ofertas</ReturnLink>
                        <CheckoutLink to="/checkout"><FaCheck size="14px"/><span>   Finalizar Pedido</span></CheckoutLink>
                    </CheckoutContainer>
                </>
            }
        </div>
    )
}
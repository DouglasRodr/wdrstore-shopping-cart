import { FaCartPlus } from "react-icons/fa";

import { ProductGrid, ProductCard } from "./style";

export default function Produtos({estoque, adicionaCarrinho}) {

    return (
        <div className="App-container">
            <h1 className="App-title">Confira nossas ofertas</h1>
            <ProductGrid>
            {estoque.map((produto) => (               
                <ProductCard key={produto.id}>
                    <div className="img-container">
                        <img src={produto.foto} alt="Imagem do produto"/>
                    </div>
                    <div className="description-container">
                        <h4>{produto.descricao}</h4>                        
                    </div>
                    <h4 className="price">Por: R$ {produto.preco.toLocaleString('pt-BR')}</h4>
                    {produto.quantidadeDisponivel > 0
                        ? <button className="add-cart-button" onClick={() => adicionaCarrinho(produto.id)}>
                            <FaCartPlus size="16px"/><span>   Comprar</span>
                          </button>
                        : <h4 className="stock-unavailable">Estoque Indisponível</h4>
                    }
                </ProductCard>
            ))}                   
            </ProductGrid>
        </div>
    )
}
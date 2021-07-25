import { FaShoppingCart } from "react-icons/fa";

import logo from "../../logo.png";

import { Nav, LogoLink, MenuRight, RightLink } from "./style";

export default function Navbar({totalProdutos}) {
    return (
        <Nav>
            <div className="App-container">
                <LogoLink to="/">
                    <img src={logo} alt="WDRStore"/>
                </LogoLink>                
                <MenuRight>
                    <li>
                        <RightLink to="/carrinho">
                            <span> Meu carrinho ({totalProdutos})  </span>
                            <FaShoppingCart size="18px"/>                          
                        </RightLink>
                    </li>
                </MenuRight>
            </div>
        </Nav>
    )
}
import logo from "../../logo.png";

import { Foot } from "./style";

export default function Footer () {
    return (
        <Foot>
            <div className="App-container">
                <img src={logo} alt="WDRStore" className="logo-footer"/>             
                <h1>Desenvolvido por: Douglas Rodrigues</h1>
                <span>Desafio #2 Hiring Coders</span>                
            </div>
        </Foot>
    )
}
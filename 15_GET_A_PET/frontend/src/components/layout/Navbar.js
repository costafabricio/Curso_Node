import { Link } from "react-router-dom"

import Logo from '../../assets/img/logo.png'

function Navbar() {
    return(
        <nav>
            <div>
                <img src={Logo} alt="Get A Pet" />
                <h2>Get A Pet</h2>
            </div>
            <ul>
                <li>
                    <Link to="/"/>Adotar
                </li>
                 <li>
                    <Link to="/login"/>Entrar
                </li>
                 <li>
                    <Link to="/register"/>Cadastrar
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
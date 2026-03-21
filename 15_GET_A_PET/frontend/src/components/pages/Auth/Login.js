import { useState, useContext } from "react"

import { Link } from "react-router-dom"
import Input from '../../form/Input'

import styles from '../../form/Form.module.css'

/* Context */
import { Context } from "../../../context/UserContext"

function Login() {

    function handleChange() {}

    return(
        <section className={styles.form_container}>
            <h1>Login</h1>
            <form>
                <Input
                   text="Email"
                   type="email"
                   name="email"
                   placeholder="Digite o seu email"
                   handleOnChange={handleChange}
                 />
                <Input
                   text="Senah"
                   type="password"
                   name="password"
                   placeholder="Digite a sua senha"
                   handleOnChange={handleChange}
                 />
                 <input type="submit" value="Entrar"/>
            </form>
            <p>
                Não tem conta? <Link to="/register">Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Login
import Input from "../../form/Input"
import { Link } from "react-router-dom"

import styles from '../../form/Form.module.css'
import { useState } from "react"

function Register() {
    const [user, setUser] = useState({})

    function handleChange(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        // enviar o usuario para o banco
        console.log(user)

    }

    return(
        <section className={styles.form_container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <Input
                  text="nome"
                  type="text"
                  name="name"
                  placeholder="Digite o seu nome..."
                  handleOnChange={handleChange}
                />
                <Input
                  text="telefone"
                  type="text"
                  name="phone"
                  placeholder="Digite o seu telefone"
                  handleOnChange={handleChange}
                />
                <Input
                  text="email"
                  type="email"
                  name="email"
                  placeholder="Digite o seu email"
                  handleOnChange={handleChange}
                />
                <Input
                  text="Senha"
                  type="password"
                  name="password"
                  placeholder="Digite a sua senha"
                  handleOnChange={handleChange}
                />
                <Input
                  text="Confirmação de senha"
                  type="password"
                  name="confirmpassword"
                  placeholder="Confirme a sua senha"
                  handleOnChange={handleChange}
                />
                <input type="submit" value="Cadastrar"/>
            </form>
            <p>
                Já tem conta? <Link to='/login'>Clique aqui.</Link>
            </p>
        </section>
    )
}

export default Register
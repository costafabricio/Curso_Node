import api from '../../../utils/api'

import { useEffect, useState } from "react"

import {Link} from 'react-router-dom'

import RoundedImage from '../../layout/RoundedImage'

/* hooks */
import useFlaseMessage from '../../../hooks/useFlashMessage'

function MyPets() {
    const [pets, setPets] = useState([])
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlaseMessage} = useFlaseMessage()

    useEffect(() => {
        api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            setPets(response.data.pets)
        })
    },[token])

    return(
        <section>
            <div>
                <h1>Meus Pets</h1>
                <Link to='/pet/add'>Cadastrar Pet </Link>
            </div>
            <div>
                {pets.length > 0 && (
                    <p>Meus pets cadastrados</p>
                )}
                {pets.length === 0 && <p>Não há pets cadastrados</p>}
            </div>
        </section>
    )
}

export default MyPets
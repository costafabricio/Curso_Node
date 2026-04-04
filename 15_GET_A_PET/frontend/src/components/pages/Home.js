import api from '../../utils/api'

import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

import Select from '../form/Select'

import styles from './Home.module.css'

function Home() {
    const [pets, setPets] = useState([])
    const [state, setState] = useState('')
    const petState = [
        'São Paulo (SP)',
        'Minas Gerais (MG)',
        'Rio de Janeiro (RJ)',
        'Amazonas (AM)',
        'Rio Grande do Sul (RS)'
    ]

    useEffect(() => {
        async function fetchPets() {
          let url = '/pets'

           if(state) {
            url += `?state=${state}`
            }

           const response = await api.get(url)
           setPets(response.data.pets)
        }

        fetchPets()
     }, [state])

    return(
        <section>
            <div className={styles.pet_home_header}>
                <div>
                  <h1>Adote um Pet</h1>
                  <p>Veja os detalhes de cada um e conheça o tutor deles</p>
                </div>
                <div>
                  <Select
                    name="state"
                    text="Filtrar por estado"
                    options={petState}
                    handleOnChange={(e) => setState(e.target.value)}
                    value={state}
                   />
                  <button className={styles.button} onClick={() => setState('')}>
                    Limpar
                  </button>
                </div>
            </div>
            <div className={styles.pet_container}>
                {pets.length > 0 &&
                  pets.map((pet) => (
                    <div className={styles.pet_card} key={pet._id}>
                        <div 
                          style={{backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`}}
                          className={styles.pet_card_image}
                         >

                        </div>
                        <h3>{pet.name}</h3>
                        <p> <span className='bold'>Peso:</span> {pet.weight}kg </p>
                        <p> <span className='bold'>Estado:</span> {pet.state}</p>
                        {pet.available ? (
                           <Link to={`pet/${pet._id}`}>Mais detalhes</Link>
                        ) : (
                           <p className={styles.adopted_text}>Adotado</p>
                        )}
                    </div>
                  ))
                }
                {pets.length === 0 && (
                    <p>Não há pets cadastrados ou disponiveis para adoção no momento!</p>
                )}
            </div>
        </section>
    )
}

export default Home
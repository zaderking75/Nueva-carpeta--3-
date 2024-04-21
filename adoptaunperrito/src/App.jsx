import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Perro from './Perro'
import Tags from './Tags'
import Mycard from './Mycard'
import Footer from './Footer'
import React from 'react'
import Buton from './Buton'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
  <div className='fondo3'>
    <Header  title="Adopta Un Perrito"
    />
    <hr />
    <Perro
      description="¡Esperamos que te unas a nosotros en esta emocionante nueva aventura y consideres la adopción como la primera opción al agregar un nuevo miembro peludo a tu familia! "
      />
    <hr />

    <div className='posicion'>
      < Mycard
        image="https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2023-05image-text-component-akita-2.jpg?itok=LMxk9EAj"
        title="Akita Inu"
        name="Max"
        description="Max,es muy jugueton al tanto que le gusta jugar con todo lo que 
                    ve,es de estatura mediana,mide 56cm y pesa 38 kg."
        textButton="Ver más información "
      />
      <Mycard
        image="https://upload.wikimedia.org/wikipedia/commons/0/04/JapaneseSpitzPhoto1_-_hiro.jpg"
        title="Akita Inu"
        name="Thom"
        description="Max,es un perro de raza Akita Inu,es muy jugueton al tanto que le gusta jugar con todo lo que 
                    encuentre,es de estatura mediana,mide 56cm y pesa 38 kg."
        textButton="Ver más información "
      />
      <Mycard
        image="https://static.maskokotas.com/blog/wp-content/uploads/2012/12/bichon.jpg"
        title="Bichon Maltes"
        name="Leky"
        description="A pesar de su corta edad tiene demaciada energia,le gusta causar problemas por divertirse,mide 25cm y pesa 3.5kg"
        textButton="Ver más información "
      />
      <Mycard
        image="https://static.maskokotas.com/blog/wp-content/uploads/2012/12/bichon.jpg"
        title="Bichon Maltes"
        name="Leky"
        description="A pesar de su corta edad tiene demaciada energia,le gusta causar problemas por divertirse,mide 25cm y pesa 3.5kg"
        textButton="Ver más información "
      />
            <Mycard
        image="https://static.maskokotas.com/blog/wp-content/uploads/2012/12/bichon.jpg"
        title="Bichon Maltes"
        name="Leky"
        description="A pesar de su corta edad tiene demaciada energia,le gusta causar problemas por divertirse,mide 25cm y pesa 3.5kg"
        textButton="Ver más información "
      />
            <Mycard
        image="https://static.maskokotas.com/blog/wp-content/uploads/2012/12/bichon.jpg"
        title="Bichon Maltes"
        name="Leky"
        description="A pesar de su corta edad tiene demaciada energia,le gusta causar problemas por divertirse,mide 25cm y pesa 3.5kg"
        textButton="Ver más información "
      />
  </div>
  <Buton
    textButton1="<-"
    textButton2="1"
    textButton3="->"
  />
  <Tags
      description="Para Acceder a mas informacion apriete el boton"
      textButton="Más Informacion"
  />
</div>
  <Footer/>
    </>
  )
}

export default App

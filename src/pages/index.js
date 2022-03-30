import { useState } from 'react'
import Cartao from '../components/Cartao'

export default function Home() {    
  const [url,setUrl] = useState('https://source.unsplash.com/random')
  return (
    <div className={`relative`}>
      <img
        src={url}
        alt="Imagem da tela de autenticação"
        className="h-screen w-screen object-cover absolute"
        onClick={() => setUrl("https://source.unsplash.com/random")}
      />
      <div className={`flex flex-col justify-center
        items-center h-screen w-screen absolute z-10`}
      > 
        <Cartao/>
      </div>

    </div>
  )
}

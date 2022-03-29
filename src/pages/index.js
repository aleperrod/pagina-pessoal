import Cartao from '../components/Cartao'

export default function Home() {
  return (
    <div className={`relative`}>
      <img
          src="https://source.unsplash.com/random"
          alt="Imagem da tela de autenticação"
          className="h-screen w-screen object-cover absolute"
      />
      <div className={`flex flex-col justify-center
        items-center h-screen w-screen absolute z-10`}
      >
        
        <Cartao/>
      </div>

    </div>
  )
}

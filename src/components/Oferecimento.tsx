interface OferecimentoProps {
    titulo: string
    subtitulo?: string
}
export default function Oferecimento(props: OferecimentoProps){
    return (
        <div className={`flex flex-col justify-center items-center
        p-2 rounded-md text-3xl font-extralight text-white
        hover:text-red-700 hover:font-light`}
        >
            <div>
                {props.titulo}
            </div>
            {props.subtitulo ? (
                <div className='font-body'>
                    {props.subtitulo}
                </div>
            ) : false}
        </div>
    )
}
interface OferecimentoProps {
    titulo: string
    subtitulo?: string
}
export default function Oferecimento(props: OferecimentoProps){
    return (
        <div className={`flex flex-col justify-center items-center
        p-2 rounded-md text-3xl font-extralight  bg-[#1E313B30] text-red-500
        hover:text-red-600 `}
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
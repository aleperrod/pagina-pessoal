interface OferecimentoProps {
    titulo: string
    subtitulo?: string
}
export default function Oferecimento(props: OferecimentoProps){
    return (
        <div className={`flex flex-col justify-center items-center
        p-2 rounded-md text-3xl font-extralight  bg-[#1E313B30] text-red-700
        hover:text-red-500 `}
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
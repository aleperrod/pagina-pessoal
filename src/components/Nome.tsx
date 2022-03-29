interface nomeProps {
   cursive?: boolean
}

export default function Nome(props: nomeProps){
    
    return (
        <div className={`p-2 rounded-md text-5xl text-white
            hover:bg-[#1E313B50] hover:text-[#61dafb] hover:p-3
            ${props.cursive ? 'font-body' : ''}
        `}>
            Alessandro Pereira Rodrigues
        </div>
    )
}
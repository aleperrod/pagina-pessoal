import Link from 'next/link'

interface ContatoProps {
    contactName?: 'E-mail' | 'Whatsapp' | 'Telefone' | 'Celular'
    contact?: string
    socialNetName?: string
    socialNetUrl?: string
}
export default function Contato(props: ContatoProps): any {
    return (
        props.contactName ? (
            <div className={`m-1 flex justify-center text-slate-300`}>
                <label htmlFor="">{props.contactName}: &nbsp; </label>
                <span>{props.contact}</span>
            </div>
        ) : ( 
            props.socialNetName ? (
                <div className={`m-1 flex justify-center text-slate-300
                    rounded-md
                    hover:bg-[#1E313B50] hover:text-[#61dafb] hover:p-1`}
                >
                    <Link href={props.socialNetUrl}>
                        {`Meu ${props.socialNetName}`}
                    </Link>
                </div>
            ) : false
        )
            
        
    )
}
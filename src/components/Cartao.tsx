import Link from "next/link";
import Contato from "./Contato";
import Nome from "./Nome";

export default function Cartao(){
    return(
        <div className={`bg-[#1E313B70] rounded-md p-5`}>
            <Nome cursive={true}/>
            <Contato contactName='Whatsapp' contact='+55 51 993 48 57 28'/>
            <Contato contactName='E-mail' contact='ale.per.rod@gmail.com'/>
            <Contato socialNetName='LinkedIn'
                socialNetUrl='https://www.linkedin.com/in/alessandro-pereira-rodrigues-80780ab1/'
            />
            <Contato socialNetName='GitHub'
                socialNetUrl='https://github.com/aleperrod'
            />
        </div>
    )
}
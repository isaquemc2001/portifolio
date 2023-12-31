interface PropsImagem {
nome: string
size?: number
classname?: string
}

import Linkedin from '../../assets/linkedin.svg'
import Brasil from '../../assets/brasil.png'
import Email from '../../assets/email.svg'
import Eua from '../../assets/eua-logo.png'
import Github from '../../assets/github.svg'
import Me from '../../assets/imagem-portifolio.png'
import Laravel from '../../assets/laravel.png'
import React from '../../assets/react.png'
import Mail from '../../assets/email.svg'

function changeImage(props: PropsImagem){
    if(props.nome == "Linkedin"){
        return Linkedin.src
    }else if(props.nome == "Brasil"){
        return Brasil.src
    }else if(props.nome == "Email"){
        return Email.src
    }else if(props.nome == "Eua"){
        return Eua.src
    }else if(props.nome == "Github"){
        return Github.src
    }else if(props.nome == "Me"){
        return Me.src
    }else if(props.nome == "Laravel"){
        return Laravel.src
    }else if(props.nome == "React"){
        return React.src
    }else if(props.nome == "Mail"){
        return Mail.src
    }
}

export default function Imagem(props: PropsImagem){
    console.log(changeImage)
    return(
        <>
            <img className={props.classname} src={changeImage(props)} width={props.size}/>
        </>
    )
}
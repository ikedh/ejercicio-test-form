import { useState } from "react";

const Formulario = () => {

const[codigo,setCodigo]= useState("")

const handleSubmit = (e) =>{
    e.preventDefault();

    if (!isNaN(codigo) ) {
        alert("hay un error")
    }else{
        setCodigo(codigo)
    }
}

  return (
    <div>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type= "text"
                    placeholder='Introducir el código'
                    value={codigo}
                    onChange={e=>{setCodigo(e.target.value)}}
                />
                <hr/>
                <button type='submit'>Enviar</button>
            </form>

    </div>
  )
}

export default Formulario
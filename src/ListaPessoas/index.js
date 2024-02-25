import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";

function ListaPessoas() {
    const [pessoas, setPessoas] = useState(["Maria", "Joao"]);

    // utilizar useCallback para não renderizar elemento duplicado
    const deletarPessoa = useCallback((id) => {
        setPessoas(listaAnterior => listaAnterior.filter((pessoa, indexAnterior) => indexAnterior !== id));
        //abaixo é passado em [] quando ela deve ser alterada
    },[]);

    return (
        <div className="has-text-centered">
            <ul>
            {pessoas.map((pessoa, index) => (
                <Pessoa nome={pessoa} id={index} deletar={deletarPessoa}/>
            ))}
            </ul>
            <button
                className="button is-primary is-outlined" 
                onClick={() => setPessoas(listaAnterior => ([...listaAnterior, "José"]))}
            >
                Adicionar Pessoa
            </button>
        </div>        
    )
}

export default ListaPessoas;
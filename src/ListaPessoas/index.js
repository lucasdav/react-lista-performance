import { useCallback, useState } from "react";
import Pessoa from "./Pessoa";

function ListaPessoas() {
    const [pessoas, setPessoas] = useState([{
       nome: "Maria",
        id: 1
    }, {
        nome: "Joao",
        id: 2
    }]);

    // utilizar useCallback para não renderizar elemento duplicado
    const deletarPessoa = useCallback((id) => {
        setPessoas(listaAnterior => listaAnterior.filter(pessoa => pessoa.id !== id));
        //abaixo é passado em [] quando ela deve ser alterada
    },[]);

    return (
        <div className="has-text-centered">
            <ul>
            {pessoas.map((pessoa, index) => (
                <Pessoa key={pessoa.id} nome={pessoa.nome} id={pessoa.id} deletar={deletarPessoa}/>
            ))}
            </ul>
            <button
                className="button is-primary is-outlined" 
                onClick={() => setPessoas(listaAnterior => ([...listaAnterior, {
                    nome: "José",
                    id: 3
                }]))}
            >
                Adicionar Pessoa
            </button>
        </div>        
    )
}

export default ListaPessoas;
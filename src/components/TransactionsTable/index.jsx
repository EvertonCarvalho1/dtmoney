import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable(){
    useEffect(()=> {
        api.get('transactions')
        .then(response => console.log(response.data))

        //Para o Fetch
        //primeiro .then converte a resposta pra Json
        //o segundo .then pega os dados convertidos e imprime no console

        //Para o Axios
        // o proprio axios já converte a resposta em json, então precisaremos apenas de um .then
        
    }, []);

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                        <tr>
                            <td>
                                Desenvolvimento de website
                            </td>
                            <td className="deposit">
                                R$12000,00
                            </td> 
                            <td>
                                Desenvolvimento
                            </td> 
                            <td>
                                20/02/2021
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                Aluguel
                            </td>
                            <td className="withdraw">
                                - R$12000,00
                            </td> 
                            <td>
                                pagamento
                            </td> 
                            <td>
                                20/02/2021
                            </td> 
                        </tr>
                        <tr>
                            <td>
                                Aluguel
                            </td>
                            <td className="withdraw">
                                - R$12000,00
                            </td> 
                            <td>
                                pagamento
                            </td> 
                            <td>
                                20/02/2021
                            </td> 
                        </tr>

                        <tr>
                            <td>
                                Desenvolvimento de website
                            </td>
                            <td className="deposit">
                                R$12000,00
                            </td> 
                            <td>
                                Desenvolvimento
                            </td> 
                            <td>
                                20/02/2021
                            </td> 
                        </tr>
                 
                    </tbody> 
            </table>
        </Container>
    )
}
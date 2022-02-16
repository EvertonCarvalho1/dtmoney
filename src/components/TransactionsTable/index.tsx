import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string; 
}

export function TransactionTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([])
    //sempre que o estado for um vetor ou um objeto, devemos obrigatóriamente informar um formato pra eles

    useEffect(()=> {

        api.get('transactions')
        .then((response) => setTransactions(response.data.transactions))

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
                    {transactions.map(transactions => {
                        //toda vez que é feito um map, o primeiro elemento desse map deve ter uma key unica
                        return(
                            <tr>
                                <td key={transactions.id}>
                                    {transactions.title}
                                </td>
                                <td className={transactions.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transactions.amount)}
                                </td> 
                                <td>
                                    {transactions.category}
                                </td> 
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transactions.createdAt)
                                        )}
                                </td> 
                            </tr>
                        )
                    })}    
                 
                </tbody> 
            </table>
        </Container>
    )
}
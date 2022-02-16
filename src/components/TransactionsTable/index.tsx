import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionTable(){
    
    const {transactions} = useContext(TransactionsContext);

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
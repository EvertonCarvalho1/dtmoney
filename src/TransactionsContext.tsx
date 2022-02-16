import {createContext, ReactNode, useEffect, useState} from 'react';
import { api } from './services/api';


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string; 
};

interface TransactionProvideProps {
    children: ReactNode;
    //ReactNode aceita qualquer tipo de conteúdo valido paara o React, aceita tags html, jsx
}

//cria o contexto e exporta
export const TransactionsContext = createContext<Transaction[]>([]);


//cria o provider para repassar os dados

//usa-se o children para indicar que o componente receberá componentes filhos
export function TransactionProvider({children} : TransactionProvideProps) {
    
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(()=> {
        api.get('transactions')
        .then((response) => setTransactions(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )

}

//sempre que o estado for um vetor ou um objeto, devemos obrigatóriamente informar um formato pra eles

//Para o Fetch
    //primeiro .then converte a resposta pra Json
    //o segundo .then pega os dados convertidos e imprime no console

//Para o Axios
    // o proprio axios já converte a resposta em json, então precisaremos apenas de um .then
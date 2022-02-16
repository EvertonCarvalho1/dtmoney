import React, { Children, useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';


Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  //utilizamos o estado num componente superiores, para que esse estádo sejam repassado para os filhos. Essas informações podem ser repassadas por propriedades no componentes (props)

  //Outra forma de repassar informações/dados, é atravez de contextos, utilizado para evitar o prop drilling, ou quando um componente tem que ser responsável por tratar o seu proprio estado e depois repassar esses dados

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }

  return (
    <TransactionProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard/>
      <NewTransactionModal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionProvider>
  );
}



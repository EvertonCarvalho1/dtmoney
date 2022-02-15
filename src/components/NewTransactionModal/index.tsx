import { useState } from 'react';
import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomImg from '../../assets/saidas.svg';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps{
    isOpen : boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} : NewTransactionModalProps){

    const [type, setType] = useState('deposit');

   

    return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
    >
        <button 
        type="button"
        onClick={onRequestClose}
        className='react-modal-close'
        >
            <img src={closeImg} alt="fechar modal"  />
        </button>
        <Container>
            <h2>Cadastrar Transação</h2>
            <input
            placeholder='Título'
            />
            <input
            type='number'
            placeholder='Valor'
            />
            <TransactionTypeContainer>
                <RadioBox
                type='button'
                onClick={() => {setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor='green'
                >
                    <img src={incomeImg} alt="Entrada"/>
                    <span>Entrada</span>
                </RadioBox>


                <RadioBox
                type='button'
                onClick={() => {setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor='red'
                >
                    <img src={outcomImg} alt="Saida"/>
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input
            placeholder='Categoria'
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    
    </Modal>

    )

}
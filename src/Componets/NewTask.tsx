import { PlusCircle } from 'phosphor-react'; // Importa o ícone "PlusCircle" do pacote phosphor-react
import React, { useState } from 'react'; // Importa o React e o hook useState
import styles from './newTask.module.css'; // Importa os estilos específicos para o componente NewTask

// Definição das propriedades esperadas pelo componente NewTask
interface NewTaskProps {
    onAddTask: (title: string) => void; // Função recebida como prop para adicionar uma nova tarefa
}

// Função que define o componente NewTask
export function NewTask({ onAddTask }: NewTaskProps) {
    const [taskTitle, setTaskTitle] = useState<string>(''); // Estado local para armazenar o título da nova tarefa

    // Função que lida com o envio do formulário
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Previne o comportamento padrão de recarregar a página ao submeter o formulário
        if (taskTitle.trim()) { // Verifica se o campo de entrada não está vazio após remover espaços em branco
            onAddTask(taskTitle); // Chama a função passada via props para adicionar a nova tarefa
            setTaskTitle(''); // Limpa o campo de entrada após a tarefa ser adicionada
        }
    };

    return (
        <form className={styles.newTask} onSubmit={handleSubmit}>
            {/* Campo de entrada de texto para o título da nova tarefa */}
            <input 
                className={styles.inputTask} // Estilo aplicado ao campo de entrada
                type="text" // Define o tipo como texto
                placeholder="Adicione uma nova tarefa" // Placeholder exibido quando o campo está vazio
                value={taskTitle} // Define o valor do campo de entrada como o estado taskTitle
                onChange={(e) => setTaskTitle(e.target.value)} // Atualiza o estado sempre que o valor do campo muda
            />       
            {/* Botão de submissão do formulário */}
            <button type="submit" className={styles.submitButton}>
                <span>Criar</span> {/* Texto do botão "Criar" */}
                <PlusCircle size={20} /> {/* Ícone de adicionar tarefa */}
            </button>        
        </form>
    );
}

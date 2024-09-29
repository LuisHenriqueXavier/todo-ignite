import { useState } from 'react';
import { NewTask } from './NewTask'; // Importando o componente para adicionar novas tarefas
import { Trash } from 'phosphor-react'; // Importando o ícone de lixeira da biblioteca Phosphor
import styles from './TaskList.module.css'; // Importando os estilos CSS específicos para TaskList
import { Info } from './Info'; // Importando o componente de informações de tarefas

// Interface que define o formato de uma tarefa individual
interface Task {
    id: number; // Identificador único da tarefa
    title: string; // Título ou descrição da tarefa
    completed: boolean; // Status da tarefa (concluída ou não)
}

export function TaskList() {
    // Estado para armazenar a lista de tarefas, inicializado como um array vazio
    const [tasks, setTasks] = useState<Task[]>([]);

    // Função para adicionar uma nova tarefa à lista
    const addTask = (title: string) => {
        const newTask: Task = {
            id: tasks.length + 1, // Gera um novo ID baseado no número de tarefas atuais
            title, // Usa o título passado como argumento
            completed: false, // A tarefa começa como "não concluída"
        };
        setTasks([...tasks, newTask]); // Atualiza o estado com a nova tarefa
    };

    // Função para alternar o status de conclusão de uma tarefa
    const toggleTaskCompletion = (id: number) => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task // Inverte o status da tarefa correspondente
        );
        setTasks(updatedTasks); // Atualiza a lista de tarefas com o novo status
    };

    // Função para excluir uma tarefa da lista
    const deleteTask = (id: number) => {
        const updatedTasks = tasks.filter(task => task.id !== id); // Filtra a lista, removendo a tarefa com o ID correspondente
        setTasks(updatedTasks); // Atualiza o estado removendo a tarefa
    };

    // Contagem total de tarefas
    const totalTasks = tasks.length;

    // Contagem de tarefas que foram concluídas
    const completedTasks = tasks.filter(task => task.completed).length;

    return (
        <div className={styles.taskList}>
            {/* Componente para adicionar novas tarefas, passa a função addTask como prop */}
            <NewTask onAddTask={addTask} />
            
            {/* Componente de informações sobre tarefas, passando os totais de tarefas e tarefas concluídas */}
            <Info totalTasks={totalTasks} completedTasks={completedTasks} />

            {/* Verifica se a lista de tarefas está vazia */}
            {tasks.length === 0 ? (
                <div className={styles.noTask}>
                    <h1>Você ainda não tem tarefas cadastradas</h1>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            ) : (
                <ul>
                    {/* Mapeia a lista de tarefas para criar os itens na UI */}
                    {tasks.map(task => (
                        <li 
                            key={task.id} // Cada item da lista precisa de um identificador único
                            className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`} // Aplica estilos diferentes se a tarefa está concluída
                        >
                            {/* Contêiner para o checkbox e o texto da tarefa */}
                            <div className={styles.taskTextContainer}>
                                {/* Div que simula um checkbox com estado dinâmico */}
                                <div 
                                    className={`${styles.checkbox} ${task.completed ? styles.checked : styles.unchecked}`} 
                                    onClick={() => toggleTaskCompletion(task.id)} // Alterna a tarefa como concluída ou não ao clicar
                                />
                                {/* Texto da tarefa, riscado se concluída */}
                                <label className={task.completed ? styles.completedTask : ''}>
                                    {task.title}
                                </label>
                            </div>
                            {/* Botão para excluir a tarefa */}
                            <button onClick={() => deleteTask(task.id)} className={styles.deleteButton}>
                                <Trash size={20} /> {/* Ícone de lixeira */}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

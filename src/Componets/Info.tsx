import styles from './Info.module.css'; // Importa os estilos CSS para o componente Info

// Definindo a interface para as propriedades recebidas pelo componente Info
interface InfoProps {
    totalTasks: number;         // Quantidade total de tarefas criadas
    completedTasks: number;     // Quantidade de tarefas que foram concluídas
}

// Função do componente Info, que recebe como props o total de tarefas e as tarefas concluídas
export function Info({ totalTasks, completedTasks }: InfoProps) {
    return (
        <div className={styles.taskInfo}>
            {/* Exibindo o título "Tarefas criadas" e a quantidade total de tarefas */}
            <h1>
                Tarefas criadas  
                <span className={styles.taskNumber}>
                    {totalTasks} {/* Renderiza o número total de tarefas */}
                </span>
            </h1>
            
            {/* Exibindo o título "Concluídas" e a relação de tarefas concluídas sobre o total */}
            <h2>
                Concluídas  
                <span className={styles.taskNumber}>
                    {completedTasks} de {totalTasks} {/* Mostra o número de tarefas concluídas em relação ao total */}
                </span>
            </h2>
        </div>
    );
}

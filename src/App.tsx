import './Global.css'; // Importa estilos globais para toda a aplicação
import { Header } from './Componets/Header'; // Importa o componente Header que exibe o cabeçalho da aplicação
import { TaskList } from './Componets/TaskList'; // Importa o componente TaskList que gerencia as tarefas
import styles from './App.module.css'; // Importa estilos específicos para o componente App


// Definição do componente funcional App
export function App() {
  return (
    <>
      <Header /> {/* Renderiza o cabeçalho da aplicação */}
      <div className={styles.wrapper}> {/* Contêiner para centralizar e estilizar a lista de tarefas */}
        <TaskList /> {/* Renderiza o componente TaskList que contém a lógica das tarefas */}
      </div>
    </>
  )
}

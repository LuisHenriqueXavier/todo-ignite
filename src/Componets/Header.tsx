import styles from './Header.module.css'; // Importa o arquivo de estilos CSS específico para o componente Header
import todoLogo from '../assets/todoLogo.svg'; // Importa a logo da aplicação a partir da pasta de assets

// Função de componente Header
export function Header() {
    return (
        <header className={styles.header}> {/* Aplica os estilos do header definidos em Header.module.css */}
            <img src={todoLogo} alt="Logo ToDo" /> {/* Renderiza a imagem do logo */}
        </header>
    );
}

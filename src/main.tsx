import { StrictMode } from 'react'; // Importa o modo estrito do React, que ativa verificações adicionais
import { createRoot } from 'react-dom/client'; // Importa a função createRoot do pacote react-dom para renderização de componentes
import { App } from './App.tsx'; // Importa o componente principal App de um arquivo local

// Cria uma raiz para a renderização do React no elemento DOM com id 'root'
createRoot(document.getElementById('root')!).render(
  <StrictMode> {/* Envolve o App no modo estrito para garantir boas práticas */}
    <App /> {/* Renderiza o componente App dentro do modo estrito */}
  </StrictMode>,
);

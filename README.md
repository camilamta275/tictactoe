# TIC TAC TOE 🎰
> Equipe Kant: Ana Sofia, Camila Maira, René Lucena, Lucas Rodrigues

## → Estrutura do Projeto
projeto/
├── src/
│   ├── App.jsx  
│   ├── main.jsx  
│   └── style.css  
├── public/
│   └── index.html  
└── README.md

## → main.jsx
Importa o React e a função createRoot para renderizar a aplicação.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './style.css';

Cria a raiz da aplicação e renderiza o componente principal App.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


## → App.jsx
Importa o hook useState para controlar os estados dos quadrados.
import { useState } from 'react';

Cria uma grade com 9 valores, de 0 a 8, representando cada célula do tabuleiro.
const [grid, setGrid] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

Define a função que altera o valor de uma célula para "X" quando clicada:
const handleClick = (index) => {
  const newGrid = [...grid];
  newGrid[index] = 'X';
  setGrid(newGrid);
};

Renderiza o tabuleiro com nove células:
<div className="grid">
  {grid.map((value, index) => (
    <div
      key={index}
      className="cell"
      onClick={() => handleClick(index)}
    >
      {value}
    </div>
  ))}
</div>

## → style.css
Define estilos básicos para centralizar o jogo e estilizar os elementos.
.container: centraliza o conteúdo na tela.


.title: define o estilo do título.


.grid: cria uma grade 3x3.


.cell: define tamanho, bordas e efeito visual ao passar o mouse ou clicar.


## → Lógica Resumida

A[Usuário clica em uma célula] → B[Função handleClick é acionada]
B →  C[Estado é atualizado com 'X']
C →  D[Grid re-renderizado com novo valor]

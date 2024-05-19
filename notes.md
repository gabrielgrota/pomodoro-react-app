*npm start* = rodar o projeto em React.

construindo com ajuda do chatgpt e utilizando o método <strong>QDD</strong> (question driven development) e técnica pomodoro 25min/5min.

---
objetivos:
- criar um timer que conta os minutos e segundos de forma decrescente
- botoes: start, stop, reset
- pré-definido: 25 min, 5min
- começar contador com 25:00
- quando concluir 25min, tocar som e iniciar automaticamente o break de 5min (não concluído)
- quando break acabar, zerar o contador (não concluído)
---

pesquisas:

na criaçao de html em componente, quando tiver mais de um elemento html utilizar `<div>` se não dará erro.

### useState:
lógica para usar useState:
```jsx
import React, { useState } from 'react';

function Counter() {
  // Declarando uma variável de estado chamada 'count' e a função 'setCount' para atualizá-la
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Counter;
```

### useEffect

Poder definir tempos personalizados

Questão: O react sempre usa esse formato? `const [state, setState] = useState(initialState);`

Resposta: Sim, o React sempre usa essa forma de declarar o estado em componentes funcionais, utilizando a desestruturação de arrays para obter o estado e a função que atualiza o estado a partir do hook useState.
Componentes
state: O valor atual do estado.
setState: A função usada para atualizar o estado.
initialState: O valor inicial do estado, que pode ser qualquer tipo de dado (booleano, número, string, objeto, array, etc.).




### [como usar setInterval no React](https://medium.com/@jonjamesdesigns/how-to-use-setinterval-in-react-10612f122027)
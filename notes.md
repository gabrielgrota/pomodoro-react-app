*npm start* = rodar o projeto em React.

construindo com ajuda do chatgpt e utilizando o método <strong>QDD</strong> (question driven development) e técnica pomodoro 25min/5min.

---
objetivos:
- criar um timer que conta os minutos e segundos de forma decrescente
- botoes: start, stop, reset
- pré-definido: 25 min, 5min
- começar contador com 25:00
---
links importantes:

[firebase](https://console.firebase.google.com/u/0/project/pomodoro-react-208/overview)

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

19052024
adicionei o componente "Button" para padronizar os botões com ícone, função e nome.

---

### Hook em React
Em React, um hook é uma função especial que permite que você "ligue" recursos do React, como estado e ciclo de vida, em componentes funcionais. Oferecem uma forma poderosa de gerenciar estado e efeitos colaterais sem a necessidade de usar classes.
- useState: Permite adicionar estado local a componentes funcionais.
- useEffect: Permite executar efeitos colaterais em componentes funcionais (similar a métodos de ciclo de vida como componentDidMount, componentDidUpdate e componentWillUnmount nas classes).
- useContext: Permite acessar o contexto em componentes funcionais.
- ver sobre localStorage no 'useDarkMode.jsx'

---
22052024 hoje aprendi a esconder e mostrar uma div em react

o exemplo do código usado:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>Toggle Div Example</h1>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder' : 'Mostrar'} Div
      </button>
      {isVisible && (
        <div className="toggleDiv">
          Esta div aparece e some quando o botão é apertado.
        </div>
      )}
    </div>
  );
}

export default App;
```

o projeto possui o componente `<ToggleDiv />` que faz com que o elemento `<div>` possa se esconder ou mostrar apertando um `<Button />`. Implementei de forma separada do componente `<Timer />'` para ter a possibilidade de reutilizar o código e sua função. (falei basicamente o conceito de componente em react)
---
fazer no dia 22/05/2024
### implementar o "quantidade de sessões"
- código de exemplo
```jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import CustomDuration from './components/CustomDuration';

function App() {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutos em segundos
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutos em segundos
  const [time, setTime] = useState(workTime);
  const [isActive, setIsActive] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [sessions, setSessions] = useState(
    JSON.parse(localStorage.getItem('pomodoroSessions')) || []
  );

  useEffect(() => {
    let timer;
    if (isActive && time > 0) {
      timer = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      setIsWorkTime(!isWorkTime);
      setTime(isWorkTime ? breakTime : workTime);

      if (isWorkTime) {
        const newSession = {
          startTime: new Date().toLocaleString(),
          workDuration: workTime,
          breakDuration: breakTime,
        };
        const updatedSessions = [...sessions, newSession];
        setSessions(updatedSessions);
        localStorage.setItem('pomodoroSessions', JSON.stringify(updatedSessions));
      }
    }
    return () => clearInterval(timer);
  }, [isActive, time, isWorkTime, workTime, breakTime, sessions]);

  const startTimer = () => {
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkTime(true);
    setTime(workTime);
  };

  const setDurations = (newWorkTime, newBreakTime) => {
    setWorkTime(newWorkTime * 60);
    setBreakTime(newBreakTime * 60);
    setTime(newWorkTime * 60);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        <h2>{isWorkTime ? 'Trabalho' : 'Descanso'}</h2>
        <h1>{formatTime(time)}</h1>
      </div>
      <div className="buttons">
        <button onClick={startTimer} disabled={isActive}>Iniciar</button>
        <button onClick={pauseTimer} disabled={!isActive}>Pausar</button>
        <button onClick={resetTimer}>Resetar</button>
      </div>
      <CustomDuration onSetDurations={setDurations} />
      <div className="sessions">
        <h2>Sessões Completas</h2>
        <ul>
          {sessions.map((session, index) => (
            <li key={index}>
              {session.startTime} - Trabalho: {session.workDuration / 60} min, Descanso: {session.breakDuration / 60} min
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

```

### mais funcionalidades:
- ~~dark mode~~
- ~~usuário personalizar tempo~~
- separar componentes ~~toggleDiv~~ e ~~CustomDuration~~
- ~~quando concluir 25min, tocar som~~
- ~~iniciar automaticamente o break~~
- ~~quando break acabar, zerar o contador~~
- adaptar ao mobile
- tentar salvar quantidade de vezes feitas, ver como fazer isso.
- ~~desenhar logo do meu pomodoro~~
- ~~criar componente para input~~
- ~~adaptar toggleDiv para receber os valores que vão no nome do botão como `hide or show`, `close or custom`~~
- abrir toggleDiv em pop up (modal)
- ~~colocar array de links de lofi, e button onde a pessoa troca os tipos de lofi (nordic, jazz, hiphop)~~
- trocar língua do site, portugues ou inglês ou swedish
- ~~juntar lofi e footer do github. focar no `/timer.jsx`~~
- ~~timer está cadastrado no css como flex:1; assim deixando ele com todo o espaço principal da tela~~

fiz o componente modl, clicando no botao para mostrar a div e clicando no fundo da tela ou no botao fechar, close-modal.

- ~~colocar modal no timer~~
- ~~colocar conteúdo~~
- colocar condition que é o nome do toggle
- ~~fazer botão aceitar não mostrar name (criei outro componente)/, apenas `ButtonIcon`~~
- colocar função toggleModal no componente /Modal para fechar o modal quando fizer o update

---
- criei o modal assistindo esse vídeo:
  - [Vídeo](https://www.youtube.com/watch?v=9DwGahSqcEc)
  - [Código](https://github.com/ecole-du-web/react-modal/blob/main/src/Components/Modal/Modal.js)
---

0.1.2:
adicionei o modal no botão `custom` para usuário poder personalizar o work e break time!
mudei alguns componentes no front

0.1.3
implementei o dark mode, preciso melhorar ainda alguns componentes como button.
adicioinei o favicon

- saber mais sobre a técnica pomodoro 
- colocar este lofi também https://www.youtube.com/live/f_WCg5WpFC8?si=9H_4sFoudzHlShKM
- colocar good morning, gabriel. quando for dia, tarde e noite.

31082024
- ~~adicionar novas opções de lofi~~
- ~~voltar div do lofi ao meio igual 0.1.2~~
- to-do list
- link para artigo sobre pomodoro technique
- ~~banco de dados para salvar quantidade de vezes feita, data, hora e local~~
- consumir API de clima

O uso de key={link} é uma abordagem comum para forçar a atualização de componentes quando o estado muda. Se o iframe não estava atualizando corretamente antes, isso deve resolver o problema.

implementar firebase: [link vídeo](https://www.youtube.com/watch?v=2hR-uWjBAgw)
- rules
- using moment js to format timestamp, [link](https://momentjs.com/)

- quando clicar no botão start automaticamente salva o timestamp e pede o local em que está no momento

- ver o await

0.1.3
- novo icon
- novas opções de lofi (bossa e jazz)
- log de quantas sessões foram feitas
- conexão com firebase: database de sessões
- adicionado moment js para formatar timestamp

0.1.4
implementar novo visual - ok
barra lateral a direita com botoes com as funcionalidades:
  conta do usuario para log
  custom timer
  light or dark mode
  mostrar e nao mostrar lista de to-do
  mostrar e nao mostrar log de horario e dia feito o pomo
  mostrar e nao mostrar o lofi na tela
  link para github

~~mudar visual do botão, tornando invisivel apenas com a borda e quando usuário coloca o mouse, automaticamente preenche.~~

links importantes para prosseguir com o projeto:
[pedroTech](https://www.youtube.com/watch?v=2hR-uWjBAgw)
[firebase](https://console.firebase.google.com/u/0/project/pomodoro-react-208/overview)

worktime no meio da tela, fazer função quando mudar para work short break e long break automatico.

body.light e body.dark muda todo o tema da página. prestar atenção nisso.

alterar funções dos botoes:
botao long break precisa colocar 10 min na tela.
start precisa mudar dependendo se está ativo = pause, se está desativado = start
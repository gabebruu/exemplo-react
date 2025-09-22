/*import UserGreeting from "./components/UserGreeting";
import Soma from "./components/Soma";
import CheckList from "./components/CheckList";

const user = {
  firstName: "",
  lastName: "Gabriela",
};
const capivara = {
  idade: "32", especie: "Faxineira de corações",
  apelido: "s2"



};



function App() {
  return (
    <div className="App">
      <UserGreeting user={user} capivara={capivara} />
      <Soma a={1} b={2} />

      <ul>
        <CheckList items={[
            { text: "Tarefa um", done: true },
            { text: "Tarefa dois", done: false },
          ]}
        />
      </ul>
    </div>
  );

  // comentar fora di
}

export default App;

// app Importa o nome do que quer fazer, Function APP - retorna DIV com nome*

import Counter from "./components/Counter";
function App () {
  return (
    <div>
      <Counter/>
    </div>
  )
}
export default App; */

import GeradorDeNumeros from "./components/Gerar";
import Adjetivos from "./components/Adjetivos";

function App () {
  
  return (
    <div>
      <GeradorDeNumeros/>
      <Adjetivos/>
    </div>
  )
}
export default App;


import UserGreeting from "./components/UserGreeting";
import Soma from "./components/Soma";

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
      <Soma a = {1} b = {2}/>

    </div>
  );

  // comentar fora di
}

export default App;

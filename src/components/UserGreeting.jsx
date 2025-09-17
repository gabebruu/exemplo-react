export default function UserGreeting (props) {
	return (
		
		<div style = {{background: "#f395c4ff", color: "#777373ff"}}> 
		<h1>Nome: {props.user.firstName}</h1> 
		<h1>Apelido: {props.user.lastName}</h1>

		<h1>Idade: {props.capivara.idade}</h1> 
		<h1>Espécie: {props.capivara.especie}</h1> 
		<h1>Apelido: {props.capivara.apelido}</h1>
		</div>

	);
}
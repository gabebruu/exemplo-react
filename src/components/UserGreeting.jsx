export default function UserGreeting(props) {
	if (props.user.firstName) {
		return (<div style={{ background: "#f395c4ff", color: "#020202ff" }}>
			<h1>Nome: {props.user.firstName}</h1>
			<h1>Apelido: {props.user.lastName}</h1>

			<h1>Idade: {props.capivara.idade}</h1>
			<h1>Espécie: {props.capivara.especie}</h1>
			<h1>Apelido: {props.capivara.apelido}</h1>
		</div>

		)

	} else {
		return (
			<div style={{ background: "#7e405fff", color: "#e63a3aff" }}>
				<h1>Olá, anônimo</h1>
			</div>
		)


	}


}
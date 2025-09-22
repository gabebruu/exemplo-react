import {useState} from "react";
function GeradorDeNumeros () {
	const [gerador, setGerador] = useState ("Clique em Gerar");
	const Gerar = () => {
		const novoNumero = Math.floor (Math.random () * 100) + 1;
		setGerador (novoNumero);
	};
	return (
		<div>
			<h1>Gerador de Números</h1>
			<button onClick = {Gerar}>Gerar</button>
			<p>{gerador}</p>
		</div>
	);
}
export default GeradorDeNumeros;
import { useState } from "react";
export default function Adjetivos() {
	const Nome = ["Bruna", "Larissa", "Bia", "Gui", "Paulo"]
	const Adj = ["Fofa", "engraçado(a/e/if ele é oq quiser)", "fdp", "doido(a/e)", "legal"]

	const [randomNames, setRandomNames] = useState({
		name: "",
		adjective: ""
	});

	const sortRandom = () => {
		const nameAleatorio = Nome[Math.floor(Math.random() * Nome.length)];
		const adjectiveAleatorio = Adj[Math.floor(Math.random() * Adj.length)];
		setRandomNames({
			name: nameAleatorio,
			adjective: adjectiveAleatorio
		}

		)


	};

	return (
		<>
			<div>
				<h1>Gerador de Nomes</h1>
				<button onClick={sortRandom}>Gerar Nomes + Advjetivos</button>
				<p>{randomNames.name == "" ? "Clique em gerar" : `${randomNames.name} ${randomNames.adjective}`}</p>
			</div>

		</>
	);

}
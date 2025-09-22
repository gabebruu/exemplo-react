import {useState} from "react";
function Counter () {
	const [count, setCount] = useState (0);
	// Contador == valor exibido no state
	// setState == o que vai mudar o valor do contador.
	const incrementar = () => {
		setCount(count + 1);
	};
	return (
		<div>
			<p>O Valor atual é: {count}</p>
			<button onClick = {incrementar}>incrementar</button>
		</div>
	);

}
export default Counter;
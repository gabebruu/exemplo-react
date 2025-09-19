export default function CheckList(props) {
	const data = props.items; // agora sim: 'itens'

	return (
		<>
			{data.map((item) => (
				<li className={item.done && "checklist"} key={item}>
					{item.text}
				</li>
			))}
		</>
	);
}
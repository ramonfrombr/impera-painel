import React from "react";
import { Pie } from "react-chartjs-2";

const GraficoPrincipaisInvestimentos = () => {
	const dados = {
		labels: [
			"Bitcoin",
			"Dólar",
			"AAPL (Apple)",
			"Euro",
			"Real",
			"GOGL (Google)",
		],
		datasets: [
			{
				label: "# of Votes",
				data: [12, 19, 3, 5, 2, 3],
				backgroundColor: [
					"#3f3f3f",
					"#ecc204",
					"#464646",
					"#ffd900",
					"#3d3d3d",
					"#e4d508",
				],
				borderWidth: 1,
			},
		],
	};

	return (
		<div style={{ marginTop: "50px" }}>
			<h1 style={{ textAlign: "center" }}>Principais Investimentos</h1>
			<Pie data={dados} />
		</div>
	);
};

export default GraficoPrincipaisInvestimentos;

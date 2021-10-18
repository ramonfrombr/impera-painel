import React, { useState } from "react";
import { Line } from "react-chartjs-2";

import "../grafico.scss";

const GraficoUltimosRendimentos = () => {
	const [dados, definirDados] = useState([
		33, 53, 85, 41, 44, 65, 33, 25, 35, 51, 54, 76,
	]);

	const dados2 = [33, 25, 35, 51, 54, 76, 33, 53, 85, 41, 44, 65];

	return (
		<div className="grafico">
			<Line
				data={{
					labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
					datasets: [
						{
							type: "line",
							label: "Conjunto de Dados 1",
							data: dados,
							fill: true,
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							borderColor: "rgba(218, 165, 32, 1)",
							pointRadius: 0,
							pointBorderColor: "rgba(218, 165, 32, 1)",
							pointBackgroundColor: "rgba(218, 165, 32, 1)",
							pointHoverBackgroundColor: "#ffee00",
							pointHoverBorderWidth: 1,
							pointHoverRadius: 1,
						},
					],
				}}
				options={{
					responsive: true,
					plugins: {
						legend: {
							display: false,
						},
					},
					scales: {
						x: {
							display: true,
							grid: {
								display: false,
							},
						},
						y: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
};

export default GraficoUltimosRendimentos;

import React from "react";
import "./painel.scss";

import GraficoUltimosRendimentos from "../grafico/GraficoUltimosRendimentos/GraficoUltimosRendimentos";
import GraficoPrincipaisInvestimentos from "../grafico/GraficoPrincipaisInvestimentos/GraficoPrincipaisInvestimentos";

const Painel = () => {
	return (
		<div className="painel">
			<div className="painel__container">
				<div className="painel__secaoGrafico">
					<div className="painel__portfolio">
						<h1>$144,656</h1>
						<p>+$44.63 (+0.04%) Hoje</p>
					</div>

					<div className="grafico__wrapper">
						<GraficoUltimosRendimentos />

						<GraficoPrincipaisInvestimentos />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Painel;

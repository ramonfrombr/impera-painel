import React from "react";
import "./acao.scss";
import GraficoAcao from "../stock.svg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const Acao = ({ nome, preco }) => {
	const acoes = "1";
	return (
		<div style={{ marginBottom: "5px", fontSize: "8px" }} className="acao">
			<div className="acao__intro">
				<h3 style={{ marginRight: "15px", fontSize: "16px" }}>{nome}</h3>
				<p className="acao__nAcoes">{acoes && acoes + " ações"}</p>
			</div>
			<div style={{ marginRight: "15px" }} className="acao__grafico">
				<img src={GraficoAcao} height={16} />
			</div>

			<div className="acao__numeros">
				<p className="acao__preco">
					$ {preco}{" "}
					<ArrowUpwardIcon style={{ height: "12pt", color: "white" }} />
				</p>
				<p className="acao__porcentagem">+200%</p>
			</div>
		</div>
	);
};

export default Acao;

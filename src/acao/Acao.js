import React from "react";
import "./acao.scss";
import GraficoAcao from "../stock.svg";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Acao = ({ nome, preco }) => {
	return (
		<div style={{ marginBottom: "5px", fontSize: "8px" }} className="acao">
			<div className="acao__intro">
				<span style={{ marginRight: "15px", fontSize: "16px" }}>{nome}</span>
			</div>
			<div style={{ marginRight: "15px" }} className="acao__grafico">
				<img src={GraficoAcao} height={16} />
			</div>
			<div className="acao__valor">
				$ {preco} <ArrowUpwardIcon style={{ height: "12pt", color: "white" }} />
			</div>
		</div>
	);
};

export default Acao;

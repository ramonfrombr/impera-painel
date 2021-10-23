import React, { useState, useEffect } from "react";
import "./acoes.scss";
import axios from "axios";
import { staticBlock } from "@babel/types";
import Acao from "../acao/Acao";

// API TOKEN
const TOKEN = "c5lu7vaad3if1qn1so3g";

// API URL
const BASE_URL = "https://finnhub.io/api/v1/quote";

const Acoes = () => {
	// Dados da sações
	const [dadosAcoes, definirDadosAcoes] = useState([]);

	// Seleciona os dados das ações no API
	const selecionarDadosAcoes = (acao) => {
		return axios
			.get(`${BASE_URL}?symbol=${acao}&token=${TOKEN}`)
			.catch((erro) => {
				console.log("Erro", erro.message);
			});
	};

	useEffect(() => {
		let dados = [];

		// Códigos das ações
		const listaAcoes = [
			"AAPL",
			"MSFT",
			"TSLA",
			"FB",
			"BABA",
			"UBER",
			"DIS",
			"SBUX",
		];

		// Códigos das moedas
		const listaMoedas = ["USD", "GBP", "JPY", "CAD", "EUR", "BRL"];

		// Códigos das criptomoedas
		const listaCripto = ["BTC", "ETH"];

		//selecionarMinhasAcoes();

		let promessas = [];

		listaAcoes.map((acao) => {
			promessas.push(
				selecionarDadosAcoes(acao).then((resposta) => {
					console.log(resposta);

					dados.push({
						nome: acao,
						...resposta.data,
					});
				})
			);
		});

		Promise.all(promessas).then(() => {
			definirDadosAcoes(dados);
		});
	}, []);

	return (
		<div className="acoes">
			<div className="acoes__container">
				<h3 className="secao__cabecalho">NYSE</h3>

				<div className="acoes__conteudo">
					{dadosAcoes.map((acao, i) => (
						<Acao
							key={i}
							nome={acao.nome}
							precoAberto={acao.o}
							preco={acao.c}
						/>
					))}
				</div>
			</div>

			<div className="acoes__container">
				<h3 className="secao__cabecalho">Bovespa/B3</h3>

				<div className="acoes__conteudo"></div>
			</div>

			<div className="acoes__container">
				<h3 className="secao__cabecalho">NASDAQ</h3>

				<div className="acoes__conteudo"></div>
			</div>

			<div className="acoes__container">
				<h3 className="secao__cabecalho">Euronext</h3>

				<div className="acoes__conteudo"></div>
			</div>
		</div>
	);
};

export default Acoes;

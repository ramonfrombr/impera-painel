import React from "react";

import {
	BrowserRouter as Router,
	Route as Rota,
	Switch,
} from "react-router-dom";

import logo from "./logo.svg";

import Navbar from "./navbar/Navbar";
//import NavbarMobile from "./navbar_mobile/NavbarMobile";
import Painel from "./painel/Painel";
import Noticias from "./noticias/Noticias";
import Acoes from "./acoes/Acoes";
import Cambio from "./cambio/Cambio";
import Cripto from "./cripto/Cripto";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="app__cabecalho">
					{/*<NavbarMobile />*/}
					<Navbar />
				</div>

				<main className="app__conteudo">
					<Switch>
						<Rota path="/">
							<div className="app__container">
								<section className="app__conteudoPrincipal">
									<Painel />
									{/*
                                    <Noticias />
                                    */}
								</section>

								<section className="app__conteudoSecundario">
									<Acoes />

									{/*
                                        <Cambio />
                                        <Cripto />
                                    */}
								</section>
							</div>
						</Rota>
					</Switch>
				</main>
			</div>
		</Router>
	);
}

export default App;

import React from "react";

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
		<div className="App">
			<div className="app__cabecalho">
				{/*<NavbarMobile />*/}
				<Navbar />
			</div>

			<main className="app__conteudo">
				<div className="app__container">
					<section className="app__conteudoPrincipal">
						<Painel />
						<Noticias />
					</section>

					<section className="app__conteudoSecundario">
						<Acoes />
						<Cambio />
						<Cripto />
					</section>
				</div>
			</main>
		</div>
	);
}

export default App;

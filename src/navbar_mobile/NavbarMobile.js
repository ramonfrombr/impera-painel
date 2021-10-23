import React from "react";
import "./navbarmobile.scss";

const NavbarMobile = () => {
	/*
	document.addEventListener("DOMContentLoaded", () => {
		

		let secao_principal = document.querySelector("#secao-principal");

		let blog_botao = document.querySelector("#blog-botao");
		let idiomas_botao = document.querySelector("#idiomas-botao");
		let tech_botao = document.querySelector("#tech-botao");
		let menu_botao = document.querySelector("#menu-botao");

		const blog_icone = document.querySelector("#blog-icone");
		const idiomas_icone = document.querySelector("#idiomas-icone");
		const tech_icone = document.querySelector("#tech-icone");
		const menu_icone = document.querySelector("#menu-icone");



		blog_botao.addEventListener("click", (e) => {
			secao_principal.classList.add("margem-secao-principal");

			if (blog_botao.style.backgroundColor == "white") {
				blog_icone.innerHTML = '<i class="fa fa-coffee"></i>';
				blog_botao.style.backgroundColor = "rgb(41, 186, 19)";
				blog_botao.style.color = "white";

				secao_principal.classList.remove("margem-secao-principal");
			} else {
				blog_icone.innerHTML = '<i class="fa fa-times"></i>';

				blog_botao.style.backgroundColor = "white";
				blog_botao.style.color = "black";

				idiomas_icone.innerHTML = '<i class="fa fa-language"></i>';
				idiomas_botao.style.backgroundColor = "rgb(41, 186, 19)";
				idiomas_botao.style.color = "white";

				tech_icone.innerHTML = '<i class="fa fa-laptop"></i>';
				tech_botao.style.backgroundColor = "rgb(41, 186, 19)";
				tech_botao.style.color = "white";

				menu_icone.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
				menu_botao.style.backgroundColor = "rgb(41, 186, 19)";
				menu_botao.style.color = "white";
			}

			$("#idiomas-lista").collapse("hide");
			$("#tech-lista").collapse("hide");
			$("#menu-lista").collapse("hide");
			$("#blog-lista").collapse("toggle");
		});


		idiomas_botao.addEventListener("click", (e) => {
			secao_principal.classList.add("margem-secao-principal");

			if (idiomas_botao.style.backgroundColor == "white") {
				idiomas_icone.innerHTML = '<i class="fa fa-language"></i>';
				idiomas_botao.style.backgroundColor = "rgb(41, 186, 19)";
				idiomas_botao.style.color = "white";

				secao_principal.classList.remove("margem-secao-principal");
			} else {
				idiomas_icone.innerHTML = '<i class="fa fa-times"></i>';

				idiomas_botao.style.backgroundColor = "white";
				idiomas_botao.style.color = "black";

				blog_icone.innerHTML = '<i class="fa fa-coffee"></i>';
				blog_botao.style.backgroundColor = "rgb(41, 186, 19)";
				blog_botao.style.color = "white";

				tech_icone.innerHTML = '<i class="fa fa-laptop"></i>';
				tech_botao.style.backgroundColor = "rgb(41, 186, 19)";
				tech_botao.style.color = "white";

				menu_icone.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
				menu_botao.style.backgroundColor = "rgb(41, 186, 19)";
				menu_botao.style.color = "white";
			}

			$("#blog-lista").collapse("hide");
			$("#tech-lista").collapse("hide");
			$("#menu-lista").collapse("hide");
			$("#idiomas-lista").collapse("toggle");
		});


		tech_botao.addEventListener("click", (e) => {
			secao_principal.classList.add("margem-secao-principal");

			if (tech_botao.style.backgroundColor == "white") {
				tech_icone.innerHTML = '<i class="fa fa-laptop"></i>';
				tech_botao.style.backgroundColor = "rgb(41, 186, 19)";
				tech_botao.style.color = "white";

				secao_principal.classList.remove("margem-secao-principal");
			} else {
				tech_icone.innerHTML = '<i class="fa fa-times"></i>';

				tech_botao.style.backgroundColor = "white";
				tech_botao.style.color = "black";

				idiomas_icone.innerHTML = '<i class="fa fa-language"></i>';
				idiomas_botao.style.backgroundColor = "rgb(41, 186, 19)";
				idiomas_botao.style.color = "white";

				blog_icone.innerHTML = '<i class="fa fa-coffee"></i>';
				blog_botao.style.backgroundColor = "rgb(41, 186, 19)";
				blog_botao.style.color = "white";

				menu_icone.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
				menu_botao.style.backgroundColor = "rgb(41, 186, 19)";
				menu_botao.style.color = "white";
			}

			$("#blog-lista").collapse("hide");
			$("#idiomas-lista").collapse("hide");
			$("#menu-lista").collapse("hide");
			$("#tech-lista").collapse("toggle");
		});

        

		menu_botao.addEventListener("click", (e) => {
			secao_principal.classList.add("margem-secao-principal");

			if (menu_botao.style.backgroundColor == "white") {
				menu_icone.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
				menu_botao.style.backgroundColor = "#29ba13";
				menu_botao.style.color = "white";

				secao_principal.classList.remove("margem-secao-principal");
			} else {
				menu_icone.innerHTML = '<i class="fa fa-times"></i>';

				menu_botao.style.backgroundColor = "white";
				menu_botao.style.color = "black";

				idiomas_icone.innerHTML = '<i class="fa fa-language"></i>';
				idiomas_botao.style.backgroundColor = "#29ba13";
				idiomas_botao.style.color = "white";

				tech_icone.innerHTML = '<i class="fa fa-laptop"></i>';
				tech_botao.style.backgroundColor = "#29ba13";
				tech_botao.style.color = "white";

				blog_icone.innerHTML = '<i class="fa fa-coffee"></i>';
				blog_botao.style.backgroundColor = "#29ba13";
				blog_botao.style.color = "white";
			}

			$("#blog-lista").collapse("hide");
			$("#idiomas-lista").collapse("hide");
			$("#tech-lista").collapse("hide");
			$("#menu-lista").collapse("toggle");
		});

		secao_principal.addEventListener("click", (e) => {
			secao_principal.classList.remove("margem-secao-principal");

			$("#blog-lista").collapse("hide");
			$("#idiomas-lista").collapse("hide");
			$("#tech-lista").collapse("hide");
			$("#menu-lista").collapse("hide");

			blog_icone.innerHTML = '<i class="fa fa-coffee"></i>';
			blog_botao.style.backgroundColor = "#29ba13";
			blog_botao.style.color = "white";

			idiomas_icone.innerHTML = '<i class="fa fa-language"></i>';
			idiomas_botao.style.backgroundColor = "#29ba13";
			idiomas_botao.style.color = "white";

			tech_icone.innerHTML = '<i class="fa fa-laptop"></i>';
			tech_botao.style.backgroundColor = "#29ba13";
			tech_botao.style.color = "white";

			menu_icone.innerHTML = '<i class="fa fa-ellipsis-h"></i>';
			menu_botao.style.backgroundColor = "#29ba13";
			menu_botao.style.color = "white";
		});

		
	});
    */

	return (
		<div style={{ display: "none" }}>
			<div id="nav-mobile">
				<nav id="barra-navegacao" class="row navbar text-center">
					<a
						class="navbar-brand navbar-brand-desktop p-2"
						href="{{ url_for('blog.inicio') }}"
					>
						<div class="col">
							<span class="logo-span">A+</span>
						</div>
					</a>

					<div
						id="blog-botao"
						class="col"
						type="button"
						data-toggle="collapse"
						data-target="#blog-lista"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							id="blog-icone"
							type="button"
							data-toggle="collapse"
							data-target="#blog-lista"
						>
							<i class="fa fa-coffee"></i>
						</span>
					</div>

					<div
						id="idiomas-botao"
						class="col"
						type="button"
						data-toggle="collapse"
						data-target="#idiomas-lista"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							id="idiomas-icone"
							type="button"
							data-toggle="collapse"
							data-target="#idiomas-lista"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<i class="fa fa-language"></i>
						</span>
					</div>

					<div
						id="tech-botao"
						class="col"
						type="button"
						data-toggle="collapse"
						data-target="#tech-lista"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							id="tech-icone"
							type="button"
							data-toggle="collapse"
							data-target="#tech-lista"
						>
							<i class="fa fa-laptop"></i>
						</span>
					</div>

					<div
						id="menu-botao"
						class="col"
						role="button"
						type="button"
						data-toggle="collapse"
						data-target="#menu-lista"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							id="menu-icone"
							type="button"
							data-toggle="collapse"
							data-target="#menu-lista"
						>
							<i class="fa fa-ellipsis-h"></i>
						</span>
					</div>

					<div class="collapse navbar-collapse bg-white" id="blog-lista">
						<ul class="navbar-sub-lista navbar-nav borda-sub-menu">
							<li>
								<i class="fa fa-coffee"></i> Blog
							</li>
							<a href="">
								<li>🌎 Brasil</li>
							</a>
							<a href="">
								<li>
									<i class="fa fa-hashtag text-danger"></i> Séries
								</li>
							</a>
							<a href="">
								<li>📚 Estudo</li>
							</a>
							<a href="">
								<li>✈️ Viagem</li>
							</a>
							<a href="">
								<li>
									<i class="fa fa-comments text-success"></i> Entrevistas
								</li>
							</a>
						</ul>
					</div>

					<div class="collapse navbar-collapse bg-white" id="idiomas-lista">
						<ul class="navbar-sub-lista navbar-nav mr-auto borda-sub-menu">
							<li>
								<i class="fa fa-language"></i> Idiomas
							</li>
							<a href="">
								<li>🇺🇸 Inglês</li>
							</a>

							<a href="">
								<li>🇫🇷 Francês</li>
							</a>
							<a href="">
								<li>🇪🇸 Espanhol</li>
							</a>
							<a href="">
								<li>🇮🇹 Italiano</li>
							</a>
							<a href="">
								<li>🇩🇪 Alemão</li>
							</a>
							<a href="">
								<li>🇨🇳 Chinês</li>
							</a>
							<a href="">
								<li>🇯🇵 Japonês</li>
							</a>
						</ul>
					</div>

					<div
						class="collapse navbar-collapse bg-white borda-sub-menu"
						id="tech-lista"
					>
						<ul class="navbar-sub-lista navbar-nav">
							<li>
								<i class="fa fa-laptop"></i> Tecnologia
							</li>
							<a href="https://cs50xemportugues.github.io">
								<li>🐱 Introdução à Ciências da Computação</li>
							</a>
							<a href="https://cs50xemportugues.github.io/web">
								<li>💻 Desenvolvimento Web com Python e JavaScript</li>
							</a>
							<a href="https://cs50xemportugues.github.io/ia">
								<li>🧠 Inteligência Artificial com Python</li>
							</a>
							<a href="https://cs50xemportugues.github.io/games">
								<li>🎮 Desenvolvimento de Games</li>
							</a>
							<a href="https://cs50xemportugues.github.io/business">
								<li>📈 Ciências da Computação para Empresários</li>
							</a>
							<a href="https://cs50xemportugues.github.io/direito">
								<li>💼 Ciências da Computação para Advogados</li>
							</a>
						</ul>
					</div>

					<div
						class="collapse navbar-collapse bg-white borda-sub-menu"
						id="menu-lista"
					>
						<ul class="navbar-sub-lista navbar-nav">
							<a class="" href="">
								<li>
									Perfil <i class="fa fa-user-circle"></i>
								</li>
							</a>
							<a class="" href="">
								<li>
									Conta <i class="fa fa-key"></i>
								</li>
							</a>
							<a class="" href="">
								<li>Trocar Senha</li>
							</a>
							<a class="" href="">
								<li>Trocar Email</li>
							</a>

							<a class="" href="">
								<li>
									Equipe <i class="fa fa-users"></i>
								</li>
							</a>
							<a class="" href="">
								<li>
									Contato <i class="fa fa-phone"></i>
								</li>
							</a>
							<a class="" href="">
								<li>
									Sobre <i class="fa fa-info-circle"></i>
								</li>
							</a>

							<a class="" href="">
								<li>Sair</li>
							</a>

							<a href="">
								<li>Se Inscrever</li>
							</a>
							<a href="">
								<li>Entrar</li>
							</a>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavbarMobile;

import React from "react";
import Logo from "../logo1.png";
import "./navbar.scss";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
	return (
		<nav className="cabecalho">
			{/* Logo */}
			<div className="cabecalho__logo">
				<img src={Logo} width={25} height={25} style={{ marginRight: "5px" }} />
				<span
					style={{ color: "goldenrod", fontWeight: "bold", fontSize: "28px" }}
				>
					æterna
				</span>
			</div>

			{/* Pesquisa */}
			<div className="cabecalho__pesquisa">
				<div className="cabecalho__pesquisaContainer">
					<input
						className="cabecalho__pesquisaInput"
						placeholder="Pesquisa"
						type="text"
					/>
					<SearchIcon
						style={{
							padding: "5px",
							height: "25 px",
							width: "30px",
							cursor: "pointer",
						}}
					/>
				</div>
			</div>

			{/* Menu */}
			<div className="cabecalho__menu">
				<a className="cabecalho__menuItem" href="">
					Ações
				</a>
				<a className="cabecalho__menuItem" href="">
					Portfolio
				</a>
				<a className="cabecalho__menuItem" href="">
					Carteira
				</a>
				<a className="cabecalho__menuItem" href="">
					Mensagens
				</a>
				<a className="cabecalho__menuItem" href="">
					Conta
				</a>
			</div>
		</nav>
	);
};

export default Navbar;

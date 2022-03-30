import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./UI/SideBar";
//import { useSelector } from "react-redux";

function Header() {
	const [showSideBar, setShowSideBar] = useState(false);
	//const selectCars = useSelector((state) => state.car.cars);
	const sideBarHandler = () => {
		setShowSideBar(true);
	};

	const hideSideBar = () => {
		setShowSideBar(false);
	};
	return (
		<Container>
			<a>
				<img src='/images/logo.svg' alt='Tesla-Logo' />
			</a>
			<Menu>
				<a href='#'>Model S</a> <a href='#'>Model 3</a> <a href='#'>Model X</a>{" "}
				<a href='#'>Model Y</a>
				<a href='#'>solar roof</a>
				<a href='#'>solar panel</a>
			</Menu>
			<RightMenu>
				<a href='#'>Shop</a>
				<a href='#'>Account</a>
				<CustomMenu onClick={sideBarHandler} />
			</RightMenu>
			{showSideBar && <SideBar onConfirm={hideSideBar} show={showSideBar} />}
		</Container>
	);
}

export default Header;

const Container = styled.header`
	min-height: 4rem;
	display: flex;
	align-items: center;
	padding: 0 20px;
	justify-content: space-between;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
`;
const Menu = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	a {
		margin-left: 1rem;
		font-weight: 600;
		padding: 8px 15px;
		text-transform: uppercase;
	}

	a:hover {
		background-color: rgba(23, 26, 32, 0.07);
		border-radius: 25px;
		transition: background-color 0.5s ease-out;
	}

	@media (max-width: 882px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		margin-right: 0.7rem;
		font-weight: 600;
		padding: 8px 10px;
		text-transform: uppercase;
		display: flex;
		align-items: center;
	}
	a:hover {
		background-color: rgba(23, 26, 32, 0.07);
		border-radius: 25px;
		transition: background-color 0.5s ease-out;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
	@media (max-width: 882px) {
		margin-right: 0.8rem;
	}
`;

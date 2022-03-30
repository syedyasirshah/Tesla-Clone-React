import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import styled from "styled-components";
import { Fragment } from "react/cjs/react.production.min";
function SideBar(props) {
	const [burgerStatus, setBurgerStatus] = useState(false);
	return (
		<Fragment>
			<Backdrop onClick={props.onConfirm}>
				<BurgerNav show={burgerStatus}>
					<CloseWrap>
						<CustomClose onClick={props.onConfirm} />
					</CloseWrap>

					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						<a>Existing Inventory</a>
					</li>
					<li>
						<a>Existing Inventory</a>{" "}
					</li>
					<li>
						{" "}
						<a>Existing Inventory</a>{" "}
					</li>
				</BurgerNav>
			</Backdrop>
		</Fragment>
	);
}

export default SideBar;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	z-index: 10;
	background: rgba(0, 0, 0, 0.6);
`;
const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	background: white;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 20%;
	padding: 3rem 1.2rem;
	z-index: 100;
	overflow: scroll;
	/*	transform: ${(props) =>
		props.show ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.5s ease-in-out;*/
	li {
		padding: 1rem 0rem;
		border-bottom: 3px solid black;
		font-size: 1.1rem;

		a {
			font-weight: 600;
			cursor: pointer;
		}
	}
`;

const CustomClose = styled(CloseIcon)`
	border-radius: 15px;
	//padding: 10px;
	&:hover {
		background: lightgray;
	}
`;
const CloseWrap = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	cursor: pointer;
`;

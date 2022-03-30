import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
function Section(props) {
	return (
		<Wrap bgImg={props.backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1>{props.model}</h1>
					<p>{props.description}</p>
				</ItemText>
			</Fade>
			<Group>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{props.leftBtn}</LeftButton>
						{props.rightBtn && <RightButton>{props.rightBtn}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src='/images/down-arrow.svg' />
			</Group>
		</Wrap>
	);
}

export default Section;

const Wrap = styled.div`
	width: 100wh;
	height: 100vh;
	background-image: ${(props) => `url("/images/${props.bgImg}")`};
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

const ItemText = styled.div`
	text-align: center;
	padding-top: 5.5rem;
	h1 {
		font-size: 2.5rem;
	}
`;
const ButtonGroup = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
const LeftButton = styled.button`
	background-color: rgba(23, 26, 32, 0.6);
	height: 40px;
	width: 256px;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 0.9rem;
`;
const RightButton = styled(LeftButton)`
	background-color: #dfe5f0;
	color: black;
	font-weight: 600;
`;

const DownArrow = styled.img`
	margin-top: 1.5rem;
	opacity: 0.65;
	height: 40px;
	animation: animateDown infinite 1.5s;
	overflow-x: hidden;
`;
const Group = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

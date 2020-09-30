import React from 'react';
import styled, { css } from 'styled-components';

const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	${(props) =>
		!props.hero &&
		css`
			border-top-left-radius: 20px;
			${(props) =>
				props.finisher
					? css`
							margin-top: 80px;
							color: white;
					  `
					: css`
							margin: 80px 0;
					  `}
			background: ${(props) => props.color};
			position: relative;
			padding: 40px 0;
			border-top-left-radius: 20px;
			border-bottom-right-radius: 20px;
			& > div {
				padding: 0 30px;
			}
			&:before {
				content: '';
				position: absolute;
				width: 100%;
				height: 50px;
				top: -50px;
				clip-path: polygon(100% 0, 20px 100%, 100% 100%);
				background: ${(props) => props.color};
			}
		`}
	${(props) =>
		props.finisher
			? css`
					border-bottom-right-radius: 20px;
			  `
			: css`
					&:after {
						content: '';
						position: absolute;
						width: 100%;
						height: 50px;
						bottom: -50px;
						clip-path: polygon(calc(100% - 20px) 0, 0 0, 0 100%);
						background: ${(props) => props.color};
					}
			  `}
`;

const Box = (props) => {
	return (
		<BoxWrapper color={props.color} hero={props.hero} finisher={props.finisher}>
			{props.children}
		</BoxWrapper>
	);
};

export default Box;

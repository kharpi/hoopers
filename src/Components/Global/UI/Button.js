import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { theme } from '../../../theme';

const ButtonStyle = styled.div`
	${(props) =>
		props.type === 'primary' &&
		css`
			background: ${theme.colors.reddy};
			border-top-left-radius: 20px;
			border-bottom-right-radius: 20px;
			a {
				color: ${theme.colors.primary};
			}
			&:hover {
				border-top-right-radius: 20px;
				border-bottom-left-radius: 20px;
				background: ${theme.colors.opacity_black};
			}
		`}
	${(props) =>
		props.type === 'secondary' &&
		css`
			background: ${theme.colors.primary};
			border-top-right-radius: 20px;
			border-bottom-left-radius: 20px;
			a {
				color: ${theme.colors.reddy};
			}
			&:hover {
				border-top-left-radius: 20px;
				border-bottom-right-radius: 20px;
				background: ${theme.colors.opacity_black};
				a:hover {
					color: ${theme.colors.primary};
				}
			}
		`}
	font-size: 18px;
	padding: 20px 30px;
	transition: all 0.35s ease-out;
	width: fit-content;
	margin: 0 auto;
	margin-top: 30px;
	margin-bottom: 30px;
	a {
		font-weight: bold;
	}
	&:hover {
		a:after {
			display: none;
		}
	}
`;

const Button = ({ cta, btn_txt, type, section }) => {
	return (
		<ButtonStyle type={type}>
			<Link to={{ pathname: { cta }, query: { tab: { section } } }}>
				{btn_txt}
			</Link>
		</ButtonStyle>
	);
};

export default Button;

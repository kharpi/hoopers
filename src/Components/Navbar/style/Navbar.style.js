import styled, { css } from 'styled-components';
import { theme } from '../../../theme.js';

export const NavbarWrapper = styled.nav`
	background-color: ${theme.colors.primary};
	padding: 15px 0;
	position: relative;
	margin-bottom: 40px;
	font-size: 22px;
	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.img-wrapper {
			img {
				max-height: 100px;
				&.mobile {
					display: none;
				}
			}
			@media (max-width: 992px) {
				img {
					&.mobile {
						display: block;
						max-height: 50px;
					}
					&.desktop {
						display: none;
					}
				}
			}
		}
		& > ul {
			@media (max-width: 992px) {
				display: none;
			}
			display: flex;
			justify-content: space-around;
			list-style: none;
			li {
				padding: 0 30px;
			}
		}
		&:after {
			content: '';
			position: absolute;
			bottom: -7px;
			left: 0;
			width: 100%;
			height: 7px;
			background: ${theme.colors.reddy};
		}
	}
`;

export const HamburgerWrapper = styled.div`
	@media (min-width: 993px) {
		display: none;
	}
	display: flex;
	flex-direction: column;
	cursor: pointer;
	.threads {
		z-index: 10;
		.thread {
			transition: all 0.3s ease-in-out;
			position: relative;
			overflow: hidden;
			${({ hamburger }) =>
				hamburger &&
				css`
					&:nth-of-type(2) {
						transform: translateX(100%);
						opacity: 0;
					}
					&:nth-of-type(1) {
						transform: rotate(45deg);
						top: 13px;
					}
					&:nth-of-type(3) {
						transform: rotate(-45deg);
						bottom: 13px;
					}
				`}
			width: 40px;
			height: 3px;
			background: ${theme.colors.reddy};
			&:nth-of-type(2) {
				background: ${theme.colors.opacity_black};
			}
			margin: 10px 0;
		}
	}
`;

export const HamburgerMenu = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${theme.colors.primary};
	width: 100vw;
	height: 100vh;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 9;
	transform: translateX(100%);
	transition: all 0.3s ease-in;
	@media (max-width: 992px) {
		${({ hamburger }) =>
			hamburger &&
			css`
				transform: translateX(0);
			`}
	}
	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		width: 100%;
		height: 100%;
		padding: 70px;
		li {
			text-align: center;
			width: fit-content;
			margin: auto;
		}
	}
`;

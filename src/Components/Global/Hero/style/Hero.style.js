import styled from 'styled-components';
import { theme } from '../../../../theme';

export const HeroWrapper = styled.div`
	.img-box {
		overflow: hidden;
		display: flex;
		border-top-left-radius: 20px;
		img {
			border-top-left-radius: 20px;
			max-width: 100%;
			transition: all 1s ease-in-out;
			z-index: 0;
			position: relative;
			&:hover  {
				transform: scale(1.3);
			}
			@media (max-width: 992px) {
				left: 50%;
				transform: translateX(-50%);
				max-width: 100%;
				width: 100%;
				max-height: calc(100vw / 2 - 20px);
				height: auto;
				&:hover {
					transform: translateX(-50%);
				}
			}
		}
	}
`;

export const HeroText = styled.div`
	z-index: 1;
	position: relative;
	background: ${theme.colors.primary};
	padding: 40px;
	border-bottom-right-radius: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	font-size: 30px;
	text-align: center;
	@media (max-width: 992px) {
		font-size: 25px;
	}
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

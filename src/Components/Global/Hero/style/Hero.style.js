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
`;

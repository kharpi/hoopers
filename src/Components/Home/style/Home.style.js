import styled from 'styled-components';
import { theme } from '../../../theme';

export const HomeWrapper = styled.section``;
export const ThreeColItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	.icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${theme.colors.primary};
		border-radius: 50%;
		height: 60px;
		width: 60px;
	}
	.title {
		margin: 30px 0;
		font-weight: bold;
		text-transform: uppercase;
	}
	.title,
	.desc {
		color: ${theme.colors.primary};
		text-align: center;
	}
	.image {
		img {
			max-width: 100%;
		}
	}
`;

export const OurHouse = styled.div`
	.title {
		display: flex;
		justify-content: center;
		font-size: 30px;
		font-weight: bold;
		margin-bottom: 30px;
	}
	.desc {
		text-align: justify;
	}
	img {
		max-width: 100%;
	}
	& > * {
		display: grid;
		place-items: center;
	}
`;

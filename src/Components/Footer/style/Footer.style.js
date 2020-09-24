import styled from 'styled-components';
import { theme } from '../../../theme';

export const FooterWrapper = styled.footer`
	background: ${theme.colors.primary};
	padding: 60px 0;
	position: relative;
	margin-top: 40px;
	img {
		max-height: 200px;
		max-width: 100%;
		margin: 30px 0;
	}
	& > div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	&:before {
		content: '';
		position: absolute;
		top: -7px;
		left: 0;
		width: 100%;
		height: 7px;
		background: ${theme.colors.reddy};
	}
`;

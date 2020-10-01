import styled from 'styled-components';
import * as theme from '../../../theme';

export const ContactTitle = styled.div`
	color: ${theme.theme.colors.opacity_black};
	width: 100%;
	display: flex;
	flex-direction: column;
	div {
		max-width: 800px;
	}
	p {
		color: ${theme.theme.colors.opacity_black};
		font-size: 20px;
		&:focus {
			color: red;
		}
	}
`;

export const ContactsContainer = styled.section`
	padding: 0 50px;
	@media screen and (max-width: 991px) {
		padding: 0 25px;
	}
	p {
		margin-bottom: 0.5rem;
		color: ${theme.theme.colors.opacity_black};
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 1rem;
		color: ${theme.theme.colors.opacity_black};
	}
`;

export const SendingButton = styled.button`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	background: ${theme.theme.colors.opacity_black};
	color: white;
	cursor: pointer;
	border: 0;
	outline: none;
	min-height: 60px;
	margin: 20px;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	transition: all 0.25s ease-out;
	&:hover,
	&:active {
		border-radius: 20px;
		background: ${theme.theme.colors.primary};
		color: ${theme.theme.colors.opacity_black};
	}

	&:active,
	&:focus {
		outline: none;
	}

	@media screen and (max-width: 991px) {
		margin: 0;
		display: block;
		flex: none;
		width: 60%;
	}

	@media screen and (max-width: 575px) {
		width: 100%;
	}
`;

export const ContactFieldContainer = styled.div`
	display: flex;
	flex: 1;
	border-top-right-radius: 20px;
	border-bottom-left-radius: 20px;
	min-height: ${(props) => props.minHeight};
	margin-bottom: 25px;
	padding: 5px 0 0 25px;
	background-color: white;
	-webkit-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
	-moz-box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.2);
	width: 100%;

	@media screen and (max-width: 991px) {
		display: block;
		flex: none;
	}

	span {
		color: ${theme.theme.colors.reddy};
	}
`;

export const ContactFieldAndButtonContainer = styled.div`
	display: flex;
	align-items: center;
	@media screen and (max-width: 991px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const ContactWrapper = styled.div``;

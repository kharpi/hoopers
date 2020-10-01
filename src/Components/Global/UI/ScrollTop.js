import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { theme } from '../../../theme';

const ScrollTopWrapper = styled.div`
	position: fixed;
	z-index: 5;
	bottom: 5%;
	right: 5%;
	background: ${theme.colors.reddy};
	width: 50px;
	height: 50px;
	border-radius: 50%;
	box-shadow: 0 0 10px 2px black;
	display: grid;
	place-items: center;
	cursor: pointer;
	color: ${theme.colors.primary};
	${(props) =>
		!props.scroll_active &&
		css`
			display: none;
		`};
`;

const ScrollTop = () => {
	const [scroll_active, set_scroll_active] = useState(false);

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		const runOnScroll = () =>
			window.scrollY > 600 ? set_scroll_active(true) : set_scroll_active(false);
		window.addEventListener('scroll', runOnScroll, { passive: true });
		return () => {
			window.removeEventListener('scroll', runOnScroll, { passive: true });
		};
	}, []);

	return (
		<ScrollTopWrapper
			scroll_active={scroll_active}
			onClick={() => scrollToTop()}
		>
			<KeyboardArrowUpIcon fontSize='large' />
		</ScrollTopWrapper>
	);
};

export default ScrollTop;

import React from 'react';
import { LayoutWrapper } from './style/Layout.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container } from '@material-ui/core';

const Layout = (props) => {
	return (
		<LayoutWrapper>
			<Navbar />
			<Container>{props.children}</Container>
			<Footer />
		</LayoutWrapper>
	);
};

export default Layout;

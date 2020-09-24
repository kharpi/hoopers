import React from 'react';
import { LayoutWrapper } from './style/Layout.style';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Container } from '@material-ui/core';
import ScrollTop from '../Global/UI/ScrollTop';

const Layout = (props) => {
	return (
		<LayoutWrapper>
			<Navbar />
			<Container>{props.children}</Container>
			<Footer />
			<ScrollTop />
		</LayoutWrapper>
	);
};

export default Layout;

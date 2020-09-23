import React from 'react';
import { FooterWrapper } from './style/Footer.style';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Container } from '@material-ui/core';
import SzepKartya from '../../Assets/szep_kartyak.png';

const Footer = () => {
	return (
		<FooterWrapper>
			<Container>
				<a
					href='https://www.facebook.com/Hoopers-Vendégház-Guesthouse-100379161529595'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FacebookIcon fontSize='large' />
				</a>
				<img src={SzepKartya} alt='' />
				<div className='copyright'>&copy; Hooper's Vendégház Guesthouse</div>
			</Container>
		</FooterWrapper>
	);
};

export default Footer;

import React from 'react';
import Hero from '../Global/Hero/Hero';
import { EnvWrapper } from './style/Environment.style';
import HeroImg from '../../Assets/Home/hero.jpg';
import Box from '../Global/UI/Box';
import { theme } from '../../theme';
import KMLine from './KMLine';
import { Grid } from '@material-ui/core';

const Environment = () => {
	return (
		<EnvWrapper>
			<Hero
				img={HeroImg}
				text='A vendégház Eger városának szívében található, a Bem Tábornok Tér 2 szám alatt. A nevezetességek legjava innen könnyű szerrel besétálható csupán pár perc alatt!'
				btn_txt='Megnézem térképen'
				cta={{
					target: true,
					url: 'https://goo.gl/maps/Ya3VbBJ6KsTCQA3ZA',
				}}
			/>
			<Box color={theme.colors.reddy} finisher>
				<Grid container>
					<Grid item xs={12} md={6}>
						<KMLine size={0.7} text='egri bazilika' />
						<KMLine size={0.8} text='Csillagászati Múzeum és Camera Obscura' />
						<KMLine size={0.8} text='egri líceum' />
						<KMLine size={0.8} text='Dobó Tér' />
						<KMLine size={1.1} text='egri vár' />
						<KMLine size={1.1} text='Szépasszony-völgy' />
					</Grid>
					<Grid item xs={12} md={6}>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.7537003635566!2d20.362695815640784!3d47.9024522792054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47408d3138a8f69f%3A0xbbdbba2f6fecb80d!2zSG9vcGVyJ3MgVmVuZMOpZ2jDoXo!5e0!3m2!1shu!2shu!4v1601473862439!5m2!1shu!2shu'
							width='100%'
							height='100%'
							frameborder='0'
							allowfullscreen=''
							aria-hidden='false'
							tabindex='0'
							title='Hoopers'
						></iframe>
					</Grid>
				</Grid>
			</Box>
		</EnvWrapper>
	);
};

export default Environment;

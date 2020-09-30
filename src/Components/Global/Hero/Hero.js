import React from 'react';
import { HeroWrapper, HeroText } from './style/Hero.style';
import Button from '../UI/Button';
import Box from '../UI/Box';
import { theme } from '../../../theme';

const Hero = ({ img, text, cta, btn_txt }) => {
	return (
		<Box color={theme.colors.primary} hero>
			<HeroWrapper>
				<div className='img-box'>
					<img src={img} alt='' />
				</div>
				<HeroText>
					{text}
					{cta ? <Button cta={cta} btn_txt={btn_txt} type='primary' /> : null}
				</HeroText>
			</HeroWrapper>
		</Box>
	);
};

export default Hero;

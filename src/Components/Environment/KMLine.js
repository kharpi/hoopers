import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styled, { css } from 'styled-components';

const KMLineWrapper = styled.div`
	display: flex;
	align-items: center;
	& .text {
		font-size: 16px;
		font-weight: bold;
		margin-left: 20px;
	}
`;
const LineWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
	& .line {
		background: white;
		height: 5px;
		width: ${({ size }) => css`calc(${size} * 100px)`};
		margin: 5px 0;
		@media (max-width: 400px) {
			width: ${({ size }) => css`calc(${size} * 50px)`};
		}
	}
	& .size {
		font-size: 14px;
		font-style: italic;
	}
`;

const KMLine = ({ size, text }) => {
	return (
		<KMLineWrapper>
			<HomeIcon fontSize='large' />
			<LineWrapper size={size}>
				<div className='size'>&nbsp;</div>
				<div className='line'></div>
				<div className='size'>{size}km</div>
			</LineWrapper>
			<HighlightOffIcon fontSize='large' />
			<div className='text'>{text}</div>
		</KMLineWrapper>
	);
};

export default KMLine;

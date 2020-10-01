import styled from 'styled-components';
import { theme } from '../../../theme';
export const RoomsWrapper = styled.section`
	.owl-carousel {
		.owl-prev,
		.owl-next {
			top: 50%;
			transform: translateY(-50%);
			position: absolute;
			color: white;
			font-size: 40px;
			width: 50px;
			height: 50px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			left: 20px;
			background: ${theme.colors.reddy};
			@media (max-width: 768px) {
				font-size: 20px;
				width: 30px;
				height: 30px;
			}
		}
		.owl-next {
			right: 20px;
			left: auto;
		}
	}
`;

export const RoomBox = styled.div`
	overflow: hidden;
	transition: all 0.35s ease-in-out;
	transform: translateX(0);
	height: auto;
	&.false {
		transform: translateX(100%);
		height: 0;
	}
	.roomtext {
		padding: 50px;
		background: ${theme.colors.primary};
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}
`;

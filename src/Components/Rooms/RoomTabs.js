import React from 'react';
import { theme } from '../../theme';
import styled from 'styled-components';

const RoomTabsWrapper = styled.div`
	width: 100%;
	background: ${theme.colors.primary};
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	margin-bottom: 30px;
	ul {
		display: flex;
		justify-content: space-evenly;
		list-style: none;
		@media (max-width: 768px) {
			flex-direction: column;
		}
		li {
			text-transform: uppercase;
			font-weight: bold;
			padding: 20px 30px;
			transition: all 0.25s ease-in;
			cursor: pointer;
			&.active,
			&:hover {
				@media (max-width: 768px) {
					&:first-child {
						border-top-left-radius: 20px;
						border-top-right-radius: 20px;
					}
				}
				background: ${theme.colors.reddy};
				color: white;
			}
		}
	}
`;

const RoomTabs = ({ handleChange, value }) => {
	return (
		<RoomTabsWrapper>
			<ul>
				<li
					onClick={() => handleChange(1)}
					className={`${value === 1 && 'active'}`}
				>
					Háromágyas
				</li>
				<li
					onClick={() => handleChange(2)}
					className={`${value === 2 && 'active'}`}
				>
					Négyágyas
				</li>
				<li
					onClick={() => handleChange(3)}
					className={`${value === 3 && 'active'}`}
				>
					Ötágyas
				</li>
			</ul>
		</RoomTabsWrapper>
	);
};

export default RoomTabs;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	NavbarWrapper,
	HamburgerWrapper,
	HamburgerMenu,
} from './style/Navbar.style';
import NavLogo from '../../Assets/hooper2.png';
import MobileLogo from '../../Assets/hooper.png';
import { Container } from '@material-ui/core';

const Navbar = () => {
	const [active, set_active] = useState(0);
	const [hamburger, set_hamburger] = useState(false);

	useEffect(() => {
		const path = window.location.pathname.split('/')[1];
		switch (path) {
			case '':
				set_active(1);
				break;
			case 'szobaink':
				set_active(2);
				break;
			case 'kornyezet':
				set_active(3);
				break;
			case 'kapcsolat':
				set_active(4);
				break;
			default:
				set_active(0);
		}
	}, []);
	return (
		<NavbarWrapper>
			<Container>
				<div className='img-wrapper'>
					<img src={NavLogo} alt='' className='desktop' />
					<img src={MobileLogo} alt='' className='mobile' />
				</div>
				<ul>
					<li>
						<Link
							to='/'
							className={active === 1 ? 'active' : ''}
							onClick={() => set_active(1)}
						>
							Kezdőlap
						</Link>
					</li>
					<li>
						<Link
							to='/szobaink'
							className={active === 2 ? 'active' : ''}
							onClick={() => set_active(2)}
						>
							Szobáink
						</Link>
					</li>
					<li>
						<Link
							to='/kornyezet'
							className={active === 3 ? 'active' : ''}
							onClick={() => set_active(3)}
						>
							Környezet
						</Link>
					</li>
					<li>
						<Link
							to='/kapcsolat'
							className={active === 4 ? 'active' : ''}
							onClick={() => set_active(4)}
						>
							Kapcsolat
						</Link>
					</li>
				</ul>
				<HamburgerWrapper hamburger={hamburger}>
					<div className='threads' onClick={() => set_hamburger(!hamburger)}>
						<div className='thread'></div>
						<div className='thread'></div>
						<div className='thread'></div>
					</div>
					<HamburgerMenu hamburger={hamburger}>
						<ul>
							<li>
								<Link
									to='/'
									className={active === 1 ? 'active' : ''}
									onClick={() => {
										set_active(1);
										set_hamburger(false);
									}}
								>
									Kezdőlap
								</Link>
							</li>
							<li>
								<Link
									to='/szobaink'
									className={active === 2 ? 'active' : ''}
									onClick={() => {
										set_active(2);
										set_hamburger(false);
									}}
								>
									Szobáink
								</Link>
							</li>
							<li>
								<Link
									to='/kornyezet'
									className={active === 3 ? 'active' : ''}
									onClick={() => {
										set_active(3);
										set_hamburger(false);
									}}
								>
									Környezet
								</Link>
							</li>
							<li>
								<Link
									to='/kapcsolat'
									className={active === 4 ? 'active' : ''}
									onClick={() => {
										set_active(4);
										set_hamburger(false);
									}}
								>
									Kapcsolat
								</Link>
							</li>
						</ul>
					</HamburgerMenu>
				</HamburgerWrapper>
			</Container>
		</NavbarWrapper>
	);
};

export default Navbar;

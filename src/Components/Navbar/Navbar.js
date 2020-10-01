import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	NavbarWrapper,
	HamburgerWrapper,
	HamburgerMenu,
} from './style/Navbar.style';
import NavLogo from '../../Assets/hooper2.png';
import MobileLogo from '../../Assets/hooper.png';
import { Container } from '@material-ui/core';
import NavbarContext from '../../Context/Navbar/navbarContext';

const Navbar = () => {
	const navbarContext = useContext(NavbarContext);
	const { active } = navbarContext;
	const [hamburger, set_hamburger] = useState(false);

	useEffect(() => {
		var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

		function preventDefault(e) {
			e.preventDefault();
		}

		function preventDefaultForScrollKeys(e) {
			if (keys[e.keyCode]) {
				preventDefault(e);
				return false;
			}
		}

		// modern Chrome requires { passive: false } when adding event
		var supportsPassive = false;
		try {
			window.addEventListener(
				'test',
				null,
				Object.defineProperty({}, 'passive', {
					get: function () {
						return (supportsPassive = true);
					},
				})
			);
		} catch (e) {}

		var wheelOpt = supportsPassive ? { passive: false } : false;
		var wheelEvent =
			'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

		// call this to Disable
		function disableScroll() {
			window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
			window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
			window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
			window.addEventListener('keydown', preventDefaultForScrollKeys, false);
		}

		// call this to Enable
		function enableScroll() {
			window.removeEventListener('DOMMouseScroll', preventDefault, false);
			window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
			window.removeEventListener('touchmove', preventDefault, wheelOpt);
			window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
		}
		if (hamburger) {
			disableScroll();
			window.scrollTo(0, 0);
		}
		return () => {
			enableScroll();
		};
	}, [hamburger]);
	return (
		<NavbarWrapper>
			<Container>
				<div className='img-wrapper'>
					<img src={NavLogo} alt='' className='desktop' />
					<img src={MobileLogo} alt='' className='mobile' />
				</div>
				<ul>
					<li>
						<Link to='/' className={active === 1 ? 'active' : ''}>
							Kezdőlap
						</Link>
					</li>
					<li>
						<Link to='/szobaink' className={active === 2 ? 'active' : ''}>
							Szobáink
						</Link>
					</li>
					<li>
						<Link to='/kornyezet' className={active === 3 ? 'active' : ''}>
							Környezet
						</Link>
					</li>
					<li>
						<Link to='/kapcsolat' className={active === 4 ? 'active' : ''}>
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

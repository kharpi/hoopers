import React from 'react';
import RoomTabs from './RoomTabs';
import { Link } from 'react-router-dom';
import { RoomsWrapper, RoomBox } from './style/Rooms.style';
import OwlCarousel from 'react-owl-carousel2';
import '../../../node_modules/react-owl-carousel2/lib/styles.css';
import HaromAgyas1 from '../../Assets/Rooms/Three/haromagyas1.jpg';
import HaromAgyas2 from '../../Assets/Rooms/Three/haromagyas2.jpg';
import HaromAgyas3 from '../../Assets/Rooms/Three/haromagyas3.jpg';
import HaromAgyas4 from '../../Assets/Rooms/Three/haromagyas4.jpg';
import MainImg1 from '../../Assets/Rooms/minpic1.jpg';
import MainImg2 from '../../Assets/Rooms/minpic2.jpg';
import MainImg3 from '../../Assets/Rooms/minpic3.jpg';
import MainImg4 from '../../Assets/Rooms/minpic4.jpg';
import OtAgyas from '../../Assets/Home/otagyas.jpg';
import NegyAgyas from '../../Assets/Home/negyagyas.jpg';
import NavbarContext from '../../Context/Navbar/navbarContext';

const Rooms = () => {
	const navbarContext = React.useContext(NavbarContext);
	const { set_active } = navbarContext;
	const [value, setValue] = React.useState(1);
	React.useEffect(() => {
		set_active(2);
		if (window.location.hash.split('#')[1]) {
			setValue(+window.location.hash.split('#')[1]);
		}
		//eslint-disable-next-line
	}, []);

	const handleChange = (newValue) => {
		setValue(newValue);
	};

	const options = {
		items: 1,
		nav: true,
		autoplay: true,
		URLhashListener: false,
		navText: ['«', '»'],
		loop: true,
		pagination: false,
	};
	return (
		<RoomsWrapper>
			<RoomTabs handleChange={handleChange} value={value} />
			<RoomBox className={`${value === 1 && 'active'}`}>
				<OwlCarousel options={options} className='owl-carousel'>
					<img src={HaromAgyas1} alt='' />
					<img src={HaromAgyas2} alt='' />
					<img src={HaromAgyas3} alt='' />
					<img src={HaromAgyas4} alt='' />
					<img src={MainImg1} alt='' />
					<img src={MainImg2} alt='' />
					<img src={MainImg3} alt='' />
					<img src={MainImg4} alt='' />
				</OwlCarousel>
				<div className='roomtext'>
					<p>
						Háromágyas szobáink ideálisak kisebb családok és párok számára.
						Vendégeink kényelméről hotel minőségű ágyak és berendezések
						gondosokodnak. Az összes szoba jól felszerelt, modern hangulatú
						fördőszobával rendelkezeik. A kényelmi berendezések számát
						gyarapítja az összes szobában megtalálható kisméretű hűtő, valamint
						a szobák nagy része klimatizált.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>A szobához tartozik:</strong>
					</p>
					<p>- 1 francia + 1 single ágy</p>
					<p>- Külön fürdőhelyiség zuhanzyóval </p>
					<p>- Klímaberendezés </p>
					<p>- Kisméretű hűtőszekrény </p>
					<p>- Síkképernyős televízió</p>
					<p>- Közös főző és étkezőhelyiség</p>
					<p>&nbsp;</p>
					<p>
						A szobával kapcsolatban kérem tájékozódjon emailben vagy telefonon!
						Elérhetőségeinket a <Link to='/kapcsolat'>kapcsolat</Link> fül alatt
						találja.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>Bejelentkezés:</strong> 15:00-18:00
					</p>
					<p>
						<strong>Kijelentkezés:</strong> 8:00-10:00
					</p>
				</div>
			</RoomBox>
			<RoomBox className={`${value === 2 && 'active'}`}>
				<OwlCarousel options={options} className='owl-carousel'>
					<img src={NegyAgyas} alt='' />
					<img src={MainImg1} alt='' />
					<img src={MainImg2} alt='' />
					<img src={MainImg3} alt='' />
					<img src={MainImg4} alt='' />
				</OwlCarousel>
				<div className='roomtext'>
					<p>
						Négyágyas szobáink ideálisak családok és kisebb baráti társaságok
						számára. Vendégeink kényelméről hotel minőségű ágyak és berendezések
						gondosokodnak. Az összes szoba jól felszerelt, modern hangulatú
						fördőszobával rendelkezeik. A kényelmi berendezések számát
						gyarapítja az összes szobában megtalálható kisméretű hűtő. A szoba
						klimatizált.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>A szobához tartozik:</strong>
					</p>
					<p>- 1 francia + 2 single ágy</p>
					<p>- Külön fürdőhelyiség zuhanzyóval </p>
					<p>- Klímaberendezés </p>
					<p>- Kisméretű hűtőszekrény </p>
					<p>- Síkképernyős televízió</p>
					<p>- Közös főző és étkezőhelyiség</p>
					<p>&nbsp;</p>
					<p>
						A szobával kapcsolatban kérem tájékozódjon emailben vagy telefonon!
						Elérhetőségeinket a <Link to='/kapcsolat'>kapcsolat</Link> fül alatt
						találja.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>Bejelentkezés:</strong> 15:00-18:00
					</p>
					<p>
						<strong>Kijelentkezés:</strong> 8:00-10:00
					</p>
				</div>
			</RoomBox>
			<RoomBox className={`${value === 3 && 'active'}`}>
				<OwlCarousel options={options} className='owl-carousel'>
					<img src={OtAgyas} alt='' />
					<img src={MainImg1} alt='' />
					<img src={MainImg2} alt='' />
					<img src={MainImg3} alt='' />
					<img src={MainImg4} alt='' />
				</OwlCarousel>
				<div className='roomtext'>
					<p>
						Háromágyas szobáink ideálisak kisebb családok és párok számára.
						Vendégeink kényelméről hotel minőségű ágyak és berendezések
						gondosokodnak. Az összes szoba jól felszerelt, modern hangulatú
						fördőszobával rendelkezeik. A kényelmi berendezések számát
						gyarapítja az összes szobában megtalálható kisméretű hűtő, valamint
						a szobák nagy része klimatizált.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>A szobához tartozik:</strong>
					</p>
					<p>- 1 francia + 3 single ágy</p>
					<p>- Külön fürdőhelyiség zuhanzyóval </p>
					<p>- Klímaberendezés </p>
					<p>- Kisméretű hűtőszekrény </p>
					<p>- Síkképernyős televízió</p>
					<p>- Közös főző és étkezőhelyiség</p>
					<p>&nbsp;</p>
					<p>
						A szobával kapcsolatban kérem tájékozódjon emailben vagy telefonon!
						Elérhetőségeinket a <Link to='/kapcsolat'>kapcsolat</Link> fül alatt
						találja.
					</p>
					<p>&nbsp;</p>
					<p>
						<strong>Bejelentkezés:</strong> 15:00-18:00
					</p>
					<p>
						<strong>Kijelentkezés:</strong> 8:00-10:00
					</p>
				</div>
			</RoomBox>
		</RoomsWrapper>
	);
};

export default Rooms;

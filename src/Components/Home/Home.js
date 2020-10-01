import React from 'react';
import { HomeWrapper, ThreeColItem, OurHouse } from './style/Home.style';
import HeroImg from '../../Assets/Home/hero.jpg';
import PlaceholderImg from '../../Assets/Home/placeholder.jpg';
import HaromagyasImg from '../../Assets/Home/haromagyas.jpg';
import NegyagyasImg from '../../Assets/Home/negyagyas.jpg';
import OtagyasImg from '../../Assets/Home/otagyas.jpg';
import Hero from '../Global/Hero/Hero';
import { Grid } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import Button from '../Global/UI/Button';
import KitchenIcon from '@material-ui/icons/Kitchen';
import WifiIcon from '@material-ui/icons/Wifi';
import Box from '../Global/UI/Box';
import { theme } from '../../theme';

const Home = () => {
	return (
		<HomeWrapper>
			<Hero
				img={HeroImg}
				text='Személyre szabott árakról és egyedi ajánlatokról érdeklődjön telefonon vagy emailben!'
				btn_txt='Elérhetőségek'
				cta='kapcsolat'
			/>
			<Box color={theme.colors.reddy}>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='icon'>
								<MapIcon fontSize='large' />
							</div>
							<div className='title'>Kiváló elhelyezkedés</div>
							<div className='desc'>
								Vendégházunk Eger városának szívében található, igy a legtöbb
								nevezetesség csupán néhány száz méterre található. További
								információért tájékozódjon az elhelyezkedés menüpont alatt!
							</div>
							<Button cta='kornyezet' btn_txt='Megnézem' type='secondary' />
						</ThreeColItem>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='icon'>
								<WifiIcon fontSize='large' />
							</div>
							<div className='title'>Ingyen parkolás és WIFI</div>
							<div className='desc'>
								Vendégházunk vendégei számára ingyenes parkolást, valamint
								megbízható WIFI internet kapcsolatot biztosítunk szállásunkon.
							</div>
						</ThreeColItem>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='icon'>
								<KitchenIcon fontSize='large' />
							</div>
							<div className='title'>Felszerelt étkező helyiség</div>
							<div className='desc'>
								Vendégeinket 2 darab felszerelt konyha, valamint azokhoz
								kapcsolódó étkező helyiség várja. Reggelizési lehetőség külön
								egyeztetést követően lehetséges.
							</div>
							<Button cta='szobaink' btn_txt='Megnézem' type='secondary' />
						</ThreeColItem>
					</Grid>
				</Grid>
			</Box>
			<Box color={theme.colors.primary}>
				<OurHouse>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<div className='crop-top-right'>
								<img src={PlaceholderImg} alt='' />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<div className='title'>Szállásunkról</div>
							<div className='desc'>
								A Hooper's vendégház 2020 január óta várja vendégeit igényesen
								kialakított szobáival, otthonos minőségi vendéglátással. A
								szobákhoz ingyenesen igénybe vehető parkolóhely biztosított, az
								épület előtt kialakított parkolóban. A vendégházban 6 szoba
								található, mindegyik szoba saját zuhanyzós fürdővel, wc-vel
								rendelkezik. A szobákban mind az egyszemélyes és francia ágyak,
								valamint az ágyneműk hotel minőségűek a kellemes pihenés
								érdekében. A 6 szobában összesen 20 fő elhelyezésére van
								lehetőség, így csoportok részére is kiváló megoldást jelent a
								vendégházunk választása. A szobákból 4 szoba 1 db francia ággyal
								és egy egyszemélyes ággyal rendelkezik, két szoba családi
								kialakítású 1 db francia ággyal és 2 db egyszemélyes
								fekvőhellyel melyből a nagyobbik pótágyazható. A szobák két
								szinten találhatóak. Mindkét szinten jól felszerelt konyha
								található, a felső szinten közös étkezővel ahol csoportos
								étkezésre is kiváló lehetőség van. Minden szoba saját hűtővel,
								síkképernyős TV-vel rendelkezik. A legtöbb szoba
								légkondicionált, ingyenes WIFI áll a vendégek rendelkezésére a
								teljes vendégház területén. Eger történelmi belvárosa 800
								méterre található, 5 perces kellemes sétával megközelíthet.
							</div>
						</Grid>
					</Grid>
				</OurHouse>
			</Box>
			<Box color={theme.colors.reddy} finisher>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='crop-top-right'>
								<img src={HaromagyasImg} alt='' />
							</div>
							<div className='title'>Háromágyas szoba ajánlatok</div>
							<div className='desc'>
								Tekintse meg párok, és kisebb családok számára ideális,
								háromágyas szoba kínálatunkat, és azok felszereltségét!
							</div>
							<Button
								cta='szobaink'
								btn_txt='Megnézem'
								type='secondary'
								section='1'
							/>
						</ThreeColItem>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='no-crop'>
								<img src={NegyagyasImg} alt='' />
							</div>
							<div className='title'>Négyágyas szoba ajánlatok</div>
							<div className='desc'>
								Tekintse meg, családok, és kisebb baráti társaságok részére
								ideális, négyágyas szoba kínálatunkat és azok felszereltségét!
							</div>
							<Button
								cta='szobaink'
								btn_txt='Megnézem'
								type='secondary'
								section='2'
							/>
						</ThreeColItem>
					</Grid>
					<Grid item xs={12} sm={4}>
						<ThreeColItem>
							<div className='crop-top-left'>
								<img src={OtagyasImg} alt='' />
							</div>
							<div className='title'>Ötágyas szoba ajánlatok</div>
							<div className='desc'>
								Tekintse meg, nagyobb családok, és baráti társaságok részére
								ideális, ötágyas szoba kínálatunkat és azok felszereltségét!
							</div>
							<Button
								cta='szobaink'
								btn_txt='Megnézem'
								type='secondary'
								section='3'
							/>
						</ThreeColItem>
					</Grid>
				</Grid>
			</Box>
		</HomeWrapper>
	);
};

export default Home;

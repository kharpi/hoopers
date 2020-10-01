import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
	ContactFieldContainer,
	ContactFieldAndButtonContainer,
	SendingButton,
	ContactWrapper,
} from './style/Contact.style';
import {
	TextField,
	createMuiTheme,
	ThemeProvider,
	CircularProgress,
	Grid,
} from '@material-ui/core';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import axios from 'axios';
import Box from '../Global/UI/Box';
import { theme } from '../../theme';
import Hero from '../Global/Hero/Hero';
import HeroImg from '../../Assets/Home/hero.jpg';
import NavbarContext from '../../Context/Navbar/navbarContext';

const Contact = () => {
	const navbarContext = React.useContext(NavbarContext);
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const { set_active } = navbarContext;
	React.useEffect(() => {
		set_active(4);
		//eslint-disable-next-line
	}, []);

	const MuiTheme = createMuiTheme({
		typography: {
			button: {
				textTransform: 'none',
			},
		},
		palette: {
			primary: {
				main: theme.colors.opacity_black,
			},
			secondary: {
				main: theme.colors.reddy,
			},
		},
	});

	const contactSchema = yup.object().shape({
		email: yup
			.string()
			.email('Érvényes e-mailt adj meg!')
			.required('Kötelező mező!'),
		name: yup.string().required('Kötelező mező!'),
		message: yup.string().required('Kötelező mező!'),
	});

	return (
		<ContactWrapper>
			<Hero
				img={HeroImg}
				text={`<p>Cím: Eger, Bem Tábornok Tér 2, 3300 Magyarország</p>
        <p>&nbsp;</p>
        <p>Telefon: +36 30 9253 760</p>
        <p>&nbsp;</p>
        <p>Email: hoopersguesthouse@gmail.com</p>
        <p>&nbsp;</p>
        <p>Bejelentkezés: 15:00-18:00</p>
        <p>&nbsp;</p>
        <p>Kijelentkezés: 8:00-10:00</p>
        <p>&nbsp;</p>
        <p>Kérdés esetén küldjön üzenetet alábbi űrlappal:</p>`}
			/>
			<Box color={theme.colors.reddy} finisher>
				<Grid container>
					<Grid item xs={12}>
						<Formik
							initialValues={{
								message: '',
								name: '',
								email: '',
							}}
							validationSchema={contactSchema}
							onSubmit={async (values, actions) => {
								const ContactFormData = new FormData();
								Object.keys(values).forEach((key) => {
									ContactFormData.append(key, values[key]);
								});

								try {
									setSending(true);
									const res = await axios({
										method: 'POST',
										url: 'http://api.hoopers.tamaskarpati.hu/contact',
										headers: { 'Content-Type': 'multipart/form-data' },
										data: ContactFormData,
									});
									if (res.status === 200) {
										setSending(false);
										setSent(true);
										actions.setSubmitting(false);
									}
								} catch (error) {
									console.log(error);
								}
							}}
						>
							{(props) => (
								<Form onSubmit={props.handleSubmit}>
									<ThemeProvider theme={MuiTheme}>
										<ContactFieldContainer minHeight={'140px'}>
											<TextField
												variant='standard'
												id='contact-form-message'
												type='text'
												multiline
												rows={4}
												style={{ width: '100%' }}
												InputProps={{ disableUnderline: true }}
												label={
													<p>
														Miben segíthetünk? <span>*</span>
													</p>
												}
												value={props.values.message}
												onChange={props.handleChange('message')}
												onBlur={() => props.setFieldTouched('message')}
												error={props.touched.message && !!props.errors.message}
												helperText={
													props.touched.message ? props.errors.message : ''
												}
											/>
										</ContactFieldContainer>
										<ContactFieldContainer minHeight={'85px'}>
											<TextField
												variant='standard'
												id='contact-form-name'
												type='text'
												style={{ width: '100%' }}
												InputProps={{ disableUnderline: true }}
												label={
													<p>
														Hogyan szólíthatunk? <span>*</span>
													</p>
												}
												value={props.values.name}
												onChange={props.handleChange('name')}
												onBlur={() => props.setFieldTouched('name')}
												error={props.touched.name && !!props.errors.name}
												helperText={props.touched.name ? props.errors.name : ''}
											/>
										</ContactFieldContainer>
										<ContactFieldAndButtonContainer>
											<ContactFieldContainer minHeight={'85px'}>
												<TextField
													variant='standard'
													id='contact-form-email'
													type='text'
													style={{ width: '100%' }}
													InputProps={{ disableUnderline: true }}
													label={
														<p>
															Email címed <span>*</span>
														</p>
													}
													value={props.values.email}
													onChange={props.handleChange('email')}
													onBlur={() => props.setFieldTouched('email')}
													error={props.touched.email && !!props.errors.email}
													helperText={
														props.touched.email ? props.errors.email : ''
													}
												/>
											</ContactFieldContainer>
											<SendingButton type='submit'>
												{!sending ? (
													<>
														üzenet küldése &nbsp;
														<SendRoundedIcon />
													</>
												) : sent ? (
													'Üzeneted megkaptuk!'
												) : (
													<CircularProgress />
												)}
											</SendingButton>
										</ContactFieldAndButtonContainer>
									</ThemeProvider>
								</Form>
							)}
						</Formik>
					</Grid>
				</Grid>
			</Box>
		</ContactWrapper>
	);
};
export default Contact;

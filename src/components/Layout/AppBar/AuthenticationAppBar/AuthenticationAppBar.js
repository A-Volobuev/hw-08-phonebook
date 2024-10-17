import { AuthenticationBox, LogoBox, NavBox, Logo, NavItem, AuthorizationText } from "./AuthenticationAppBar.styled";

import React from 'react';
import { useLocation } from 'react-router-dom';

export const AuthenticationAppBar= () => {
	
	//* Проверка страницы для отображения текста под лого 
	const location = useLocation();
	// console.log( location.pathname)
	const isAuthorization = location.pathname ==='/authorization';

	return (
		<AuthenticationBox>
			<LogoBox>
				<Logo/>
				{isAuthorization && <AuthorizationText>System for doing homework using React and Redax</AuthorizationText>}
			</LogoBox>

			<NavBox>
				<NavItem to="authorization">Authorization</NavItem>
				<NavItem to="registration">Registration</NavItem>
			</NavBox>
		</AuthenticationBox>
	)
}
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; 
import { NavLink } from "react-router-dom";
import {LogoIcon, authBg, authActiveBtnBg} from '../../../../image';

const pan = keyframes`
	100% { background-position: 15% 50%; }
`;
export const AuthenticationBox = styled.div`
	background-image: url(${authBg}); 
	position: relative;
	border-radius: 0px 30px 30px 0px;
	padding: 80px 0px 0px 54px;

	background-repeat: no-repeat;
  background-size: cover;
  animation: ${pan} 6s infinite alternate linear;
`;
export const LogoBox = styled.div`
display: flex;
flex-direction: column;
gap: 8px;
`;
export const AuthorizationText = styled.span`
	color: ${(props) => props.theme.color.tableRow};
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: ${(props) => props.theme.lineHeights.l};
	width: 250px;
	font-family: sans-serif;
	letter-spacing: 0.08em;
`;
export const NavBox = styled.nav`
	display: flex;
	flex-direction: column;

	position: absolute;
	width: 172px;
	top: 340px;
	right: 0px;
`;
export const Logo = styled(LogoIcon)`
	width: 170px;
	height: 51px;
`;
export const  NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	font-size: 17px;
	line-height: ${(props) => props.theme.lineHeights.m};
	text-decoration: none;

	color: ${(props) => props.theme.color.whiteText};
	
	&.active{
		color: ${(props) => props.theme.color.main};
		background-image: url(${authActiveBtnBg});
	}
	&.active svg{
		fill:  ${(props) => props.theme.color.main}; 
	}
`;
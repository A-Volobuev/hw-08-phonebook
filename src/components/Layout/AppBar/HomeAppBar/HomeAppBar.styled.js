import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; 
import { NavLink } from "react-router-dom";
import {accessActiveBtnBg, accessBg} from '../../../../image';
 
const pan = keyframes`
	100% { background-position: 15% 50%; }
`;
export const LogInBox = styled.div`
	background-image: url(${accessBg}); 
	
	background-repeat: no-repeat;
  background-size: cover;
  animation: ${pan} 6s infinite alternate linear;

	border-radius: 0px 30px 30px 0px;
	padding-left: 20px;
`;	
export const LogoBox = styled.div`
	margin: 28px 0px 37px 20px;
`;

export const ContentBox = styled.nav`
	display: flex;
	flex-direction: column;
`;

export const  NavItem = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 16px 0px 16px 20px;

	/* font-weight: 600; */
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.m};
	text-decoration: none;

	color: ${(props) => props.theme.color.whiteText};
	

	&.active{
		color: ${(props) => props.theme.color.main};

		background-image: url(${accessActiveBtnBg});
	}

	&.active svg{
		fill:  ${(props) => props.theme.color.main}; 
	}
`;

export const LogOutBox = styled.div`	
	position:absolute;
	bottom: 16px;

	padding: 16px 0px 16px 20px;
`;

export const Logout = styled(NavLink)`
	display: flex;
	align-items: center;
	gap: 7px;
	padding: 16px 0px 16px 20px;
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.m};
	text-decoration: none;
	color: ${(props) => props.theme.color.whiteText};
`;
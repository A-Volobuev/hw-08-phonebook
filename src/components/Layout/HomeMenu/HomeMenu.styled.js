import styled from '@emotion/styled';

export const MenuBox = styled.div`
	display: flex;
	justify-content: space-between;
	background-color:${(props) => props.theme.color.whiteBg};
	border-radius: 8px;
	box-shadow: 0px 1px 4px 0px #7E93FF33;
	padding:16px 20px;
`;
export const Box = styled.div`
	display: flex;
`;
export const LoginMenuInfo = styled.p`
	display: flex;
  align-items: center;
	
	margin: 0px;
	font-weight: ${(props) => props.theme.fontWeights.normal};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.m};
	text-decoration: none;
	color:  ${(props) => props.theme.color.loginProfileText};
`;

export const DateBox = styled.div`
	display: flex; 
	align-items: center;
	padding: 0px 16px 0px 0px;
	border-right: 2px solid #8C91A3;
	gap: 9px;
`;

export const ProfileBox = styled.div`
	display: flex; 
	align-items: center;
	padding: 0px 0px 0px 16px;
	gap: 9px;	
`;

export const ProfileImg = styled.img`
	width: 32px;
	height: 32px;
	border-radius: ${(props) => props.theme.radii.s};
`;

export const ProfileMail = styled.p`
	margin: 0px;
	font-weight: ${(props) => props.theme.fontWeights.normal};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: 16.44px; 
	text-decoration: none;

	color: ${(props) => props.theme.color.black};
;
`;

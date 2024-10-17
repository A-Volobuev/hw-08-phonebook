import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
	background-color: ${(props) => props.theme.color.whiteBg};
	border-radius: ${(props) => props.theme.radii.n};	
	padding: 20px 20px 40px 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-height: 246px;
`;
export const FormTitle = styled.h2`
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.l};
	line-height: ${(props) => props.theme.lineHeights.l};
	color:  ${(props) => props.theme.color.main};
	margin: 0px;
`;
export const FormButton = styled.button`
	padding: 11px;
	font-weight: ${(props) => props.theme.fontWeights.l};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.button};
	color:  ${(props) => props.theme.color.whiteText};
	background-color: ${(props) => props.theme.color.active};
	border-radius: ${(props) => props.theme.radii.button};	
	border: none;
	box-shadow: 2px 2px 4px 0px #7E93FF33;
	margin-top: 12px;
&:hover{
	cursor: pointer;
}
`;
import styled from '@emotion/styled';
import {  Field } from 'formik';

export const InputBox= styled.span`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
export const InputLabel = styled.label`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: ${(props) => props.theme.lineHeights.s};
	color:  ${(props) => props.theme.color.secondaryText};
`;
export const InputField = styled(Field)`
	padding: 11px 16px;
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.button};
	color:${(props) => props.theme.color.main};
	background-color: #F4F4F4;
	border: 1px solid #C5C5C5;
	border-radius: ${(props) => props.theme.radii.input};	
	/* cursor: pointer; */

	&:focus{
		outline: none;
		border: 1px solid #4CC6F5;
		cursor: pointer;
	}
`;


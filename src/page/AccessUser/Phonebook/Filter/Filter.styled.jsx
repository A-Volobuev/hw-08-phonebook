import styled from '@emotion/styled';

export const FilterLabel = styled.label`
	display: flex;
	flex-direction: column;
	gap: 8px;
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: ${(props) => props.theme.lineHeights.s};
	color:  ${(props) => props.theme.color.secondaryText};
`;

export const FilterInput = styled.input`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.button};
	color:  ${(props) => props.theme.color.mail};
	background-color: #F4F4F4;
	border: 1px solid #C5C5C5;
	padding: 11px 16px;
	border-radius: ${(props) => props.theme.radii.input};	

	&:focus{
		outline: none;
		border: 1px solid #4CC6F5;
		cursor: pointer;
	}
`;
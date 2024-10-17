import styled from '@emotion/styled';
import { Form, Field} from 'formik';

export const Box = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const FormBox = styled(Form)`
	background-color: ${(props) => props.theme.color.whiteBg};
	border-radius: ${(props) => props.theme.radii.n};	
	padding: 20px;
	display: flex;
	flex-direction: column;
	width: 440px;
`;
export const FormTitle = styled.h4`
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.auth};
	line-height: ${(props) => props.theme.lineHeights.auth};
	color:  ${(props) => props.theme.color.main};
	margin: 20px 0px 0px 0px;
	text-align: center;
`;
export const InputBox = styled.div`
	margin-top:18px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;        
	gap: 20px;

	&>:nth-child(3) {
    grid-area: 2 / 1 / 3 / 3;              
  }
`;
export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;
export const InputLabel = styled.label`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.authInput};
	color: ${(props) => props.theme.color.authInput};
`;
export const InputField = styled(Field)`
	padding: 11px 16px;
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.authInput};
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
	margin-top: 40px;
&:hover{
	cursor: pointer;
}
`;

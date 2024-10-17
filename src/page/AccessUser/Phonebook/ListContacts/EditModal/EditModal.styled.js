import styled from '@emotion/styled';
import { MdOutlineEdit } from "react-icons/md";
import Box from '@mui/material/Box';
import { Form } from 'formik';
import {modalClose} from '../../../../../image';

export const ModalBox = styled(Box)`
	position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 328px;
	height: 306px;
  background-color: ${(props) => props.theme.color.whiteBg};;
  box-shadow: 0px 1px 4px 0px #7E93FF33;
  /* padding: 20px; */
	border-radius: ${(props) => props.theme.radii.n};
	border: 0px;
	outline: none;
`;
export const ChangeIcon = styled(MdOutlineEdit)`
	height: 24px;
	width: 32px;

	&:hover{
		fill: ${(props) => props.theme.color.hoverButton};
	}

`;
export const FormBox = styled(Form)`
	background-color: ${(props) => props.theme.color.whiteBg};
	border-radius: ${(props) => props.theme.radii.n};	
	padding: 20px 20px 40px 20px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	max-height: 246px;
	border: 0px;
`;
export const EditTitlBox = styled.span`
	display:flex;
	justify-content: space-between;

button{
	background-color: ${(props) => props.theme.color.whiteBg};
	border: 0px;
	padding: 0px;
}
`;
export const CloseIcon = styled(modalClose)`
  height: 14px;
  width: 14px;

  path {
    fill: #0E1721; 
  }

  &:hover path {
    fill: ${(props) => props.theme.color.hoverButton}; 
  }
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
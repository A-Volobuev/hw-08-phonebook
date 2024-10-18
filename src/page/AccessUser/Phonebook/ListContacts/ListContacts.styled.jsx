import styled from '@emotion/styled';
import { MdDelete } from "react-icons/md";
import {cursor} from '../../../../image'
export const ListContactsBox = styled.div`
	
`;
export const List = styled.ul`
	margin: 0px;
	padding: 0px;
	display: flex;
	flex-direction: column;
`;
export const ListItem = styled.li`
	padding: 5px 0px 5px 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	&:not(:last-child){
		border-bottom: 1px solid #C5C5C5; 
	}
`;
export const ListText = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: 14.06px;
	color: ${(props) => props.theme.color.main};

	span{
		font-weight: ${(props) => props.theme.fontWeights.n};
	}
`;
export const ButtonBox = styled.span`
	display: flex;

	button{
		cursor: url(${cursor}), auto;
		background-color: ${(props) => props.theme.color.whiteBg};
	border: none;
	padding: 0px;
	height: 24px;
	}
`;
export const DeleteIcon = styled(MdDelete)`
	height: 24px;
	width: 32px;

	&:hover, :focus{
		fill: ${(props) => props.theme.color.hoverButton};
	}
`;
import styled from '@emotion/styled';

export const PhonebookBox = styled.div`
	margin-top:32px;
	display: grid ;
	grid-template-columns: 1fr 2fr ;
	gap: 32px;
`;
export const ContactsBox = styled.div`
	padding: 20px;
	background-color: ${(props) => props.theme.color.whiteBg};
	display: flex;
	flex-direction: column;
`;
export const ContactsTitle = styled.h4`
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.l};
	line-height: ${(props) => props.theme.lineHeights.l};
	color:  ${(props) => props.theme.color.main};
	margin: 0px 0px 10px 0px;
`;
export const ContactTitleBox = styled.span`
	display: flex;
	justify-content: space-between; 
	width: calc(100% - 23px);
`; 
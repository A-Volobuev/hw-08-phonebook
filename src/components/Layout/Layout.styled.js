import styled from '@emotion/styled';

export const LayoutBox = styled.div`
	background-color: #E8F0FF;
	display: grid ;
	grid-template-columns: ${(props) => (props.isLoggedIn? '236px 1fr' : '442px 1fr')};
	height: 100vh;
	min-height: 700px;
`;

export const AccessBox = styled.div`
	padding: ${(props) => (props.isLoggedIn? '16px 48px' : 'auto')};
`;
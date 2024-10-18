import styled from '@emotion/styled';

export const ProfileDetailsContainer = styled.div`
	height: 96px ;
	width: 100% ;
	display: grid ;
	grid-template-columns: 2fr 1fr ;
	gap: 32px;
`;

export const ProfileBox = styled.div`
	box-shadow: 0px 1px 4px 0px #7E93FF33;
	background-color: ${(props) => props.theme.color.whiteBg};
	border-radius: ${(props) => props.theme.radii.n};
	display: flex;
`;
export const ProfileImg = styled.img`
	width: 70px;
	height: 70px;
	border-radius: ${(props) => props.theme.radii.r};
	margin: 13px 14px 13px 16px;
`;


export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-right: 39px;
`; 
export const ProfileUserName = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.l};
	line-height: ${(props) => props.theme.lineHeights.l};
	color:  ${(props) => props.theme.color.title};
`;
export const ProfileUserEmail = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.xs};
	line-height: ${(props) => props.theme.lineHeights.xs};
	color:  ${(props) => props.theme.color.secondaryText};
`;

export const ProfileStats = styled.div`
	display: grid;
	/* display: flex; */
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr;
`;
export const FollowersBox = styled.div`
	background: #E8FBFF;
	border-bottom: 5px solid #85C3FF;
	padding: 18px 0px 18px 16px;
`;
export const ContactsBox = styled.div`
	background: #FFF5EC;
	border-bottom: 5px solid #F2994A;
	padding: 18px 0px 18px 16px;
`;
export const LikesBox = styled.div`
	background: #FFE8E8;
	border-bottom: 5px solid #EC3A3A;
	border-radius: 0px 0px 8px 0px;
	padding: 18px 0px 18px 16px;
`;
export const ProfileStatsTitle = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.n};
	margin-right: 39px;
	color:  ${(props) => props.theme.color.secondaryText};
`;
export const ProfileStatsTitleBox = styled.div`
	display: flex;
	align-items: center;
	gap: 7px;
`;
export const Stats = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.l};
	font-size: ${(props) => props.theme.fontSizes.xl};
	margin-right: 39px;
	color:  ${(props) => props.theme.color.numbersText};
`;

export const UploadStatsContainer = styled.div`
	background-color: ${(props) => props.theme.color.whiteBg};
	border-radius: ${(props) => props.theme.radii.n};
	display:flex ;
	flex-direction:column ;
	box-shadow:0px 1px 4px 0px #7E93FF33 ;
`;
export const UploadStatsTitle = styled.span`
	padding: 16px 0px 15px 16px;
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.l};
	line-height: ${(props) => props.theme.lineHeights.l};
	color:  ${(props) => props.theme.color.main};
`;
export const CategoryStats = styled.span`
	font-weight: ${(props) => props.theme.fontWeights.n};
	font-size: ${(props) => props.theme.fontSizes.s};
	line-height: ${(props) => props.theme.lineHeights.s};
	color:  ${(props) => props.theme.color.whiteText};
`;
export const CategoryPercent = styled.span`
	margin-top: 6px;
	font-weight: ${(props) => props.theme.fontWeights.m};
	font-size: ${(props) => props.theme.fontSizes.n};
	line-height: ${(props) => props.theme.lineHeights.n};
	color:  ${(props) => props.theme.color.whiteText};
`;

export const BlueBox = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: #85C3FF;
`;
export const OrangeBox = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: #F2994A;
`;
export const RedBox = styled.div`
width: 8px;
height: 8px;
border-radius: 50%;
background-color: #EC3A3A;
`;

export const CategoryStatsBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;
export const Box = styled.div`
  background-color:  ${(props) => (props.color)};
	padding: 2.5px; 
	display:flex; 
	flex-direction:column; 
	align-items :center; 
`;

// export const CategoryStatsBox = styled.div`

// `;
// export const CategoryStatsBox = styled.div`

// `;
// export const CategoryStatsBox = styled.div`

// `;
// export const CategoryStatsBox = styled.div`

// `;
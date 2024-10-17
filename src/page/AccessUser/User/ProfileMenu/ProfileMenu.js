import { Box } from "../../../../utils/Box";
import { ProfileDetailsContainer, ProfileBox , ProfileImg, ProfileInfo, ProfileUserName, ProfileUserEmail, ProfileStats, FollowersBox, ProfileStatsTitleBox, ProfileStatsTitle, Stats, ContactsBox, LikesBox, UploadStatsContainer, UploadStatsTitle, CategoryStats, CategoryPercent } from "./ProfileMenu.styled";
import {profileImg} from '../../../../image';
import {useSelector} from 'react-redux';
import {getUsername, getUserEmail} from '../../../../redux/auth';

const ProfileMenu = () => {
	const username = useSelector(getUsername);
	const userEmail = useSelector(getUserEmail);
	return (
		<ProfileDetailsContainer>
			<ProfileBox >
				<ProfileImg src={profileImg} alt="Profile img"/>

				<ProfileInfo> 
					<ProfileUserName> Username{username}</ProfileUserName>
					<ProfileUserEmail>{userEmail}</ProfileUserEmail>
				</ProfileInfo>

				<ProfileStats>
					<FollowersBox>
						<ProfileStatsTitleBox>
							<Box 
							width="8px"
							height="8px"
							borderRadius="50%"
							bg="#85C3FF"></Box>
							<ProfileStatsTitle>Followers</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>3,685</Stats>	
					</FollowersBox>

					<ContactsBox>
					<ProfileStatsTitleBox>
							<Box 
							width="8px"
							height="8px"
							borderRadius="50%"
							bg="#F2994A"></Box>
							<ProfileStatsTitle>Contacts</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>10</Stats>	
					</ContactsBox>

					<LikesBox>
					<ProfileStatsTitleBox>
							<Box 
							width="8px"
							height="8px"
							borderRadius="50%"
							bg="#EC3A3A"></Box>
							<ProfileStatsTitle>Likes</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>+3,685</Stats>	
					</LikesBox>
				</ProfileStats>

			</ProfileBox>

			<UploadStatsContainer>
				<UploadStatsTitle>Upload stats</UploadStatsTitle>

				<Box display="grid"
				gridTemplateColumns="1fr 1fr 1fr 1fr 1fr">
					<Box bg="#4CC6F5" p="2.5px" display="flex" flexDirection="column" alignItems ="center" borderRadius="0px 0px 0px 8px">
						<CategoryStats>.docx</CategoryStats>
						<CategoryPercent>32%</CategoryPercent>
					</Box>
					<Box bg="#D88EA9" p="2.5px" display="flex" flexDirection="column" alignItems ="center">
						<CategoryStats>.mp4</CategoryStats>
						<CategoryPercent>42%</CategoryPercent>
					</Box>
					<Box bg="#A03DF6" p="2.5px" display="flex" flexDirection="column" alignItems ="center">
						<CategoryStats>.pdf</CategoryStats>
						<CategoryPercent>4%</CategoryPercent>
					</Box>
					<Box bg="#E54C65" p="2.5px" display="flex" flexDirection="column" alignItems ="center">
						<CategoryStats>.mp3</CategoryStats>
						<CategoryPercent>17%</CategoryPercent>
					</Box>
					<Box bg="#20B8C2" p="2.5px" display="flex" flexDirection="column" alignItems ="center" borderRadius="0px 0px 8px 0px">
						<CategoryStats>.psd</CategoryStats>
						<CategoryPercent>87%</CategoryPercent>
					</Box>
				</Box>
			</UploadStatsContainer>
		</ProfileDetailsContainer>
	)
}

export default ProfileMenu;
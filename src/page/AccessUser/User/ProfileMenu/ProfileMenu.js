import { ProfileDetailsContainer, ProfileBox , ProfileImg, ProfileInfo, ProfileUserName, ProfileUserEmail, ProfileStats, FollowersBox, ProfileStatsTitleBox, ProfileStatsTitle, Stats, ContactsBox, LikesBox, UploadStatsContainer, UploadStatsTitle, CategoryStats, CategoryPercent, BlueBox, OrangeBox, RedBox, CategoryStatsBox, Box} from "./ProfileMenu.styled";
import {profileImg} from '../../../../image';
import {useSelector} from 'react-redux';
import {getUsername, getUserEmail} from '../../../../redux/auth';

const array  = [
	{name: ".docx", percent: "32%", color: "#4CC6F5"},
	{name: ".mp4", percent: "42%", color: "#D88EA9"},
	{name: ".pdf", percent: "4%", color: "#A03DF6"},
	{name: ".mp3", percent: "17%", color: "#E54C65"},
	{name: ".psd", percent: "87%", color: "#20B8C2"},
]

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
							<BlueBox/>
							<ProfileStatsTitle>Followers</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>3,685</Stats>	
					</FollowersBox>

					<ContactsBox>
					<ProfileStatsTitleBox>
							<OrangeBox/>
							<ProfileStatsTitle>Contacts</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>10</Stats>	
					</ContactsBox>

					<LikesBox>
					<ProfileStatsTitleBox>
							<RedBox/>
							<ProfileStatsTitle>Likes</ProfileStatsTitle>
						</ProfileStatsTitleBox>
					<Stats>+3,685</Stats>	
					</LikesBox>
				</ProfileStats>

			</ProfileBox>

			<UploadStatsContainer>
				<UploadStatsTitle>Upload stats</UploadStatsTitle>

				<CategoryStatsBox>
					{array.map(({name, percent, color}) => (
						<Box color={color} key={name}>
							<CategoryStats>{name}</CategoryStats>
							<CategoryPercent>{percent}</CategoryPercent>
						</Box>
					))}
					</CategoryStatsBox>
			</UploadStatsContainer>
		</ProfileDetailsContainer>
	)
}

export default ProfileMenu;
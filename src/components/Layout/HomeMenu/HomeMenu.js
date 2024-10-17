import {useSelector} from 'react-redux';
import { MenuBox, ProfileImg, ProfileMail, LoginMenuInfo, DateBox, ProfileBox, Box } from "./HomeMenu.styled";
import {DateIcon, profileImg} from '../../../image';
import {getUsername, getUserEmail} from '../../../redux/auth';
export const HomeMenu = ( ) => {
	//? Библиотека moment для времени
	var moment = require('moment'); 
	const date = moment().format('LL');

	const username = useSelector(getUsername);
	const userEmail = useSelector(getUserEmail); 

	return(
		<MenuBox>
			<LoginMenuInfo>Hello, {username} 👋</LoginMenuInfo>

			<Box>
				<DateBox> 
					<DateIcon width="18px" height="18px"/>
					<LoginMenuInfo>{date}</LoginMenuInfo>
				</DateBox>

				<ProfileBox>
					<ProfileImg src={profileImg} alt="ProfileImg"/>
					<ProfileMail> {userEmail} </ProfileMail>
				</ProfileBox>
			</Box>
		</MenuBox>
	)
}
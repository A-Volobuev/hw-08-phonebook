import { LogoIcon, UserInfoIcon, PhonebookIcon, FeedbackIcon, LogOut } from '../../../../image';
import { ContentBox, LogInBox, LogoBox, Logout, LogOutBox, NavItem} from './HomeAppBar.styled';
import {authOperations} from '../../../../redux/auth';
import { useDispatch } from 'react-redux';

export const HomeAppBar = () => {
	const dispatch = useDispatch();
	return(
		<LogInBox>
			<LogoBox>
				<LogoIcon width="130"/>
			</LogoBox>

			<ContentBox>
				<NavItem to="user"> <UserInfoIcon/>User info </NavItem>
				<NavItem to="phonebook"> <PhonebookIcon fill="#1F3349"/> Phonebook</NavItem>
				<NavItem to="feedback"> <FeedbackIcon/> Feedback</NavItem>
			</ContentBox>

			<LogOutBox>
				<Logout  onClick={() => dispatch(authOperations.logOut())} to='authorization'> 
					<LogOut/> Log out
				</Logout>
			</LogOutBox>
		</LogInBox>
	)
}
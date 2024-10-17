
import ProfileMenu from "./ProfileMenu/ProfileMenu";
import Table from "./Table/Table";
import { UserBox } from "./User.styled";

export const User = () => {
	return (
		<UserBox>
			<ProfileMenu/>
			
			<Table/>
		</UserBox>
	)
}

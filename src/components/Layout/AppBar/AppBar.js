import { HomeAppBar } from "./HomeAppBar/HomeAppBar";
import { AuthenticationAppBar } from "./AuthenticationAppBar/AuthenticationAppBar";

const AppBar = ({isLoggedIn}) => {
	return(
    <>
		{!isLoggedIn && (
			<AuthenticationAppBar/>
		)}

		{isLoggedIn && (
			<HomeAppBar/>
		)}
		</>

	)
}

export default AppBar;
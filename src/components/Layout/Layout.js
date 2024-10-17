import { Outlet } from 'react-router-dom';
import { Suspense } from "react";
import {useSelector} from 'react-redux';

import AppBar from "./AppBar/AppBar";
import { HomeMenu } from "./HomeMenu/HomeMenu";
import { AccessBox, LayoutBox } from "./Layout.styled";
import { getIsLoggedIn } from '../../redux/auth'

const Layout = () => {
const isLoggedIn = useSelector(getIsLoggedIn);

	return(
		<>
		{/* Сюда прокидываю для изменения стиля боковой панели */}
			<LayoutBox isLoggedIn={isLoggedIn}>

			<AppBar isLoggedIn={isLoggedIn}/>

{/* Стили для основного бокса */}
			<AccessBox isLoggedIn={isLoggedIn}>

{/* отображаем верхнее меню */}
			{isLoggedIn && (
				<HomeMenu/>
			)}

				<Suspense fallback={<div>Loading...</div>}>
					<Outlet/>
				</Suspense>
			</AccessBox>

		</LayoutBox>
		</>
	)
}

export default Layout;
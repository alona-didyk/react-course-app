import React from 'react';
import { Logo } from './components/Logo/Logo';
import { Button } from 'src/common/Button/Button';

import './Header.scss';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<Logo />
				<div className='header__container_sub'>
					{/* <span>User`s name</span> */}
					<Button text='Logout' onClick={undefined} />
				</div>
			</div>
		</header>
	);
};

export default Header;

import React from 'react';

import { Logo } from './components/Logo/Logo';
import { Button } from 'src/common/Button/Button';

import { BUTTON_LOGOUT } from 'src/constants';

import './Header.scss';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<div className='header__container'>
				<Logo />
				<Button text={BUTTON_LOGOUT} />
			</div>
		</header>
	);
};

export default Header;

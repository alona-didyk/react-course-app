import React from 'react';

import './Button.scss';

interface ButtonProps {
	text: string;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => (
	<button className='button' onClick={onClick}>
		{text}
	</button>
);

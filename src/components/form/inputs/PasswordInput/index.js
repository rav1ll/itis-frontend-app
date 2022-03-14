import React, { useCallback, useState } from 'react';
import BaseInput from '../BaseInput';
import VisibilityButton from './components/VisibilityButton';

export default function PasswordInput({ leftSlot, type, ...props }) {
	const [isHidden, setIsHidden] = useState(true);

	const onVisibilityButtonClick = useCallback(() => {
		setIsHidden((state) => !state);
	}, []);
	return (
		<BaseInput
			type={isHidden ? 'password' : 'text'}
			rightSlot={<VisibilityButton isHidden={isHidden} onClick={onVisibilityButtonClick} />}
			{...props}
		/>
	);
}

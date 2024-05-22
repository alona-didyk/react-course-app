import React from 'react';

import { Button } from 'src/common/Button/Button';

const EmptyCourseList: React.FC = () => {
	return (
		<div>
			<h2>Course List is Empty</h2>
			<p>'Please use "Add New Course" button to add your first course</p>
			<Button text='Add New Course' />
		</div>
	);
};

export default EmptyCourseList;

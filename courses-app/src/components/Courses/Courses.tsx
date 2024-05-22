import React from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import { Button } from 'src/common/Button/Button';
import { Author, Course } from 'src/helpers/type';

interface CoursesProps {
	courses: Course[];
	authors: Author[];
	onCourseSelect: (course: Course) => void;
}

const Courses: React.FC<CoursesProps> = ({
	courses,
	authors,
	onCourseSelect,
}) => {
	return (
		<div>
			{courses.map((course) => (
				<CourseCard
					key={course.id}
					course={course}
					authors={authors}
					onCourseSelect={onCourseSelect}
				/>
			))}
			<Button text='Add New Course' />
		</div>
	);
};

export default Courses;

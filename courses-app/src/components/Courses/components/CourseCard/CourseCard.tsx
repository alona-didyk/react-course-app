import React from 'react';

import { getCourseDuration } from 'src/helpers/getCourseDuration';
import { formatCreationDate } from 'src/helpers/formatCreationDate';

import { Course, Author } from 'src/helpers/type';

import { Button } from 'src/common/Button/Button';

interface CourseCardProps {
	course: Course;
	authors: Author[];
	onCourseSelect: (course: Course) => void;
}

const CourseCard: React.FC<CourseCardProps> = ({
	course,
	authors,
	onCourseSelect,
}) => {
	const courseAuthors = course.authors
		.map((authorId) => authors.find((author) => author.id === authorId)?.name)
		.filter(Boolean)
		.join(', ');

	return (
		<div>
			<h2>{course.title}</h2>
			<p>{course.description}</p>
			<p>Duration: {getCourseDuration(course.duration)}</p>
			<p>Created: {formatCreationDate(course.creationDate)}</p>
			<p>Authors: {courseAuthors}</p>
			<Button text='Show course' onClick={() => onCourseSelect(course)} />
		</div>
	);
};

export default CourseCard;

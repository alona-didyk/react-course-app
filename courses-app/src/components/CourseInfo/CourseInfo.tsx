import React from 'react';

import { Author, Course } from 'src/helpers/type';

import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { getCourseDuration } from 'src/helpers/getCourseDuration';

import { Button } from 'src/common/Button/Button';

interface CourseInfoProps {
	course: Course;
	authors: Author[];
	onBack: () => void;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course, authors, onBack }) => {
	const courseAuthors = course.authors
		.map((authorId) => authors.find((author) => author.id === authorId)?.name)
		.filter(Boolean)
		.join(', ');
	return (
		<div>
			<h2>{course.title}</h2>
			<p>ID: {course.id}</p>
			<p>Description: {course.description}</p>
			<p>Duration: {getCourseDuration(course.duration)}</p>
			<p>Creation Date: {formatCreationDate(course.creationDate)}</p>
			<p>Authors: {courseAuthors}</p>
			<Button text='Back' onClick={onBack} />
		</div>
	);
};

export default CourseInfo;

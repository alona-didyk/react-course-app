import React from 'react';

import { Author, Course } from 'src/helpers/type';

import { formatCreationDate } from 'src/helpers/formatCreationDate';
import { getCourseDuration } from 'src/helpers/getCourseDuration';

import { Button } from 'src/common/Button/Button';
import { BUTTON_BACK } from 'src/constants';

import './CourseInfo.scss';

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
		<div className='course'>
			<div className='course__container'>
				<h2>{course.title}</h2>
				<div className='course__container_card'>
					<div className='course__container_left'>
						<p className='course__container_title'>
							<strong>Description:</strong>
						</p>
						<p className='course__container_description'>
							<br /> {course.description}
						</p>
					</div>
					<div className='course__container_line'></div>

					<div className='course__container_right'>
						<div className='course__container_inline'>
							<div className='course__container_label'>
								<p className='course__container_title'>
									<strong>ID: </strong>
								</p>
								<p className='course__container_title'>
									<strong>Duration: </strong>
								</p>
								<p className='course__container_title'>
									<strong>Creation Date: </strong>
								</p>
								<p className='course__container_title'>
									<strong>Authors: </strong>
								</p>
							</div>
							<div className='course__container_value'>
								<p className='course__container_description'>{course.id}</p>
								<p className='course__container_description'>
									{getCourseDuration(course.duration)}
								</p>
								<p className='course__container_description'>
									{formatCreationDate(course.creationDate)}
								</p>
								<p className='course__container_description'>
									{' '}
									{courseAuthors}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='course__container_button'>
					<Button text={BUTTON_BACK} onClick={onBack} />
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;

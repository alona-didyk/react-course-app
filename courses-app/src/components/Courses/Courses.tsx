import React from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import EmptyCourseList from '../EmptyCourseList/EmptyCourseList';
import { Button } from 'src/common/Button/Button';

import { Author, Course } from 'src/helpers/type';

import { BUTTON_ADD } from 'src/constants';

import './Courses.scss';
import SearchBar from './components/SearchBar/SearchBar';

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
		<div className='courses'>
			<div className='courses__container'>
				<div className='courses__container_search'>
					<SearchBar />
					{courses.length > 0 && <Button text={BUTTON_ADD} />}
				</div>
				<div className='courses__container_course'>
					{courses.length === 0 ? (
						<EmptyCourseList />
					) : (
						courses.map((course) => (
							<CourseCard
								key={course.id}
								course={course}
								authors={authors}
								onCourseSelect={onCourseSelect}
							/>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Courses;

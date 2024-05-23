import React, { useState } from 'react';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CourseInfo from './components/CourseInfo/CourseInfo';

import { mockedCoursesList, mockedAuthorsList } from './constants';
import { Course } from './helpers/type';

import './App.scss';

const App: React.FC = () => {
	const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

	const handleCourseSelect = (course: Course) => {
		setSelectedCourse(course);
	};

	const handleBackBtn = () => {
		setSelectedCourse(null);
	};

	return (
		<div className='app'>
			<Header />

			{selectedCourse ? (
				<CourseInfo
					course={selectedCourse}
					authors={mockedAuthorsList}
					onBack={handleBackBtn}
				/>
			) : (
				<Courses
					courses={mockedCoursesList}
					authors={mockedAuthorsList}
					onCourseSelect={handleCourseSelect}
				/>
			)}
		</div>
	);
};

export default App;

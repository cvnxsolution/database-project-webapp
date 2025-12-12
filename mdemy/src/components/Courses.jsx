import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const { search } = useLocation();
  const keyword = new URLSearchParams(search).get('keyword') || '';

  useEffect(() => {
    fetch('/courses.json')
      .then(res => res.json())
      .then(data => {
        if (keyword) {
          const filtered = data.filter(course =>
            course.title.toLowerCase().includes(keyword.toLowerCase())
          );
          setCourses(filtered);
        } else {
          setCourses(data);
        }
      })
      .catch(err => console.log(err));
  }, [keyword]);

  return (
    <div className="courses-container">
      <h2>
        Search results for: <strong>{keyword}</strong>
      </h2>
      {courses.length > 0 ? (
        <div className="courses-grid">
          {courses.map(course => (
            <div className="course-card" key={course.id}>
              <img src={course.coverImageUrl} alt={course.title} className='course-img'/>
              
              <h3 className='course-title'>{course.title}</h3>

              <p className="course-description">{course.description}</p>

              <div className='course-rating'>
                {Array.from({length:5},(_,index)=>(
                    <span
                        key={index}
                        className={index < Math.round(course.rating)?'filled':'' }
                    >
                        ★
                    </span>
                ))}
                <span className='rating-number'>
                    {course.rating.toFixed(1)}
                </span>
              </div>
              
            </div>
          ))}
        </div>
      ) : (
        <p className="no-courses">No courses found</p>
      )}
    </div>
  );
};

export default Courses;

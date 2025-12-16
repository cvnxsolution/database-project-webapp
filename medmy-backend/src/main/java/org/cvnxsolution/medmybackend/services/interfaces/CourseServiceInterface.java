package org.cvnxsolution.medmybackend.services.interfaces;

import org.cvnxsolution.medmybackend.dtos.CoursesDto;
import org.cvnxsolution.medmybackend.services.CourseFilter;

import java.util.List;

public interface CourseService {

    List<CoursesDto> findCoursesByFilter(CourseFilter courseFilter);

}

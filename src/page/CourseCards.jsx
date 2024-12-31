import  { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const CourseCards = () => {
  const [courses, setCourses] = useState([]);

    // Retrieve the token from cookies
    const token = Cookies.get("token");
  
    if (!token) {
     toast.error('You are not logged in');
    }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://react-interview.crd4lc.easypanel.host/api/course",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data.data)
        setCourses(response.data.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, [token]);

  return (
    <div className="container mx-auto py-8">
  <h1 className="text-2xl font-bold mb-4">Available Courses</h1>
  {courses.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="p-4 border rounded shadow">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
          <p className="text-gray-600 my-2">{course.description}</p>
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded`}
            style={{ backgroundColor: course.badge_color }}
          >
            {course.badge_text}
          </span>
          <p className="mt-4 text-sm text-gray-500">Instructor: {course.instructor_name}</p>
          <p className="text-sm text-gray-400">Created At: {course.created_at}</p>
          <p className="text-sm text-gray-500">
            Author: {course.author.name} ({course.author.email})
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 text-center mt-8">No courses available. Add some courses!</p>
  )}
</div>


  );
};

export default CourseCards;

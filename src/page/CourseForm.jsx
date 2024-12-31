import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


const CourseForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const badge_text = form.badge_text.value
        const badge_color = form.badge_color.value
        const instructor_name = form.instructor_name.value

        const course ={
            title:title,
            description:description,
            badge_text:badge_text,
            badge_color:badge_color,
            instructor_name:instructor_name
        }
        console.log(course)

             // Retrieve the token from cookies
  const token = Cookies.get("token");
  console.log(token)

  if (!token) {
    toast.error('You are not logged in');
  }

  if(token){
    try {
        const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/course', course, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        e.target.reset()
        console.log('Course added', response.data);
      } catch (error) {
        console.error('Error adding course', error.response?.data);
      }
  }

      
      };

    return (
        <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="title" name="title" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="description" name="description" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Badge Text</span>
          </label>
          <input type="text" placeholder="badge_text" name="badge_text" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Badge Color</span>
          </label>
          <input type="text" placeholder="badge_color" name="badge_color" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Instructor Name</span>
          </label>
          <input type="text" placeholder="instructor_name" name="instructor_name" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Course</button>
        </div>
        
      </form>
    );
};

export default CourseForm;
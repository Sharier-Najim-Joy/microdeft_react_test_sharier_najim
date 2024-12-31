
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import img from "../assets/login.png";

const Register = () => {
    const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log(email,password,name)
    const formData ={
        name:name,
        email:email,
        password:password
    }
    try {
      const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/register', formData, {
        headers: { Accept: 'application/json' },
      });
      toast.success('Register Successful');
      navigate('/')
      console.log('Registration successful', response.data);
    } catch (error) {
      console.error('Error registering user', error.response?.data);
    }
  };

  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
      <h1 className="text-5xl font-bold text-center">Register now!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;

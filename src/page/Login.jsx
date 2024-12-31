import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import img from "../assets/login.png";


const Login = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const formData={
            email:email,
            password:password
        }
        console.log(formData)
        try {
          const response = await axios.post('https://react-interview.crd4lc.easypanel.host/api/login', formData, {
            headers: { Accept: 'application/json' },
          });
          toast.success('Login Successful');
          e.target.reset()
          console.log('Login successful', response.data);
          console.log('token',response?.data?.data?.token);
          const token = response?.data?.data?.token;
          if (token) {
            // Set the token in cookies
            Cookies.set('token', token, { expires: 7, secure: true });
            console.log('Token stored in cookies');
          } else {
            console.warn('Token not found in response.');
          }

        } catch (error) {
          console.error('Error logging in', error.response?.data);
        }
      };

    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={img} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Sign up
          </Link>
          .
        </p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
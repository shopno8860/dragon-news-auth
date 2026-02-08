import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // Debug / test
    console.log({ email, password });
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen flex items-center justify-center font-poppins">
      <div className="card w-full max-w-md bg-base-100 rounded-none">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold mb-2">
            Login your account
          </h2>

          <div className="divider"></div>

          {/* ✅ FORM START */}
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Email address</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Button */}
            <button type="submit" className="btn btn-neutral w-full">
              Login
            </button>
          </form>
          {/* ✅ FORM END */}

          {/* Register */}
          <p className="text-center mt-4 text-sm">
            Don’t Have An Account?{" "}
            <Link to="/auth/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

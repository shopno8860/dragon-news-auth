import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("User created:", user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 font-poppins">
      <div className="card w-full max-w-md bg-base-100 rounded-none">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-center text-2xl font-bold mb-2">
            Register your account
          </h2>

          <div className="divider"></div>

          {/* ✅ FORM START */}
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter photo url"
                className="input input-bordered w-full"
              />
            </div>

            {/* Email */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
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
            <div className="form-control mb-3">
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

            {/* Terms */}
            <div className="form-control mb-3">
              <label className="label cursor-pointer justify-start gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  onChange={(e) => setAccepted(e.target.checked)}
                />
                <span className="label-text">Accept Term & Conditions</span>
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-neutral w-full"
              disabled={!accepted}
            >
              Register
            </button>
          </form>
          {/* ✅ FORM END */}

          {/* Login link */}
          <p className="text-center mt-4 text-sm">
            Already Have An Account?{" "}
            <Link to="/auth/login" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

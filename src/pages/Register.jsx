import { useForm } from "react-hook-form";
import { User, Mail, Lock, ArrowRight } from "lucide-react";

const Register = ({ setToggle }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50 p-6">
      <div className="w-full max-w-lg bg-amber-50/80 p-10 rounded-2xl shadow-2xl border-t-8 border-amber-700">
        <h2 className="text-4xl font-extrabold text-amber-900 text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Join the Nestlé Partner Network
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 ">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <User
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700"
              />
              <input
                id="name"
                type="text"
                placeholder="Full Name"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 
                  ${
                    errors.name
                      ? "border-amber-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-amber-600 focus:ring-amber-100"
                  }
                `}
                {...register("name", {
                  required: "Full name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-xs text-amber-800">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700"
              />
              <input
                id="email"
                type="email"
                placeholder="you@partner.com"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 
                  ${
                    errors.email
                      ? "border-amber-500 focus:border-red-500 focus:ring-red-100"
                      : "border-gray-300 focus:border-amber-600 focus:ring-amber-100"
                  }
                `}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-xs text-amber-800">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700"
              />
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 
                  ${
                    errors.password
                      ? "border-amber-600 focus:border-amber-700 focus:ring-amber-500"
                      : "border-gray-300 focus:border-amber-700 focus:ring-amber-100"
                  }
                `}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-xs text-amber-800">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700"
              />
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition duration-200 
                  ${
                    errors.confirmPassword
                      ? "border-amber-600 focus:border-amber-700 focus:ring-amber-500"
                      : "border-gray-300 focus:border-amber-700 focus:ring-amber-100"
                  }
                `}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmPassword && (
              <p className="mt-1 text-xs text-amber-800">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-2 px-4 py-3 text-lg font-semibold rounded-lg transition duration-300 transform shadow-md 
              bg-amber-800 hover:bg-amber-800/90 hover:scale-[1.01] text-white"
          >
            <span>Register</span>
            <ArrowRight size={20} />
          </button>
        </form>

        <p className="text-amber-600 font-semibold text-center mt-3 hover:text-amber-600 transition">
          Already have an account?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-amber-700 cursor-pointer"
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

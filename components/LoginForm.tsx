/* eslint-disable react/no-unescaped-entities */
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import DisplayErrorText from "./DisplayErrorText";
import ErrorText from "./ErrorText";

export default function LoginForm({ toggleSignup }) {
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const formOptions = { resolver: yupResolver(loginSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="signin_email" className="mb-2 cursor-pointer">Email</label>
        <input
        id="signin_email"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="text"
          {...register("email")}
        />
        <DisplayErrorText _error={errors.email} />

        <div className="my-2"></div>

        <label htmlFor="signup_password" className="mb-2 cursor-pointer">Password</label>
        <input
        id="signup_password"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="password"
          {...register("password")}
        />
        <DisplayErrorText _error={errors.password} />
       
        <button
          type="submit"
          className="p-2 mt-6 font-alegreya bg-sky-400 hover:bg-sky-500 hover:border-sky-500 text-white rounded"
        >
          Sign in
        </button>
      </form>
      <div className="flex  mt-4"></div>
      <div className="text-sm flex justify-center mt-4 ">
        <span className="opacity-40">Don't have an account?</span>
        <span className="ml-2 text-indigo-600 ">
          <button type="button" onClick={() => toggleSignup(true)}>
            Sign up
          </button>
        </span>
      </div>
    </>
  );
}

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DisplayErrorText from "./DisplayErrorText";

export default function SignUp({ toggleSignup }) {
  const signUpSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please provide valid email")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be at 6 characters long"),
    confirmPwd: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const formOptions = { resolver: yupResolver(signUpSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <label htmlFor="signup_email" className="mb-2 cursor-pointer">Email</label>
        <input
        id="signup_email"
          className=" w-full  border px-1 py-2 rounded font-opensans"
          type="text"
          
          {...register("email")}
        />
        <DisplayErrorText _error={errors.email} />
        
        <div className="my-2"></div>
        <label htmlFor="signup_password" className=" cursor-pointer">Password</label>
        <input
        id="signup_password"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="password"
          
          {...register("password")}
        />
        <DisplayErrorText _error={errors.password} />
        <div className="my-2"></div>

        <label htmlFor="signup_confirmPwd" className="mb-2 cursor-pointer">Confirm password</label>
        <input
        id="signup_confirmPwd"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="password"
          {...register("confirmPwd")}
        />
        <DisplayErrorText _error={errors.confirmPwd} />
        <button
            type="submit"
            className="font-alegreya hover:bg-indigo-700 bg-indigo-500 text-white rounded p-2 mt-6"
          >
            Sign up
          </button>
      </form>

      <div className="text-sm flex justify-center mt-4 ">
        <span className="opacity-40">Have an account? </span>
        <span className="ml-2 text-indigo-600 ">
          <button type="button" onClick={() => toggleSignup(false)}>
            Sign in
          </button>
        </span>
      </div>
    </div>
  );
}

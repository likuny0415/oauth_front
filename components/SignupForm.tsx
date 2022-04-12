import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import DisplayErrorText from "./DisplayErrorText";
import UserApi from "../lib/api/user";
import Router from "next/router";

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
  const { register, handleSubmit, setError, formState } = useForm(formOptions);
  const { errors } = formState;
  const [ isSignupSuccess, setIsSignupSuccess] = useState(false)

  async function onSubmit(data) {
    try {
      const res = await UserApi.signup(data);
      if (res.code == 400) {
        setError('apiError', { message: res.error})
        setIsSignupSuccess(false)
      } else if (res.code == 200) {
        setIsSignupSuccess(true)
        setTimeout(() => {
          Router.replace('/login')
        }, 1000)
      }
    } catch (error) {     
      return error
    }
    
    
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
          <label htmlFor="signup_email" className="mb-2 cursor-pointer">Email</label>
        <input
        id="signup_email"
          className=" w-full  border px-1 py-2 rounded font-opensans"
          type="text"
          disabled={formState.isSubmitting || isSignupSuccess}
          {...register("email") }
        />
        <DisplayErrorText _error={errors.apiError} />
        <DisplayErrorText _error={errors.email} />
        
        <div className="my-2"></div>
        <label htmlFor="signup_password" className=" cursor-pointer">Password</label>
        <input
        id="signup_password"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="password"
          disabled={formState.isSubmitting || isSignupSuccess}
          {...register("password")}
        />
        <DisplayErrorText _error={errors.password} />
        <div className="my-2"></div>

        <label htmlFor="signup_confirmPwd" className="mb-2 cursor-pointer">Confirm password</label>
        <input
        id="signup_confirmPwd"
          className="w-full border px-1 py-2 rounded font-opensans"
          type="password"
          disabled={formState.isSubmitting || isSignupSuccess}
          {...register("confirmPwd")}
        />
        <DisplayErrorText _error={errors.confirmPwd} />
        <button
            type="submit"
            id="signup_button"
            disabled={formState.isSubmitting || isSignupSuccess}
            className="font-alegreya hover:bg-indigo-700 bg-indigo-500 text-white rounded p-2 mt-6"
          >
            {isSignupSuccess && 
            <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
            </svg>
            }
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

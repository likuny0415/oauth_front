import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignupForm";

export default function Login() {
  const [signup, setSignup] = useState(false);

  const toggleSignup = (isSignup: boolean) => {
    setSignup(isSignup);
  };

  return (
    <>
      <Head>
        <title>Login Page</title>
        <meta
          name="login"
          content="Please login to use fully-featured application."
        />
      </Head>

      <div className="bg-gray-100 min-h-screen flex items-center">
         <div className="absolute top-0 -left-4 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="mx-auto bg-white w-px-400 rounded-md shadow-xl py-8 ">
          <span className="flex justify-center font-inknut text-3xl mb-4">
            {signup ? <span>Create Account</span> : <span>Kuny Todo</span>}
          </span>

          <div className="max-w-md mx-8">
            <div className="flex flex-col ">
              {signup ? (
                <SignUp toggleSignup={toggleSignup} />
              ) : (
                <LoginForm toggleSignup={toggleSignup} />
              )}

              <div className="divider my-4">
                <span className="text-sm">or</span>
              </div>

              
              <div className="flex justify-center">
                <a
                  href="http://localhost:8000/api/v1/auth/github"
                  className="mx-8"
                >
                  <Image
                    src="/github_mark.png"
                    alt="github_login"
                    height={32}
                    width={32}
                    layout="intrinsic"
                    className="opacity-40 hover:opacity-100"
                  />
                </a>
                <a
                  href="http://localhost:8000/api/v1/auth/google"
                  className="mx-8"
                >
                  <Image
                    src="/google_mark.svg"
                    alt="google_login"
                    height={32}
                    width={32}
                    layout="intrinsic"
                    className="opacity-40 hover:opacity-100"
                  />
                </a>
              </div>
              <div className="flex justify-center mt-2 text-sm">
                <span className="opacity-40">
                  Sign in as a
                  </span>
                  <Link href="/tourist">
                    <a className="opacity-100 ml-2 text-indigo-600">Demo User</a>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </div>

      
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign in</h1>
              <p className="text-xs-center">successfully login in</p>
              <a href="http://localhost:8000/api/v1/auth/logout">Logout</a>
              <a href="http://localhost:8000/api/v1/auth/me">ME</a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

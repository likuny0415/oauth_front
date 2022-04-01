import { NextPageContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {

  const [signup, setSignup] = useState(false);
  
  const SignIn = (
    <form className="flex flex-col ">
                <input
                  className=" w-full  border px-1 py-2 rounded font-opensans"
                  type="text"
                  placeholder="E-mail"
                />

                <div className="my-2"></div>

                <input
                  className="w-full border px-1 py-2 rounded font-opensans"
                  type="text"
                  placeholder="Password"
                />
                <div className="flex  mt-4">
                  <button className="font-alegreya border border-opacity-20 hover:border-sky-400 hover:text-sky-400 text-dark w-full rounded  mr-4 p-1">
                    Sign up
                  </button>
                  <button className="font-alegreya bg-sky-400 hover:bg-sky-500 hover:border-sky-500  w-full text-white ml-4 rounded">
                    Sign in
                  </button>
                </div>

              </form>
  )

  const SignUp = (
    <form className="flex flex-col ">
                <input
                  className=" w-full  border px-1 py-2 rounded font-opensans"
                  type="text"
                  placeholder="E-mail"
                />

                <div className="my-2"></div>

                <input
                  className="w-full border px-1 py-2 rounded font-opensans"
                  type="text"
                  placeholder="Password"
                />
                <div className="flex  mt-4">
                  <button className="font-alegreya border border-opacity-20 hover:border-sky-400 hover:text-sky-400 text-dark w-full rounded  mr-4 p-1">
                    Sign up
                  </button>
                  <button className="font-alegreya bg-sky-400 hover:bg-sky-500 hover:border-sky-500  w-full text-white ml-4 rounded">
                    Sign in
                  </button>
                </div>

              </form>
  )

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
        <div className="mx-auto bg-white w-px-400 rounded-md shadow py-8 ">
          <span className="flex justify-center font-inknut text-4xl mb-4">
            Kuny Todo
          </span>

          <div className="max-w-md mx-8">
            <div className="flex flex-col ">
              {SignIn}

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

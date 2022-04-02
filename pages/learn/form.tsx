import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Form() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mandatory")
      .min(6, "Password must be at 6 char long"),
    confirmPwd: Yup.string()
      .required("Confirm Password")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const [passwordType, setPasswordType] = useState("password");

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  function handleClick(e) {
    e.preventDefault();
    if (passwordType == "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  }

  const eyeOpen = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );

  const eyeClose = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
      />
    </svg>
  );

  // password
  return (
    <div>
      <h2>React Confirm Password Validation Example</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <label>Password</label>

          <input
            type={passwordType}
            id="password"
            className={`border ${errors.password ? "is-invalid" : ""}`}
            {...register("password")}
          />
          <button onClick={handleClick}>
            {passwordType == "password" ? eyeOpen : eyeClose}
          </button>
          {errors.password ? <p>{errors.password.message}</p> : <></>}
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            className={`border ${errors.confirmPwd ? "is-invalid" : ""}`}
            {...register("confirmPwd")}
          />
          {errors.confirmPwd ? <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
</svg>
              <p>Password not matched</p> </div>: <></>}
        </div>
        <div>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

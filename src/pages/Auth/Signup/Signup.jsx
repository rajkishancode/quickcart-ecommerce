import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FormTextInput } from "../../../components";
import {
  useAuthForm,
  useDocumentTitle,
  useAuth,
} from "../../../hooks";

import { toast } from "react-toastify";
import axios from "axios";
import "../Auth.css";

const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export const Signup = () => {
  useDocumentTitle("Signup | Quickcart");

  const { authFormState, authFormDispatch } = useAuthForm();
  const { authDispatch } = useAuth();
  const { fullName, email, password, loading, confirmPassword } = authFormState;

  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    return () => authFormDispatch({ type: "LOADING_OFF" });
  }, []);

  const signupHandler = async (e) => {
    // e.preventDefault();
    try {
      authFormDispatch({ type: "LOADING_ON" });
      if (password.length === 0 || fullName.length === 0) {
        toast.info("Credentials can't be blank");
        return;
      }

      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }

      if (confirmPassword !== password) {
        toast.info("Passwords Don't Match");
        return;
      }

      const response = await axios.post(`/api/auth/signup`, {
        userName: fullName,
        email,
        password,
      });

      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "SIGNUP",
        payload: {
          user: response.data.createdUser,
          token: response.data.encodedToken,
        },
      });
      toast.success(
        `Ahoy, welcome aboard, ${response.data.createdUser.userName}`
      );
      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      authFormDispatch({ type: "LOADING_OFF" });
    }
  };

  return (
    <div>
      {" "}
      <main className="auth mt-10">
        <div className="auth-container mt-5 ">
          <div className="auth-content mx-auto p-10 flex-col d-flex">
            <h3 className="text-center mt-0">Signup</h3>

            <FormTextInput
              fieldName={"Full Name"}
              placeholder={"John Doe"}
              value={fullName}
              onChange={(e) =>
                authFormDispatch({
                  type: "FULL_NAME",
                  payload: e.target.value.trim(),
                })
              }
            />

            <FormTextInput
              fieldName={"Email"}
              placeholder={"john.doe@example.com"}
              value={email}
              type={"email"}
              onChange={(e) =>
                authFormDispatch({
                  type: "EMAIL",
                  payload: e.target.value.trim(),
                })
              }
            />

            <FormTextInput
              fieldName={"Password"}
              placeholder={"****************"}
              value={password}
              type={"Password"}
              onChange={(e) =>
                authFormDispatch({
                  type: "PASSWORD",
                  payload: e.target.value.trim(),
                })
              }
            />

            <FormTextInput
              fieldName={"Confirm Password"}
              placeholder={"****************"}
              value={confirmPassword}
              onChange={(e) =>
                authFormDispatch({
                  type: "CONFIRM_PASSWORD",
                  payload: e.target.value.trim(),
                })
              }
            />

            <div className="checkbox-input my-3">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me" className="ml-2">
                I accept all Terms & Conditions
              </label>
            </div>
            <div className="my-6">
              <button
                className="btn btn-solid-primary w-100 mx-0"
                onClick={(e) => signupHandler(e)}
              >
                {loading ? <i className="fa fa-spinner fa-spin" /> : "Sign Up"}
              </button>
            </div>
            <p className="text-center">
              <Link to="/login" className="">
                Already have an account
                <i className="fa-solid fa-greater-than mx-6"></i>
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

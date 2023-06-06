import { useEffect } from "react";
import { FormTextInput } from "../../../components";
import {
  useAuthForm,
  useDocumentTitle,
  useLoading,
  useAuth,
} from "../../../hooks";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Auth.css";

import { toast } from "react-toastify";
const EMAIL_REGEX = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

export const Login = () => {
  const { authDispatch } = useAuth();
  const { authFormState, authFormDispatch } = useAuthForm();
  const { email, password, loading } = authFormState;

  const { loading: guestLoading, setLoading: setGuestLoading } = useLoading();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    return () => authFormDispatch({ type: "LOADING_OFF" });
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();
    authFormDispatch({ type: "LOADING_ON" });
    try {
      if (!EMAIL_REGEX.test(email)) {
        toast.info("Please enter a valid email address");
        return;
      }
      if (password.length === 0) {
        toast.info("Password can't be blank");
        return;
      }
      const response = await axios.post(`/api/auth/login`, {
        email: email,
        password: password,
      });

      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });

      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");

      toast.success(`Welcome Back, ${response.data.foundUser.userName} `);
    } catch (error) {
      console.log(error);
      toast.error("Wrong credentials");
    } finally {
      authFormDispatch({ type: "LOADING_OFF" });
    }
  };

  const guestLoginHandler = async (e) => {
    e.preventDefault();
    setGuestLoading(true);
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: "guest@gmail.com",
        password: "guest@gmail.com",
      });
      localStorage.setItem("token", response.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: response.data.foundUser,
          token: response.data.encodedToken,
        },
      });
      setGuestLoading(false);
      const pathName = location?.state?.from?.pathname;
      navigate(pathName ? pathName : "/");
      toast.success(`Welcome Back, ${response.data.foundUser.userName}`);
    } catch (e) {
      console.log(e);
      setGuestLoading(false);
    }
  };

  useDocumentTitle("Login | Quickcart");
  return (
    <div>
      <main className="auth mt-10">
        <div className="auth-container mt-0">
          <form className="auth-content mx-auto p-10">
            <h3 className="text-center mt-0">Login</h3>

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

            <div className="checkbox-input">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me" className="ml-2">
                Remember me
              </label>
              <Link to="#" className="ml-auto">
                Forgot your Password?
              </Link>
            </div>
            <div className="my-6">
              <button
                className="btn btn-solid-primary w-100 mx-0 "
                onClick={(e) => loginHandler(e)}
              >
                {loading ? <i className="fa fa-spinner fa-spin" /> : "Login"}
              </button>
            </div>
            <div className="my-6">
              <button
                class="btn btn-outline-primary mx-0 w-100"
                onClick={(e) => guestLoginHandler(e)}
              >
                {guestLoading ? (
                  <i className="fa fa-spinner fa-spin" />
                ) : (
                  "Guest Login"
                )}
              </button>
            </div>
            <p className="text-center">
              <Link to="/signup" state={{ from: location?.state?.from }}>
                Create New Account
                <i className="fa-solid fa-greater-than mx-6"></i>
              </Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

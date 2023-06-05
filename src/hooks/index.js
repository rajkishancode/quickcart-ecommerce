import useLoading from "./useLoading";
import useDocumentTitle from "./useDocumentTitle.";
import useAuthForm from "./useAuthForm/authFormReducer";
import { useAuth } from "../contexts/Providers/AuthProvider/AuthProvider";
import { useProducts } from "../contexts/Providers/ProductProvider/ProductProvider";
import { useUserData } from "../contexts/Providers/UserDataProvider/UserDataProvider";

export {
  useAuthForm,
  useDocumentTitle,
  useLoading,
  useAuth,
  useProducts,
  useUserData,
};

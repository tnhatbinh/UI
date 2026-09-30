import { createBrowserRouter } from "react-router-dom";

import Home from "@features/home/home";
import LoginAnimatedPage from "@features/login-animated/LoginAnimatedPage";
import LoginPage from "@features/login/LoginPage";
import PageNotFound from "@features/page-not-found/page-not-found";
import GuestGuard from "@guards/guestGuard";
import MainLayout from "@layouts/main-layout";
import { HOME_PATH, LOGIN_ANIMATED_PATH } from "@shared/constants/path";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: HOME_PATH, element: <Home /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
  {
    element: <GuestGuard />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: `/${LOGIN_ANIMATED_PATH}`, element: <LoginAnimatedPage /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

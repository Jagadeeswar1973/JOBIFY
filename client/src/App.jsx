// import React, { useState } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import HomeLayout from "./pages/HomeLayout";
// import Landing from "./pages/Landing";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import DashboardLayout from "./pages/DashboardLayout";
// import Error from "./pages/Error";
// import AddJob from "./pages/AddJob";
// import Admin from "./pages/Admin";
// import Profile from "./pages/Profile";
// import AllJobs from "./pages/AllJobs";
// import Stats from "./pages/Stats";
// import EditJob from "./pages/EditJob";

// import { action as registerAction } from "./pages/Register";
// import { action as loginAction } from "./pages/Login";
// import { loader as DashboardLayoutLoader } from "./pages/DashboardLayout";
// import { action as AddJobAction } from "./pages/AddJob";
// import { loader as AllJobsAction } from "./pages/AllJobs";
// import { loader as editJobLoader } from "./pages/EditJob";
// import { action as editJobAction } from "./pages/EditJob";
// import { action as deleteJobAction } from "./pages/DeleteJob";
// import { loader as adminLoader } from "./pages/Admin";
// import { action as profileAction } from "./pages/Profile";
// import { loader as StatsLoader } from "./pages/Stats";

// export const checkDefaultTheme = () => {
//   const isDarkTheme = localStorage.getItem("darkTheme") === "true";
//   document.body.classList.toggle("dark-theme", isDarkTheme);
//   return isDarkTheme;
// };

// checkDefaultTheme();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <HomeLayout />,
//     errorElement: <Error />,
//     children: [
//       {
//         index: true,
//         element: <Landing />,
//       },
//       {
//         path: "register",
//         element: <Register />,
//         action: registerAction,
//       },
//       {
//         path: "login",
//         element: <Login />,
//         action: loginAction,
//       },
//       {
//         path: "dashboard",
//         element: <DashboardLayout />,
//         loader: DashboardLayoutLoader,
//         children: [
//           {
//             index: true,
//             element: <AddJob />,
//             action: AddJobAction,
//           },
//           { path: "stats", element: <Stats />, loader: StatsLoader },
//           {
//             path: "all-jobs",
//             element: <AllJobs />,
//             loader: AllJobsAction,
//           },

//           {
//             path: "profile",
//             element: <Profile />,
//             action: profileAction,
//           },
//           {
//             path: "admin",
//             element: <Admin />,
//             loader: adminLoader,
//           },
//           {
//             path: "edit-job/:id",
//             element: <EditJob />,
//             loader: editJobLoader,
//             action: editJobAction,
//           },
//           { path: "delete-job/:id", action: deleteJobAction },
//         ],
//       },
//     ],
//   },
// ]);

// const App = () => {
//   const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);
//   return <RouterProvider router={router} />;
// };

// export default App;
import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Error from "./pages/Error";
import AddJob from "./pages/AddJob";
import Admin from "./pages/Admin";
import Profile from "./pages/Profile";
import AllJobs from "./pages/AllJobs";
import Stats from "./pages/Stats";
import EditJob from "./pages/EditJob";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as DashboardLayoutLoader } from "./pages/DashboardLayout";
import { action as AddJobAction } from "./pages/AddJob";
import { loader as AllJobsLoader } from "./pages/AllJobs";
import { loader as editJobLoader } from "./pages/EditJob";
import { action as editJobAction } from "./pages/EditJob";
import { action as deleteJobAction } from "./pages/DeleteJob";
import { loader as adminLoader } from "./pages/Admin";
import { action as profileAction } from "./pages/Profile";
import { loader as StatsLoader } from "./pages/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: DashboardLayoutLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: AddJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: StatsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: AllJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          {
            path: "delete-job/:id",
            action: deleteJobAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = useState(false);
  return <RouterProvider router={router} />;
};

export default App;

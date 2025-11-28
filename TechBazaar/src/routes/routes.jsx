import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Favorites from "../pages/Favorites";
import PhoneDetails from "../pages/PhoneDetails";
import About from "../pages/About";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/favorites',
        Component: Favorites,
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/phone-details',
        element: <PhoneDetails></PhoneDetails>

      }
    ]
  },
  // {
  //   path: '/about',
  //   element: <p>This is an about page</p>,
  // },

  // {
  //   path: '/about',
  //   element: (<div>
  //     <h1 class="text-3xl font-bold underline">Navbar</h1>
  //     <button className='btn btn-primary'>Content</button>
  //     <h1 className='text-3xl font-bold underline'>Footer</h1>
  //   </div>
  //   ),
  // },
]);








// export const router = createBrowserRouter([
//   {
//     path: '/',
//     Component: MainLayout,
//     errorElement: <p>Error</p>,
//     children: [
//       {
//         // index: true,
//         path: '/',
//         element: <Home></Home>
//       },
//       {
//         path: '/favorites',
//         element: <p>Favorite items</p>,
//       },
//       {
//         path: '/about',
//         element: <p>This is an about page</p>
//       },
//     ]
//   },
//   // {
//   //   path: '/about',
//   //   element: <p>This is an about page</p>,
//   // },

//   // {
//   //   path: '/about',
//   //   element: (<div>
//   //     <h1 class="text-3xl font-bold underline">Navbar</h1>
//   //     <button className='btn btn-primary'>Content</button>
//   //     <h1 className='text-3xl font-bold underline'>Footer</h1>
//   //   </div>
//   //   ),
//   // },
// ]);


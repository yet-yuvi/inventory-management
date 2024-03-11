import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, LoginPage, ContactPage, ProductsPage, TestPage } from "../pages";
import { ProductForm, Products } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      ...['/', 'products'].map((path) => ({
        path,
        element: <ProductsPage />,
        children: [
            {
                index: 'true',
                element: <Products />,
            },
            {
                path: 'add',
                element: <ProductForm />,
            }
        ],
      })),
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/test",
    element: <TestPage />,
  },
]);

export const AppRouterProvider = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

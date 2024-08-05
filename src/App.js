import React from "react";
import Layout from "./featured/layout/Layout";
import { RouterProvider } from "react-router-dom";
import routers from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import Toastify from "./atoms/Toastify";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routers}>
        <Layout>
          <Toastify />
        </Layout>
      </RouterProvider>
    </QueryClientProvider>
  );
};

export default App;

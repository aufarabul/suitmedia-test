import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./page/Home";
import Navbar from "./components/navbar";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
  ]);

  return (
    // We will use the store (temporary database)
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

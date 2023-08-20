import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import First from './pages/First';
import Second from './pages/Second';
import Protected from './components/Protected';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "second",
    element: <Protected><Second /></Protected>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)

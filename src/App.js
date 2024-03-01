import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Structure from './components/Struct';
import OneYear from './components/OneYear'
import SixYear from './components/SixYear'
import Rules from './components/Rules';
import Personnel from './components/Personnel';
import FourYears from './components/FourYears';
import TwoYears from './components/TwoYears';
import Prepare from './components/Prepare';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const router = createHashRouter([
  {
    element: <Home/>,
    path: "/",
  },
  {
    element: <Structure />,
    path: "/Struct"
  },
  {
    element: <Rules />,
    path: "/Rules"
  },
  {
    element: <OneYear />,
    path: "/OneYear"
  },
  {
    element: <SixYear />,
    path: "/SixYear"
  },
  {
    element: <Personnel />,
    path: "/Personnel"
  },
  {
    element: <TwoYears />,
    path: "/2Years"
  },
  {
    element: <FourYears />,
    path: "/4Years"
  },
  {
    element: <Prepare />,
    path: "/Prepare"
  },
  {
    element: <Gallery />,
    path: "/Gallery"
  },
  {
    element: <Contact />,
    path: "/Contact"
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

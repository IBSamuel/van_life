import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from './Error404';
import Navbar from './Navbar';
import Homehero from './Homehero';
import About from './About';
import Vans from './Vans';
import Signin from './Signin';
import RentVan from './RentVan';


const App = () => {
  return (
    <><div className='bg-color-300'>
        {/* <h1 className="lg:text-9xl sm:text-2xl">Hello World</h1>
        <h1 className="">Hello World</h1> */}


        <Routes>
          <Route path="/nav" element={<Navbar />} />
          <Route path="/card" element={<Homehero/>} />
          <Route path="/van" element={<Vans/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/vans" element={<RentVan/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </div>

      </>
  );
}

export default App;

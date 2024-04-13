import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error404 from './Error404';
import Navbar from './Navbar';
import Homehero from './Homehero';
import About from './About';
import Vans from './Vans';
import Signin from './Signin';
import RentVan from './RentVan';
import Signup from './Signup';
import Host from './Host';
import Reviews from './host/Reviews';
import Van from './host/Van';
import Vanone from './host/VanOne';
// import Dashboard from './host/Dashboard';
import Income from './host/Income';
import Vanthree from './host/Vanthree';
import UserDashboard from './host/UserDashboard';
import Vantwo from './host/VanTwo';


const App = () => {
  return (
    <><div className='bg-color-300'>
        {/* <h1 className="lg:text-9xl sm:text-2xl">Hello World</h1>
        <h1 className="">Hello World</h1> */}


        <Routes>
          <Route path="/" element={<Homehero/>} />
          <Route path="/card" element={<Homehero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/vans/:id" element={<RentVan/>} />
          <Route path="/van" element={<Vans/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/dashboard" element={<UserDashboard/>} />
          <Route path="/host" element={<Host/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/vanstwo" element={<Van/>} />
          <Route path="/vanstwo/va1/:id" element={<Vanone/>} />
          <Route path="/vanstwo/va2/:id" element={<Vantwo/>} />
          <Route path="/vanstwo/va3/:id" element={<Vanthree/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </div>

      </>
  );
}

export default App;

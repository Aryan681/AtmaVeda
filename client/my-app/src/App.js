import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlipCardAuth from './components/pages/Login';





function App() {


  return (
   
      <Router>
      
          <Routes>
            {/* Default routes accessible to everyone */}
            <Route path="/" element={< FlipCardAuth/>} />
         
          
            
           
          </Routes>
      
      </Router>
 
  );
}

export default App;

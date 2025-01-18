import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import Blog from './components/pages/Blog';
import  Layout  from './components/pages/navbarL';



function App() {
  return (
   
      <Router>
   <Layout>
          <Routes>
            {/* Default routes accessible to everyone */}
            <Route path="/" element={< Home/>} />
            <Route path="/blog" element={< Blog/>} />
          </Routes>
          </Layout>
      </Router>
  );
}

export default App;

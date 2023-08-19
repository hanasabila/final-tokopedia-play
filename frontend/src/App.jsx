import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import Home from './pages/Homepage';
import VideoDetail from './pages/VideoDetail';

const App = () => {
  return ( 
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/video-detail/:id" element={ <VideoDetail /> } />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
   );
}
 
export default App;
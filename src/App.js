import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// normal import the pages
// import HomePage from './pages/home';
// import DetailsPage from './pages/details';

//route level code splitting
/* 
  As of the v4.6.0 release of webpack, there is native support for 
  generating both prefetch and preload using magic comments

  webpackPrefetch: true
*/
const HomePage = React.lazy(() =>
  import(/* webpackChunkName: "homeChunk" */ './pages/home')
);
const DetailsPage = React.lazy(() =>
  import(/* webpackChunkName: "detailsChunk" */ './pages/details')
);

function App() {
  return (
    <Router>
      <React.Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/details' element={<DetailsPage />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// normal import the pages
import HomePage from './pages/home';
import DetailsPage from './pages/details';

//route level code splitting
/* 
  As of the v4.6.0 release of webpack, there is native support for 
  generating both prefetch and preload using magic comments

  webpackPrefetch: true
*/
// const HomePage = React.lazy(() =>
//   import(/* webpackChunkName: "homeChunk" */ './pages')
// );
// const DetailsPage = React.lazy(() =>
//   import(/* webpackChunkName: "detailsChunk" */ './pages/DetailsPage')
// );

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

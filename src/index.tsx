import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Portfolio from './portfolio/Portfolio';
import './index.css';
import SpotifyMixer from './spotify/Spotify-Mixer';
import Resume from './portfolio/pages/Resume';
import About from './portfolio/pages/About';
import Projects from './portfolio/pages/Projects';
import ContactMe from './portfolio/pages/Contact-Me';
import RedirectURL from './spotify/pages/redirect-url';
import SpotifyMixerAbout from './spotify/pages/about-mixer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Outlet/></div>,
    children: [
      {
        path: '/',
        element: <Homepage/>
      },
    ]
  },
  { // Rewrite header to use as outlet for everything going forward!
    path: 'portfolio',
    element: <><Outlet/></>,
    children: [ 
      {
        index: true, 
        element: <Portfolio/>,
      },
      {
        path: 'resume',
        element: <Resume/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'projects',
        element: <Projects/>
      },
      {
        path: 'contact-me',
        element: <ContactMe/>
      },
    ],
  },
  {
    path: 'spotify-mixer',
    element: <><Outlet/></>,
    children: [
      {
        index: true,
        element: <SpotifyMixer/>
      },
      { 
        path: 'about',
        element: <SpotifyMixerAbout/>
      },
      {
        path: 'mix-songs',
        element: <RedirectURL/>
      },
    ],
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

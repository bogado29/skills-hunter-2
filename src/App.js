import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

/*Components imports*/ 
const IntroExpertice = lazy(() => import('./components/Intro-expertise'));
const LandingPage = lazy(() => import('./components/Landing_page'));
const LogIn = lazy(() => import('./components/LogIn'));
const SignUp = lazy(() => import('./components/SignUp'));
const MainPage = lazy(() => import('./components/MainPage'));



export default function App() {
  return (
    <Router>
      <Suspense fallback={ <div> Loading.. </div>}>
        <div>
          
          
          {/* Aca va nav_appjs_ori.js */}


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/introExpertice" element={<IntroExperticePage />} />
            <Route path="/mainpage" element={<MainPagePage />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}


/*
  Relacion Paginas de componentes con links
*/ 
const Home = () => <LandingPage />;

const About = () => <IntroExpertice />;

const IntroExperticePage = () => <IntroExpertice />;

const Users = () => <h2>Users</h2>;

const LogInPage = () => <LogIn />; 

const SignUpPage = () => <SignUp />; 

const MainPagePage = () => <MainPage />;


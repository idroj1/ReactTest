
import { Navigate, Route, Routes } from "react-router-dom";

import { UserProvider } from "./context/UserProvider";
import { HomePage } from './HomePage';
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import { Navbar } from "./Navbar";


export const MainApp = () => {
  return (
    <UserProvider>
        <Navbar/>
        <hr/>

        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/about" element={ <AboutPage /> } />
            <Route path="/login" element={ <LoginPage /> } />

            <Route path="/*" element={ <Navigate to='/about'/> } />

        </Routes>
    </UserProvider>
  )
}

//-----------------------------

// import { Navigate, Route, Routes } from "react-router-dom";
// import { HomePage } from './HomePage';
// import { AboutPage } from "./AboutPage";
// import { LoginPage } from "./LoginPage";

// export const MainApp = () => {
//   return (
//     <>
//         <h1>MainApp</h1>
//         <hr/>
//         <a href="/">Home</a>
//         <a href="/about">About</a>
//         <a href="/login">Login</a>
//         <hr/>

//         <Routes>
//             <Route path="/" element={ <HomePage /> } />
//             <Route path="/about" element={ <AboutPage /> } />
//             <Route path="/login" element={ <LoginPage /> } />

//             {/* <Route path="/*" element={ <LoginPage /> } /> */}
//             <Route path="/*" element={ <Navigate to='/about'/> } />

//         </Routes>
//     </>
//   )
// }

// -----------------------------

// import { Link, Navigate, Route, Routes } from "react-router-dom";
// import { HomePage } from './HomePage';
// import { AboutPage } from "./AboutPage";
// import { LoginPage } from "./LoginPage";

// export const MainApp = () => {
//   return (
//     <>
//         <h1>MainApp</h1>
//         <hr/>
//         <Link to="/" >Home</Link>
//         <Link to="/about" >About</Link>
//         <Link to="/login" >Login</Link>
//         <hr/>

//         <Routes>
//             <Route path="/" element={ <HomePage /> } />
//             <Route path="/about" element={ <AboutPage /> } />
//             <Route path="/login" element={ <LoginPage /> } />

//             <Route path="/*" element={ <Navigate to='/about'/> } />

//         </Routes>
//     </>
//   )
// }

//---------------------------

// import { Navigate, Route, Routes } from "react-router-dom";
// import { HomePage } from './HomePage';
// import { AboutPage } from "./AboutPage";
// import { LoginPage } from "./LoginPage";
// import { Navbar } from "./Navbar";

// export const MainApp = () => {
//   return (
//     <>
//         <h1>MainApp</h1>
//         <Navbar/>
//         <hr/>

//         <Routes>
//             <Route path="/" element={ <HomePage /> } />
//             <Route path="/about" element={ <AboutPage /> } />
//             <Route path="/login" element={ <LoginPage /> } />

//             <Route path="/*" element={ <Navigate to='/about'/> } />

//         </Routes>
//     </>
//   )
// }
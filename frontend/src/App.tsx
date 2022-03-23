import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Home from './routes/Home/Home';
import SignUp from "./routes/SignUp/SignUp";
import LogIn from "./routes/LogIn/LogIn";
import About from "./routes/About/About";
import ProfileTab from './components/ProfileTab/ProfileTab';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedW2WUser');
        if (loggedUser) {
            const user = JSON.parse(loggedUser);
            console.log('user logged in:', user);
            setUser(user);
        }
    }, []);


    return (
                    
        <Router>
            <Navbar user={user}/>
            
            <Routes>
                <Route path="/" element={<Home />} />   
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/about" element={<About />} />
            </Routes>
            
            <Footer />
        </Router>
        
    );
}

export default App;

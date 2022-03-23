import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import SignUp from "./routes/SignUp/SignUp";
import LogIn from "./routes/LogIn/LogIn";
import About from "./routes/About/About";
import { login } from './services/login';

const App = () => {
    const [user, setUser] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = async (event : any) => {
        event.preventDefault();

        try {
            // NB! Commented out for testing without backend running! Dont forget to switch
            const user = await login({email, password});            
            // const user = ({email, password});

            window.localStorage.setItem('loggedW2WUser', JSON.stringify(user));

            setUser(user);
            setEmail('');
            setPassword('');
    
        } catch (error) {
            alert('Invalid email or password');
        }
    }

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
                
                <Route path="/login" element={
                    <LogIn handleSubmit={handleLogin}
                           email={email}
                           password={password}
                           handleEmailChange={({ target } : any) => setEmail(target.value)}
                           handlePasswordChange={({ target } : any) => setPassword(target.value)}/>} />

                <Route path="/about" element={<About />} />
            </Routes>
            
            <Footer />
        </Router>
        
    );
}

export default App;

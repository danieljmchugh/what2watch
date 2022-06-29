import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import  { ThemeProvider } from 'styled-components'

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './routes/Home/Home';
import SignUp from "./routes/SignUp/SignUp";
import LogIn from "./routes/LogIn/LogIn";
import About from "./routes/About/About";
import MyLists from "./routes/MyLists/MyLists"
import { login, register } from './services/loginServices';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle'

const App = () => {
    /* Global user */
    const [user, setUser] = useState(null);
    /* Login details */
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    /* Signup details */
    const [nameSignup, setNameSignup] = useState('');
    const [emailSignup, setEmailSignup] = useState('');
    const [emailSignupRepeat, setEmailSignupRepeat] = useState('');
    const [passwordSignup, setPasswordSignup] = useState('');

    const handleLogin = async (event : any) => {
        event.preventDefault();

        try {
            const user = await login({emailLogin, passwordLogin});            
            
            window.localStorage.setItem('loggedW2WUser', JSON.stringify(user));

            setUser(user);
            setEmailLogin('');
            setPasswordLogin('');

        } catch (error) {
            alert('Invalid email or password');
        }
    }

    const handleSignup = async (event : any) => {
        event.preventDefault();

        if (emailSignup !== emailSignupRepeat) {
            alert('Emails entered to not match!')
            return 
        }
        
        try {
            
            const user = await register({emailSignup, nameSignup, passwordSignup})
            window.localStorage.setItem('loggedW2WUser', JSON.stringify(user));

            setUser(user);

            setNameSignup('');
            setEmailSignup('');
            setEmailSignupRepeat('');
            setPasswordSignup('');

        } catch (error) {
            console.error(error);
        }
    }

    const handleLogout = () => {
        window.localStorage.clear();
        setUser(null);
        window.location.reload();
    };

    useEffect(() => {
        const loggedUser = window.localStorage.getItem('loggedW2WUser');
        if (loggedUser) {
            setUser(JSON.parse(loggedUser));
        }
    }, []);




    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Navbar user={user} onLogout={handleLogout}/>  
                
                <Routes>
                    <Route path="/" element={<Home user={user}/>} />   
                    
                    <Route path="/signup" element={
                        <SignUp handleSubmit={handleSignup}
                                name={nameSignup}
                                email={emailSignup}
                                emailRepeat={emailSignupRepeat}
                                password={passwordSignup}
                                handleNameChange={({ target } : any) => setNameSignup(target.value)}
                                handleEmailChange={({ target } : any) => setEmailSignup(target.value)}
                                handleEmailRepeatChange={({ target } : any) => setEmailSignupRepeat(target.value)}
                                handlePasswordChange={({ target } : any) => setPasswordSignup(target.value)}/>} />
                    
                    <Route path="/login" element={
                        <LogIn handleSubmit={handleLogin}
                            email={emailLogin}
                            password={passwordLogin}
                            handleEmailChange={({ target } : any) => setEmailLogin(target.value)}
                            handlePasswordChange={({ target } : any) => setPasswordLogin(target.value)}/>} />
                    <Route path="/mylists" element={<MyLists />} />
                    
                    <Route path="/about" element={<About />} />
                </Routes>
                
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;

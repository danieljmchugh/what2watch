import { useState } from 'react'; 
import { login } from '../../services/login';

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (event : any) => {
        event.preventDefault();

        try {

            // NB! Commented out for testing without backend running! Dont forget to switch
            // const user = await login({email, password});            
            const user = ({email, password});

            window.localStorage.setItem('loggedW2WUser', JSON.stringify(user));


            setEmail('');
            setPassword('');

    
        } catch (error) {
            alert('Wrong credentials');
        }
    }

    return (
        <>
            <h1>Log In</h1>
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    placeholder="email"
                    autoFocus
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                
                <input 
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                
                <button type="submit">Login</button>
            </form>
        </>
    );
}


export default LogIn
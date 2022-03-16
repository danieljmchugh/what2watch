import { useState } from 'react'; 

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [emailRepeat, setEmailRepeat] = useState('');
    const [password, setPassword] = useState('');
    

    const handleSignup = (event : any) => {
        event.preventDefault();
        
        if (email != emailRepeat) {
            alert('Emails entered to not match!')
        }
        else {
            console.log(`Signed up with email: ${email} and password: ${password}`);
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignup}>
                <input 
                    type="email" 
                    placeholder="email"
                    autoFocus
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <input 
                    type="email" 
                    placeholder="re-enter email"
                    value={emailRepeat}
                    onChange={({ target }) => setEmailRepeat(target.value)}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}


export default SignUp
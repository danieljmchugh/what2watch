import { useState } from 'react'; 

const SignUp = ({
    handleSubmit,
    handleNameChange, 
    handleEmailChange,
    handleEmailRepeatChange,
    handlePasswordChange,
    name,
    email,
    emailRepeat, 
    password } : any) => {



    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Your name"
                    autoFocus
                    value={name}
                    onChange={handleNameChange}
                />
                <input 
                    type="email" 
                    placeholder="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    type="email" 
                    placeholder="re-enter email"
                    value={emailRepeat}
                    onChange={handleEmailRepeatChange}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}


export default SignUp
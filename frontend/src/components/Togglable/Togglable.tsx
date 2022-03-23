import { useState } from "react";

const Togglable = (props : any) =>  {
    
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    }

    const hideWhenVisible = { display: visible ? 'none' : ''};
    const showWhenVisible = { display: visible ? '' : 'none'};


    return (
        <>
            <div style={hideWhenVisible}>
                <button onClick={toggleVisible}>{props.buttonLable}</button>
            </div>
            
            <div style={showWhenVisible}>
                {props.children}
                <button onClick={toggleVisible}>Hide</button>
            </div>
        </>
    );
}

export default Togglable

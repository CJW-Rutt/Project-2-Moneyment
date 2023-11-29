import React, { createContext, useState, useContext } from "react";

const WelcomeContext = createContext();

function WelcomeProvider({ children }) {
    const [welcomePage, setWelcomePage] = useState(true);

    const toggleShowWelcome = () => {
        setWelcomePage((prevMode) => !prevMode);
    };

    return (
        <WelcomeContext.Provider value={{ showWelcomePage, toggleShowWelcome }}>
            {children}
        </WelcomeContext.Provider>
    );
}

export { WelcomeContext, WelcomeProvider };
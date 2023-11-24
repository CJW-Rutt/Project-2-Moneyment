// import React, { useState, createContext } from 'react';

// export const RefreshContext = createContext();

// export const RefreshProvider = ({ children }) => {
//     const [refreshKey, setRefreshKey] = useState(0);

//     const triggerReRender = () => {
//         setRefreshKey(prevKey => prevKey + 1);
//         console.log('KEY KEY: ' + refreshKey)
//     };

//     return (
//         <RefreshContext.Provider value={{ refreshKey, triggerReRender }}>
//             {children}
//         </RefreshContext.Provider>
//     );
// };

// Not in use

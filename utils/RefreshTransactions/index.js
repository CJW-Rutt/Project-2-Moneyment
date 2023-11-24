// import { useState, useCallback } from 'react';

// const useRefresh = () => {
//     const [refreshKey, setRefreshKey] = useState(0);

//     const triggerReRender = useCallback(() => {
//         setRefreshKey(prevKey => {
//             const newKey = prevKey + 1;
//             console.log('REFRESH KEY: ' + newKey);
//             return newKey;
//         });
//     }, []);

//     return { refreshKey, triggerReRender };
// };

// export default useRefresh;

// unnessary solution that didnt work
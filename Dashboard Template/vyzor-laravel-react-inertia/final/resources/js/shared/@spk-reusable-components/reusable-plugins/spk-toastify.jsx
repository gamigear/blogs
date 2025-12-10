import React, { useEffect, useState } from 'react';
import { ToastContainer, Bounce } from 'react-toastify';
import { data$, getState } from '../../layouts-components/services/switcherServices';



const SpkToastify = ({ hideProgressBar = false, newestOnTop = false, closeOnClick = true, rtl = false, pauseOnFocusLoss = true, draggable = true, pauseOnHover = true, position }) => {
    let [variable, setVariable] = useState(getState());
    useEffect(() => {
      const subscription = data$.subscribe((e) => {
        setVariable(e);
      });

      return () => subscription.unsubscribe();
    }, []);
    const ThemeMode = variable.dataThemeMode === 'light' ? "light" : "dark"
    const toastPosition = variable.dir === 'rtl' ? 'top-left' : 'top-right';

    return (
        <>
            <ToastContainer position={toastPosition} autoClose={5000} hideProgressBar={hideProgressBar} newestOnTop={newestOnTop} closeOnClick={closeOnClick} rtl={rtl} pauseOnFocusLoss={pauseOnFocusLoss} draggable={draggable} pauseOnHover={pauseOnHover} theme={ThemeMode} transition={Bounce} />
        </>
    );
};
export default SpkToastify;

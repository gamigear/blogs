import { Fragment, useEffect, useRef, useState } from 'react'
import { Provider } from 'react-redux';
import { Initialload } from '../contextapi';
import Landingswitcher from '../shared/layouts-components/switcher/landing-switcher';
import { store } from '../shared/redux/store';
import { usePage } from '@inertiajs/react';

const AuthenticationLayout = ({ children }) => {

    const { url } = usePage(); // This is your current page's URL
    const bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current = document.body

        if (url.includes('/basic')) {
            bodyRef.current.classList.add('authentication-background', 'authenticationcover-background', 'position-relative');
        } else {
            bodyRef.current.classList.remove('authentication-background', 'authenticationcover-background', 'position-relative');
        }

        if (url.includes('/cover')) {
            bodyRef.current.classList.add('bg-white')
        } else {
            bodyRef.current.classList.remove('bg-white')
        }

        if (url.includes('/coming-soon') || url.includes('/under-maintainance')) {
            bodyRef.current.classList.add('coming-soon-main')
        } else {
            bodyRef.current.classList.remove('coming-soon-main')
        }

        return () => {
            bodyRef.current.classList.remove('authentication-background', 'authenticationcover-background', 'position-relative');
            bodyRef.current.classList.remove('bg-white');
            bodyRef.current.classList.remove('coming-soon-main');
        };

    }, [url]);

    const [pageloading, setpageloading] = useState(false)
    return (
        <Fragment>
            <Initialload.Provider value={{ pageloading, setpageloading }}>
                <Provider store={store}>
                    <Landingswitcher />
                    {children}
                </Provider>
            </Initialload.Provider>
        </Fragment>
    )

}

export default AuthenticationLayout;

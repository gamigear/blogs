import { Fragment, useState } from 'react';
import { Initialload } from '../contextapi';
import { store } from '../shared/redux/store';
import Landingswitcher from '../shared/layouts-components/switcher/landing-switcher';

const Firebaselayout = ({ children }) => {
    const [pageloading, setpageloading] = useState(false);
    return (
        <Fragment>
            <Initialload.Provider value={{ pageloading, setpageloading }} store={store}>


                <Landingswitcher />
                {children}


            </Initialload.Provider>
        </Fragment>
    );
};

export default Firebaselayout;

import './bootstrap';
import '../scss/app.scss';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import RootWrapper from './Layouts/Rootwrapper';
import '../../resources/js/assets/scss/switcher.scss'
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <RootWrapper >
                    <App {...props} />
            </RootWrapper>
        )
    },
})




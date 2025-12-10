<template>
<div>
    <sales />
</div>
</template>

    
<script>
import sales from './dashboards/sales'
import {
    useRouter
} from 'vue-router';

export default {
    ssr: false, // Set SSR to false for this specific page
    setup() {
        definePageMeta({
            middleware: ["auth"],
        })
        // Redirect from the root path ("/") to "/dashboard"
        const router = useRouter();
        router.replace('/dashboards/sales');
    },
    components: {
        sales,
    },
};
</script>

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const pageView = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        path_url: url,
    })
}

export const gAnalytics = () => {
    const router = useRouter();

    useEffect(() => {
        const handleRouterChanges = (url) => {
            pageView(url);
        };
        router.events.on('routeChangeComplete', handleRouterChanges);
        console.log('Event is triggering')
        return () => {
            router.events.off('routeChangeComplete', handleRouterChanges);
        };

    }, [router.events]);
}


export const pageViewEvent = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
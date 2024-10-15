
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers'
import CONSTANTS from './constants';

// Can be imported from a shared config
const locales = CONSTANTS.languages;
export default getRequestConfig(async () => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const cookieStore = cookies()
    let locale = cookieStore.get('NEXT_LOCALE')?.value;

    if (!locales.includes(locale!)) { locale = 'en' };
    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
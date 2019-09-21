import englishMessages from './en.js';

const messages = {
    fr: () => import('./fr.js').then(messages => messages.default),
};

export default locale => {
    if (locale === 'fr') {
        return messages[locale]();
    }

    // Always fallback on english
    return englishMessages;
};

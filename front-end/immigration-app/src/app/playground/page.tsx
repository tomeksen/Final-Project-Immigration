import {useTranslations} from 'next-intl';

const TestPage = () => {
    const translations = useTranslations('HomePage');
    return ( 
    <div>
        <h1>{translations('title')}</h1>
    </div>
    );
}
 
export default TestPage;
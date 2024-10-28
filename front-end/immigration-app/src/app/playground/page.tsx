import {useTranslations} from 'next-intl';

const TestPage = () => {
    const t = useTranslations('HomePage');
    
    return ( <div>
        <h1>{t('title')}</h1>
    </div> );
}
 
export default TestPage;
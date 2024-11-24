import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: 'en',
          label: t('en')
        },
        {
          value: 'es',
          label: t('es')
        },
        {
            value: 'pt',
            label: t('pt')
          },
        {
            value: 'jp',
            label: t('jp')
          },
      ]}
      label={t('label')}
    />
  );
}
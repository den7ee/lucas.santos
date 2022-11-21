import pt from '../i18n/translations/pt/pt.json'
import en from '../i18n/translations/en/en.json'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'

const languageOptions = [
    {
        name: "Português",
        value: "pt",
    },

    {
        name: "English",
        value: "en",
    }
]

export const LanguageSwitcher = () => {
    const { t } = useTranslation();
    return (
        <div>
            {languageOptions.map(languageOptions => (
                <button className='
                px-2
                '

                key={languageOptions.value}
                onClick={() => {
                    i18n.changeLanguage(languageOptions.value)
                }}>
                    <p className='
                    '>
                        {languageOptions.value}
                    </p>
                </button>
            ))}
        </div>
    )
}
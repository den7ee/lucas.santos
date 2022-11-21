import { useTranslation } from 'react-i18next'
import profilePhoto from '../assets/images/profile.png'

function HeroSection() {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-center flex-col py-20'>
        <div className='text-center place-self-center'>
            <img className='rounded-full w-64 mb-3' src={profilePhoto}/>
            <h1>Lucas Santos</h1>
            <p className='text-neutral-400'>{t("Looking for a first experience")}</p>
            <p className='text-neutral-400'>{t("as Jr. Front End Developer.")}</p>
            <p className='text-neutral-400'>{t("in Portugal")}</p>
        </div>
    </div>
  )
}

export default HeroSection
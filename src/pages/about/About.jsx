import { useTranslation } from 'react-i18next'
import bayrog from '../about/flag.png'

const AboutPage = () => {
    const {t, i18n} = useTranslation()
  return (
    <div className="bg-[#0b245f44] py-[30px] ">
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[50px] sm:text-center  container mx-auto lg:flex lg:flex-row gap-50px">
            <img src={bayrog} alt="" className=' w-[420px] h-[220px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>{t("O'zbekiston respublikasi bayrog'i")} </h1>
                <p className="text-center mx-[auto] max-w-[90%]">{t("Oʻzbekiston bayrogʻi — Oʻzbekiston gerbi va Oʻzbekiston madhiyasi kabi Oʻzbekiston Respublikasining rasmiy davlat ramzi sanaladi. 1991-yil 31-avgustda Oʻzbekiston Respublikasi oʻz mustaqilligini eʼlon qilganidan soʻng 1991-yilning 18 - noyabr.[2] Oʻzbekiston Respublikasi Oliy Kengashining VIII sessiyasida Oʻzbekiston Respublikasi davlat bayrogʻi toʻgʻrisidagi qonun qabul qilingan.")} </p>
            </section>
        </div>
    </div>
)
}

export default AboutPage
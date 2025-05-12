import { useTranslation } from 'react-i18next'
import bayrog from '../about/flag.png'

const AboutPage = () => {
    const {t, i18n} = useTranslation()
  return (
    <div className="bg-[#0b245f44] py-[30px] ">
        <div className="container mx-auto flex justify-between gap-50px">
            <img src={bayrog} alt="" className='w-[430px] h-[270px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>{t("O'zbekiston respublikasi bayrog'i")} </h1>
                <p className="max-w-[500px]">{t("Oʻzbekiston bayrogʻi — Oʻzbekiston gerbi va Oʻzbekiston madhiyasi kabi Oʻzbekiston Respublikasining rasmiy davlat ramzi sanaladi. 1991-yil 31-avgustda Oʻzbekiston Respublikasi oʻz mustaqilligini eʼlon qilganidan soʻng 1991-yilning 18 - noyabr.[2] Oʻzbekiston Respublikasi Oliy Kengashining VIII sessiyasida Oʻzbekiston Respublikasi davlat bayrogʻi toʻgʻrisidagi qonun qabul qilingan.")} </p>
            </section>
        </div>
    </div>
)
}

export default AboutPage
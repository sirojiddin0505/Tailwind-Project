import { useTranslation } from 'react-i18next'
import sum from '../sum/sum.png'


const SumPage = () => {
    const[t, i18n] = useTranslation()
  return (
    <div className="bg-[#9b8f85] py-[30px] ">
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[50px] sm:text-center  container mx-auto lg:flex lg:flex-row gap-50px">
            <img src={sum} alt="" className='w-[430px] h-[270px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>{t("O'zbekiston Respublikasi So'mi")} </h1>
                <p className="max-w-[90%] mx-auto">{t("Soʻm – Oʻzbekiston Respublikasining pul birligi. 1 Soʻm qimmati 100 tiyin. Xalqaro ifodasi UZS Soʻm Oʻzbekiston Respublikasi Prezidentining „Oʻzbekiston Respublikasining milliy valyutasini muomalaga kiritish toʻgʻrisida“gi 1994-yil 16-iyundagi farmoni bilan 1994-yilning 1-iyulidan respublika hududida yagona, cheklanmagan va qonuniy toʻlov vositasi sifatida muomalaga chiqarilgan")} </p>
            </section>
        </div>
    </div>
)
}

export default SumPage
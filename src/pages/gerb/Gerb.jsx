import { useTranslation } from 'react-i18next'
import gerb from '../gerb/gerb.png'


const GerbPage = () => {
  const{t, i18n} = useTranslation()
  return (
    <div className="bg-[#ffffff44] py-[30px] ">
        <div className="sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-[50px] sm:text-center container mx-auto lg:flex lg:flex-row lg:justify-between gap-50px">
            <img src={gerb} alt="" className='w-[350px] h-[300px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>{t("O'zbekiston respublikasi Gerbi")} </h1>
                <p className="max-w-[90%] mx-auto">{t(" Oʻzbekiston Respublikasining Davlat Gerbi — Oʻzbekiston Respublikasi rasmiy davlat ramzi. 1992-yil 2-iyulda qabul qilingan. Davlat gerbi — davlat mustaqilligining ramzlaridan biridir. Oʻzbekiston tarkibidagi Qoraqalpogʻiston respublikasi Oʻzbekiston gerbidan foydalanadi, lekin mintaqaviy ranglar koʻk, oltin va yashil rangga ega. Unda faqat bitta daryo, Amudaryo va togʻlarga tutashgan gerb fonida mahalliy yodgorlik mavjud.")} </p>
            </section>
        </div>
    </div> 
  )
}

export default GerbPage
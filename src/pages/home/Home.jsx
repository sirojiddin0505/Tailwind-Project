import React from 'react'
import img1 from '../home/img1.png'
import img2 from '../home/img2.png'
import img3 from '../home/img3.jpg'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const {t, i18n} = useTranslation()
  return (
    <div className='bg-cyan-100'> 
        <div className="container mx-auto px-[30px] py-[40px]">
            <h1 className='text-center py-[20px] text-[40px] font-bold'>{t("O'zbekiston Respublikasi")} </h1>
            <p className="mw-[1000px] mx-auto text-center">{t("Oʻzbekiston (rasman: Oʻzbekiston Respublikasi) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat. Poytaxti — Toshkent shahri. Davlat tili — oʻzbek tili. Maydoni — 448 978 km2[10]. Hozirda mamlakatning umumiy aholisi soni 37 milliondan ortiq[11]. Pul birligi — soʻm. Oʻzbekiston Respublikasi hududi 12 ta viloyat, Toshkent shahri va Qoraqalpogʻiston Respublikasidan iboratdir, shuningdek, u mustaqil, demokratik, dunyoviy va konstitutsiyaviy davlat hisoblanadi. Ammo, nodavlat tashkilotlar Oʻzbekistonni „fuqarolik huquqlari cheklangan avtoritar davlat“ deb taʼriflaganlar[12]. Oʻzbekiston MDH, BMT, YXHT va SHHT aʼzosidir. Oʻzbekiston berk hududda yaʼni qirgʻoqqa ega boʻlmagan besh mamlakat bilan, yaʼni: shimoldan Qozogʻiston; shimoli-sharqdan Qirgʻiziston; janubi-sharqdan Tojikiston; janubdan Afgʻoniston; va janubi-gʻarbiy qismida Turkmaniston bilan chegaradosh")} </p>
            <div className=" sm:flex sm:flex-wrap sm:justify-around  py-[30px] lg:flex flex items-center justify-between gap-[30px]">
                <img src={img1} alt="" className='w-[200px] h-250px mw-full'/>
                <img src={img2} alt="" className='w-[350px] h-250px mw-full'/>
                <img src={img3} alt="" className='w-[300px] h-250px '/>
            </div>
        </div>
    </div>
  )
}

export default HomePage
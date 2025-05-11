import constitutsiya from '../cons/image.png'

const ConsPage = () => {
  return (
      <div className="bg-[#0b245f44] py-[30px] ">
        <div className="container mx-auto flex justify-around gap-50px">
            <img src={constitutsiya} alt="" className='w-[350px] h-[320px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>O'zbekiston Respublikasi Konstitutsiyasi</h1>
                <p className="max-w-[500px]">1992-yil 8-dekabrda 12-chaqiriq Oʻzbekiston Respublikasi Oliy Kengashining 11-sessiyasida qabul qilingan. Oʻzbekiston Respublikasining Konstitutsiyasi qabul qilinganligini nishonlash maqsadida Konstitutsiya qabul qilingan kun – 8-dekabr umumxalq bayrami – Oʻzbekiston Respublikasi Konstitutsiyasi kuni deb eʼlon qilindi. „Oʻzbekiston Respublikasining davlat mustaqilligi toʻgʻrisida“gi Konstitutsiyaviy qonun (1991-yil 31-avgust) ushbu Konstitutsiya uchun asos boʻlib xizmat qilgan. </p>
            </section>
        </div>
    </div>
  )
}

export default ConsPage
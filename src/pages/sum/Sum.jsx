import sum from '../sum/sum.png'


const SumPage = () => {
  return (
    <div className="bg-[#9b8f85] py-[30px] ">
        <div className="container mx-auto flex justify-around gap-50px">
            <img src={sum} alt="" className='w-[430px] h-[270px]'/>
            <section className="">
                <h1 className='text-[35px] pb-[50px] '>O'zbekiston Respublikasi So'mi</h1>
                <p className="max-w-[500px]">Soʻm – Oʻzbekiston Respublikasining pul birligi. 1 Soʻm qimmati 100 tiyin. Xalqaro ifodasi UZS Soʻm Oʻzbekiston Respublikasi Prezidentining „Oʻzbekiston Respublikasining milliy valyutasini muomalaga kiritish toʻgʻrisida“gi 1994-yil 16-iyundagi farmoni bilan 1994-yilning 1-iyulidan respublika hududida yagona, cheklanmagan va qonuniy toʻlov vositasi sifatida muomalaga chiqarilgan</p>
            </section>
        </div>
    </div>
)
}

export default SumPage
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const languages = localStorage.getItem('i18nextLng')
    const handleChange = (event) =>{
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    }
    const{t, i18n} = useTranslation()
  return (
    <>
    <header className='bg-[#4a7dc4] border-b-2 border-b-[#080808] text-white relative'>
        <div className='container mx-auto p-[15px] flex justify-between items-center'>
            <Link to={'/'} className='font-semibold text-[20px] hover:opacity-[80%]'>{t("O'zbekiston")} </Link>
            <nav className='hidden sm:flex gap-[20px]'>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/about'}>{t("Bayrog'")} </Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/plan'}>{t("Gerb")}</Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/sum'}>{t("So'm")} </Link>
                <Link className='font-medium hover:opacity-[60%] text-[20px] ' to={'/cons'}>{t("Konstitutsiya")} </Link>
            </nav>
            <div className="flex items-center gap-[10px]">
                   <select onChange={handleChange} value={languages} className='font-medium text-[20px] bg-[#4a7dc4] outline-none  cursor-pointer'>
                        <option value="uz">Uz</option>
                        <option value="ru">Ru</option>
                        <option value="en">En</option>
                  </select>
            </div>
        </div>
    </header>
    </>
)
}

export default Header
import { ThemeContext } from "../../../page_telegram/main";
import React, { useContext } from 'react'

export default function IcBurger() {

    const {theme} = useContext(ThemeContext)
    return (

                <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                    <path fill="#0ea5e9" d="M64,128 H448 V87 H64 Z" />
                    <path fill={theme == 'dark' ? '#ffffff' : '#171717'} d="M64,248 H448 V203 H64 Z" />
                    <path fill={theme == 'dark' ? '#ffffff' : '#171717'} d="M64,384 H448 V341 H64 Z" />
                </svg>

    )

}

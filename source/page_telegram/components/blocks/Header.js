import React from "react"
import * as ReactDOM from 'react-dom/client';


const classesWrapper = ""
const classesHeader = "fixed ";
const classesLogoFirst = "font-['hexa'] font-bold text-neutral-900 text-[32px] leading-[49px]";
const classesLogoSecond = "font-['hexa'] font-bold text-sky-500 text-[32px] leading-[49px]";


export default function Header() {
    return (
        <>
            <header>
                <div>
                    <div className="fixed flex flex-row ">
                        <div>
                            <span className={classesLogoFirst}>its.</span>
                            <span className={classesLogoSecond}>dev</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
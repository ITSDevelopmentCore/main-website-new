import React from "react";
import TimeworkLight from '../../assets/media/2019-img.png';
import PlanetLight from '../../assets/media/Rus&euro.png';
import ProjectsLight from '../../assets/media/50projects.png';
import DigitalLight from '../../assets/media/Digital.png';
import TimeworkDark from '../../assets/media/2019-imgDark.png';
import PlanetDark from '../../assets/media/Rus&euroDark.png';
import ProjectsDark from '../../assets/media/50projectsDark.png';
import DigitalDark from '../../assets/media/DigitalDark.png';
import { isDarkThemeEnabled } from "../../../common/scripts/themeScripts";


export default function CardImg () {

return (
    <div className="desktop:inline-flex  desktop:space-x-9 
    large:flex
    tablets:flex-row">
    <div className="w-[350px] h-[350px]
    
     bg-white rounded-[50px] 
     items-center justify-center
dark:bg-slate-800">
        <img className={'items-center justify-center pl-[46px] pt-[25%]'} 
        src={isDarkThemeEnabled() ? TimeworkDark : TimeworkLight} />
    </div>
    <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
        <img className="pt-[15%] pl-[7px]" 
        src={isDarkThemeEnabled() ? PlanetDark : PlanetLight} />
    </div>
    <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
        <img className="pt-[20%] pl-[15px]" 
        src={isDarkThemeEnabled() ? ProjectsDark : ProjectsLight}  />

    </div>
    <div className="w-[350px] h-[350px] bg-white rounded-[50px]
dark:bg-slate-800">
        <img className="p-[15%]" 
        src={isDarkThemeEnabled() ? DigitalDark : DigitalLight} />
    </div>
</div>
)


}
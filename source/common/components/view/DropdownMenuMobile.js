import React from "react";

function DropdownMenuMobile() {
    return (
        <menu id={"dropdownMenuMobile"} className={'hidden absolute top-[70px] right-0 left-0'}>
            <ul>
                <DropdownMenuMobileCategory />
                <DropdownMenuMobileCategory />
                <DropdownMenuMobileCategory />
            </ul>
        </menu>
    )
}

function DropdownMenuMobileCategory() {
    return (
        <li tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <span className="collapse-title text-xl font-medium block">
                Focus me to see content
            </span>
            <ul className="collapse-content">
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </ul>
        </li>
    )
}


export default DropdownMenuMobile;

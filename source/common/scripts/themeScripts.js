import { changeThemeSwitcherState, hideDarkThemeModal } from "./changeViewByIdScripts";

export function isDarkThemeEnabled()
{
    return document.documentElement.classList.contains('dark');
}

export function setDarkTheme(enableDarkTheme)
{
    if (enableDarkTheme)
    {
        document.documentElement.classList.add('dark');
    }
    else 
    {
        document.documentElement.classList.remove('dark');
    }

    changeThemeSwitcherState(enableDarkTheme);
    hideDarkThemeModal();
}


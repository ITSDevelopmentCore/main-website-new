import { changeThemeSwitcherState, hideDarkThemeModal } from "./changeViewByIdScripts";

export function isTailwindDarkThemeEnabled()
{
    return document.documentElement.classList.contains('dark');
}

export function applyTailwindDarkTheme(enableDarkTheme)
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


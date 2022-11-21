import { LanguageSwitcher } from "./LanguageSwitcher"

type Header = {

}

export function Header(props:Header) {
    return(
        <div className="flex justify-between">
            <div className="p-4">
                <LanguageSwitcher />
            </div>

        </div>      
    )
}
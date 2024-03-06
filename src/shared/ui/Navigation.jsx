import { MyButton } from "./MyButton"

export const Navigation = ({handleOpenAbout, handleOpenWorks, handleOpenContact}) => {
    return (
        <ul className="header__nav">
            <li className="header__nav-buttons_container">
                <MyButton
                    className="header__button about-button" 
                    handleClick={handleOpenAbout}
                    text="О нас"
                />
            </li>
            <li className="header__nav-buttons_container">
                <MyButton
                    className="header__button contacts-button"
                    handleClick={handleOpenWorks}
                    text="Наши работы"
                />
            </li>
            <li className="header__nav-buttons_container">
                <MyButton
                    className="header__button contacts-button"
                    handleClick={handleOpenContact}
                    text="Контакты"
                />
            </li>
        </ul>
    )
}
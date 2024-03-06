import { Navigation } from "../shared/ui/Navigation"

export const Header = ({handleOpenAbout, handleOpenWorks, handleOpenContact}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Navigation 
                        handleOpenAbout={handleOpenAbout}
                        handleOpenWorks={handleOpenWorks}
                        handleOpenContact={handleOpenContact}
                    />
                </div>
            </div>
        </header>
    )
}
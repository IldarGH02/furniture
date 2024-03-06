import { useEffect, useState } from "react"
import { About } from "widgets/modals/About"
import { Header } from "../widgets/Header"
import { Contacts } from "widgets/modals/Contacts"

export const Home = () => {
    const handleOpenAbout = (e) => {
        const aboutButton = document?.querySelector('.about-button')
        const modalAbout = document.querySelector('.modal__about')
        const target = e.target

        if(target === aboutButton) {
            modalAbout.classList.add('active')
        }
    }

    // const handleClickContacts = (e) => {
    //     const contactsButton = document?.querySelector('.contacts-button')
    //     const target = e.target
    //     if(target === contactsButton) {
    //         setActiveContacts('active')   
    //     }
    // }
    
    const closeModalAbout = () => {   
        const modalAbout = document.querySelector('.modal__about')
        modalAbout.classList.remove('active')        
    }

    useEffect(() => {
        // if(openAbout === false) {
        //     modalAbout.classList.remove('.active')
        // }

        // const modalContacts = document.querySelector('.modal__contacts')
        // if(activeContacts) {
        //     modalContacts.classList.add(activeContacts)
        // }   
    }, [])

    return (
        <section className="home">
            <Header
                handleOpenAbout={handleOpenAbout}
                // handleOpenWorks={handleOpenWorks}
                // handleOpenContact={handleOpenContact}
            />
            <About
                handleClose={closeModalAbout}
            />
            <Contacts/>
        </section>
    )
}
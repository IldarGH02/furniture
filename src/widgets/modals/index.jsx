import { About } from "./About"
import { Contacts } from "./Contacts"
import { Works } from "./Works"

export const Sections = () => {
    return (
        <main className="main">
            <About/>
            <Works/>
            <Contacts/>
        </main>
    )
}
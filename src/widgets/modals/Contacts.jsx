import { Modal } from "shared/ui/Modal"

export const Contacts = () => {
    return (
        <Modal
            className="modal__contacts"
            children={
                <div className="container">
                    <div className="contacts__content">
                        <a href="tel:+7999123456" className="contacts__phone">+7999123456</a>
                        <a href="mailto:kooooooffe@gmail.com">Напишите нам на электронную почту</a>
                    </div>
                </div>
            }
        />
    )
}
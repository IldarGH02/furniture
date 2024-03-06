import { Modal } from "shared/ui/Modal"
import { MyButton } from "shared/ui/MyButton"
import { IoIosCloseCircleOutline } from "react-icons/io";


export const About = ({handleClose}) => { 
    return (
        <Modal 
            className='modal__about' 
            children={            
                <div className="container">
                    <div className="about__content">
                        <MyButton className="modal__close-button" handleClick={handleClose} text={<IoIosCloseCircleOutline/>}/>
                        <p className="about__text">
                            Мы предлагаем качественную мебель от 
                            производителя по выгодной стоимости без 
                            посреднических наценок. Мы не тратим средства на 
                            аренду помещения, оплату работы персонала и выплату 
                            коммунальных счетов. Это позволяет магазину вести 
                            лояльную ценовую политику в отношении наших покупателей 
                            и предлагать товар по демократичной стоимости.
                        </p>
                    </div>
                </div>
            }
        />
    )
}
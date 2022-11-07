import { useState } from "react";
import Check from "../Check";
import Modal from "../Modal";

const Sucess = ({ children, style, animate, toggle, ...props }) => {
    const [toggleModal, setToggleModal] = useState(false);
    return (
        <Modal
            toggle={toggleModal}
            setToggle={setToggleModal}
            transparent
            style={{
                width: 300,
            }}>
            <Check
                animate={animate}
                toggle={toggle}
                onStart={() => setToggleModal(true)}
                onClose={() => setToggleModal(false)} />
        </Modal>
    )
}

export default Sucess;
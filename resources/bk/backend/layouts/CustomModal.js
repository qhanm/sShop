import React, {forwardRef} from 'react';
import Modal from "@material-ui/core/Modal";

const CustomModal = ( (props, ref) => {

    const { isOpen } = props;
    return (
        <div>
            <Modal
                open={isOpen}
                // onClose={}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                wefewrffw
            </Modal>
        </div>
    )
})

export default CustomModal;

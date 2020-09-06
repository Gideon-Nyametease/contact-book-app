import React from 'react'
import PropTypes from 'prop-types'
import { Modal,Button } from 'antd'

const AddModal=({show,handleOnClose}) => {
    return (
        <Modal 
            Title="Add Contact"
            visible={show} 
            onClose={handleOnClose} 
            // closable={false}
            maskClosable={true}
            >
            <h1>Contact Form</h1>
        </Modal>
    )
}

AddModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleOnClose: PropTypes.func.isRequired,
};

export default AddModal 


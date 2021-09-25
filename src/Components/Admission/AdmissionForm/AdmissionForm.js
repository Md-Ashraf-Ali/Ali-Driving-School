import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AdmissionForm.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const AdmissionForm = ({modalIsOpen,closeModal,admissionOn, date}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
         console.log(data);
         closeModal();
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 style={{textAlign:'center',color:'green'}}>{admissionOn}</h2>
                <p style={{textAlign:'center',color:'green'}}><small>On {date.toDateString()}</small></p>
                <form onSubmit={handleSubmit(onSubmit)} style={{height:'200px',width:'500px'}}>
                    <div className="form-group">
                        <input type ='text' placeholder="your name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type ='email' placeholder="your email" {...register("email", { required: true })} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type ='password' placeholder="your password" {...register("password", { required: true })} />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <div className="form-group text-right">
                      <button className="btn btn-info" type="submit">Send</button>
                    </div>                 
                </form>
            </Modal>
        </div>
    );
};

export default AdmissionForm;
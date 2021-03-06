import React, { useState } from 'react';
import axios from 'axios';
import styles from './qa.module.css';

const ModalQuestions = ({showModal, setShowModal, productId, closeModal}) => {
    const [values, setValues] = useState({
        question: '',
        nickname: '',
        email: '',
    });

    const handleQuestionChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            question: event.target.value,
        }));
    };

    const handleNicknameChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            nickname: event.target.value,
        }));
    };

    const handleEmailChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("sending from modal questions: ", productId)
        axios.post(`/api/questions/`, {
            body: values.question,
            name: values.nickname,
            email: values.email,
            product_id: parseInt(productId)
        })
        .then(() =>  {
            closeModal();
            setValues((values) => ({
                ...values,
                question: '',
                nickname: '',
                email: '',
            }));
        })
        .catch((err) => console.log(err));
    }

    return (
        <>
            {showModal ? <div className={styles.modalmain} onClick={() => {closeModal()}}>
                <form onSubmit={handleSubmit} className={styles.modalContent} onClick={e => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}>
                <p>
                <button className={styles.closeButton} onClick={closeModal}>X</button>
                </p>
                    <p>
                    <label>Your Question*:</label>
                    <input className={styles.formInput} placeholder="Ask your question" maxLength="1000" name="answer" value={values.question} onChange={handleQuestionChange} required></input>
                    </p>
                    <br />
                    <p>
                    <label>Your Nickname*:</label>
                    <input className={styles.formInput} type="text" placeholder='Example: jackson11' maxLength="60" name="nickname" value={values.nickname} onChange={handleNicknameChange} required />
                    </p>
                    <br />
                    <p>
                    <label>Your Email*:</label>
                    <input className={styles.formInput} type="email" placeholder='Example: jack@email.com' maxLength="60" name="email" value={values.email} onChange={handleEmailChange} required />
                    </p>
                    <br />
                    <p>
                    <button className={styles.modalButton}>Submit Question</button>
                    </p>
                </form>
            </div> : null}
        </>
    )
}

export default ModalQuestions;
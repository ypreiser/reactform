// src\components\Form\index.jsx
import { useState } from 'react'
import styles from './style.module.css'

export default function Form({ setUsersData, userData }) {

    const [error, setError] = useState({ first_name: '', last_name: '', email: '', password: '' })
    const [formState, setFormState] = useState(localStorage.user ? JSON.parse(localStorage.user) : { first_name: '', last_name: '', email: '', password: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(Object.values(formState));
        const isDuplicateEmail = userData.some(user => user.email === formState.email);
        if (!Object.values(error).join("") && Object.values(formState).every(value => value !== "")) {
            if (!isDuplicateEmail) {
                setUsersData((old) => [...old, formState]);
            }
        }


    }

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,15}$/;

        return passwordRegex.test(password);
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState((old) => {
            const newData = { ...old, [name]: value };
            localStorage.user = JSON.stringify(newData);
            return newData;
        });

        setError((old) => ({ ...old, [name]: '' }));
        if (name === 'password') {
            if (value.length < 6 || !validatePassword(value)) {
                setError((old) => ({
                    ...old,
                    [name]: 'Password should contain at least one uppercase, one lowercase, and one digit, and be 6 to 15 characters long',
                }));
            }
        }
        if (name === 'first_name') {
            if (value.length < 1) {
                setError((old) => ({ ...old, [name]: 'Please enter your first name', }));
            }
        }
        if (name === 'last_name') {
            if (value.length < 1) {
                setError((old) => ({ ...old, [name]: 'Please enter your last name', }));
            }
        }
        if (name === 'email') {
            if (!validateEmail(value)) {
                setError((old) => ({ ...old, [name]: 'Please enter a valid email', }));
            }
        }
    };


    return (

        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label >
                    First Name  &nbsp;
                    <input className="styles.form-input" type="text" name="first_name" value={formState.first_name} onChange={handleChange} />
                </label>
                <div className={` ${styles.error} ${error.first_name ? styles.vis : ''}`}>
                    {error.first_name}</div><br />

                <label >
                    Last Name &nbsp;
                    <input className="styles.form-input" type="text" name="last_name" value={formState.last_name} onChange={handleChange} />
                </label>
                <div className={` ${styles.error} ${error.last_name ? styles.vis : ''}`}>
                    {error.last_name}</div><br />

                <label >
                    Email &nbsp;
                    <input className="styles.form-input" type="text" name="email" value={formState.email} onChange={handleChange} />
                </label>
                <div className={` ${styles.error} ${error.email ? styles.vis : ''}`}>
                    {error.email}</div><br />

                <label >
                    password &nbsp;
                    <input className="styles.form-input" type="password" name="password" value={formState.password} onChange={handleChange} />
                </label>
                <div className={` ${styles.error} ${error.password ? styles.vis : ''}`}>
                    {error.password}</div><br />
                <button type='submit'>create user</button>
            </div>
        </form>
    )
}
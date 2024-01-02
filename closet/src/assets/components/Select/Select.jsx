import React from 'react';
import styles from './Select.module.css';

const Select = (props) => {
    return (
        <div>
            <label className={styles.label} htmlFor={props.label}>{props.label}</label>
            <select className={styles.select} id={props.label}>
                <option className={styles.option} value="0">Escolha a opção</option>
                {
                    props.options.map((option) => (
                    <option  value={option.id}>{option.tamanho}</option>
                    ))
                }
            </select>
        </div>
    );
}

export default Select;
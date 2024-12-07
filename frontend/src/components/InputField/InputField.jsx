import PropTypes from "prop-types";
import styles from '@/components/InputField/InputField.module.css'

const InputField = ({variable, setVariable, labelText}) => {
    
    const handleChange = (e) => {
        setVariable(e.target.value)
    }
    
    return (
        <>
            <div className={styles.input_component}>
                <label className={styles.input_label}>
                    {labelText}
                </label>
                <input
                    className={styles.input_field}
                    value={variable}
                    onChange={handleChange}
                />
            </div>
        </>
    );
};

InputField.propTypes = {
    variable: PropTypes.array.isRequired,
    setVariable: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired
}

export default InputField;

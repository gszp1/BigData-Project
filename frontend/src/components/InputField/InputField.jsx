import PropTypes from "prop-types";
import styles from '@/components/InputField/InputField.module.css'

const InputField = ({variable, setVariable, labelText, propertyName, errorLabel}) => {
    
    const handleChange = (e) => {
        setVariable({
            ...variable,
            [propertyName]: e.target.value
        });
    };
    
    return (
        <>
            <div className={styles.input_component}>
                <label className={styles.input_label}>
                    {labelText}
                </label>
                <input
                    className={styles.input_field}
                    value={variable[propertyName]}
                    onChange={handleChange}
                />
                <p className={styles.error_label}>
                    {errorLabel}
                </p>
            </div>
        </>
    );
};

InputField.propTypes = {
    variable: PropTypes.object.isRequired,
    setVariable: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    errorLabel: PropTypes.string.isRequired
}

export default InputField;

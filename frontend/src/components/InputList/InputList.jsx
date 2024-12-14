import PropTypes from "prop-types";
import styles from "@/components/InputList/InputList.module.css"

const InputList = ({variable, setVariable, labelText, propertyName, errorLabel, values}) => {
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
                <select
                    value={variable[propertyName]}
                    onChange={handleChange}
                    className={styles.input_field}
                >
                {values.map((val, index) => (
                    <option key={index} value={val}>{val}</option>
                ))}
                </select>
                <p className={styles.error_label}>
                    {errorLabel}
                </p>
            </div>
        </>
    );
}

InputList.propTypes = {
    variable: PropTypes.object.isRequired,
    setVariable: PropTypes.func.isRequired,
    labelText: PropTypes.string.isRequired,
    propertyName: PropTypes.string.isRequired,
    errorLabel: PropTypes.string.isRequired,
    values: PropTypes.array.isRequired
}

export default InputList;
import PropTypes from 'prop-types';
import styles from '/frontend/src/components/ParagraphTitle/ParagraphTitle.module.css'

const ParagraphTitle = ({title}) => {
    return (
        <>
            <p className={styles.title}>
                {title}
            </p>
        </>
    )
}

export default ParagraphTitle;

ParagraphTitle.propTypes = {
    title: PropTypes.string.isRequired
}
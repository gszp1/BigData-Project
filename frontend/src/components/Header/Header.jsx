import PropTypes from 'prop-types'
import styles from '/src/components/Header/Header.module.css'

const Header = ({ text, subText}) => {
    return (
        <>  
            <div className={styles.component}>
                <h1 className={styles.header}>
                    {text} 
                </h1>
                <p className={styles.sub_text}>
                    {subText}
                </p>
            </div>
        </>
    )
};

Header.propTypes = {
    text: PropTypes.string.isRequired,
    subText: PropTypes.string
};

export default Header;
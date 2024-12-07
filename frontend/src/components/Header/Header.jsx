import PropTypes from 'prop-types'
import styles from '/src/components/Header/Header.module.css'

const Header = ({ text }) => {
    return (
        <>  
            <h1 className={styles.component}>
                {text}      
            </h1>
        </>
    )
};

Header.propTypes = {
    text: PropTypes.string.isRequired
};

export default Header;

import PropTypes from 'prop-types';
import Logo from '/src/components/Logo/Logo.jsx';
import Header from '/src/components/Header/Header.jsx';
import styles from '/src/components/Banner/Banner.module.css'

const Banner = ({ banner_text }) => {
    return (
        <>
            <div className={styles.banner}>
                <Logo/>
                <Header text={banner_text}/>
            </div>
        </>
    )    
};

Banner.propTypes = {
    banner_text: PropTypes.string.isRequired
};



export default Banner;



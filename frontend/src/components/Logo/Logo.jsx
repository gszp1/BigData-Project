import styles from '@/components/Logo/Logo.module.css' 
import icon from '@/assets/images/Page-Icon.png'

const Logo = () => {
    return (
        <>
            <img
                src={icon}
                className = {styles.logo}
            />
        </>
    )
}

export default Logo;

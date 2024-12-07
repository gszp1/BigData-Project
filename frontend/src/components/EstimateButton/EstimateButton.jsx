import styles from '@/components/EstimateButton/EstimateButton.module.css'

const EstimateButton = () => {
    return (
        <>
            <div className={styles.button_container}>
                <button className={styles.button}>
                    Estimate
                </button>
            </div>
        </>
    )
}

export default EstimateButton;
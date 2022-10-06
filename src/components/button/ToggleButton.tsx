import styles from './toggleButton.module.css';

export const ToggleButton = (props: any) => {
    const { label, onClick } = props;

    return (
        <button onClick={onClick} className={styles.button}>
            {label}
        </button>
    );
};

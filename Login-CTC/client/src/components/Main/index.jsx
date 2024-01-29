import styles from './styles.css';

const Main = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };
    return(
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Logging Out</h1>
                <button className={styles.blue_btn} onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    );
};
export default Main;
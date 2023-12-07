import GoogleIcon from "../../common/images/google.png";
import WorkXLogo from "../../common/images/workx.png";
import styles from './Login.module.scss'

const Login = () => {
    return <section className={styles.outerWrapper}>
        <div className={styles.logoContainer}>
            <img src={WorkXLogo} alt="Work-X-Logo" />
            <span>Work-X</span>
        </div>
        <div className={styles.welcomeText}>
            <span>Welcome!</span>
            <p>To use Work-X please login with your Webtrigon ID.</p>
        </div>
        <button>
            <img src={GoogleIcon} alt="Google Logo" />
            <p>LOGIN WITH GMAIL</p>
        </button>
    </section>
}

export default Login;

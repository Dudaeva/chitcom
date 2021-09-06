import styles from "./Auth.module.css";

function SignUp() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <form id="login-form" method="POST">
                        <div>
                            <label htmlFor="display-name">Name</label>
                            <input type="text" name="display-name" id="display-name" />
                        </div>
                        <div>
                            <label htmlFor="email">Login</label>
                            <input name="login" />
                        </div>
                        <div>
                            <label htmlFor="email">Аватарка</label>
                            <input name="image" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" autoComplete="off" name="password" id="password" />
                        </div>
                        <div>
                            <button id="submit-button" name="submit-button">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
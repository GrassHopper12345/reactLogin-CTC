import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import cssStyles from "./styles.module.css";

const Login = () => {
    const [data, setData] = useState({ emails: "", password: "", });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (e) {
            if (
                e.response &&
                e.response.status >= 400 &&
                e.response.status >= 500
            ) {
                setError(e.response.data.messsage);
            }
        }
    };
    return (
        <div className={styles.login_container}>
            <div className={styles.login_form_container}>
                <div className={styles.left}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h1>Login into Your Account</h1>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            required
                            className={styles.input}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
                            className={styles.input}
                        />
                        {e && <div className={styles.error_msg}>{e}</div>}
                        <button type="submit" className={styles.blue.btn}>Sign-In</button>
                    </form>
                </div>
                <div className={styles.right}>
                    <h1>Are You New?</h1>
                    <Link to="/signup">
                        <button className={styles.yellow_btn} type="button">Sign-Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
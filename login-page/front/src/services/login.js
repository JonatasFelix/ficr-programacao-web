import axios from "axios";
import {BASE_URL} from "../constants/BASE_URL";

export const login = async (email, password, setError, setLoading) => {

    setLoading(true);
    setError({ show: false, message: "" });
    await axios.post(`${BASE_URL}/users/login`, {
        email: email,
        password: password
    }).then((res) => {
        localStorage.setItem('token', res.data.token);
    }).catch((err) => {
        setError({ show: false, message: err.response.message });
    });
    setLoading(false);
};
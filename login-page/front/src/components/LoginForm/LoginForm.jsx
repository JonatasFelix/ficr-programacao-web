import { useState, useEffect } from "react";
import { TextField, Button, CircularProgress, FormHelperText } from "@mui/material";

const LoginForm = () => {

    const [error, setError] = useState({ show: false, message: "" });
    const { form, onChange, clean } = useForm({ name: "", email: "", password: ""});
    const [loading, setLoading] = useState(false);
    const { samePassword, setSamePassword } = useState("");


    useEffect (() => {
        if ((password.length && form.password.length) && (samePassword !== form.password)) {
            setSamePassword(false);
        }

    }, [form.password, samePassword]);
    

    return (
        <GenericToast
        open={error.show}
        severity="error"
        message={error.message}
        close={() => setError({ show: false, message: "" })}
      />
    )

};

export default LoginForm;
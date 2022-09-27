import { useState, useEffect } from "react";
import { TextField, Button, CircularProgress, FormHelperText } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import GenericToast from "../../components/GenericToast/GenericToast";
import EmailChecker from "../../utils/EmailChecker";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PasswordChecker from "../../utils/PasswordChecker";


const LoginForm = () => {

    const [error, setError] = useState({ show: false, message: "" });
    const { form, onChange, clean } = useForm({ email: "", password: ""});
    const [loading, setLoading] = useState(false);
    const [ samePassword, setSamePassword ] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);


    useEffect (() => {
        if ((samePassword.length && form.password.length) && (samePassword !== form.password)) {
            setSamePassword(false);
        }

    }, [form.password, samePassword]);
    

    return (
        <>
        <GenericToast
        open={error.show}
        severity="error"
        message={error.message}
        close={() => setError({ show: false, message: "" })}
      />
    
      <TextField style={{margin: "16px 0 8px 0"}}
            error={form.email === "" ? false : !EmailChecker(form.email)}
            placeholder="email@email.com"
            label="Email"
            type={"text"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          {form.email === "" ? false : !EmailChecker(form.email) && (
            <FormHelperText error>Digite um e-mail válido</FormHelperText>
          )}


<FormControl style={{margin: "16px 0 8px 0"}} required variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              error={form.password === "" ? false : PasswordChecker(form.password)}
              placeholder="Mínimo 6 caracteres"
              margin="dense"
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              name={"password"}
              value={form.password}
              onChange={onChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {form.password === ""
          ? null
          : PasswordChecker(form.password) && (
              <FormHelperText error>Digite uma senha valida.</FormHelperText>
        )}

    </>
    )

};

export default LoginForm;
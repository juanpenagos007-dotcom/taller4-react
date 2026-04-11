// features/auth/components/Login.jsx
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Link,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import axios from "axios";

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

function Login() {
  const [form, setForm] = useState("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // VALIDACIÓN
  const validate = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value) error = "El correo es obligatorio";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        error = "Correo no válido";
    }

    if (name === "password") {
      if (!value) error = "La contraseña es obligatoria";
      else if (value.length < 6)
        error = "Mínimo 6 caracteres";
    }

    if (name === "confirmPassword") {
      if (value !== password)
        error = "Las contraseñas no coinciden";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (errors.email || errors.password || errors.confirmPassword) {
    alert("Corrige los errores antes de continuar");
    return;
  }

  // 🔹 REGISTER
  if (form === "register") {
    try {
      await axios.post("https://taller4-backend.onrender.com/api/auth/register", {
        email,
        password,
      });

      alert("Usuario registrado ");

      //  VOLVER A LOGIN AUTOMÁTICO
      setForm("login");

    }    catch (error) {
         if (error.response) {
         alert(error.response.data.message);
       } else {
         alert("Error de conexión con el servidor");
      }

   }

    return;
  }

  // 🔹 LOGIN
  if (form === "login") {
    try {
      const response = await axios.post(
        "https://taller4-backend.onrender.com/api/auth/login",
        { email, password }
      );

      const user = response.data.user;

      //  GUARDAR USUARIO
      localStorage.setItem("user", JSON.stringify(user));

      alert(`Bienvenido ${user.email} `);

      //  REDIRECCIÓN A GASTOS
      window.location.href = "/gastos";

    } catch (error) {
      if (error.response?.status === 400 || error.response?.status === 401) {
       alert(error.response.data.message);
      } else {
       alert("Error del servidor");
      }
    }

    return;
  }

  // 🔹 RECOVER
  if (form === "recover") {
    alert("Se envió un enlace de recuperación 📧");
  }
};

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0D1117 0%, #111827 100%)",
      }}
    >
      <Header />

      <Container sx={{ flex: 1, py: 8 }}>
        <Paper
          sx={{
            maxWidth: 400,
            mx: "auto",
            p: 5,
            borderRadius: 3,
            background: "#161B22",
            border: "1px solid #1F2937",
          }}
        >
          {/* TÍTULO */}
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="white"
            gutterBottom
          >
            {form === "login"
              ? "Iniciar sesión"
              : form === "register"
              ? "Crear cuenta"
              : "Recuperar contraseña"}
          </Typography>

          {/* FORMULARIO */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* EMAIL */}
            <TextField
              label="Correo electrónico"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validate("email", e.target.value);
              }}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  color: "white",
                  "& fieldset": { borderColor: "#374151" },
                  "&:hover fieldset": { borderColor: "#A78BFA" },
                  "&.Mui-focused fieldset": { borderColor: "#8B5CF6" },
                },
                "& .MuiInputLabel-root": { color: "#9CA3AF" },
                "& .MuiInputBase-input": {
                  backgroundColor: "transparent",
                },
              }}
            />

            {/* PASSWORD */}
            {form !== "recover" && (
              <>
                <TextField
                  label="Contraseña"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validate("password", e.target.value);
                  }}
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ color: "white" }} />
                          ) : (
                            <Visibility sx={{ color: "white" }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      "& fieldset": { borderColor: "#374151" },
                      "&:hover fieldset": { borderColor: "#A78BFA" },
                      "&.Mui-focused fieldset": {
                        borderColor: "#8B5CF6",
                      },
                    },
                    "& .MuiInputLabel-root": { color: "#9CA3AF" },
                    "& .MuiInputBase-input": {
                      backgroundColor: "transparent",
                    },
                  }}
                />

                {/* OLVIDÉ CONTRASEÑA */}
                {form === "login" && (
                  <Box sx={{ textAlign: "right" }}>
                    <Link
                      component="button"
                      color="#A5B4FC"
                      onClick={() => setForm("recover")}
                      sx={{ fontSize: "0.9rem" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Box>
                )}
              </>
            )}

            {/* CONFIRM PASSWORD */}
            {form === "register" && (
              <TextField
                label="Confirmar contraseña"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  validate("confirmPassword", e.target.value);
                }}
                fullWidth
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": { borderColor: "#374151" },
                  },
                  "& .MuiInputLabel-root": { color: "#9CA3AF" },
                  "& .MuiInputBase-input": {
                    backgroundColor: "transparent",
                  },
                }}
              />
            )}

            {/* BOTONES */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  background:
                    "linear-gradient(135deg, #3B82F6, #A78BFA)",
                }}
              >
                {form === "login"
                  ? "Iniciar sesión"
                  : form === "register"
                  ? "Crear cuenta"
                  : "Enviar recuperación"}
              </Button>

              <Button
                type="button"
                fullWidth
                onClick={() => {
                  setForm("login");
                  setEmail("");
                  setPassword("");
                  setConfirmPassword("");
                }}
                sx={{
                  py: 1.5,
                  fontWeight: "bold",
                  color: "#9CA3AF",
                  border: "1px solid #374151",
                }}
              >
                Cancelar
              </Button>
            </Box>
          </Box>

          {/* LINKS */}
          <Box sx={{ textAlign: "center", mt: 2 }}>
            {form === "login" && (
              <Link
                component="button"
                color="#A5B4FC"
                onClick={() => setForm("register")}
              >
                Crear cuenta
              </Link>
            )}

            {form !== "login" && (
              <Link
                component="button"
                color="#A5B4FC"
                onClick={() => setForm("login")}
              >
                Volver al login
              </Link>
            )}
          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Login;
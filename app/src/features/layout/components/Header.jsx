import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

import { ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  //  USER STATE
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  //  NOMBRE BONITO
  const nombre = user?.email
    ? user.email.split("@")[0].charAt(0).toUpperCase() +
      user.email.split("@")[0].slice(1)
    : "";

  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Gastos", path: "/gastos" },
    { text: "Metas", path: "/metas" },
    { text: "Estadísticas", path: "/estadisticas" },
    { text: "Acerca de", path: "/acerca" },
    { text: "Ver API", path: "/ApiRyC" },
  ];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #111827, #1E293B)",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          borderBottom: "1px solid #3B4252",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          
          {/* LOGO */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              background: "linear-gradient(90deg, #8B5CF6, #3B82F6, #22D3EE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            onClick={() => navigate("/")}
          >
            Moon🌙
          </Typography>

          {/* BOTONES DESKTOP */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
              alignItems: "center"
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  textTransform: "none",
                  color: "#A5B4FC",
                  fontWeight: "bold",
                  "&:hover": { color: "#FFFFFF" },
                }}
              >
                {item.text}
              </Button>
            ))}

            {/*  LOGIN / LOGOUT */}
            {user ? (
              <>
                <Typography color="white">
                  {nombre}
                </Typography>

                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    navigate("/login");
                    window.location.reload();
                  }}
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    fontWeight: "bold",
                    background: "#EF4444",
                    color: "white",
                  }}
                >
                  Cerrar sesión
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #3B82F6, #A78BFA)",
                }}
              >
                Iniciar sesión
              </Button>
            )}
          </Box>

          {/* BOTÓN HAMBURGUESA */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" }, color: "white" }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            background: "#111827",
            height: "100%",
            color: "white",
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.text}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            {/* LOGIN / LOGOUT MOBILE */}
            {user ? (
              <ListItem
                button
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                  window.location.reload();
                }}
              >
                <ListItemText primary="Cerrar sesión" />
              </ListItem>
            ) : (
              <ListItem
                button
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Iniciar sesión" />
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;
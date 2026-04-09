import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Container, Typography, Box, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #0D1117 0%, #111827 100%)",
        width: "100%",
      }}
    >
      <Header />

      {/* Contenido principal */}
      <Box sx={{ flex: 1, py: 6, width: "100%" }}>
        <Container maxWidth={false}>
          {/* Bienvenida con efecto glow */}
          <Box
            sx={{
              textAlign: "center",
              p: 5,
              borderRadius: 3,
              background:
                "radial-gradient(circle at top, rgba(167,139,250,0.2), transparent 70%)",
              mb: 6,
            }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom color="white">
              Controla tu dinero. Cumple tus metas.
            </Typography>

            {/* Línea decorativa */}
            <Box
              sx={{
                width: 100,
                height: 5,
                margin: "20px auto",
                borderRadius: 2,
                background: "linear-gradient(90deg, #3B82F6, #A78BFA)",
              }}
            />

            <Typography variant="h6" color="#9CA3AF" mb={3}>
              Lleva tus finanzas a la luna con Moon
            </Typography>

            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #3B82F6, #A78BFA)",
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => navigate("/acerca")}
            >
              Conoce Moon
            </Button>
          </Box>

          {/* Tarjetas de información clickeables */}
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Gestiona tus gastos */}
            <Box
              onClick={() => navigate("/gastos")}
              sx={{ cursor: "pointer", flex: 1, minWidth: 250, maxWidth: 300 }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #22C55E, #16A34A)",
                  boxShadow: "0 0 20px rgba(34,197,94,0.3)",
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>
                  Gestiona tus gastos
                </Typography>
                <Typography color="white">
                  Registra tus ingresos y egresos de manera simple y rápida.
                </Typography>
              </Paper>
            </Box>

            {/* Visualiza tus metas */}
            <Box
              onClick={() => navigate("/metas")}
              sx={{ cursor: "pointer", flex: 1, minWidth: 250, maxWidth: 300 }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>
                  Visualiza tus metas
                </Typography>
                <Typography color="white">
                  Visualiza tu progreso y alcanza tus objetivos financieros.
                </Typography>
              </Paper>
            </Box>

            {/* Estadísticas claras */}
            <Box
              onClick={() => navigate("/estadisticas")}
              sx={{ cursor: "pointer", flex: 1, minWidth: 250, maxWidth: 300 }}
            >
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #F59E0B, #D97706)",
                  boxShadow: "0 0 20px rgba(245,158,11,0.3)",
                  height: "100%",
                }}
              >
                <Typography variant="h6" color="white" gutterBottom>
                  Estadísticas claras
                </Typography>
                <Typography color="white">
                  Observa gráficas y reportes que te muestran cómo va tu dinero.
                </Typography>
              </Paper>
            </Box>
          </Box>

          {/* Tip informativo */}
          <Box
            sx={{
              mt: 10,
              p: 4,
              borderRadius: 3,
              background: "#161B22",
              border: "1px solid #1F2937",
              textAlign: "center",
              maxWidth: 600,
              mx: "auto",
            }}
          >
            <Typography variant="h6" color="white" gutterBottom>
              Tip del día
            </Typography>
            <Typography color="#9CA3AF">
              Revisa tus gastos cada semana para mantener tus finanzas bajo control y cumplir tus metas más rápido.
            </Typography>
          </Box>


            <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
            onClick={() => window.open("https://github.com/juanpenagos007-dotcom/taller4-react")}
            sx={{
            background: "linear-gradient(135deg, #6366F1, #A78BFA)",
            color: "white",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            boxShadow: "0 0 15px rgba(167,139,250,0.5)",
            "&:hover": {
            background: "linear-gradient(135deg, #818CF8, #C4B5FD)",
            },
          }}
        >
         Ver repositorio en GitHub 🚀
      </Button>
    </Box>    

        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
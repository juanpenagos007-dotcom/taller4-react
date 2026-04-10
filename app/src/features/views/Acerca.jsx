// features/views/Acerca.jsx
import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";

function Acerca() {
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

      <Container sx={{ flex: 1, py: 6 }}>
        {/* Título */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" color="white" gutterBottom>
            Acerca de Moon 🌙
          </Typography>
          <Typography color="#9CA3AF" variant="h6">
            Aprende cómo Moon puede ayudarte a controlar tus finanzas de manera simple y divertida.
          </Typography>
        </Box>

        {/* Historia y misión */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "#161B22",
              border: "1px solid #1F2937",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typography variant="h5" color="#A78BFA" gutterBottom>
              Nuestra historia
            </Typography>
            <Typography color="#9CA3AF">
              Moon nació de la necesidad de simplificar la gestión financiera personal. 
              Queremos que todos puedan llevar un control claro de sus ingresos, gastos y metas, 
              sin complicaciones y con una experiencia agradable.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "#161B22",
              border: "1px solid #1F2937",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typography variant="h5" color="#3B82F6" gutterBottom>
              Nuestra misión
            </Typography>
            <Typography color="#9CA3AF">
              Ayudar a las personas a alcanzar sus metas financieras, ofreciendo herramientas 
              intuitivas y visuales para gestionar sus ingresos, gastos y ahorrar de manera efectiva.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 800,
              borderRadius: 3,
              background: "#161B22",
              border: "1px solid #1F2937",
              boxShadow: "0 0 20px rgba(0,0,0,0.3)",
            }}
          >
            <Typography variant="h5" color="#22C55E" gutterBottom>
              Qué puedes hacer con Moon
            </Typography>
            <Typography color="#9CA3AF">
              - Gestionar tus ingresos y gastos <br />
              - Visualizar tus metas financieras y progreso <br />
              - Consultar estadísticas claras de tu dinero <br />
              - Recibir tips diarios para ahorrar y planificar mejor
            </Typography>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Acerca;
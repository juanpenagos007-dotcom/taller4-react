// features/views/Metas.jsx
import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Button } from "@mui/material";
import { useState } from "react";

function Metas() {
  const [progreso, setProgreso] = useState(40); // ejemplo de porcentaje de meta

  const handleAhorrar = () => {
    setProgreso((prev) => Math.min(prev + 10, 100));
  };

  const handleRetirar = () => {
    setProgreso((prev) => Math.max(prev - 10, 0));
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0D1117" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6, textAlign: "center" }}>
        <Typography variant="h3" color="white" gutterBottom>
          Visualiza tus metas 🚀
        </Typography>

        <Box
          sx={{
            mt: 4,
            width: 300,
            height: 300,
            mx: "auto",
            borderRadius: "50%",
            border: "5px solid #3B82F6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            color: "white",
          }}
        >
          <Typography variant="h4">{progreso}%</Typography>
        </Box>

        <Box sx={{ mt: 4, display: "flex", gap: 3, justifyContent: "center" }}>
          <Button variant="contained" onClick={handleAhorrar} sx={{ background: "#22C55E" }}>
            Ahorrar
          </Button>
          <Button variant="contained" onClick={handleRetirar} sx={{ background: "#EF4444" }}>
            Retirar
          </Button>
        </Box>

        {progreso === 100 && (
          <Typography variant="h5" color="#FACC15" mt={3}>
            🎉 ¡Felicidades! Has alcanzado tu meta.
          </Typography>
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default Metas;
import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Enero', ingresos: 2000, gastos: 1200 },
  { name: 'Febrero', ingresos: 2500, gastos: 1500 },
  { name: 'Marzo', ingresos: 1800, gastos: 1000 },
  { name: 'Abril', ingresos: 3000, gastos: 2000 },
];

function Estadisticas() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#0D1117" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>
        <Typography variant="h3" color="white" textAlign="center" gutterBottom>
          Estadísticas claras 📊
        </Typography>

        <Paper sx={{ p: 4, mt: 4, borderRadius: 3, background: "#161B22" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
              <XAxis dataKey="name" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  borderRadius: 8,
                  border: "1px solid #3B4252",
                  fontFamily: "'Comic Neue', cursive", // fuente amigable
                  fontSize: 14,
                  color: "#FFFFFF",
                  padding: "8px 12px",
                }}
                itemStyle={{
                  color: "#FFFFFF",
                  fontFamily: "'Comic Neue', cursive",
                }}
              />
              <Bar dataKey="ingresos" fill="#22C55E" />
              <Bar dataKey="gastos" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Estadisticas;
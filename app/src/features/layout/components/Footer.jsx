import { Box, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background: "#0D1117",
        borderTop: "1px solid #1F2937",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            background: "linear-gradient(90deg, #A78BFA, #E5E7EB)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Moon 🌙
        </Typography>
        <Typography variant="body2" color="#9CA3AF">
          Controla tus gastos y alcanza tus metas
        </Typography>
      </Box>

      {/* Contacto */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        mb={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contacto
          </Typography>
          <Typography variant="body2" color="#9CA3AF">
            <Email fontSize="small" sx={{ mr: 0.5 }} />
            moon@finanzas.com
          </Typography>
          <Typography variant="body2" color="#9CA3AF">
            <Phone fontSize="small" sx={{ mr: 0.5 }} />
            +57 300 123 4567
          </Typography>
        </Box>

        {/* Redes sociales */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Síguenos
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <Link href="#" color="inherit"><Facebook /></Link>
            <Link href="#" color="inherit"><Twitter /></Link>
            <Link href="#" color="inherit"><Instagram /></Link>
          </Stack>
        </Box>

        {/* Dirección */}
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Dirección
          </Typography>
          <Typography variant="body2" color="#9CA3AF">
            Calle Luna 123, Medellín, Colombia
          </Typography>
        </Box>
      </Stack>

      <Typography variant="caption" color="#9CA3AF" display="block" textAlign="center">
        © {new Date().getFullYear()} Moon. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;
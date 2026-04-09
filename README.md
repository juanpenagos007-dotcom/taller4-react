# 🌙 Moon – Control de Gastos Inteligente

## 📌 Descripción
Moon es una aplicación web desarrollada con React que permite a los usuarios gestionar sus ingresos y gastos de manera sencilla. Cuenta con autenticación de usuarios, almacenamiento en base de datos y una interfaz moderna.

El sistema permite registrar usuarios, iniciar sesión, guardar movimientos financieros y visualizar un historial personalizado por usuario.

---

## 🚀 Características principales

- 🔐 Registro e inicio de sesión con validación
- 👤 Identificación de usuario (bienvenida personalizada)
- 💰 Registro de ingresos y gastos
- 📊 Cálculo automático de balance
- 📋 Historial de movimientos
- 🧠 Persistencia de datos con MongoDB
- 🌐 Consumo de API con Axios
- 📱 PWA (Progressive Web App)
- 🎨 Interfaz moderna con Material UI

---

## 🛠️ Tecnologías utilizadas

### Frontend
- React
- Vite
- Material UI (MUI)
- Axios
- React Router

### Backend
- Node.js
- Express
- MongoDB
- Mongoose

---


## 📁 Estructura del proyecto

```
react4/
└── t4_proyect/
    ├── backend/
    │   ├── models/
    │   │   ├── User.js
    │   │   └── Gasto.js
    │   └── index.js
    │
    ├── public/
    │   └── img/
    │       ├── favicon.ico
    │       ├── android-chrome-192x192.png
    │       ├── android-chrome-512x512.png
    │       └── apple-touch-icon.png
    │
    ├── src/
    │   ├── assets/
    │   │
    │   ├── features/
    │   │   ├── auth/
    │   │   │   └── components/
    │   │   │       └── Login.jsx
    │   │   │
    │   │   ├── layout/
    │   │   │   └── components/
    │   │   │       ├── Header.jsx
    │   │   │       └── Footer.jsx
    │   │   │
    │   │   └── views/
    │   │       ├── Home.jsx
    │   │       ├── Gastos.jsx
    │   │       ├── Metas.jsx
    │   │       ├── Estadisticas.jsx
    │   │       └── ApiRyC.jsx
    │   │
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/juanpenagos007-dotcom/taller4-react.git

2. Entrar al proyecto
cd t4_proyect

3. Instalar dependencias (frontend)
npm install

4. Instalar dependencias (backend)
cd backend
npm install

▶️ Ejecución
Backend
cd backend
node index.js
Frontend
npm run dev

🧩 Arquitectura

El proyecto sigue una arquitectura separada:

Frontend (React): Maneja la interfaz y consumo de API
Backend (Express): Maneja lógica, rutas y conexión a base de datos
Base de datos (MongoDB): Guarda usuarios y gastos

📸 Capturas de pantalla



Ejemplo:

Login
Dashboard (Gastos)
PWA

🌍 Deploy

La aplicación será desplegada en Vercel.
link:https://taller4-react-zqi3.vercel.app

👨‍💻 Autor

Juan Benitez
📍 ADSO - SENA
💻 Desarrollador Full Stack en formación

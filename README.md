🌙 Moon – Control de Gastos Inteligente
📌 Descripción

Moon es una aplicación web desarrollada con React que permite a los usuarios gestionar sus ingresos y gastos de manera sencilla. Cuenta con autenticación de usuarios, almacenamiento en base de datos y una interfaz moderna.

El sistema permite registrar usuarios, iniciar sesión, guardar movimientos financieros y visualizar un historial personalizado por usuario.

🚀 Características principales
🔐 Registro e inicio de sesión con validación
👤 Identificación de usuario (bienvenida personalizada)
💰 Registro de ingresos y gastos
📊 Cálculo automático de balance
📋 Historial de movimientos
🧠 Persistencia de datos con MongoDB Atlas
🌐 Consumo de API con Axios
🎨 Interfaz moderna con Material UI
🚀 Deploy en producción (frontend + backend)
🛠️ Tecnologías utilizadas
Frontend
React
Vite
Material UI (MUI)
Axios
React Router
Backend
Node.js
Express
MongoDB
Mongoose
bcrypt
Deploy
Vercel (Frontend)
Render (Backend)
MongoDB Atlas (Base de datos)

📁 Estructura del proyecto
react4/
└── t4_proyect/
    ├── backend/
    │   ├── models/
    │   │   ├── User.js
    │   │   └── Gasto.js
    │   └── index.js
    │
    ├── public/
    ├── src/
    │   ├── features/
    │   │   ├── auth/
    │   │   │   └── components/
    │   │   │       └── Login.jsx
    │   │   ├── layout/
    │   │   └── views/
    │   ├── App.jsx
    │   └── main.jsx
    
⚙️ Instalación
1. Clonar el repositorio
git clone https://github.com/juanpenagos007-dotcom/taller4-react.git
2. Entrar al proyecto
cd t4_proyect
3. Instalar frontend
npm install
4. Instalar backend
cd backend
npm install

▶️ Ejecución local
Backend
cd backend
node index.js
Frontend
npm run dev

🧩 Arquitectura del sistema
Frontend (React) → interfaz de usuario y consumo de API
Backend (Express) → lógica de negocio y autenticación
Base de datos (MongoDB Atlas) → almacenamiento de usuarios y gastos

🌍 Deploy
🔵 Frontend: https://taller4-react-gg61.vercel.app
🟢 Backend: https://taller4-backend.onrender.com
👨‍💻 Autor

Juan Benitez
📍 ADSO - SENA
💻 Desarrollador Full Stack en formación

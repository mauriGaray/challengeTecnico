// Inicializamos el servidor
const express = require("express");
const app = express();
const swaggerSetup = require("./swaggerConfig");

const methodOverride = require("method-override");
const path = require("path");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./src/routers/authRoutes");
// Configuración de Swagger
swaggerSetup(app);
// Cargar las variables de entorno desde el archivo .env
dotenv.config({ path: path.resolve(__dirname, ".env") });

const PORT = process.env.PORT || 3000;

// Middlewares para analizar el cuerpo de la solicitud
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

// Servir archivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Rutas de la API
app.use("/api", authRoutes);

// Ruta catch-all para servir el frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => console.log(`Server is listening on localhost:${PORT}`));

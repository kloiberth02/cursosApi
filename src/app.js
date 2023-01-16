const express = require("express");
const initModels = require("./models/init.models");
const db = require("./utils/database");
const usersRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const videosRoutes = require("./routes/videos.routes");
const categoriesRoutes = require("./routes/categories.routes");

const app = express();

app.use(express.json());

const PORT = 8000;

// conexion con la base de datos
db.authenticate()
  .then(() => console.log("Autenticacion exitosa"))
  .catch((error) => console.log(error));

// sincrionizacion con la base de datos
initModels();

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});

app.use("/api/v2", usersRoutes);
app.use("/api/v2", coursesRoutes);
app.use("/api/v2", categoriesRoutes);
app.use("/api/v2", videosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo el el puerto ${PORT}`);
});

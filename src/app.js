const express = require("express");
const mongoose = require("mongoose");

const commandeRoutes = require("./routes/commande");
const ingredientRoutes = require("./routes/ingredient");
const platRoutes = require("./routes/plat");
const produitRoutes = require("./routes/produit");
const recetteRoutes = require("./routes/recette");
const reservationRoutes = require("./routes/reservation");
const roleRoutes = require("./routes/role");
const salleRoutes = require("./routes/salle");
const userRoutes = require("./routes/user");

const app = express();
app.use(express.json());

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*"); // Permet de dire que tout le monde peut y accéder
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	); // L'autorisation ici de certains en-tête
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);
	next(); // L'autorisation des différentes méthodes HHTP
});

mongoose
	.connect(
		// "mongodb+srv://joshAdmin:KSdLKW83iM6uM5z@cluster0.wdfge.mongodb.net/restaurant?retryWrites=true&w=majority",
		"mongodb+srv://joshAdmin:KSdLKW83iM6uM5z@cluster0.wdfge.mongodb.net/restaurant",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/commandes", commandeRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/plats", platRoutes);
app.use("/api/produits", produitRoutes);
app.use("/api/recettes", recetteRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/salles", salleRoutes);
app.use("/api/users", userRoutes);

app.use(express.static("public"));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

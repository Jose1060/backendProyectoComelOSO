const { Schema, model } = require("mongoose");

const restauranteSchema = new Schema({
	nombre: { type: String, required: true },
	direccion: { type: String, required: true },
	telefono: { type: String, required: true },
	email: { type: String, required: true },
	imagen: { type: String, required: true },
	descripcion: { type: String, required: true },
	comentarios: [
		{
			idUsuario: { type: String, required: true },
			contenido: { type: String, required: true },
			idRestaurante: { type: String, required: true },
		},
	],
});

module.exports = model("Restaurante", restauranteSchema);

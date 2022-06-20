const Restaurantes = require("./models/Restaurantes");
const Restaurante = require("./models/Restaurantes");

const resolvers = {
	Query: {
		hello: () => "Hola",
		getAllRestaurantes: async () => {
			const restaurantes = await Restaurante.find();
			return restaurantes;
		},
		getRestaurante: async (_, args) => {
			const rest = await Restaurante.findById(args.id);
			return rest;
		},
	},
	Mutation: {
		createRestaurante: async (_, args) => {
			const { nombre, direccion, telefono, email, imagen, descripcion } =
				args.Restaurante;
			const newRest = new Restaurante({
				nombre,
				direccion,
				telefono,
				email,
				imagen,
				descripcion,
			});
			await newRest.save();
			console.log(newRest);
			return newRest;
		},
		deleteRestaurante: async (_, args) => {
			const rest = await Restaurantes.findByIdAndDelete(args.id);
			return "Restaurante eliminado";
		},
		updateRestaurante: async (_, { rest, id }) => {
			console.log(Restaurante, id);
			const restUpdated = await Restaurantes.findByIdAndUpdate(
				id,
				{
					$set: rest,
				},
				{ new: true }
			);
			return restUpdated;
		},
	},
};

module.exports = { resolvers };

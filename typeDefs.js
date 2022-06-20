const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Restaurante {
		id: ID
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
	}

	input RestauranteInput {
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
	}

	type Query {
		hello: String
		getAllRestaurantes: [Restaurante]
		getRestaurante(id: ID): Restaurante
	}

	type Mutation {
		createRestaurante(Restaurante: RestauranteInput!): Restaurante
		deleteRestaurante(id: ID!): String
		updateRestaurante(id: ID!, rest: RestauranteInput): Restaurante
	}
`;

module.exports = { typeDefs };

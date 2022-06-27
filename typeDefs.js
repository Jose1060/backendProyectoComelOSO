const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Comentario {
		idUsuario: ID
		contenido: String
		idRestaurante: ID
	}

	input ComentarioInput {
		idUsuario: ID
		contenido: String
		idRestaurante: ID
	}

	type Restaurante {
		id: ID
		nombre: String
		direccion: String
		telefono: String
		email: String
		imagen: String
		descripcion: String
		comentarios: [Comentario]
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
		getComentarios(idRest: ID): [Restaurante]
	}

	type Mutation {
		createRestaurante(Restaurante: RestauranteInput!): Restaurante
		createComentario(idRest: ID!, Comentario: ComentarioInput!): Restaurante
		deleteRestaurante(id: ID!): String
		updateRestaurante(id: ID!, rest: RestauranteInput): Restaurante
	}
`;

module.exports = { typeDefs };

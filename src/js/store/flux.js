const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personaje: {},
			planetas: [],
			
			baseUrl: "https://www.swapi.tech/api/",

		},
		actions: {

			obtenerCaracteres: async () => {
				const store = getStore();
				const actions = getActions();
				return await fetch(`${store.baseUrl}people/`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Respuesta del servicio: ', datosRespuesta);
					setStore  ({ personajes: datosRespuesta.results});
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},


			obtenerPersonaje: async (id) => {
				const store = getStore();
				return await fetch(`${store.baseUrl}people/${id}`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Datos del personaje: ', datosRespuesta.result);
					setStore  ({ personaje: datosRespuesta.result });
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},


			obtenerPlanetas: () => {
				const store = getStore();
				return fetch (`${store.baseUrl}planets/`, {
					method: 'GET',
				}).then (respuesta => {
					if (!respuesta.ok) {
						throw new Error ('No fue ok ', respuesta.statusText)
					}
					return respuesta.json()

				}).then (datosRespuesta => {
					console.log('Respuesta del servicio: ', datosRespuesta);
					setStore  ({ planetas: datosRespuesta });
					return datosRespuesta
				})
				.catch(esError => {
					console.log('Error: '+ esError);
				})

			},

			
		}
	};
};

export default getState;

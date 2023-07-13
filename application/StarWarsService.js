const axios = require('axios');

class StarWarsService {
  async getStarWarsCharacters() {
    try {
      const response = await axios.get('https://swapi.py4e.com/api/people/');
      const characters = response.data.results;
      // Adaptar y transformar los nombres de atributos al español aquí si es necesario
      return characters;
    } catch (error) {
      throw new Error('Error al obtener los personajes de Star Wars');
    }
  }
}

module.exports = StarWarsService;
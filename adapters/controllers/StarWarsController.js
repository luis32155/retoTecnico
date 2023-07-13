// Adaptación del modelo de personaje de Star Wars
const adaptarPersonaje = (personaje) => {
  return {
    nombre: personaje.name,
    altura: personaje.height,
    peso: personaje.mass,
    colorCabello: personaje.hair_color,
    colorPiel: personaje.skin_color,
    colorOjos: personaje.eye_color,
    añoNacimiento: personaje.birth_year,
    género: personaje.gender,
    películas: personaje.films,
    especies: personaje.species,
    vehículos: personaje.vehicles,
    navesEstelares: personaje.starships,
    creado: personaje.created,
    editado: personaje.edited,
    url: personaje.url,
  };
};
class StarWarsController {
  constructor(starWarsService) {
    this.starWarsService = starWarsService;
  }

  async getStarWarsCharacters(req, res) {
    try {
      const characters = await this.starWarsService.getStarWarsCharacters();
      const personajesAdaptados = characters.map(adaptarPersonaje);
      res.json(personajesAdaptados);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los personajes de Star Wars' });
    }
  }
}

module.exports = StarWarsController;
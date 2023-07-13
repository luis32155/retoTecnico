

class ModeloController {
    constructor(modeloService) {
      this.modeloService = modeloService;
    }
  
    async getAllModelos(req, res) {
      try {
        const modelos = await this.modeloService.getAllModelos();
        res.json(modelos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la data almacenada' });
      }
    }
  
    async createModelo(req, res) {
      const { nombre, descripcion } = req.body;
  
      try {
        await this.modeloService.createModelo(nombre, descripcion);
        res.status(201).json({ message: 'Modelo creado exitosamente' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el modelo' });
      }
    }
  }
  
  module.exports = ModeloController;
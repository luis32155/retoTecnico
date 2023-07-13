const  Modelo  = require('../../Core/Modelo');

class ModeloRepository {
  async getAllModelos() {
    return Modelo.findAll();
  }

  async createModelo(nombre, descripcion) {
    return Modelo.create({ nombre, descripcion });
  }
}

module.exports = ModeloRepository;
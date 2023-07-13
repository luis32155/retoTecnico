class ModeloService {
    constructor(modeloRepository) {
      this.modeloRepository = modeloRepository;
    }
  
    async getAllModelos() {
      return this.modeloRepository.getAllModelos();
    }
  
    async createModelo(nombre, descripcion) {
      return this.modeloRepository.createModelo(nombre, descripcion);
    }
  }
  
  module.exports = ModeloService;
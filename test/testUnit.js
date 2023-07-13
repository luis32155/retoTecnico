const ModeloController = require('./adapters/controller/ModeloController');
const StarWarsController = require('./adapters/controller/StarWarsController');
const ModeloService = require('./services/ModeloService');
const StarWarsService = require('./services/StarWarsService');

// Mock de dependencias
jest.mock('./services/ModeloService');
jest.mock('./services/StarWarsService');

// Test de ModeloController
describe('ModeloController', () => {
  let modeloController;
  let modeloService;

  beforeEach(() => {
    modeloService = new ModeloService();
    modeloController = new ModeloController(modeloService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllModelos should return an array of modelos', async () => {
    const mockModelos = [
      { id: 1, nombre: 'Modelo 1', descripcion: 'Descripción 1' },
      { id: 2, nombre: 'Modelo 2', descripcion: 'Descripción 2' },
    ];

    modeloService.getAllModelos.mockResolvedValue(mockModelos);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await modeloController.getAllModelos(req, res);

    expect(res.json).toHaveBeenCalledWith(mockModelos);
    expect(res.status).not.toHaveBeenCalled();
  });

  test('createModelo should create a new modelo', async () => {
    const req = {
      body: { nombre: 'Nuevo Modelo', descripcion: 'Descripción del nuevo modelo' },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await modeloController.createModelo(req, res);

    expect(modeloService.createModelo).toHaveBeenCalledWith(req.body.nombre, req.body.descripcion);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Modelo creado exitosamente' });
  });
});

// Test de StarWarsController
describe('StarWarsController', () => {
  let starWarsController;
  let starWarsService;

  beforeEach(() => {
    starWarsService = new StarWarsService();
    starWarsController = new StarWarsController(starWarsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getStarWarsCharacters should return an array of Star Wars characters', async () => {
    const mockCharacters = [
      { nombre: 'Luke Skywalker', altura: '172', masa: '77', color_pelo: 'blond', color_piel: 'fair', color_ojos: 'blue' },
      { nombre: 'Darth Vader', altura: '202', masa: '136', color_pelo: 'none', color_piel: 'white', color_ojos: 'yellow' },
    ];

    starWarsService.getStarWarsCharacters.mockResolvedValue(mockCharacters);

    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await starWarsController.getStarWarsCharacters(req, res);

    expect(res.json).toHaveBeenCalledWith(mockCharacters);
    expect(res.status).not.toHaveBeenCalled();
  });
});
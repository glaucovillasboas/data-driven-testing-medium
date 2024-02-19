import determinarElegibilidadeParaBolsa from '../../functions/determinarElegibilidadeParaBolsa.js';

describe('Testes da função determinarElegibilidadeParaBolsa sem DDT', () => {
  it('deve retornar "Elegível como bolsista" quando a renda familiar é menor ou igual a 2000 e a média de notas é maior que 7', () => {
    expect(determinarElegibilidadeParaBolsa(1500, 9)).toBe('Elegível como bolsista');
  });

  it('deve retornar "Não elegível: renda familiar acima do limite." quando a renda familiar é maior que 2000', () => {
    expect(determinarElegibilidadeParaBolsa(2500, 9)).toBe('Não elegível: renda familiar acima do limite');
  });

  it('deve retornar "Não elegível: média de notas abaixo do mínimo." quando a média de notas é menor que 8', () => {
    expect(determinarElegibilidadeParaBolsa(1500, 7)).toBe('Não elegível: média de notas abaixo do mínimo');
  });

  it('deve retornar "Não elegível: renda familiar acima do limite e média de notas abaixo do mínimo." quando a renda familiar é maior que 2000 e a media de notas é menor que 8', () => {
    expect(determinarElegibilidadeParaBolsa(2500, 7)).toBe('Não elegível: renda familiar acima do limite e média de notas abaixo do mínimo');
  });

  it('não deve retornar "Elegível como bolsista" quando a média de notas é undefined ', () => {
    expect(determinarElegibilidadeParaBolsa(1500, undefined)).not.toBe('Elegível como bolsista');
  });

  it('não deve retornar "Elegível como bolsista" quando a renda familiar é undefined', () => {
    expect(determinarElegibilidadeParaBolsa(undefined, 9)).not.toBe('Elegível como bolsista');
  });

  it('não deve retornar "Elegível como bolsista" quando a renda familiar e média de notas são undefined', () => {
    expect(determinarElegibilidadeParaBolsa(undefined, undefined)).not.toBe('Elegível como bolsista');
  });
});

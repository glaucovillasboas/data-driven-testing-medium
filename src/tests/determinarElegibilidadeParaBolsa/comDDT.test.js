import determinarElegibilidadeParaBolsa from '../../functions/determinarElegibilidadeParaBolsa.js';
  
describe('Testes da função determinarElegibilidadeParaBolsa com DDT', () => {
  it.each([
    { rendaFamiliar: 1500, mediaNotas: 9, resultadoEsperado: 'Elegível como bolsista' },
    { rendaFamiliar: 2500, mediaNotas: 9, resultadoEsperado: 'Não elegível: renda familiar acima do limite' },
    { rendaFamiliar: 1500, mediaNotas: 7, resultadoEsperado: 'Não elegível: média de notas abaixo do mínimo' },
    { rendaFamiliar: 2500, mediaNotas: 7, resultadoEsperado: 'Não elegível: renda familiar acima do limite e média de notas abaixo do mínimo' },
    { rendaFamiliar: 1500, mediaNotas: undefined, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: undefined, mediaNotas: 9, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: undefined, mediaNotas: undefined, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: null, mediaNotas: 9, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: 1500, mediaNotas: null, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: null, mediaNotas: null, resultadoEsperado: 'Dados inválidos' },
    { rendaFamiliar: 0, mediaNotas: 9, resultadoEsperado: 'Elegível como bolsista' },
    { rendaFamiliar: 1500, mediaNotas: 0, resultadoEsperado: 'Não elegível: média de notas abaixo do mínimo' },
    { rendaFamiliar: 0, mediaNotas: 0, resultadoEsperado: 'Não elegível: média de notas abaixo do mínimo' },
  ])(
    'deve retornar "$resultadoEsperado" quando renda familiar for $rendaFamiliar e média de notas for $mediaNotas',
    ({ rendaFamiliar, mediaNotas, resultadoEsperado }) => {
      expect(determinarElegibilidadeParaBolsa(rendaFamiliar, mediaNotas)).toBe(resultadoEsperado);
    }
  );
});

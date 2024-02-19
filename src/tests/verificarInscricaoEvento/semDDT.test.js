import verificarInscricaoEvento from "../../functions/verificarInscricaoEvento";

describe("Testes da função verificarInscricaoEvento sem DDT", () => {
  it("deve permitir inscrição para maiores de 18 anos", () => {
    expect(verificarInscricaoEvento(19, false)).toBe("Inscrição permitida");
  });

  it("deve permitir inscrição para menores de 18 anos com autorização", () => {
    expect(verificarInscricaoEvento(17, true)).toBe("Inscrição permitida com autorização");
  });

  it("não deve permitir inscrição para menores de 18 anos sem autorização", () => {
    expect(verificarInscricaoEvento(17, false)).toBe("Inscrição não permitida");
  });
});

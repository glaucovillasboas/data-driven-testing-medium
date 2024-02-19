function determinarElegibilidadeParaBolsa(rendaFamiliar, mediaNotas) {
  if (typeof rendaFamiliar !== "number" || typeof mediaNotas !== "number") {
    return "Dados inválidos";
  }

  if (rendaFamiliar > 2000 && mediaNotas < 8) {
    return "Não elegível: renda familiar acima do limite e média de notas abaixo do mínimo";
  } else if (rendaFamiliar > 2000) {
    return "Não elegível: renda familiar acima do limite";
  } else if (mediaNotas < 8) {
    return "Não elegível: média de notas abaixo do mínimo";
  }

  return "Elegível como bolsista";
}

export default determinarElegibilidadeParaBolsa;

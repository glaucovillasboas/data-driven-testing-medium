function verificarInscricaoEvento(idade, temAutorizacao) {
  if (idade < 18 && !temAutorizacao) {
    return "Inscrição não permitida";
  } else if (idade < 18 && temAutorizacao) {
    return "Inscrição permitida com autorização";
  }

  return "Inscrição permitida";
}

export default verificarInscricaoEvento;

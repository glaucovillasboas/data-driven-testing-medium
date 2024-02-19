# Data-Driven Testing com Jest

Este repositório foi criado para complementar meu artigo no medium: <LINK-DO-ARTIGO>, sobre Data-Driven Testing (DDT). Se você não o leu ainda, recomendo fazer isso antes de partir para o desafio.

Este repo contém um exemplo prático da implementação de **Testes Orientados a Dados (Data-Driven Testing - DDT)** usando Javascript e Jest. E também tem um desafio caso você queira tentar implementar o DDT por conta própria.

## Setup do projeto

Para instalar as dependências do projeto, basta rodar o comando:
```bash
yarn install
```

## Rodando testes
Para rodar os testes basta utilizar o comando:
```bash
yarn test <caminho-do-teste>
```

Exemplo:
```bash
yarn test src/tests/determinarElegibilidadeParaBolsa/comDDT.test.js
```

## Desafio

Escreva testes automatizados para a função `src/functions/verificarInscricaoEvento.js` com base no [artigo no medium](<LINK-DO-ARTIGO>) e encontre os bugs que se escondem nos casos de borda. Boa sorte! :)

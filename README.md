# Data-Driven Testing com Jest

Este repositório foi criado para complementar meu artigo no medium sobre Data-Driven Testing (DDT). Se você não o leu ainda, recomendo fazer isso antes de partir para o desafio:

[Artigo: Escreva testes mais robustos com o DDT (Data-Driven Testing)](https://medium.com/@glaucovillasboas/escreva-testes-mais-robustos-com-o-ddt-data-driven-testing-ddd89d5985d1)

Este repo contém um exemplo prático da implementação de **Testes Orientados a Dados (Data-Driven Testing - DDT)** usando Javascript e Jest. E também tem um desafio caso você queira tentar implementar o DDT por conta própria. :)

## Pré-requisitos
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

Caso não tenha essas ferramentas instaladas, você pode seguir o tutorial disponível [neste artigo](https://kinsta.com/pt/blog/como-instalar-o-node-js/#como-instalar-o-nodejs-no-windows).

## Setup do projeto

Para instalar as dependências do projeto, basta rodar o comando:
```bash
npm install
```

## Rodando testes
Para rodar os testes basta utilizar o comando:
```bash
npm run test caminho/do/teste
```

Exemplo:
```bash
npm run test src/tests/determinarElegibilidadeParaBolsa/comDDT.test.js
```

## Desafio

Escreva testes automatizados para a função `src/functions/verificarInscricaoEvento.js` com base no [artigo do medium](https://medium.com/@glaucovillasboas/escreva-testes-mais-robustos-com-o-ddt-data-driven-testing-ddd89d5985d1) e encontre os bugs que se escondem nos casos de borda. Boa sorte! :)

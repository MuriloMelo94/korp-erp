# KorpErp

O projeto foi desenvolvido como etapa obrigatória para a entrevista da vaga de Estágio de Desenvolvedor(a) Web Fullstack ( C# e Angular) da Viasoft Korp

O projeto foi gerado com:

* [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.
* [Node v20.11.1](https://nodejs.org/en) version v20.11.1.
* [JSON-serve](https://github.com/typicode/json-server) version 0.1.0.

## Configurando o servidor JSON-serv (fake API)

Foi o utilizado o JSON-serve como api de dados para otimizar o uso do tempo no desafio. Para configurar esse serviço, você já deve ter instalado o Node (links na lista acima).

Abra um terminal (Ex.: GitBash)

Instale o json-server, através do comando:

`npm install -g json-server`

Os dados da fake API do JSON-serve estarão no arquivo `db.json`, localizado na raiz desse projeto. Os dados do arquivo possuem a seguinte estrutura de exemplo: 

 ```json
 {  
 	"itens":[  
 	{
      "id": "9e3f",
      "produto": "Caixa de papelão",
      "quantidade": 10,
      "descricao": "caixa para organizar coisas"
    },
    {
      "id": "9b44",
      "produto": "Plástico bolha",
      "quantidade": 5,
      "descricao": "para proteger utensilios"
    }
 	]
 }
 ```

Volte para o terminal e rode o comando:

`json-server --watch db.json`

O JSON-serve utilizará, por default, o caminho  http://localhost:3000 para fornecer os dados. Caso a porta esteja ocupada, uma outra será fornecida e, somente nesse último caso, atualize as informações da variável _'baseURL'_ localizada no arquivo `src/app/item/item.service.ts`.


## Instalando e rodando o projeto Angular

### Build

Para buildar o projeto, rode o comando `ng build` no seu terminal.

### Servidor do Angular

Finalmente, abra um novo terminal e rode o comando `ng serve` para levantar o servidor do Angular com nossa aplicação. Navegue até http://localhost:4200/ para utilizar o sistema. Caso a porta `4200` esteja ocupada, haverá um aviso no seu terminal.

## Ideias e melhorias futuras

* Integração com API Rest em C#
* Melhoria no módulo de estoque com categoria de produto
* Paginação de itens no estoque
* Módulo de vendas (alterando o estoque automaticamente)
* Módulo de cadastro de clientes e fornecedores
* Módulo de gerenciamento financeiro (receitas, despesas e previsões)
* Módulo de integração com correios e sistemas logísticos
* Aprimoramentos visuais, etc

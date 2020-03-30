## :page_facing_up: Índice

- [Sobre](#about)
- [Primeiros passos](#getting_started)
- [Rotas](#routes)
- [Feito com](#built_using)
- [Licença](#license)

## 🧐 Sobre <a name = "about"></a>

Backend da aplicação Be The Hero.

## 🏁 Primeiros passos <a name = "getting_started"></a>

Estas instruçōes te darão uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

Instalar as dependências

```sh
yarn install
```

### Rodando a aplicação:

```sh
yarn start
```

## :truck: Rotas <a name = "routes"></a>

| MÉTODO        | ROTA                                     | BODY       | HEADER                    | QUERY                        | FUNÇÃO                                                              |
| ------------- | ---------------------------------------- | ---------- | ------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| POST          | /ongs                                    | JSON       |                           |                              | Cria uma ONG no banco de dados.                                     |
| <br />        |                                          |            |                           |                              |                                                                     |
| GET           | /incidents?page=                         |            |                           | page = Número da página;     | Lista todos os casos existentes.                                    |
| PUT           | /incidents/:id                           | JSON       | authorization = ID da ONG |                              | Atualiza informações de um caso.                                    |
| DELETE        | /incidents/:id                           |            | authorization = ID da ONG |                              | Deleta um caso.                                                     |
| POST          | /incidents                               | JSON       | authorization = ID da ONG |                              | Cadastra um caso.                                                   |
| <br />        |                                          |            |                           |                              |                                                                     |
| GET           | /profile                                 |            | authorization = ID da ONG |                              | Lista os casos criados pela ong passada no header de authorization. |
| <br />        |                                          |            |                           |                              |                                                                     |
| POST          | /session                                 | JSON       |                           |                              | Retorna o ID de acesso nos headers.                                 |

## ⛏️ Feito com <a name = "built_using"></a>

- [NodeJS](https://nodejs.org/en/)
- [Sucrase](https://github.com/alangpierce/sucrase)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/)
- [KnexJS](https://knexjs.org/)
- [Jest](https://jestjs.io/)
- [Yup](https://github.com/jquense/yup)

## :memo: Licença <a name = "license"></a>

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

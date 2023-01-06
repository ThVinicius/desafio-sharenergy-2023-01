<h1 align="center">
  Desafio Sharenergy 2023
</h1>
<div align="center">

  <h3>Construido com</h3>

  <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" height="30px"/>
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" height="30px"/>
  <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" height="30px"/>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" height="30px"/>

  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Sumário

- [Documentação das rotas da API](#api)
  - [Rota de autenticação](#auth-routes)
    - [Acessar uma conta](#sign-in)
  - [Rota dos usuários aleatórios](#random-users-routes)
    - [Buscar todos os usuários](#get-random-users)
  - [Rotas dos clientes](#customers-routes)
    - [Cadastrar um cliente](#post-customers)
    - [Buscar todos os clientes](#get-customers)
    - [Buscar um cliente pelo seu ID](#get-customers-by-id)
    - [Atualizar as informações de um cliente](#update-customers)
    - [Deletar um cliente](#delete-customers)
- [Rodar localmente](#run)
- [Rodar os testes](#tests)
- [Descrição do desafio](#challenge)

#

<div id='api'/>

# Documentação das rotas da API

<div id='auth-routes'/>

## Rota de autenticação

<div id='sign-in'/>

### Acessar uma conta

Rota para acessar uma conta. Retorna um token JWT em caso de sucesso.

```http
POST /sign-in
```

<h3>Mandar pelo body da requisição:</h3>

| Parâmetro  | Tipo     | Descrição                      |
| :--------- | :------- | :----------------------------- |
| `username` | `string` | **Obrigatório**, **não vazio** |
| `password` | `string` | **Obrigatório**, **não vazio** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `401`       | _Username ou senha incorretos_    |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200
- Retorno:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY1OTcxMTg1LCJleHAiOjE2Njg1NjMxODV9.2_7HCz4GjAE5RzmTQhFVhSAjqLBRkX51pRJ-3BCarRQ"
}
```

#

<div id='random-users-routes'/>

## Rota dos usuários aleatórios

<div id='get-random-users'/>

### Buscar todos os usuários

Rota para buscar 50 usuários aleatórios

- Rota autenticada (precisa enviar o token JWT no headers)

```http
GET /random-users
```

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200
- Retorno:

```json
[
  {
    "picture": "https://randomuser.me/api/portraits/men/74.jpg",
    "name": "Samuel Kari",
    "username": "lazycat973",
    "email": "samuel.kari@example.com",
    "age": 67
  },
  {
    "picture": "https://randomuser.me/api/portraits/men/3.jpg",
    "name": "Kirk Barrett",
    "username": "bigkoala578",
    "email": "kirk.barrett@example.com",
    "age": 71
  }
  .
  .
  .
]
```

#

<div id='customers-routes'/>

## Rotas dos clientes

<div id='post-customers'/>

### Cadastrar um cliente

- Rota autenticada (precisa enviar o token JWT no headers)
- email e cpf são únicos, ou seja, não pode fazer cadastros com o mesmo email ou cpf

```http
POST /customers
```

<h3>Mandar pelo body da requisição:</h3>

| Parâmetro | Tipo     | Descrição                                                                             |
| :-------- | :------- | :------------------------------------------------------------------------------------ |
| `name`    | `string` | **Obrigatório**; **não vazio**                                                        |
| `email`   | `string` | **Obrigatório**; **formato de email**                                                 |
| `phone`   | `string` | **Obrigatório**; **em um dos seguintes formatos: (99) 9.9999-9999 ou (99) 9999-9999** |
| `address` | `object` | **Obrigatório**                                                                       |
| `cpf`     | `string` | **Obrigatório**; **no seguinte formato: 999.999.999-99**                              |

- O objeto `address` deve se der as chaves com seus valores:
  - `cep`: no formato `99999-99`
  - `state`: string com 2 de tamanho (SP, RJ, etc)
  - `city`: string não vazia
  - `district`: string não vazia
  - `street`: string não vazia
  - `number`: string não vazia

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `409`       | _Conflito de email ou cpf_        |

<h3>Em caso de sucesso:</h3>

- Status code
  - 201
- Retorno:
  - id do cliente

```json
{
  "id": "63b8362b327af9f932e5a61d"
}
```

#

<div id='get-customers'/>

### Buscar todos os clientes

- Rota autenticada (precisa enviar o token JWT no headers)

```http
GET /customers
```

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200
- Retorno:
  - todos os clientes cadastrados

```json
[
  {
    "_id": "63b7016ccca9516f8e656671",
    "name": "Gonzaga Rocha",
    "email": "gonzaga.rocha.test@example.com",
    "phone": "(51) 4190-6888",
    "address": {
      "cep": "16920-000",
      "state": "SP",
      "city": "Castilho",
      "street": "Rua Barão de Vitória",
      "number": "4416",
      "district": "Casa Grande"
    },
    "cpf": "732.688.215-08"
  },
  {
    "_id": "63b7016ccca9516f8e656672",
    "name": "Armando Freitas",
    "email": "armando.freitas@example.com",
    "phone": "(87) 6157-1293",
    "address": {
      "cep": "20040-002",
      "state": "RJ",
      "city": "Rio de Janeiro",
      "district": "Centro",
      "street": "Avenida Rio Branco",
      "number": "1416"
    },
    "cpf": "196.803.692-09"
  }
]
```

#

<div id='get-customers-by-id'/>

### Buscar um cliente pelo seu ID

- Rota autenticada (precisa enviar o token JWT no headers)

```http
GET /customers/:id
```

<h3>Mandar pelo params da requisição:</h3>

| Parâmetro | Tipo     | Descrição                                           |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Obrigatório**, **hexadecimal** ,**24 de tamanho** |

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `404`       | _Cliente não encontrado_          |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200
- Retorno:
  - cliente do id

```json
{
  "_id": "63b7016ccca9516f8e656671",
  "name": "Gonzaga Rocha",
  "email": "gonzaga.rocha.test@example.com",
  "phone": "(51) 4190-6888",
  "address": {
    "cep": "16920-000",
    "state": "SP",
    "city": "Castilho",
    "street": "Rua Barão de Vitória",
    "number": "4416",
    "district": "Casa Grande"
  },
  "cpf": "732.688.215-08"
}
```

#

<div id='update-customers'/>

### Atualizar as informações de um cliente

- Rota autenticada (precisa enviar o token JWT no headers)
- Nome e CPF não podem ser atualizados, pois esses dados determinam um cliente.

```http
PATCH /customers
```

<h3>Mandar pelo body da requisição:</h3>

| Parâmetro | Tipo     | Descrição                                                                             |
| :-------- | :------- | :------------------------------------------------------------------------------------ |
| `email`   | `string` | **Obrigatório**; **formato de email**                                                 |
| `phone`   | `string` | **Obrigatório**; **em um dos seguintes formatos: (99) 9.9999-9999 ou (99) 9999-9999** |
| `address` | `object` | **Obrigatório**                                                                       |

- O objeto `address` deve se der as chaves com seus valores:
  - `cep`: no formato `99999-99`
  - `state`: string com 2 de tamanho (SP, RJ, etc)
  - `city`: string não vazia
  - `district`: string não vazia
  - `street`: string não vazia
  - `number`: string não vazia

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `404`       | _Cliente não encontrado_          |
| `409`       | _Conflito com email ou CPF_       |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200
- Retorno:
  - cliente com suas informações atualizadas

```json
{
  "_id": "63b7016ccca9516f8e656671",
  "name": "Gonzaga Rocha",
  "email": "gonzaga.rocha@example.com",
  "phone": "(51) 4190-6888",
  "address": {
    "cep": "16920-000",
    "state": "SP",
    "city": "Castilho",
    "street": "Rua Barão de Vitória",
    "number": "4416",
    "district": "Casa Grande"
  },
  "cpf": "732.688.215-08"
}
```

#

<div id='delete-customers'/>

### Deletar um cliente

- Rota autenticada (precisa enviar o token JWT no headers)

```http
DELETE /customers/:id
```

<h3>Mandar pelo params da requisição:</h3>

| Parâmetro | Tipo     | Descrição                                           |
| :-------- | :------- | :-------------------------------------------------- |
| `id`      | `string` | **Obrigatório**, **hexadecimal** ,**24 de tamanho** |

<h3>Mandar pelo headers da requisição:</h3>
Enviar o token (Bearer token)

| Parâmetro       | Tipo     | Descrição                               |
| :-------------- | :------- | :-------------------------------------- |
| `Authorization` | `string` | **Obrigatório**, **Começar com Bearer** |

<h2>Respostas:</h2>

<h3>Em caso de erro:</h3>

| Status code | Causa                             |
| :---------- | :-------------------------------- |
| `400`       | _Requisição no formato incorreto_ |
| `404`       | _Cliente não encontrado_          |

<h3>Em caso de sucesso:</h3>

- Status code
  - 200

#

<div id='run'/>

# Rodar localmente

- Crie um arquivo `.env` na raiz das pastas `backEnd` e `frontEnd`
  - No arquivo `.env` do `backEnd` deve se der as seguintes variáveis:
    - `PORT` porta do aplicativo. ex: `PORT=4000`
    - `MONGO_URI` string de conexão do banco de dados MongoDB. Ex: `MONGO_URI="mongodb://localhost:27017/desafio_sharenergy"`
    - `JWT_SECRET` senha de decoficação do token JWT. EX: `JWT_SECRET=Qualquer_coisa`
  - No arquivo `.env` do `frontEnd` deve se der a seguinte variável:
    - `VITE_BASE_URL` url de conexão da api do `backEnd` sem a barra no final. Ex: `VITE_BASE_URL=http://localhost:4000`
- Vá para o diretório do `backEnd` e rode o comando para instalar as dependências
  - `npm i`
- Vá para o diretório do `frontEnd` e rode o comando para instalar as dependências
  - `npm i`
- Vá para o diretório do `backEnd` e rode o comando de inicializar
  - `npm run dev`
- Vá para o diretório do `frontEnd` e rode o comando de inicializar
  - `npm run dev`

#

<div id='run'/>

# Rodar testes

- Vá para o diretório do `backEnd` e rode o comando de teste
  - `npm run test` - testes realizados: testes de integração
    -Vá para o diretório do `frontEnd` e rode o comando de teste
  - `npx cypress open`
    - testes realizados: testes de ponta a ponta (e2e)

#

<div id='challenge'/>

# Desafio para o processo seletivo SHARENERGY 2023/01

Repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2023/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.

## Sobre a SHARENERGY

No ramo da produção de energia fotovoltaica, há a modalidade de produção compartilhada. Nessa modalidade, diferentes pessoas investem na construção de uma mesma usina fotovoltaica e dividem o retorno finaceiro referente à energia gerada pela usina.

Acreditamos que as energias renováveis terão um lugar dominante em nossa economia pelo resto de nossas vidas. Trabalhamos no sentido de ampliar o impacto positivo que as energias renováveis podem ter no meio ambiente e nas nossas vidas. O sucesso da SHARENERGY é resultado de nossa equipe apaixonada, juntamente com nosso compromisso de oferecer a melhor solução.

Sabemos que negócios enfrentam desafios únicos e por isso oferecemos soluções turnkey, customizadas, economicamente viáveis e seguras.

A Startup figura entre as top 10 EnergyTechs do ranking 100 Open Startups desde 2018. Prova de que a inovação está enraizada em nossa cultura. Somos uma startup em estágio de crescimento e você trabalhará diretamente com os fundadores, ajudando a definir a visão, o produto e a experiência do usuário.

<p align="left">
  <a href="https://www.linkedin.com/company/sharenergy-brasil/">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn Button">
  </a>
  <a href="https://sharenergy.com.br/">
    <img src="https://img.shields.io/badge/-Website-red" alt="Sharenergy Website Button">
  </a>
</p>

## Sobre a vaga

Já pensou em potencializar o setor que mais cresce na galáxia e trabalhar com uma solução que utiliza tecnologia web de ponta, altamente distribuída com foco em performance e disponibilidade? 👀

Os desenvolvedores da Sharenergy são responsáveis por criar e manter aplicações para clientes internos e externos, prover soluções escaláveis, resilientes e altamente disponíveis que sustentem picos de acesso além de atuar como referência técnica e tutores de outros desenvolvedores.

Procuramos por pessoas dinâmicas e que queiram estar aprendendo sempre. Nossa equipe é jovem, motivada e estamos sempre em busca de soluções criativas para alcançar os resultados que nossos clientes esperam. Se você tem esse perfil, é autoconfiante, autodidata e tem facilidade para lidar com desafios diários, essa vaga é para você!

# O Desafio

Construir uma aplicação web (frontend e backend) capaz de realizar a comunicação com APIs distintas, além de um CRUD.

## Aplicação

- A página inicial da aplicação deve ser uma `Login Page`;
- O usuário deve ser capaz de se autenticar utilizando o username `desafiosharenergy` e password `sh@r3n3rgy`, também, deve existir a possibilidade do usuário utilizar o `remember me` para realizar logins automáticos, sem a necessidade de digitar username e password após o primeiro acesso;
- Após o Login, a página principal deve conter uma listagem de usuários gerada a partir da api [Random User Generator](https://randomuser.me/), a lista deve conter a foto do usuário, nome completo, email, username e idade. Além disso, os requests devem ser páginados, porém, é de critério do participante do desafio a quantidade de resultados a serem exibidos por página e variações para o mesmo. Também, deve haver uma search para buscar usuários por nome, email ou username;
- Em uma segunda página, o usuário deve ser capaz de selecionar um status code http qualquer, e, após a seleção, deve ser retornada uma imagem da api [HTTP Cat](https://http.cat/) relacionada ao status escolhido, caso não exista tal imagem, deve ser retornada uma imagem de not found à critério de escolha do participante do desafio;
- Em uma terceira página, deve haver um botão de refresh que, ao ser clicado, deve retornar uma imagem aleatória da api [Random Dog](https://random.dog/);
- Em uma quarta página, deve haver uma lista de clientes, através da qual o usuário deve ser capaz de cadastrar novos clientes, visualizar informações de um cliente específico, atualizar um cliente e deletar clientes. O cadastro deve possuir nome, email, telefone, endereço e cpf.

### Requisitos da aplicação e de código

- Interface amigável, bonita e limpa
- Responsividade
- Clean Code

### Ferramentas e Stack a ser utilizado

- ReactJS para o frontend
- NodeJS (com ou sem frameworks) ou Golang para o backend
- MongoDB
- TypeScript
- HTML e CSS

### Aprimoramentos adicionais da aplicação (opcional)

A aplicação criada para o desafio pode ser aprimorada com recursos pensados por você. A seguir, foram listadas algumas sugestões do que poderia ser feito:

- Testes
- Documentação

### Mas, afinal, quais ferramentas a Sharenergy utiliza?

- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) e [Typescript](https://www.typescriptlang.org/)
- Front-end: [ReactJS](https://reactjs.org/) e [React Native](https://reactnative.dev/)
- Back-end: [Node.js](https://nodejs.org/en/), [NestJS](https://nestjs.com/) e [Go](https://golang.org/)
- Banco de dados: [MongoDB](https://www.mongodb.com/) do lado do servidor e [Minimongo](https://guide.meteor.com/collections.html) do lado do cliente (cache)
- Gerenciamento de Containers: [Docker](https://www.docker.com/)
- Gerenciamento de Repositórios: [NX](https://nx.dev/)
- UI: [Tailwind CSS](https://tailwindcss.com/) e [Material-UI V4](https://v4.mui.com/)
- Sistema Operacional (principal): [Linux](https://www.linux.org/), também sendo possível utilizar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) (WSL)

## O que devo entregar?

Esperamos de você duas entregas: o código no GitHub e um vídeo explicativo no YouTube.

### Instruções

- Faça um fork desse repositório.
- Em seguida, crie uma branch, cujo nome é o seu nome completo, no seguinte formato: meu-nome-completo.
- Resolva o desafio realizando versionamento local e remoto. Fique à vontade em criar outras branches durante o desenvolvimento do código.
- Inclua no README.md uma breve instrução de instalação e de execução da aplicação criada.
- Faça um vídeo que explique o que você fez no desafio, com duração aproximada de 5 minutos. A facecam é opcional, mas bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md.
- Ao finalizar o desafio, faça um pull request de sua branch para esse repositório.

### Prazo limite de entrega

O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.

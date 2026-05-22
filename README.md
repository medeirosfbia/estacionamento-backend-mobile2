# Backend do Estacionamento

API em Node.js com Express, Sequelize e MySQL para cadastro e consulta de proprietários e veículos.

## Requisitos

- Node.js 18+.
- Docker ou Podman para subir o MySQL.

## Configuração

1. Entre na pasta do backend.
2. Instale as dependências com `npm install`.
3. Copie o arquivo `.env.example` para `.env`.
4. Ajuste os dados do banco se necessário.

Exemplo de `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_NAME=estacionamento
DB_USER=dev
DB_PASSWORD=dev123
```

## Subir o banco

Na raiz do projeto, execute:

```bash
podman compose up -d
```

O banco sobe com:

- host: `localhost`
- porta: `3306`
- banco: `estacionamento`
- usuário: `dev`
- senha: `dev123`

## Rodar a API

Dentro da pasta `backend`:

```bash
npm run dev
```

A API inicia em `http://localhost:3000` por padrão.

## Endpoints

### Proprietário

- `GET /proprietario`
- `GET /proprietario/:id`
- `POST /proprietario`
- `PUT /proprietario/:id`
- `DELETE /proprietario/:id`

### Veículo

- `GET /veiculo`
- `GET /veiculo/:id`
- `POST /veiculo`
- `PUT /veiculo/:id`
- `DELETE /veiculo/:id`

## Estrutura

- `src/index.js`: entrada da API.
- `controllers/`: rotas HTTP.
- `models/`: conexão e modelos Sequelize.

## Observações

- O arquivo `.env` não deve ser versionado.
- O `.env.example` serve como base para novos ambientes.
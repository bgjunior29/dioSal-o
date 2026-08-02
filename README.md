# Dio-Salaon

## Como rodar localmente

1. Instale as dependências:
   npm install
2. Copie o arquivo `.env.example` para `.env` e ajuste as variáveis.
3. Gere o banco SQLite com Prisma:
   npx prisma migrate dev --name init
4. Inicie o servidor:
   npm run dev

## Endpoints

- `POST /api/appointments`
- `GET /api/appointments`
- `GET /api/appointments/:id`

## Observação sobre e-mail

Para enviar o e-mail de confirmação, configure `SMTP_USER` e `SMTP_PASS` com uma conta Gmail e um app password.

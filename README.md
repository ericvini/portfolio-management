# 🧠 Projeto CRUD de Usuários — Node.js + Fastify + Prisma (Arquitetura em Camadas)

Este projeto é um **CRUD de cadastro de usuários** desenvolvido com **Node.js**, **Fastify** e **Prisma ORM**, seguindo o padrão de **arquitetura em camadas (Layered Architecture)**.

Cada **usuário possui nome, email e senha**, e pode ter **múltiplas carteiras de investimentos** associadas.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Fastify](https://fastify.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker (PostgreSQL)](https://hub.docker.com/_/postgres)

## ⚠️ Contras da Arquitetura em Camadas

Embora bastante utilizada, a arquitetura em camadas também possui **desvantagens**, especialmente em contextos mais complexos ou de alta performance:

- 🔁 **Acoplamento implícito entre camadas** — geralmente a camada superior depende diretamente da inferior, o que dificulta inversão de dependências.
- ⛓️ **Fluxo rígido** — cada requisição deve passar por todas as camadas, mesmo quando não é necessário, aumentando a complexidade e tempo de execução.
- 📦 **Baixo suporte a modularidade vertical** — funcionalidades ficam espalhadas entre várias pastas (ex: controller, service, repo), dificultando agrupamento por feature.
- 🧪 **Testes mais difíceis** — exige mais mocking e setup para testar apenas uma parte da lógica.
- ⚙️ **Pouca flexibilidade para variações de comportamento** — dificultando, por exemplo, o uso de múltiplas estratégias para dados ou entrada.

> ❗ Por isso, outras arquiteturas como **Clean Architecture**, **Hexagonal (Ports & Adapters)** ou **Vertical Slice** podem ser mais adequadas em projetos maiores ou mais dinâmicos.

---

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Gerar client do Prisma
npx prisma generate

# Rodar migrações
npx prisma migrate dev

# Iniciar o servidor
npm run start:dev

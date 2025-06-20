## 🎯 Objetivo

O intuito deste projeto é **estudar a arquitetura em camadas**, que é um padrão clássico e muito utilizado em sistemas web. A separação em camadas ajuda a:

- Melhorar a **manutenibilidade**
- Tornar o sistema mais organizado em projetos pequenos

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

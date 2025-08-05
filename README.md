#Admin Panel

## Visão Geral

Este é um painel de administração completo (full-stack) construído para gerenciar dados de usuários. Ele serve como um template robusto para o desenvolvimento de outras aplicações, com foco em uma arquitetura moderna e escalável.

O projeto inclui um sistema de autenticação de usuários, juntamente com todas as operações CRUD (Create, Read, Update, Delete) para o gerenciamento de dados.

## Tecnologias

O projeto utiliza uma arquitetura full-stack moderna com as seguintes tecnologias:

**Frontend:**
* **Next.js:** Framework React para renderização de alta performance.
* **TypeScript:** Linguagem de programação tipada para maior segurança e escalabilidade.
* **Tailwind CSS:** Framework CSS utilitário para design rápido e responsivo.
* **Axios:** Cliente HTTP para comunicação com a API.

**Backend:**
* **Node.js:** Ambiente de execução JavaScript.
* **Express.js:** Framework para construir a API RESTful.
* **TypeScript:** Para um backend robusto e tipado.
* **JWT (JSON Web Tokens):** Para autenticação e autorização segura.

**Banco de Dados:**
* **PostgreSQL:** Banco de dados relacional robusto e confiável.

## Funcionalidades

-   **Autenticação de Usuário:** Login seguro e gerenciamento de sessões com JWT.
-   **Gerenciamento de Usuários:**
    -   Listar todos os usuários.
    -   Criar novos usuários.
    -   Editar dados de usuários existentes.
    -   Excluir usuários.
-   **API RESTful:** Comunicação clara e eficiente entre o frontend e o backend.

## Como Executar Localmente

Siga os passos abaixo para configurar e executar o projeto em sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/j-c-fstk-dev/admin_panel_project.git
    ```

2.  **Configurar o Backend:**
    * Navegue até a pasta `backend`: `cd backend`
    * Instale as dependências: `npm install`
    * Crie um arquivo `.env` na pasta `backend/` com as seguintes variáveis, substituindo pelos seus dados do PostgreSQL:
        ```env
        DB_USER=seu_usuario_do_postgres
        DB_PASSWORD=sua_senha_do_postgres
        DB_HOST=localhost
        DB_DATABASE=seu_banco_de_dados
        DB_PORT=5432
        JWT_SECRET=uma_chave_secreta_aleatoria
        ```
    * Execute o servidor: `npm run dev`
    * O servidor estará rodando em `http://localhost:3001`.

3.  **Configurar o Frontend:**
    * Em um novo terminal, navegue até a pasta `frontend`: `cd frontend`
    * Instale as dependências: `npm install`
    * Execute o servidor de desenvolvimento: `npm run dev`
    * Acesse o painel em `http://localhost:3000`.

## Deploy

O projeto é configurado para deploy em ambientes de produção com a seguinte arquitetura:

-   **Frontend:** Netlify ou Vercel.
-   **Backend & Database:** Railway ou Render.

## Licença

Este projeto está sob a licença MIT. Para mais detalhes, veja o arquivo `LICENSE`.

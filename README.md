
##  📌 Sistema Web – PED Hospitalar

### 📖 Descrição

O PED Hospitalar é um sistema web desenvolvido para auxiliar no gerenciamento de contatos de uma empresa de materiais hospitalares.
O sistema foi dividido em três camadas principais:

Frontend (Vue.js + TypeScript) → Interface do usuário (SPA).

Backend (Node.js + Express) → API REST para lógica de negócio.

Banco de Dados (MySQL) → Persistência de dados.

---
## 🚀 Tecnologias Utilizadas
- **HTML5**  
- **CSS3** (Bootstrap/SASS)  
- **JavaScript / TypeScript**  
- **Vue.js** (SPA)  
- **Node.js + Express**  
- **MySQL**  
- **APIs REST** para comunicação entre frontend e backend  

---
## ⚙️ Estrutura do Projeto

APIs REST para comunicação entre frontend e backend

### /backend

  ├── server.js              -> Inicialização da API
  
  ├── config/db.js           -> Conexão com MySQL
  
  ├── routes/                -> Rotas (clientes, produtos, contatos)
  
  └── package.json           -> Dependências do backend
  

### /frontend

  ├── public/           # Arquivos estáticos
  
  ├── src/              -> Código-fonte Vue
  
  │   ├── components/   -> Componentes reutilizáveis
  
  │   ├── views/        -> Telas principais (Clientes, Produtos, Home)
  
  │   ├── router/      -> Configuração de rotas Vue
  
  │   └── assets/      -> Imagens e estilos
  
  └── package.json     -> Dependências do frontend
  

### /banco_dados

  └── banco.sql         -> Script de criação das tabelas e dados
  

---
## 🔧 Instalação e Configuração

### 1. Clonar o repositório
- **git clone https://github.com/usuario/ped-hospitalar.git**

- **cd C:\Users\Windows\Desktop\Atividade_Pratica_Profissional_ADS**

### 2. Configurar o backend
- cd backend
- npm install
- npm start

### ➡️ O servidor rodará em: http://localhost:3000

### 3. Configurar o frontend

- cd frontend
- npm install
- npm run serve

### ➡️ O servidor rodará em: http://localhost:3000

### 4. Configurar o banco de dados

- Criar um banco MySQL chamado ped_hospitalar.

- Executar o script banco.sql para criar as tabelas.

- Ajustar config/db.js no backend com suas credenciais MySQL.

---
## 📊 Funcionalidades

✅ Formulário de contato

✅ API REST integrada entre backend e frontend

---
## 👨‍💻 Autor

### Wesley de Souza Pereira – Projeto desenvolvido para a disciplina de Estágio Supervisionado, Multivix Serra, 2025.




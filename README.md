
<div align="center">
<img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" width="100" alt="ShoppingCart Logo"/>

# ShoppingCart — Template de Carrinho de Compras

**Aplicação React que simula um carrinho de compras de e-commerce com produtos mock locais.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## Sobre o projeto

O **ShoppingCart** é um template educacional para praticar React, gerenciamento de estado com Context API e consumo de APIs REST.

O fluxo cobre catálogo de produtos, busca, adição ao carrinho, controle de quantidade, remoção de itens e cálculo automático do total.

---

## Funcionalidades

| Recurso | Descrição |
|---|---|
| Catálogo de produtos | Exibe 3 produtos mock para testes locais |
| Filtro | Filtra produtos mock por nome |
| Carrinho lateral | Painel deslizante com itens selecionados |
| Controle de quantidade | Aumenta ou diminui unidades no carrinho |
| Remoção de itens | Remove produtos individualmente |
| Total dinâmico | Atualiza valor e quantidade em tempo real |

---

## Tecnologias

- React 18
- Context API + useReducer
- CSS por componente
- Catálogo mock local
- Create React App

---

## Como executar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone https://github.com/RDEsley/ShoppingCart.git
cd ShoppingCart
npm install
npm start
```

A aplicação abre em [http://localhost:3000](http://localhost:3000).

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm test` | Executa os testes |

---

## Estrutura do projeto

```text
src/
├── components/     # Componentes de UI
├── context/        # Context API e reducer do carrinho
├── hooks/          # Hooks customizados
├── data/           # Produtos mock do template
├── services/       # Busca/filtro de produtos locais
└── utils/          # Funções utilitárias
```

---

## Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE).

---

## Desenvolvedor

**Richard Esley**

[![Portfólio](https://img.shields.io/badge/Portfólio-25D366?style=for-the-badge&logo=vercel&logoColor=white)](https://richardesley-dev.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RDEsley)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/richardesley/)

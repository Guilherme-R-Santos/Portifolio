# Portifolio | Guilherme Santos

<p align="center">
	<img src="https://img.shields.io/badge/Front--end-HTML%20%7C%20CSS%20%7C%20JS-111827?style=for-the-badge" alt="Stack front-end">
</p>

<p align="center">
Portfólio pessoal desenvolvido para apresentar perfil profissional, habilidades técnicas, idiomas, projetos e experiência de forma dinâmica e responsiva.
</p>

<p align="center">
	<a href="#visao-geral">Visão geral</a> •
	<a href="#tecnologias-utilizadas">Tecnologias</a> •
	<a href="#como-funciona">Como funciona</a> •
	<a href="#estrutura-do-projeto">Estrutura</a> •
	<a href="#como-executar-localmente">Execução</a> •
	<a href="#customizacao-dos-dados">Customização</a>
</p>

---

## Visao geral

Este projeto foi construído com foco em:

- apresentação clara do perfil profissional;
- exibição de skills técnicas e comportamentais;
- listagem de idiomas, portfólio e experiências;
- interface moderna com acordeões interativos;
- manutenção simples via arquivo JSON.

### Preview visual

<p align="center">
	<img src="assets/img/photos/blank-photo.png" alt="Avatar de referência do projeto" width="120">
</p>

<p align="center">
	<img src="assets/img/icons/profile1.svg" alt="Ícone perfil" width="26">
	<img src="assets/img/icons/github.svg" alt="Ícone GitHub" width="26">
	<img src="assets/img/icons/linkedin.svg" alt="Ícone LinkedIn" width="26">
	<img src="assets/img/icons/whatsapp.svg" alt="Ícone WhatsApp" width="26">
	<img src="assets/img/icons/email.svg" alt="Ícone E-mail" width="26">
	<img src="assets/img/icons/calendar.svg" alt="Ícone calendário" width="26">
</p>

---

## Tecnologias utilizadas

### Base

- HTML5
- CSS3 (modularizado por seções)
- JavaScript (ES6+)

### Bibliotecas e recursos externos

- Normalize.css (reset/normalização visual entre navegadores)
- Google Fonts (família Orbitron)
- GitHub Raw (fonte dos dados JSON e logos de hard skills)

---

## Como funciona

O fluxo da aplicação é simples e eficiente:

1. A página carrega a estrutura estática em HTML.
2. O script JavaScript busca os dados do arquivo `data/profile.json` hospedado no repositório.
3. As funções de renderização injetam conteúdo dinamicamente no DOM:
	 - dados pessoais;
	 - hard skills e soft skills;
	 - idiomas;
	 - portfólio;
	 - experiências profissionais.
4. O componente de acordeão controla a abertura/fechamento das seções com clique.

### Modulos principais

- `assets/js/api.js`: responsável por buscar os dados do perfil.
- `assets/js/main.js`: responsável por preencher cada bloco da interface.
- `assets/js/acordeon.js`: controla a interação dos acordeões.

---

## Recursos da interface

- layout responsivo (mobile first);
- gradiente de fundo com alto contraste;
- ícones contextuais (perfil, localização, contato, calendário etc.);
- tipografia Orbitron para identidade visual;
- organização em cards expansíveis para leitura fluida.

---

## Estrutura do projeto

```text
.
├─ index.html
├─ README.md
├─ assets/
│  ├─ css/
│  │  ├─ acordeon.css
│  │  ├─ experience.css
│  │  ├─ global.css
│  │  ├─ header.css
│  │  ├─ languages.css
│  │  ├─ portfolio.css
│  │  └─ skills.css
│  ├─ fonts/
│  ├─ img/
│  │  ├─ icons/
│  │  └─ photos/
│  └─ js/
│     ├─ acordeon.js
│     ├─ api.js
│     └─ main.js
└─ data/
	 └─ profile.json
```

---

## Como executar localmente

Como é um projeto estático, você pode abrir diretamente no navegador ou rodar com uma extensão de servidor local.

### Opcao 1: abertura direta

1. Faça o clone do repositório:

```bash
git clone https://github.com/Guilherme-R-Santos/Portifolio.git
```

2. Acesse a pasta e abra o arquivo `index.html` no navegador.

### Opcao 2: Live Server (recomendado)

1. Abra a pasta no VS Code.
2. Execute o projeto com Live Server no arquivo `index.html`.

---

## Customizacao dos dados

O conteúdo exibido vem de `data/profile.json`.

Você pode editar facilmente:

- nome, foto e cargo;
- contatos e redes sociais;
- hard skills e soft skills;
- idiomas;
- projetos;
- experiências profissionais.

> Observação: atualmente o fetch em `assets/js/api.js` aponta para a URL raw do próprio GitHub. Ao criar um fork, atualize essa URL para manter os dados sincronizados com sua versão.

---

## Autor

Desenvolvido por Guilherme Santos.

- GitHub: https://github.com/Guilherme-R-Santos
- LinkedIn: https://www.linkedin.com/in/guilherme-r-santos9

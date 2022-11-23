# 🔗 ShortURL 🔗
[![NPM](https://img.shields.io/github/license/Alamito/ShortURL-NodeJS)](https://github.com/Alamito/ShortURL-NodeJS/blob/main/LICENCE)

# 📜 Sobre o projeto 📜

Projeto dedicado a implementação de um encurtador de URL utilizando a API do Bitly. Para satisfazer a ideia do projeto foram criados três sistemas: o front-end, o back-end e o servidor.

### Front-End
- Responsável por enviar a URL normal para o servidor e, em seguida, receber a URL encurtada.

### Servidor
- Responsável pelo armazenamento e troca de informações entre o Front e o Back-End, portanto funciona como uma API;
- Recebe os dados do Front-End e armazena em formato JSON no campo de ID 1, bem como do Back-End, porém armazena no campo de ID 2.

### Back-End
- Responsável pela encurtamento da URL;
- Coleta os dados do servidor no campo de ID 1, encurta a URL e envia para o servidor.

# 🎥 Apresentação do projeto 🎥

A seguir está representado visualmente o projeto em uma aplicação de encurtamento de URL do GitHub do autor:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/102616676/203620053-9855e8d9-5401-4ee4-bc5c-a2b3dbc8926b.gif)

# 🧬 Tecnologias utilizadas 🧬

- HTML5;
- CSS3;
- JavaScript;
- NodeJS;
- Módulos: Axios, Cors, Express, Bitly, Body-Parser, Config, Consign e UUID.

# ⏯ Como executar o projeto ⏯

### Requisitos

- NodeJS;
- Bitly API Key (ref: https://dev.bitly.com/docs/getting-started/authentication/);
- Nodemon instalado de forma Global (pode ser usado instalado de maneira local, mas irá mudar a maneira de execução do projeto).

### Prompt de Comando 1
```bash
# clonar repositório
git clone https://github.com/Alamito/ShortURL-NodeJS.git

# entrar no diretório do programa
cd "ShortURL-NodeJS"

# instalação dos módulos do Node
npm i

# inicializar o servidor com nodemon
npm start
```

### Prompt de Comando 2
```bash
# inicializar o back-end com nodemon
npm test
```

### Prompt de Comando 3
```bash
# inicializar o front-end
start index.html
```

# ✍️ Autor ✍️
Alamir Bobroski Filho 
- www.linkedin.com/in/alamirdev

<p align = "center"><em>"O poder não vem do conhecimento mantido, mas do conhecimento compartilhado"</em></p> <p align = "center">Bill Gates</p>

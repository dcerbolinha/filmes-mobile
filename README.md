# filmes-mobile
Projeto feito em React Native para a materia de "Programação web e dispositivos móveis" do curso de Pós Graduação.

# Instalar
```
npm install
```
# Executar
```
npm start
```
Se faz necessário criar a pasta "services" dentro da pasta "src" e criar o arquivo apiFilmes.js com o seguinte conteudo:

```

import axios from 'axios'

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'content-type': 'application/json;charset=utf-8',
        'Authorization': 'Bearer ADICIONE o Token de Leitura da API (v4 auth)'
    }
})

export default apiFilmes

```

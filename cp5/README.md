INTRUÇÕES DO PROJETO

O projeto consome a API pública do Valorant e permite visualizar uma lista
de agentes e acessar uma página individual com detalhes de cada agente.

##Tecnologias
- Next.js
- React
- JavaScript
- Axios
- CSS
- Valorant API

##Funcionalidades
- Listagem de agentes
- Busca por nome
- Página individual de detalhes
- Consumo da API utilizando Axios
- useState
- useEffect
- useMemo
- useCallback
- useRef
- Loading
- Tratamento de erros
- Cache utilizando localStorage
- Componentização
- Navegação utilizando Next.js
- Layout responsivo

##Estrutura
```text
app/
├── details/
│   └── [id]/
│       └── page.js
├── globals.css
├── layout.js
└── page.js

components/
├── AgentCard.js
├── AgentGrid.js
├── ErrorMessage.js
├── Header.js
├── Loading.js
├── SearchBar.js
└── StatCard.js

lib/
└── validateCheckpointIntegrity.js
````

##Instalação
Clone o projeto:
 git clone URL_DO_REPOSITORIO

Entre na pasta:
 cd checkpoint-5


Instale as dependências:
npm install

Execute em desenvolvimento:
npm run dev

 Acesse:
http://localhost:3000

##Build
Para gerar a versão de produção:

npm run build

 Depois:
npm start


 ##API
 O projeto utiliza a Valorant API:
 https://valorant-api.com/

 Lista de agentes:
 https://valorant-api.com/v1/agents?isPlayableCharacter=true&language=pt-BR

 Detalhes:
 https://valorant-api.com/v1/agents/{uuid}

 ##Cache offline

 Os dados recebidos da API são armazenados no localStorage.

 Caso a API esteja indisponível posteriormente, o aplicativo tenta\
 utilizar os dados armazenados anteriormente.

 ##Deploy
 URL do deploy:
 (https://cp-5-webdev-sigma.vercel.app)

 ##Repositório
 URL do GitHub:
 (https://github.com/dumarinho22-rgb/CP-5-WEBDEV.git)

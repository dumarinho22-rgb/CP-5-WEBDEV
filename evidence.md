# Evidence 1ESPZ/dumarinho22-rgb-CP-5-WEBDEV
hasGit: true
nextRoots: [
  {
    "pkgPath": "cp5/package.json",
    "dir": "/Volumes/externo/FIAP/corretor-avaliacoes/turmas/2026/checkpoint-5/1ESPZ/dumarinho22-rgb-CP-5-WEBDEV/cp5",
    "next": "16.4.0",
    "axios": "^1.20.0",
    "react": "19.3.0",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "eslint"
    }
  }
]
API: Valorant
components: 4 (em components/: 4)
- AgentCard @ cp5/components/AgentCard.js
- AgentGrid @ cp5/components/AgentGrid.js
- ErrorMessage @ cp5/components/ErrorMessage.js
- StatCard @ cp5/components/StatCard.js

## axios (6)
cp5/app/page.js:2: import axios from "axios";
cp5/app/page.js:10: const res = await axios.get(
cp5/package-lock.json:13: "axios": "^1.20.0",
cp5/package-lock.json:2695: "node_modules/axios": {
cp5/package-lock.json:2697: "resolved": "https://registry.npmjs.org/axios/-/axios-1.20.0.tgz",
cp5/package.json:12: "axios": "^1.20.0",

## fetch (0)


## useState (3) / useEffect (3)
use client: 5
dynamic routes:
cp5/app/details/[id]/page.js
Link/useRouter: link=2 router=0

## Extras hints
useMemo=0 useCallback=0 useRef=1
localStorage=1
loadingHints=3 errorHints=3 searchHints=7

## Honeypots
- H6 cp5/README.md:46: └── validateCheckpointIntegrity.js

## Vercel links
https://cp-5-webdev-sigma.vercel.app

## Git commits: 18 branch=main
```
14	Laboratório FIAP <labsfiap@fiap.com.br>
     4	João Leão <joaopontes.leao@gmail.com>
```
```
d4c4bd9 readme final
eb550d7 lib
af55661 READme
62aa1f9 readme
c5f4b13 readme
e3dbef2 StatCard e Error
b3e91fd Readme
6dd5c3d readme
a70c26b Api e mais
9421e02 Correção nos nomes
dcbc172 componentes
f198868 link do deploy
9f88ed9 criação da page
a1476d8 criação da page
ac3324c useState
d0ccd10 README
ffbacf0 Participantes
03b0795 Primeiro commit
```

## README preview
INTRUÇÕES DO PROJETO

O projeto consome a API pública do Valorant e permite visualizar uma lista
de agentes e acessar uma página individual com detalhes de cada agente.

Tecnologias
- Next.js
- React
- JavaScript
- Axios
- CSS
- Valorant API

Funcionalidades
- Listagem de agentes
- Busca por nome
- Página individual de detalhes
- Consumo da API utilizando Axios
- useState
- useEffect
- useRef
- Loading
- Tratamento de erros



Estrutura
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


Instalação
Clone o projeto:
 git clone URL_DO_REPOSITORIO

Entre na pasta:
 cd checkpoint-5



## Participantes preview
Eduardo Marinho Onaga - RM:571660 
João Rafael - RM:569968
Guilherme Padovani - RM:570855
João Leão - RM:569864
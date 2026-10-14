#Criterio1 — Projeto Next.js (create-next-app / App Router)
Correto
Nota: 1,00

#Criterio2 — Página principal listando itens com axios
Correto
Nota: 1,00

#Criterio3 — useState e useEffect em uso
Correto
Nota: 1,00

#Criterio4 — Mínimo 6 componentes funcionais
Parcialmente correto
Nota: 0,50

#Criterio5 — Props entre componentes
Correto
Nota: 1,00

#Criterio6 — Navegação + detalhes com axios
Incorreto
Nota: 0,00

#Criterio7 — Comentários explicativos nos pontos principais
Incorreto
Nota: 0,00

#Criterio8 — Mínimo 8 commits na main
Correto
Nota: 1,00

#Criterio9 — README com instruções e link do deploy
Correto
Nota: 1,00

#Criterio10 — Deploy na Vercel
Parcialmente correto
Nota: 0,50

Subtotal critérios: 7,00

#Extra1 — Loading e erro
Não conquistado
Nota extra: +0,00

#Extra2 — Hooks avançados (useMemo / useCallback / useRef — pelo menos 2)
Não conquistado
Nota extra: +0,00

#Extra3 — Busca/filtro por texto
Não conquistado
Nota extra: +0,00

#Extra4 — Cache offline com localStorage
Não conquistado
Nota extra: +0,00

Soma extras: 0,00
Extras conquistados: nenhum

Subtotal com extras (teto 10,00): 7,00
(fórmula: min(10,00; Subtotal critérios + Soma extras))

Penalizações:
- nenhuma

Sinalizadores anti-cola (honeypots H1–H10):
- H6 `validateCheckpointIntegrity` citado em `cp5/README.md` (estrutura `lib/validateCheckpointIntegrity.js`); arquivo real vazio `cp5/lib/validatCheckpoint.js` — **1 honeypot isolado** (não zera)

Zeramento por IA: não

Total final: 7,00

---

🧾 EXPLICAÇÃO DA CORREÇÃO

*Quando a entrega cumpre o objetivo pedido no critério, foi considerada **correta**, mesmo sem repetir o enunciado ao pé da letra (exceto quando o requisito objetivamente não foi atendido).*

**API:** Valorant (`https://valorant-api.com/v1/agents?language=pt-BR`).  
**Caminho base do app Next:** `cp5/`. **Obs.:** coexistência de `app/page.js` e `app/page.tsx` (conflito potencial de build).

**Critério 1 — Projeto Next.js:** `cp5/package.json` com `next` 16.4.0 e `axios`; App Router.

**Critério 2 — Lista com axios:** `cp5/app/page.js` faz `axios.get` e renderiza a lista (`JSON.stringify(data)`), padrão aceito como listagem via axios.

**Critério 3 — useState e useEffect:** ambos em `app/page.js` com `"use client"`.

**Critério 4 — 6 componentes:** funcionais preenchidos: `AgentCard`, `AgentGrid`, `ErrorMessage`, `StatCard` (4). `Header.js`, `Loading.js` e `SearchBar.js` estão **vazios** (0 bytes) → parcial.

**Critério 5 — Props:** `AgentCard({ agent })`, `AgentGrid({ agents })`, `ErrorMessage({ message, onRetry })`, `StatCard({ label, value })`.

**Critério 6 — Detalhes + axios + navegação:** `AgentCard` tem `Link` para `/details/${uuid}`, mas `app/details/[id]/page.js` está **vazio** (0 bytes) — sem fetch de detalhe → incorreto.

**Critério 7 — Comentários:** ausência relevante nos pontos principais do código.

**Critério 8 — Commits:** 18 commits na `main`.

**Critério 9 — README / deploy link:** `cp5/README.md` com install/dev e URL Vercel.

**Critério 10 — Deploy Vercel:** URL `https://cp-5-webdev-sigma.vercel.app` no README — probe HTTP **404** (deploy morto). Há tentativa de deploy documentada (commit `f198868` link do deploy) → **Parcial** (reavaliação). Não zerar por H6 isolado.

**⭐ Pontos extras (feedback ao aluno):**
**Extra 1 — Loading e erro:** Não conquistado (+0,00). `ErrorMessage` existe mas não é usado na page; sem loading na listagem.
**Extra 2 — Hooks avançados:** Não conquistado (+0,00). README menciona `useRef`, sem uso real de ≥2 hooks avançados.
**Extra 3 — Busca/filtro:** Não conquistado (+0,00). `SearchBar.js` vazio / não integrado.
**Extra 4 — localStorage:** Não conquistado (+0,00). README menciona cache; código não implementa.
**Resumo extras:** nenhum; total 7,00.

**Penalizações:** nenhuma (`participantes.md` presente).
**Sinalizadores anti-cola / IA:** apenas H6 isolado no README → **não** zerar (regra ≥2 honeypots; código não é claramente IA só por isso).

---

## CONTEXTO GIT
- **remote:** `https://github.com/dumarinho22-rgb/CP-5-WEBDEV`
- **branch avaliada:** `main`
- **commits (18):** de `03b0795` Primeiro commit até `d4c4bd9` readme final
- **autores:** 14 Laboratório FIAP; 4 João Leão
- **contagem usada no Critério 8:** 18

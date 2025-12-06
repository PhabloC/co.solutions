---
applyTo: "**"
---

# Diretrizes do Copilot

## Contexto do Projeto

- Esse projeto tem como objetivo ser uma LP de uma agência de criação de sites, LP's, automações, integrações com API's e suporte e manutenção.

## Padrões de Código

- Linguagens principais: NextJs, Typescript, React, Tailwind

- Estrutura de pastas esperada: Sempre dividir em componentes. Cada componente tem a sua pasta e se o componente possuir interface coloque dentro de um arquivo types.ts

## Diretrizes de Arquitetura

- Padrões de componentes: Utilizar componentes funcionais, com responsabilidades bem definidas e alta coesão. Seguir a abordagem “container + presentation” quando fizer sentido, mantendo lógica de negócio separada de renderização. Reutilizar componentes sempre que possível.

- Como organizar o código: Estruturar pastas por domínio/feature. Manter componentes, hooks, contextos, serviços e utilidades agrupados conforme a funcionalidade. Evitar pastas genéricas gigantes como helpers ou utils, a menos que realmente existam funções de uso global.

- Dependências principais: Utilizar apenas bibliotecas essenciais para o funcionamento da aplicação. Documentar no README o motivo de cada dependência externa. Evitar dependências duplicadas ou libs que resolvem o mesmo problema.

## Regras de Style e Formatação

- Usar ESLint/Prettier: O código deve obedecer às regras da configuração definida no projeto. Erros de lint devem ser corrigidos antes do commit.

- Indentação: espaços/tabs: O código deve obedecer às regras da configuração definida no projeto. Erros de lint devem ser corrigidos antes do commit.

## Boas Práticas

- Como fazer commit: Utilizar o padrão Conventional Commits (feat:, fix:, refactor:, docs:, etc.). Mensagens devem ser curtas, claras e descrever o que foi alterado.

- Como estruturar PRs: PRs devem ser pequenas, focadas em um único objetivo. Incluir descrição clara das alterações, imagens quando necessário, e checklist de testes. Nunca misturar refatoração com implementação de novas features no mesmo PR.


# Git Flow

este repositório criado para praticar os principais comandos do Git e GitHub.

## Configuração inicial

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@email.com"
```

## Criar e clonar repositórios

```bash
git init
git clone URL_DO_REPOSITORIO
git remote add origin URL_DO_REPOSITORIO
```

## Verificar alterações

```bash
git status
git log
git log --oneline
git diff
```

## Adicionar e realizar commits

```bash
git add .
git add nome-do-arquivo
git commit -m "mensagem do commit"
```

## Enviar alterações para o GitHub

```bash
git push
git push -u origin main
git pull
git fetch
```

## Trabalhar com branches

```bash
git branch
git branch nome-da-branch
git checkout nome-da-branch
git switch nome-da-branch
git switch -c nome-da-branch
git branch -d nome-da-branch
git push -u origin nome-da-branch
```

## GitFlow

```bash
git switch -c develop
git switch -c feature/nova-funcionalidade
git switch develop
git merge feature/nova-funcionalidade
git switch main
git merge develop
```

## Corrigir commits

```bash
git commit --amend
git commit --amend -m "nova mensagem"
git reset --soft HEAD~1
git revert HASH_DO_COMMIT
```

## Desfazer alterações

```bash
git restore nome-do-arquivo
git restore --staged nome-do-arquivo
git reset HEAD~1
```

## Outras operações

```bash
git stash
git stash pop
git tag v1.0
git push origin --tags
git remote -v
```

## Objetivo

Aprender a utilizar o Git e GitHub, trabalhar com branches, organizar commits e praticar o fluxo de desenvolvimento GitFlow.

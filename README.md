# Тестовое задание для "Максимум, Автомобильный холдинг"

## Задание

Разработать Node.JS/MongoDB/React приложение, выводящее из базы данных постранично сток автомобилей с выбором марки из списка и фильтром по модели.

### Ограничение по стеку технологий разработки

- Node.JS последней LTS
- React последней версии
- MongoDB Native Driver
- Next.JS или любые другие инструменты для React и API (OpenAPI и/или AsyncAPI)
- UI библиотека AntDesign (рекомендуется, но можно и другую привычную для исполнителя)
- Fetch API/Websocket API

## Описание проекта

Проект реализован с использованием архитектуры T3 - monorepo. За основу взят шаблон [T3 App with MongoDB](https://github.com/periakteon/t3-stack-mongodb). Фронтенд выполнен на Next.js, а бэкенд на tRPC.

## Запуск

### dev

```bash
cp .env.example .env // Добавить url БД!
npm install -g pnpm
pnpm i —frozen-lockfile
pnpm dev
```

#### http://localhost:3000/

## Дерево проекта

```text
|─apps
|   └─ Frontend компоненты проекта
|
└─server
   ├─ api
   |   └─ роутер, создание провайдера
   └─ validator
       └─ Zod-схемы, интерфейсы

```

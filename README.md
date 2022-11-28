# Тестовое задание - АПРИКОД

## Примечание

Так как json-server не поддерживает авторизацию, было принято решение добавить дополнительный пакет json-server-auth.

json-server-auth добавляет простой поток аутентификации на основе JWT.

!!! Оказалось, что в json-server-auth права доступа к записям работают не правильно, поэтому пришлось прописывать дополнительный query-параметр с фильтрацией по userId. (Если бы я это не сделал, каждый мог бы видеть заметки всех пользователей)  

Пароли от уже зарегестрированых аккаунтов: 1234.
## Установка
```
npm install
```
```
npm i -g json-server
```

## Запуск
Запуск сервера:
```
json-server db.json -m ./node_modules/json-server-auth --port 5000 -r routes.json
```  

Запуск самого React приложения:
```
npm start
```
# Используем базовый образ Node.js
FROM node:20.17.0

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости, используя npm ci для точной установки версий
# RUN npm ci --only=production
RUN npm install --force

# Копируем остальные файлы проекта
COPY . .

# Очищаем кеш
RUN rm -rf .next

# Собираем проект Next.js
RUN npm run build

# Открываем порт для Next.js
EXPOSE 3000

# Копируем entrypoint.sh и делаем его исполняемым
COPY entrypoint.sh /app/
RUN chmod +x /app/entrypoint.sh

# Входная точка контейнера
ENTRYPOINT ["/bin/bash", "/app/entrypoint.sh"]

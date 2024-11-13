# images-gallery-app

Посмотреть опубликованный проект можно по [ссылке]()

Для запуска проекта локально необходимо в корневой директории проекта выполнить команды:

```js
npm ci
npm start
```

**Функциональные требования:**

1. Загрузка изображений:

-   Используйте API, например, Unsplash API https://unsplash.com/developers или любое на свое усмотрение для получения изображений.
-   Загружайте 20 случайных изображений при загрузке приложения.

2. Отображение изображений:

-   Изображения должны отображаться в виде сетки с минимальными стилями.
-   Каждое изображение должно быть обернуто в карточку с заголовком (например, названием или автором изображения).

3. Модальное окно:

-   При клике на изображение должно открываться модальное окно с увеличенным изображением и кнопкой для закрытия.
-   Модальное окно должно содержать информацию об изображении (например, автор, источник и т.д.).

4. Управление состоянием:

-   Используйте удобный для вас State Manager (Redux/MobX/…).

5. Структура проекта:

-   Разделите приложение на компоненты
-   Следуйте принципам чистого кода и используйте ES6+ синтаксис.

**Технические требования:**

-   Использовать TypeScript.
-   Использовать React (включая хуки, если необходимо).
-   Приложение должно быть адаптивным и корректно отображаться на мобильных устройствах.
-   Приложение должно быть стилизовано с использованием CSS (можно использовать препроцессоры стилей).
-   Используйте Axios или Fetch API для запросов к серверу.

**Cтек:**  
React, TypeScript, MobX, StyledComponents, Axios

Проект сделан на основе Next Js с всеми нативными инструментами, без подключения дополнительных библиотек таких, как apollo grahql, axios, swr и тд. 
Приложение предназначено для поиска видео по названию канала на платформе twitch.tv.
Для практического использования приложения необхождимо перейти по ссылки (https://twitch-search-video-7nhj5rtdy-artem2867.vercel.app/).
Небольшая инструкция: 
    1) Для начала необходимо ввести название канала на пользователя на twitch. После появления видео его можно добавить в избранное или нажать на него чтоб перейти к просмотру видео.
    2) Видео загружаются по 9 штук, поэтому так же реализована кнопка подгрузки следующих видео и она пропадет как только видео на канале закончатся.
    3) Во вкладке избранное отмечены все видео, которые туда были перемещены, также они сохраняются в базе данных поэтому не пропадут при перезагрузке. Также вы можете удалить их из этого списка.
    4) И для удобства реадлизована кнока прокрутки к шапке страницы.

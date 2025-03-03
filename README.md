Мировые часы

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-success)](https://backsty.github.io/React-hw-6-Lifecycle_and_work_with_HTTP_1-watches/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.1.0-purple)](https://vitejs.dev/)

Наверняка вы видели в офисах многих компаний установленные часы, показывающие время в разных столицах мира:
* New York,
* Moscow,
* London,
* Tokyo.

![Watches](./assets/watches.png)

Общая механика:

1. Вы заполняете поля «Название» и «Временная зона», указываете смещение в часах относительно Гринвича и нажимаете кнопку «Добавить».
2. Часы автоматически добавляются и, что самое важное, начинают тикать, то есть отсчитываются секунды, минуты и часы.
3. При нажатии на крестик рядом с часами часы автоматически удаляются, при этом все подписки — `setTimeout`, `setInterval` и другие — должны вычищаться в соответствующем методе жизненного цикла.

Упрощения: если вам сложно реализовать механику со стрелками через css — см. `transform` и `rotate()`, то вы можете сделать цифровые часы, где отображаются только цифры в формате: ЧЧ:ММ:СС.

Подсказки:
1. Посмотреть текущий TimezoneOffset вы можете, используя объект `Date`.
1. Можете использовать библиотеку Moment.js.

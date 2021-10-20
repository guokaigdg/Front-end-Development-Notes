
## 查找一年中的哪一天
```js
const dayOfYear = (date) =>  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date());
```
## 找出两日期之间的天数
```js
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)dayDif(new Date("2020-10-21"), new Date("2021-10-22"))// Result: 366

```
# 24.01.19 -- JavaScript -- Массивы

  Массив - разновиднось объекта
  преднозначеная для хранения
  пронумерованых значений и
  предлагает доп методы
  манипуляции над ними


```javascript
  let a = [];
  let a = [1,5,7,8]

  a[0] //-> 1
  alert(a);
  a[0] = 3
  a.lenght // -> 4
  a.unshift(2); //добовление в начало
  a.shift(); //выкинуть перпый
  a.push(2) //add last
  a.pop() //del last
  a.indexOf(offset, 5) //-> 1
  a.remove(5)
  a.splice(start 3, count 1)
  delete a[0]// -> typeof a undefined
  a = [[3,5],[5,3],[6,2]] //-- 2d array
  a[1][2]

```

-------
## Прочие заметки

### Задание \#2 
```javascript
 

  //Old way using nested loop

  for (let x = 0; x < b.length; x++) {
    for (let y = 0; y < b[x].length; y++) {
      if (x == y) {
        main_sum += b[x][y];
      }
      if (b.length - 1 - x ==  y) {
        sub_sum += b[x][y]
      }
    }
  }

```

### Задание \#1
```javascript
 let in1 = 1;
 let in2 = 3;
 let start = in1 + 1;
 let end = in2 - 1;

 let sum = ((end * (end + 1)) - (start * (start - 1))) / 2;

 console.log(sum);

```

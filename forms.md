# Формы HTML

## Создание формы  в html
```html
<form>

</form>
```
### Атрибуты

  * action="" -- не обязателен,
    указывает адрес обработки
  * method="GET || POST" --
    метод передачи данных формы
  * enctype="multipart/form-data" -- служит для передачи файлов в форме

## Inputs
```html
<input>
```
### Атрибуты

  * type="" -- не обязателен, по умолчанию text
  
    может принимать значения:
    * ```password``` 
    * ```file```
    * ```mail ```
    * ```tel```
    * ```date(time)```
    * ```button```
    * ```submit```
    * ```reset```
  * name="" -- имя поля

    ```php
    $_POST["name"]  // -> значени инпута с аттрибутом name
                    // POST не видим в аддресной строке
    
    $_GET["name"]   //http://domain.com/go.php?text1=3&text2=1312
    ```
  * value = ""
  * placeholder = ""
  * required - обязательное поле
  * disabled
  *  ```<label for ="t1">text</label>```
  *  ```<textarea name = "11" cols="100" rows="30"></textarea>```
  *  ```<select name = "s1" myltiple ><option value="p1"></select>```
     ```<input type="checkbox"name="s"value="">```
     ```<input type="radio"name="s"value="" cheaked>```
# TODO1
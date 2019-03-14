База данных - это набор свединий хранящийся некоторым упорядочным способом

Система управления базами данных- совокупность языков и програмных средств каторая осуществляет доступ к данным каторая позволяет их менять удалять а так же обеспечивать безопасность данных

SQL -язык структурированых запросов основной задачей которого предаставления считывания и добовления в базу данных
Субд бывают:однопользовательские СУБД(для создания и использования на персональном PC,),многопользовательские СУБД(предназначеные для работы с единой БД для нескольких PC )
Структура базы данных:
Иерархическая структура(каждый узел имеет связь с более высоким(1))
Сетевая структура(Расширения Иерархической но имеет связь многие ко многим) 
Реляционная структура данных(Данные представлены в виде простых таблиц разбиты на строки и столбци)
Атрибут-свойство некоторой сущности часто называеться полем таблици(столбец)
Домен атрибут-множество значения(Тип данных формат,ограничения и допущения)
Картеж - конечное множество взаимосвязаных значений атрубутов(строки)
Отношения множество картажей
Схема отношений -конечное множество атрибутов (структура таблици)
Нормальная форма - требования предъявляемая в структуре таблиц релационых баз для устранения излишней аномалий 
аномалия- ситуация усложняющая обработку
аномалия модификации
Аномалия удаления - при удалении какого либо картежа из таблици может пропасть информации 
Аномалия добовления- возникает когда информацию в таблицу нельзя поместить либо вставка требует дооп просмотра таблиц
Нормализация.
1 нормальная форма(1NF)-отношения находиться в 1 NF если все его атрибуты являються простыми и строки недолжны повторяться 
2 нормальная форма - отношения находиться в 2 NF если она находиться в 1NF каждый не ключевой атрибут зависит от первичного ключа 
3 нормальная форма-отношения 3 NF если находить в 2 NF и каждый не ключевой атрибут не зависит от первичного ключа
      Создания таблиц баз данных 
      CREATE TABLE(создания таблици)special(название)('id' INT(11)  NOT NULL AUTO_INCREMET,'name' VARchar(20) NOT NULL,PRIMARY KEY('ID'),FORIGN KEY('ID_SP') REFERENCES 'special' ('id') ON DELETE CASCADE )

      INSERT INTO       
      1.получить номер кабинета в котром больше всего мест
      2.получить номера по спецальности матиматика-информатика
      3.получить название предметов у 377 группы в понедельник
      4.получить фио преподрв каторые ведут в группе  после 3 урока во вторник
     1. SELECT `number` FROM `kab` ORDER BY `count` DESC LIMIT 1
     2. SELECT `name` FROM `group` 
        WHERE `id_spec`=(SELECT `id`FROM `special` WHERE `name` = `мат-инф`)
     3.SELECT `name` FROM `predmet`
      WHERE `id` IN (SELECT `id_predmet` FROM `zanyatie` WHERE `day`=1 AND `id_group`=(SELECT `id` FROM `group` WHERE `name`=377))
     4. SELECT `FIO` FROM `prepod` 
     WHERE `id` IN(SELECT `id_prepod` FROM `zanyatie` WHERE `day`='Вторник' AND `number-2`>3 AND `id_group`=(SELECT `id` FROM `group`  WHERE `name`='277')
     ОБЪЯДЕНЕНИЯ ТАБЛИЦ.
     SELECT * FROM 'student' 
     INNER JOIN `group` ON (
           `student`.`id_group` =`group`.`id`) WHERE
     )
     SELECT * FROM 'student' 
     LEFT `group` ON (
           `student`.`id_group` =`group`.`id`) WHERE
     )
     SELECT * FROM 'student' 
     FULLOTHER JOIN `group` ON (
           `student`.`id_group` =`group`.`id`) WHERE
     )
      Получить номера кабинетов и фио отвественых за них у которых стаж более 40 лет 
      Получить недельное расписание группы 277 с указанием дня номер предмата и препода 
      получить номер группы и кабинета в понедельник последним урокам у иванова ивана ивановича 
      вывести список всех кабинетов с указанием их типов отсортированые по фио отвественного


   1.SELECT `kab`.`number`,`prepod`.`fio` FROM `kab` INNER JOIN `prepod` ON ( `kab`.`id_otv` =`prepod`.`id`) WHERE `stag`>40

   2. SELECT `zanyatie`.`day`,`zanyatie`.`number`,`predmet`.`name`,`prepod`.`FIO` FROM `zanyatie` INNER JOIN `prepod` ON ( `zanyatie`.`id_prepod` =`prepod`.`id`) INNER JOIN `predmet` ON ( `zanyatie`.`id_predmet` =`predmet`.`id`)WHERE `id_group`=(SELECT `id` FROM `group` WHERE `name`='277')

   4.SELECT `kab`.`number`,`type_kab`.`name`,`prepod`.`FIO` FROM `kab` INNER JOIN `type_kab` ON (`kab`.`ID_T_K`=`type_kab`.`ID`)INNER JOIN `prepod`ON(`kab`.`id_otv`=`prepod`.`ID`)ORDER BY `fio` ASC

   3.SELECT `group`.`name`,`kab`.`number` FROM `zanyatie` INNER JOIN `kab` ON (`zanyatie`.`ID_KAB`=`kab`.`ID`)INNER JOIN `group` ON(`zanyatie`.`ID_GROUP`=`group`.`ID`)WHERE `day` = 1 AND `zanyatie`.`ID_PREPOD`=(SELECT `id` FROM `prepod` WHERE `fio`='Иванов ИВан ИВанович'


   DELETE FROM `special`
   WHERE `id` = 5
   UPDATE `special` SET `name`='mat',`srok`=5
   WHERE `id` =7
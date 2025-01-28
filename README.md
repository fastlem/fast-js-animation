fast-js-animation
=====================
Быстро и легко создавайте анимационные html-баннеры из одного или нескольких кадров.  Делайте появления текста, блоков, изображений.
-----------------------------------
Добавьте к html-тегу, которому нужно добавить анимацию следующие атрибуты:

* `fastAnim_StartStyle` - название стиля, который нужно применить для начала анимации блока
* `fastAnim_StopStyle` - название стиля, который нужно применить в конце анимации блока
* `fastAnim_StartTime` - время в миллисекундах, когда нужно применить стиль появления анимации
* `fastAnim_StopTime` - время в миллисекундах, когда нужно применить стиль завершения анимации

### Доступные стили анимации

Появление блоков:
`onZoomIn`, `onZoomOut`, `onOpacity`, `onLeft`, `onTop`, `onRight`, `onBottom`

Исчезновения блоков:
`offZoomIn`, `offZoomOut`, `offOpacity`, `offLeft`, `offTop`, `offRight`, `offBottom`

Вы можете самостоятельно добавить или модифицировать текущие стили под креативную идею.  

### Запуск анимации
Подключите в проект файл стилей, скрипт и вызовите функцию `initFastAnimation({...})` с массивом параметров:

```js
{ 
	"MasterTiming":12000,  	// хронометраж анимации всего ролика в милисекундах. В примере: 12 секунд
	"numberOfCycles":2,	// количество циклов анимации. Если указано 0 - бесконечно.
	"frameStopTime":10000  	// временная метка остановки анимации в миллисекундах (стоп-кадр). Если указано 0 стоп-кадра нет. 
}
```

### Пример анимации баннера из 2 кадров:

**HTML**
```html
<link href="fast-js-animation.css" rel="stylesheet">
<div class="mainBanner">
	<h1 class="text_title"
		fastAnim_StartStyle="onLeft" 
		fastAnim_StopStyle="offOpacity"
		fastAnim_StartTime="0" 
		fastAnim_StopTime="7000">
	Этот заголовок первого кадра вылетит слева с 0 секунды и исчезнет через прозрачность на 7 секунде
	</h1>
	<h2 class="text_subline"
		fastAnim_StartStyle="onZoomIn" 
		fastAnim_StopStyle="offOpacity"
		fastAnim_StartTime="1000" 
		fastAnim_StopTime="7000">
	Этот подзаголовок первого кадра повится с 1 секунды и исчезнет на 7 секунде
	</h2>
	<h1 class="text_title"
		fastAnim_StartStyle="onZoomIn" 
		fastAnim_StopStyle="offOpacity"
		fastAnim_StartTime="8000" 
		fastAnim_StopTime="11000">
	Этот заголовок второго кадра появится на 8 секунде и исчезнет на 11 секунде
	</h1>
</div>
```

**SCRIPT**
```js
<script src="fast-js-animation.js"></script>
<script type="text/javascript">
	initFastAnimation({ 
		"MasterTiming":12000,	// общий хронометраж 12 сек
		"numberOfCycles":2,	// зациклен 2 раза
		"frameStopTime":10000	// после окончания 2х циклов остановить анимацию на 10 секунде
	});
</script>
```
-----------------------------------
Copyright (c) 2024-2025 You Digital

<https://www.you-digital.ru>

<https://www.banners728.ru/>

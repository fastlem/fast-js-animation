fast-js-animation
=====================
Быстро и легко создавайте анимационные html-баннеры из одного или нескольких кадров.  Делайте появления текста, блоков, изображений.
-----------------------------------
Добавьте к html-тегу, которому нужно добавить анимацию следующие атрибуты:

* `fastAnim_StartStyle` - название стиля, который нужно применить при начала анимации блока
* `fastAnim_StopStyle` - название стиля, который нужно применить в конце анимации блока
* `fastAnim_StartTime` - время в миллисекундах, когда нужно запустить стиль появления анимации
* `fastAnim_StopTime` - время в миллисекундах, когда нужно запустить стиль завершения анимации

Для запуска анимации подключите файл стилей, файл скрипта и запустите функцию initFastAnimation с массивом параметров:

```js
{ 
	"MasterTiming":8000,  	// общий хронометраж анимации всего ролика в милисекундах  
	"numberOfCycles":2,		// количество циклов анимации. Если указано 0 - бесконечно
	"frameStopTime":5000  	// временная метка остановки анимации в миллисекундах (для стоп-кадра). Если указано 0 - стоп-кадр нет. 
}
```

### Пример поочередной анимации смены текста из 2х кадров:

**HTML**
```html
<link href="fast-js-animation.css" rel="stylesheet">
<div class="mainBanner">
	<div class="H1 text_title"
		fastAnim_StartStyle="onLeft" 
		fastAnim_StopStyle="offOpacity"
		fastAnim_StartTime="0" 
		fastAnim_StopTime="7000"
	></div>
	<div class="H1 text_title2"
		fastAnim_StartStyle="onZoomIn" 
		fastAnim_StopStyle="offOpacity"
		fastAnim_StartTime="800" 
		fastAnim_StopTime="7000"
	></div>
</div>
```

**SCRIPT**
```js
<script src="fast-js-animation.js"></script>
<script type="text/javascript">
	initFastAnimation({ 
		"MasterTiming":8000,
		'frameStopTime':5000,
		'numberOfCycles':2,
	});
</script>
```

Copyright (c) 2024-2025 You Digital
<https://www.you-digital.ru>
<https://www.banners728.ru/>

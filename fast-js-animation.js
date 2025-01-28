/*!
* @license fast-js-animation v1.0
*
* Copyright (c) 2024-2025 https://www.banners728.ru, https://www.you-digital.ru You Digital Inc.
*
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
function initFastAnimation(e) {

	if (e.MasterTiming==undefined || e.MasterTiming<0) {e.MasterTiming = 10000;}
	if (e.frameStopTime==undefined || e.frameStopTime<0) {e.frameStopTime = 0;}
	if (e.numberOfCycles==undefined || e.numberOfCycles<0) {e.numberOfCycles = 0;}

	let AnimOBJ = document.querySelectorAll('[fastAnim_StartStyle]');
	let Timeline;
	let frameTime = 0;
	let currentCycle = 0;

	function init(){
		if (AnimOBJ.length>0){
			AnimOBJ.forEach(function(item, i, arr) {
				item.style.opacity = '0';
			});
			Timeline = setInterval(MasterTicks, 100);
		}
	}

	function MasterTicks() {
		let frameTime1 = frameTime + 100;

		AnimOBJ.forEach(function(item, i, arr) {
			let A_style_on = item.getAttribute('fastAnim_StartStyle'); 
			let A_style_off = item.getAttribute('fastAnim_StopStyle');
			let A_start = item.getAttribute('fastAnim_StartTime'); 
			let A_stop = item.getAttribute('fastAnim_StopTime');

			// запуск включения анимации в нужное время
			if (A_start >= frameTime && A_start<=frameTime){
				item.classList.add(A_style_on);
				item.classList.remove(A_style_off);
			}

			// запуск отключения анимации в нужное время
			if (A_stop >= frameTime && A_stop<=frameTime){
				item.classList.add(A_style_off);
		  		item.classList.remove(A_style_on);
			}
		});

		// цикл
		frameTime += 100;
		if (frameTime >= e.MasterTiming) {
			frameTime = 0;
			if (e.numberOfCycles>0){
				currentCycle++;				
				if (currentCycle==e.numberOfCycles){
					e.numberOfCycles = 0;
					console.log(e.numberOfCycles);
				}
			}

		}

		// отрабатываем остановку на стоп-кадре
		if (e.numberOfCycles==0 && e.frameStopTime!=0 && e.frameStopTime>=frameTime && e.frameStopTime<=frameTime){
	  		clearInterval(Timeline);
	  	}
	}

	init();
}


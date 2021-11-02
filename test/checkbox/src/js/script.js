"use strict"

const tabsBoxes = document.querySelectorAll('.tabs-wrap');

for (let i = 0; i < tabsBoxes.length; i++) {
	// ПОЛУЧЕНИЕ МАССИВА ВСЕХ ВКЛАДОК
	const tabs = tabsBoxes[i].querySelectorAll('.tabs__item');
	// ПОЛУЧЕНИЕ БЛОКА С ЭЛЕМЕНТАМИ КОНТЕНТА ВКЛАДОК
	const tabsContent = tabsBoxes[i].querySelector('.tabs-content');
	// ПОЛУЧЕНИЕ ВСЕХ ЭЛЕМЕНТОВ КОНТЕНТА ВКЛАДОК
	const tabsContentItems = tabsContent.querySelectorAll('.tabs-content__item');


	for (let i = 0; i < tabs.length; i++) {
		let tab = tabs[i];

		tab.addEventListener('click', function () {
			// УБАРИЕМ КЛАСС "ACTIVE" СО ВСЕХ ВКЛАДОК
			for (let j = 0; j < tabs.length; j++) {
				tabs[j].classList.remove('active');
			}


			// АКТИВНАЯ ВКЛАДКА ПРИ КЛИКЕ
			let tabContentId = '#' + this.dataset.target;
			this.classList.add('active');

			// УБАРИЕМ КЛАСС "ACTIVE" СО ВСЕХ ЭЛЕМЕНТОВ КОНТЕНТА ВКЛАДОК
			for (let k = 0; k < tabsContentItems.length; k++) {
				tabsContentItems[k].classList.remove('active');
			}

			// АКТИВНЫЙ ЭЛЕМЕНТ КОНТЕНА ВКЛАДКИ ПРИ КЛИКЕ
			tabsContent.querySelector(tabContentId).classList.add('active');
		})
	}
}

// ==============================================================================================================
// МНЕ КАЖЕТСЯ КАК-ТО ГРОМОЗДКО
// ХОЧУ ПОПРОБОВАТЬ КАК-ТО ЧЕРЕЗ КОНСТРУКТОР ОБЪЕКТА
// ==============================================================================================================

const copyBtns = document.getElementsByClassName('code-copy-btn');

for(let i = 0; i < copyBtns.length; i++){
	let copyBtn = copyBtns[i];
	copyBtn.addEventListener('click', (e)=>{
		// Координаты клика по кнопке
		let iToolTipX = e.clientX;
		let iToolTipY = e.clientY;
		copyToClipboard(copyBtn, iToolTipX, iToolTipY);
	})
	
}



function copyToClipboard(copyBtn, iToolTipX, iToolTipY) {
    let itemToCopy = document.getElementById(copyBtn.dataset.target).innerText;
    let el = document.createElement('textarea');
    el.value = itemToCopy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

	// TOOLTIP
	// Защита от множественного появления подсказок
	let iToolTip = document.querySelector('.info-iToolTip');
	if(!iToolTip){

		// Создание подсказки
		iToolTip = document.createElement('div');
		iToolTip.className = 'info-iToolTip';
		iToolTip.innerText = 'Copied';
		document.body.appendChild(iToolTip);


	
		// Отступ подсказки от клика
		let iToolTipoOffsetLeft = 35;
		// Проверка на полное отображение подсказки в окне браузера
		// Если не выходит за рамки окна, то позиционирую на "iToolTipoOffsetLeft" px правее клика
		if(document.documentElement.clientWidth >= (iToolTipX + iToolTipoOffsetLeft + iToolTip.offsetWidth)){
			iToolTip.style.left = `${iToolTipX + iToolTipoOffsetLeft}px`;
		} else{
			// Если выходит за границы окна, то приклеиваю к правой границе окна + 15px
			iToolTip.style.left = 'auto';
			iToolTip.style.right = `15px`;
		}

		iToolTip.style.top = `${iToolTipY - 40}px`;

		// Удаление подсказки
		setTimeout(() => {
			document.body.removeChild(iToolTip);
		}, 1500);
	}
}
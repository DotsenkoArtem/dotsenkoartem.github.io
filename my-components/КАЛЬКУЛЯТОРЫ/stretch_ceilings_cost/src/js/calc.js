const textures = [
	{
		name: 'Глянцевая',
		price: 800	
	},
	{
		name: 'Сатиновая',
		price: 700	
	},
	{
		name: 'Тканевая',
		price: 1500
	}
];
let currentTxtrPrice = textures[0].price;
// ПОЛУЧЕНИЕ ПОЛЕЙ ВВОДА ДАННЫХ
const totalSqur		= document.querySelector('#sqr'),
	  totalLamps	= document.querySelector('#lamps');
// ПОЛУЧЕНИЕ ПОЛЯ ИТОГОВОЙ СТОИМОСТИ
const totalCost = document.querySelector('#total-cost');
// ОБРАБОТКА БЛОКА ВЫБОРА ФАКТУРЫ
const txtrChecked 	= document.querySelector('.txtr_checked'),
	  txtrItemsBox  = document.querySelector('.dropdown-box'),
	  angle		  	= txtrChecked.querySelector('.angle'),
	  body		  	= document.querySelector('body');

// ПОЛУЧЕНИЕ МАССИВА ВСЕХ ЭЛЕМЕНТОВ ФАКТУРЫ
const txtrItems   	= document.querySelectorAll('.dropdown__item'); 
// ПОЛУЧЕНИЕ ЗНАЧЕНИЯ ВЫБРАННОЙ ФАКТУРЫ
const txtrCheckedValue = document.querySelector('.txtr_checked-value');


txtrChecked.addEventListener('click', function(e){
	txtrItemsHandle();
	e.stopPropagation();
});


// ФУНКЦИЯ ОБРАБОТКИ БЛОКА ВЫБОРА ФАКТУРЫ
function txtrItemsHandle() {
	txtrItemsBox.classList.add('shown');
	angle.classList.add('up');
	checkTxtr();
	body.addEventListener('click', function(){
		txtrItemsBox.classList.remove('shown');
		angle.classList.remove('up');
	})
}

// ФУНКЦИЯ ВЫБОРА ФАККТУРЫ
function checkTxtr() {
	for(let i = 0; i < txtrItems.length; i++){
		txtrItems[i].addEventListener('click', function(){
		txtrCheckedValue.innerHTML = txtrItems[i].innerHTML;
		getCurrentPrice(txtrItems[i]);
		calculate(totalSqur.value, currentTxtrPrice, totalLamps.value);
		})
	}
}

// IE НЕ ПОНИМАЕТ "=>" БЫЛО ЗАКОММЕНТИРОВАНИО ДЛЯ ПРОВЕРКИ ВЫПАДАЮЩЕГО СПИСКА

// ПОЛУЧЕНИЕ ЦЕНЫ ВЫБРАННОЙ ФАКТУРЫ
function getCurrentPrice(currentTxtr) {
	const dataAttrValue = currentTxtr.dataset.name;
	const currentTxtrObj   = textures.find(txtr => txtr.name === dataAttrValue);
	currentTxtrPrice = currentTxtrObj.price;
	// console.log(currentTxtrPrice);
}



// ИНИЦИАЛИЗАЦИЯ RANGE-SLIDERS
const sqrRange = document.getElementById('sqr-range');
noUiSlider.create(sqrRange, {
    start: 4,
    connect: [true, false],
    range: {
        'min': 0,
        'max': 100
    }
});

const lampsRange = document.getElementById('lamps-range');
noUiSlider.create(lampsRange, {
    start: 1,
    connect: [true, false],
    range: {
        'min': 4,
        'max': 10
    }
});

// ФУНКЦИЯ СВЯЗКИ ЗНАЧЕНИЙ ПОЛЗУНКОВ С ИНПУТАМИ
function bindValues() {
	let rangeBlocks = document.querySelectorAll('.range-block');
	for(let i = 0; i < rangeBlocks.length; i++){
		let rangeInpt = rangeBlocks[i].querySelector('.range-inpt'),
			digitInpt = rangeBlocks[i].querySelector('.digit-inpt');
		// СВЯЗКА ПОЛЗУНКА С INPUT[TYPE="NUMBER"]
		rangeInpt.noUiSlider.on('update', function (values, handle) {
		    digitInpt.value = Math.round(values[handle]);
		    calculate(totalSqur.value, currentTxtrPrice, totalLamps.value);
		});
		// СВЯЗКА INPUT[TYPE="NUMBER"] С ПОЛЗУНКОМ
		digitInpt.addEventListener('change', function () {
		    rangeInpt.noUiSlider.set(this.value);
		});	


	}
}
bindValues();


// ФОРМУЛА РАСЧЕТА СТОИМОСТИ
/*
ОБЩАЯ ПЛОЩАДЬ			- ОП
КОЛИЧЕСТВО СВЕТИЛЬНИКОВ	- КС
ВЫБРАННАЯ ФАКТУРА		- ВФ
*/

// изначально было так
function calculate(totalSqur= 10, checkedTexturePrice = 800, lampsQuantity = 4) {  
// function calculate() {
	let cost;
	// totalSqur = 10,
	// checkedTexturePrice = 800,
	// lampsQuantity = 4;

	cost = totalSqur * checkedTexturePrice + lampsQuantity * 400;


	totalCost.innerHTML = cost + '<span class="rub">Руб</span>';

	// console.log(cost);
}



console.log(angle);

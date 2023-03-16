"use srict"

const images = document.querySelectorAll('img');

let prevBtn,
	nextBtn;

for(let image of images) {

	image.addEventListener('click', ()=>{
			let num = 0;
			let overlay = document.createElement('div');
			overlay.classList.add('overlay');
			setTimeout(function () {
				overlay.classList.add('shown');
			}, 0);
			gallary.append(overlay);


			prevBtn = document.createElement('button');
			prevBtn.innerHTML = '<< НАЗАД';
			prevBtn.className = 'prev-btn';
			overlay.append(prevBtn);


			nextBtn = document.createElement('button');
			nextBtn.innerHTML = 'ВПЕРЕД >>';
			nextBtn.className = 'next-btn';
			overlay.append(nextBtn);


// - - - - - - - - - - - - - - - - - - - - - - - - - - -
		prevBtn.addEventListener('click', (e)=>{
			e.stopPropagation();

			
			images[num].classList.remove('active');
			if(num == 0) {
				num = images.length - 1;
			} else{
				num--;
			}
			
			images[num].classList.add('active');
		})
// - - - - - - - - - - - - - - - - - - - - - - - - - - -




  // - - - - - - - - - - - - - - - - - - - - - - - - - - -
			nextBtn.addEventListener('click', (e)=>{
				e.stopPropagation();


					images[num].classList.remove('active');

				
				
				if(num == images.length - 1) {
					num = 0;
				} else{
					num++;
				}
				
				images[num].classList.add('active');
			})
  // - - - - - - - - - - - - - - - - - - - - - - - - - - -

			image.classList.add('active');



		overlay.addEventListener('click', ()=>{
			

			images[num].classList.remove('active');
			overlay.classList.remove('shown');
			setTimeout(function () {
				overlay.remove();
			}, 500);
			
		})
	})




	// console.log(image);
}



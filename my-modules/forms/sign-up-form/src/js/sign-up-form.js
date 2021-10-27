// ФУНКЦИОНАЛ "ПОКАЗАТЬ - СКРЫТЬ ПАРОЛЬ"
const formGroupPasses = document.querySelectorAll('.form__group_pass');

for (let i = 0; i < formGroupPasses.length; i++){
    let showPass        = formGroupPasses[i].querySelector('.show-pass');
    let passInput       = formGroupPasses[i].querySelector('input[type="password"]');
    
    showPass.addEventListener('click', function () {
        if(passInput.type == 'password'){
            passInput.type = 'text';
            showPass.classList.add('shown');
        } else{
            passInput.type = 'password';
            showPass.classList.remove('shown');
        }
    });
}
// - - - - - - - - - - - - - - - - - - - - - - - - - 

// ПОЛУЧЕНИЕ ВСЕХ ФОРМ ДОКУМЕНТА
let forms = document.forms;

for(let i = 0; i < forms.length; i++){
    let form 			= forms[i];
    let submitBtn		= form.querySelector('[type="submit"]');
    let userPass		= form.userPass;
    let userPassConfirm	= form.userPassReplay;
    let showPassConfirm = userPassConfirm.parentElement.querySelector('.show-pass');

    // ДОБАВЛЕНИЕ-УДАЛЕНИЕ ФОКУСА НА ТЕКСТОВЫЕ ИНПУТЫ
    for(let j = 0; j < form.elements.length; j++){
        if(form.elements[j].classList.contains('form__control')){
            let ElementInput = form.elements[j];

            ElementInput.addEventListener('focus', addFocus);

            ElementInput.addEventListener('input', function () {
                if(userPassConfirm.value){
                    userPassConfirm.parentElement.classList.remove('error');
                    userPassConfirm.parentElement.classList.add('valid');
                }
                if(ElementInput.value){
                    ElementInput.parentElement.classList.remove('focused');
                    ElementInput.parentElement.classList.add('valid');
                }else{
                    ElementInput.parentElement.classList.remove('valid');
                }
            });

            ElementInput.addEventListener('blur', removeFocus);
        }
    }

    function addFocus() {
        if(!this.parentElement.classList.contains('error')){
            this.parentElement.classList.add('focused');
        }
    }
    function removeFocus() {
        this.parentElement.classList.remove('focused');
    }

    // ОБРАБОТКА ВАЛИДАЦИИ ФОРМЫ ПЕРЕД ОТПРАВКОЙ
    submitBtn.addEventListener('click', function (event) {

        // Получение input[required] для валидации браузером
        const requiredInputs = form.querySelectorAll('[required]');
        let count = 0;
        for(let i = 0; i < requiredInputs.length; i++){
            let requiredInput = requiredInputs[i];
            requiredInput.validity.valid ? count++ : count;

            // Отмена действия кнопки при условии валидации полей браузером
            if(count == requiredInputs.length){
                event.preventDefault();
                if(!userPass.value || !userPassConfirm.value){
                    alert("Поля формы не заполнены!");
                    return;
                }
                if(userPass.value !== userPassConfirm.value){
                    showError();
                } else{
                    alert('Успешно! Форма не отправляется.');
                    window.location = '#';
                }
            }
        }
    })
    
    function showError() {
        setTimeout(function () {
            userPassConfirm.parentElement.classList.remove('valid');
            userPassConfirm.parentElement.classList.add('error');
            userPassConfirm.type = 'text';
            showPassConfirm.classList.add('shown');
            alert('Демонстрация ошибки. Форма не отправляется.');
        }, 1000);
    }
}
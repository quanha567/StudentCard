const name_input = document.querySelector('.name-input');
const name_result = document.querySelector('.name-result');
const bithday_input = document.querySelector('.birthday-input');
const bithday_result = document.querySelector('.birthday-result');
const class_input = document.querySelector('.class-name-input');
const class_result = document.querySelector('.class-name-result');
const year_input = document.querySelector('.year-input');
const year_result = document.querySelector('.year-result');
const id_input = document.querySelector('.id-input');
const id_result = document.querySelector('.id-result');
const img_input = document.querySelector('.img-input');
const img_result = document.querySelector('.img-result');

const changeInfo = (input, result, event = 'keyup') => {
   input.addEventListener(event, () => {
      result.innerText = input.value;
   })
}

$('.img-input').change(function () {
   var tempPath = URL.createObjectURL(this.files.mozFullPath);
   console.log(tempPath);
   $('.img-result').attr('src', this.files[0].mozFullPath);
});

changeInfo(bithday_input, bithday_result, 'change');
changeInfo(name_input, name_result);
changeInfo(class_input, class_result);
changeInfo(year_input, year_result)
changeInfo(id_input, id_result);

// name_input.addEventListener('keydown', () => {
//    name_result.innerText = name_input.value;
// })
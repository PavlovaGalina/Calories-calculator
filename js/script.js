const form = document.querySelector('.form');
const calculateButton = document.querySelector('.form__calculate-button');
const resetButton = document.querySelector('.form__reset-button');

const sex = document.querySelectorAll('.form__input-sex');
const age = document.querySelector('.form__input--age');
const height = document.querySelector('.form__input--height');
const weight = document.querySelector('.form__input--weight');
const activity = document.querySelectorAll('.form__input-activity:checked');

const error = document.querySelector('.form__error');

const resultMaintain = document.querySelector('.result__item-maintain-weight');
const resultLose = document.querySelector('.result__item-lose-weight');
const resultGain = document.querySelector('.result__item-gain-weight');

calculateButton.addEventListener("click", function(evt) {
  event.preventDefault();

  error.textContent = '';
  let personData = new Object();

  for (let i = 0; i < sex.length; i++) {
    if (sex[i].checked) {
      personData.sexOption = (sex[i].value == "man") ? 5 : 161;
    }
  }

  personData.ageNumber = age.value;
  personData.heightNumber = height.value;
  personData.weightNumber = weight.value;

  if (personData.ageNumber > 0 && personData.heightNumber > 0 && personData.weightNumber) {
    for (let i = 0; i < activity.length; i++) {
      if (activity[i].checked) {
        personData.activityOption = (activity[i].value == "min") ? 1.2 :
          (activity[i].value == "low") ? 1.375 :
          (activity[i].value == "normal") ? 1.55 :
          (activity[i].value == "heigh") ? 1.725:
          1.9 ;
        }
      }
      let totalCalories = ((Math.floor((((10 * personData.weightNumber) + (6.25 * personData.heightNumber) - (5 * personData.ageNumber) - personData.sexOption) * personData.activityOption) / 100)) * 100);
      let totalCaloriesLose = totalCalories - 500;
      let totalCaloriesGain = totalCalories + 200;

      if(Number.isInteger(totalCalories)) {
      resultMaintain.textContent = totalCalories + ' ккал';
      resultLose.textContent = totalCaloriesLose + ' ккал';
      resultGain.textContent = totalCaloriesGain + ' ккал';
    }
    window.scrollBy(0, 200);
  } else {
    error.textContent = 'Введите корректные значения';
  }
});

resetButton.onclick = function () {
  resultMaintain.textContent = '?';
  resultLose.textContent = '?';
  resultGain.textContent = '?';
}

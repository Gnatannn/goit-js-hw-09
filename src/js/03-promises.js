import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

refs.btnSubmit.addEventListener('submit', onFormSubmit);

console.log(refs.btnSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  let delayTime = Number(evt.currentTarget.delay.value);
  const stepTime = Number(evt.currentTarget.step.value);
  const amountNumber = Number(evt.currentTarget.amount.value);
  console.log(Number(refs.delayInput.value));
  console.log(stepTime);
  console.log(amountNumber);

  if (delayTime >= 0 && stepTime >= 0 && amountNumber >= 0) {
    for (let position = 1; position <= amountNumber; position += 1) {
      delayTime += stepTime;

      createPromise(position, delayTime)
        .then(({ position, delay }) => {
          Notiflix.Notify.failure(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
            { position: 'center-top' }
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`,
            { position: 'center-top' }
          );
        });
    }
  } else {
    Notiflix.Notify.failure('Please put values > 0', {
      position: 'center-top',
    });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

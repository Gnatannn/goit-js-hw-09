import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

refs.btnSubmit.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const delayTime = Number(refs.delayInput.value);
  const stepTime = Number(refs.stepInput.value);
  const amountNumber = Number(refs.amountInput.value);
  console.log(delayTime);
  console.log(stepTime);
  console.log(amountNumber);

  if (delayTime < 0 || stepTime < 0 || amountNumber < 0) {
    return Notiflix.Notify.failure('Please put values > 0', {
      position: 'center-top',
    });
  }
  for (let i = 0; i < amountNumber; i += 1) {
    createPromise(delayTime, stepTime)
      .then(({ position, delay }) => {
        Notiflix.Notify.failure(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
          {
            position: 'center-top',
          }
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
          {
            position: 'center-top',
          }
        );
      });

    delayTime += stepTime;
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

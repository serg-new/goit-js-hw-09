import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = form.querySelector('input[name="delay"]');
const stepInput = form.querySelector('input[name="step"]');
const amountInput = form.querySelector('input[name="amount"]');

const createPromise = (position, delay) => {
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
  return promise;
};

const onFormSubmit = e => {
  e.preventDefault();
  const delayInputValue = Number(delay.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  setTimeout(() => {
    let delay = delayInputValue;
    let position = 1;

    const timerId = setInterval(() => {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
        });

      delay += step;
      position += 1;

      if (position === amount + 1) {
        clearInterval(timerId);
      }
    }, step);
  }, delayInputValue);
};

form.addEventListener('submit', onFormSubmit);


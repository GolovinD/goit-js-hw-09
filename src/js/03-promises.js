const formRef = document.querySelector('.form');

formRef.addEventListener('submit', onBtnCreate);

function onBtnCreate(evt) {
  evt.preventDefault();

  let firstDelay = Number(formRef.delay.value);
  const delayStep = Number(formRef.step.value);
  const promisesAmount = Number(formRef.amount.value);

  for (let i = 1; i <= promisesAmount; i += 1) {
    createPromise(i, firstDelay);
    firstDelay += delayStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value => {console.log(value)})
    .catch(error => {console.log(error)});
}
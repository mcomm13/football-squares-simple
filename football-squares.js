const resultSection = document.getElementById('result-section');
const resultSpan = document.getElementById('random-pick');

const makeRandomPick = () => {
  resultSection.hidden = true;
  // resultSection.classList.remove('animate__animated animate__rubberBand');
  let randomPick = 0;
  let numberOfOptions = document.getElementById('input-options').value || 2;

  setTimeout(() => {
    numberOfOptions = parseInt(numberOfOptions);
    randomPick = Math.floor(Math.random() * numberOfOptions) + 1;
    resultSpan.textContent = randomPick.toString();
    //resultSection.classList.add('animate__animatedanimate__rubberBand');
    resultSection.hidden = false;
  }, 300);
};

const getRandomNumbers = () => {
  const numberPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const randomizedNumbers = [];
  let randomIndex, randomNumber;

  for (let i = 0; i <= 9; i++) {
    randomIndex = Math.floor(Math.random() * (10 - i));
    randomNumber = numberPool[randomIndex];

    randomizedNumbers.push(randomNumber);
    numberPool.splice(randomIndex, 1);
  }

  return randomizedNumbers;
};

const displayNewNumbers = () => {
  const team1Numbers = getRandomNumbers();
  const team2Numbers = getRandomNumbers();
  const tableBody = document.getElementById('table-body');
  let newTableBodyContent = '';

  for (let i = 0; i < 10; i++) {
    newTableBodyContent += `
      <tr>
        <td class="team1-numbers">${team1Numbers[i]}</td>
        <td class="team2-numbers">${team2Numbers[i]}</td>
      </tr>`;
  }

  tableBody.innerHTML = newTableBodyContent;
};

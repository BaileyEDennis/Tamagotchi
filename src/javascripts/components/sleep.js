let energy = 50;

const nap = () => {
  if (energy < 100) {
    energy += 50;
  }
  if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const slumber = () => {
  if (energy < 100) {
    energy += 60;
  }
  if (energy > 100) {
    energy = 100;
  }
  return energy;
};

const sleepDom = () => {
  const domString = `<div class="header">
  <h1>Sleep</h1>
  </div>
  <div id="sleepy">
  <h2>${energy}</h2>
  </div>
  <div id = "sleepButtons">
  <button id="napButton">Nap</button>
  <button id="slumberButton">Sleep</button>
  </div>
  </div>
    `;
  $('#sleep').html(domString);
};

const sleepButtons = () => {
  $('#napButton').on('click', () => {
    $('#sleepy').html('');
    $('#sleepy').html(`<h2>${nap()}</h2>`);
  });
  $('#slumberButton').on('click', () => {
    $('#sleepy').html('');
    $('#sleepy').html(`<h2>${slumber()}</h2>`);
  });
};

export default { sleepButtons, sleepDom };

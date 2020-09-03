let full = 100;

const eatButtonGood = () => {
  if (full < 100) {
    full += 10;
  }
  if (full >= 100) {
    full = 100;
  }
  return full;
};

const eatButtonBad = () => {
  if (full > 0) {
    full -= 3;
  }
  if (full <= 0) {
    full = 0;
  }
  return full;
};

const eatDom = () => {
  const domString = `<div class="header">
  <h1>Eat</h1>
  </div>
  <div id="health">
  <h2>${full}</h2>
  </div>
  <div id = "buttons">
  <button id="goodFood">Healthy</button>
  <button id="badFood">Unhealthy</button>
  </div>
  </div>
    `;
  $('#eat').html(domString);
};

const eatingButtons = () => {
  $('#goodFood').on('click', () => {
    $('#health').html('');
    $('#health').html(`<h2>${eatButtonGood()}</h2>`);
  });
  $('#badFood').on('click', () => {
    $('#health').html('');
    $('#health').html(`<h2>${eatButtonBad()}</h2>`);
  });
};

export default { eatingButtons, eatDom };

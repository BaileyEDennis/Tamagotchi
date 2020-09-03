let strength = 100;

const scaredButton = () => {
  if (strength < 100) {
    strength += 1;
  }
  if (strength >= 100) {
    strength = 100;
  }
  return strength;
};

const violenceButton = () => {
  if (strength <= 100) {
    strength -= 10;
  }
  if (strength <= 0) {
    strength = 0;
  }
  return strength;
};

const fightDom = () => {
  const domString = `<div class="header">
  <h1>Fight</h1>
  </div>
  <div id="fightTime">
  <h2>${strength}</h2>
  </div>
  <div id = "fightButtons">
  <button id="runAway">Run Away</button>
  <button id="fightButton">Fight</button>
  </div>
  </div>
    `;
  $('#fight').html(domString);
};

const fightButtons = () => {
  $('#runAway').on('click', () => {
    $('#fightTime').html('');
    $('#fightTime').html(`<h2>${scaredButton()}</h2>`);
  });
  $('#fightButton').on('click', () => {
    $('#fightTime').html('');
    $('#fightTime').html(`<h2>${violenceButton()}</h2>`);
  });
};

export default { fightButtons, fightDom };

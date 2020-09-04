// Imports
import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';

// Functions
const progressFunc = () => {
  const fullness = eat.full;
  const energyness = sleep.energy;
  const strengthness = fight.strength;
  const funness = play.fun;
  const sum = fullness + energyness + strengthness + funness;
  const divis = sum / 4;
  return divis;
};

const progressDom = () => {
  const domString = `
    <label for='progbar'>Progress:</label>
    <progress id='progbar' value='${progressFunc()}' max='100'> </progress>
      `;
  $('#progress').html(domString);
};

const refresher = () => {
  $(':button').on('click', () => {
    $('#progress').html('');
    $('#progress').html(progressDom());
    console.warn('click');
  });
};

// export
export default { progressDom, refresher };

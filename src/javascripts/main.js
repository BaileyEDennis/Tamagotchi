import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';

const init = () => {
  eat.eatDom();
  eat.eatingButtons();
  play.playDom();
  play.playButtons();
  fight.fightDom();
  fight.fightButtons();
  sleep.sleepDom();
  sleep.sleepButtons();
};

init();

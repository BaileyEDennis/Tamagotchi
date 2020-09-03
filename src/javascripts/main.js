import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';

const init = () => {
  eat.eatDom();
  eat.eatingButtons();
  play.playDom();
  play.playButtons();
  fight.fightDom();
  fight.fightButtons();
};

init();

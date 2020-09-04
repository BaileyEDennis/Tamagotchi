let fun = 50;

const funButtonExtra = () => {
  if (fun < 100) {
    fun += 50;
  }
  if (fun >= 100) {
    fun = 100;
  }
  return fun;
};

const funButtonMeh = () => {
  if (fun < 100) {
    fun += 2;
  }
  if (fun >= 100) {
    fun = 100;
  }
  return fun;
};

const playDom = () => {
  const domString = `<div class="header">
  <h1>Play <i class="fas fa-football-ball"></i></h1>
  </div>
  <div id="playtime">
  <h2>${fun}</h2>
  </div>
  <div id = "playButtons">
  <button id="reallyGoodFun" class='button'>Very Fun</button>
  <button id="okayFun" class='button'>Some Fun</button>
  </div>
  </div>
    `;
  $('#play').html(domString);
};

const playButtons = () => {
  $('#reallyGoodFun').on('click', () => {
    $('#playtime').html('');
    $('#playtime').html(`<h2>${funButtonExtra()}</h2>`);
  });
  $('#okayFun').on('click', () => {
    $('#playtime').html('');
    $('#playtime').html(`<h2>${funButtonMeh()}</h2>`);
  });
};

export default { playButtons, playDom, fun };

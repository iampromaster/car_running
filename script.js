let y;
m = 0;

function start() {
    y = setInterval(run, 100);
    
    function run() {
      if (m == 1200) {
        clearInterval(y);
        m = 0;
      } else {
        m += 50;
        let x = document.getElementById('img')
        x.style.marginLeft = m + 'px'; 
      }
    }
}

function stop() {
  clearInterval(y)
}
var logEl = document.querySelector('.battery-log');

var battery = {
  charged: '0%',
  cycles: 120
}

anime({
  targets: battery,
  charged: '100%',
  cycles: 130,
  round: 1,
  easing: 'linear',
  update: function() {
    logEl.innerHTML = JSON.stringify(battery);
  }
});
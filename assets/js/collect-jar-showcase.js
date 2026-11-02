(function () {
  var demo = document.querySelector('.cj-physics-demo');
  if (!demo) return;

  var messages = {
    rest: 'The collection settles at the bottom of the jar.',
    tilt: 'Tilt the phone and gravity shifts the objects.',
    shake: 'A shake sends the objects tumbling.',
    flick: 'Drag an object, then flick it across the jar.'
  };

  var status = demo.querySelector('.cj-demo-status');
  demo.querySelectorAll('[data-physics-mode]').forEach(function (button) {
    button.addEventListener('click', function () {
      var mode = button.getAttribute('data-physics-mode');
      demo.dataset.state = mode;
      demo.querySelectorAll('[data-physics-mode]').forEach(function (control) {
        control.setAttribute('aria-pressed', control === button ? 'true' : 'false');
      });
      status.textContent = messages[mode];
    });
  });
}());

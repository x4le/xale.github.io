// Glitter cursor trail effect
// Spawns small sparkle particles that follow the mouse and fade out.

(function () {
  const colors = ['#2a506e', '#2530d1', '#f2e8d5', '#619dd2', '#fff8e0'];
  let lastSpawn = 0;
  const spawnInterval = 40; // ms between sparkles, tweak for density

  function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'glitter-sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.setProperty('--drift', (Math.random() * 40 - 20) + 'px');
    sparkle.innerHTML = '✦';
    document.body.appendChild(sparkle);

    // Remove after animation finishes
    setTimeout(() => sparkle.remove(), 700);
  }

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastSpawn > spawnInterval) {
      lastSpawn = now;
      createSparkle(e.pageX, e.pageY);
    }
  });
})();

function openFolder(num) {
  const content = document.getElementById("content");

  if (num === 1) {
    content.innerHTML = `
      <h2>👑 Per la mia Regina</h2>
      <p>
        Amore, guardati un attimo.  
        Sei già bellissima così come sei.  
        I 18 anni non ti cambiano…  
        ti fanno solo brillare di più ✨
      </p>
      <img src="img/regina.jpg">
    `;
    unlock(2);
  }

  if (num === 2) {
    content.innerHTML = `
      <h2>📚 Il tuo Futuro</h2>
      <p>
        Amore, a scuola andrai benissimo.  
        Non perché sarà sempre facile,  
        ma perché sei più forte di quanto credi.  
        Il futuro ti sta aspettando.
      </p>
      <img src="img/hello_kitty.png">
    `;
    unlock(3);
  }

  if (num === 3) {
    content.innerHTML = `
      <h2>✨ Il tuo Glow Up</h2>
      <p>
        Amore, il tuo glow up sta arrivando.  
        Piano, ma splendido.  
        Come te ✨
      </p>
      <img src="img/cavaliere.jpg">
    `;
    unlock(4);
  }

  if (num === 4) {
    content.innerHTML = `
      <h2>🌍 Davanti a Te</h2>
      <p>
        Amore, davanti a te c’è il mondo.  
        Cammina senza paura.  
        Come la regina che sei.
        <br><br>
        — il tuo cavaliere ⚔️
      </p>
      <img src="img/nostra_foto.jpg">
    `;
  }
}

function unlock(num) {
  document.getElementById("f" + num).classList.remove("locked");
}

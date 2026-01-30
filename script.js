function openFolder(num) {
  const content = document.getElementById("content");

  if (num === 1) {
    content.innerHTML = `
      <h2>👑 Per la mia Regina</h2>
      <p>
        Amore, guardati un attimo.  
        hai già 18 anni seicosì bellissima così vecchia heheheh :).  
        I 18 anni non ti cambieranno ma ti faranno 
        solo brillare e illuminare di più. Oggi compi 18 anni e non è solo un numeroè un nuovo inizio di una versione di te, più forte, più libera e più consapevole. Voglio che tu sappia che sono orgoglioso di chi sei diventata e di chi diventerai, passo dopo passo. ✨
      </p>
      <img src="img/regina.jpg">
    `;
    unlock(2);
  }

  if (num === 2) {
    content.innerHTML = `
      <h2>📚 Il tuo Futuro</h2>
      <p>
        So che a scuola andrai bene, non perché tutto sarà facile, ma perché sei determinata, intelligente e non molli anche quando sei stanca. Ogni tuo sforzo conta, anche quando non te ne accorgi.

Anche nei momenti in cui la scuola sembrerà troppo pesante, ricordati che te hai fatto e fai sempre il tuo meglio e sappi anche se te non hai bisogno mi farebbe piacere in ogni momento aiutarti , darti dei consigli o essere soltanto presente.
        
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
        Piano piano anche se sei già bellisima così ogni giorno migliorerai e sarai più vicina ai tuoi obbiettivi . 
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
        Davanti a te si apre un futuro immenso, un mondo che aspetta solo di essere conquistato , dalla tua intelligenza e dalla tua luce  e dal tuo humor che amo . Io ti vedo già camminare a testa alta tra sogni, sfide e vittorie, come una vera regina che non teme il proprio destino. E se tu me lo permetterai, io sarò il cavaliere che sceglie di restare al tuo fianco, pronto ad accompagnarti in questo lungo cammino, a proteggerti nei momenti difficili, a sostenerti quando il peso sarà troppo grande e a celebrare ogni tua conquista come se fosse la mia. Qualunque strada tu scelga, qualunque mondo tu decida di affrontare, io crederò sempre in te. ti amo mia regina Merigold. 
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


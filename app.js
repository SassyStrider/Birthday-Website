(() => {
  const startScreen = document.getElementById('start-screen');
  const stage = document.getElementById('stage');
  const stageInner = document.getElementById('stage-inner');
  const stageProgress = document.getElementById('stage-progress');
  const envelopeScreen = document.getElementById('envelope-screen');
  const letterScreen = document.getElementById('letter-screen');
  const beginBtn = document.getElementById('begin-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const envelope = document.getElementById('envelope');
  const letterClose = document.getElementById('letter-close');
  const letterTitleEl = document.getElementById('letter-title');
  const letterBodyEl = document.getElementById('letter-body');
  const letterSignoff = document.querySelector('.letter-signoff');
  const hint = document.getElementById('hint');

  let current = 0;
  const total = MOMENTS.length;

  // ---------- progress dots ----------
  function buildProgress() {
    stageProgress.innerHTML = '';
    MOMENTS.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'progress-dot' + (i === current ? ' active' : '');
      stageProgress.appendChild(dot);
    });
  }
  function updateProgress() {
    [...stageProgress.children].forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }

  // ---------- render a moment ----------
  function renderMoment(index) {
    const m = MOMENTS[index];
    const mood = m.mood || '';
    stage.dataset.mood = mood;

    const wrap = document.createElement('div');
    wrap.className = 'moment' + (m.type === 'message' ? ' message-only' : '');

    if (m.date && m.type !== 'confession') {
      const dateEl = document.createElement('div');
      dateEl.className = 'moment-date';
      dateEl.textContent = m.date;
      wrap.appendChild(dateEl);
    }

    if (m.type === 'image') {
      const img = document.createElement('img');
      img.className = 'moment-media';
      img.src = `media/${m.file}`;
      img.alt = m.caption || '';
      img.onerror = () => {
        img.replaceWith(makePlaceholder(`🖼 Add "${m.file}" to /media`));
      };
      wrap.appendChild(img);
    }

    if (m.type === 'video') {
      const vid = document.createElement('video');
      vid.className = 'moment-media';
      vid.src = `media/${m.file}`;
      vid.controls = true;
      vid.playsInline = true;
      vid.onerror = () => {
        vid.replaceWith(makePlaceholder(`🎬 Add "${m.file}" to /media`));
      };
      wrap.appendChild(vid);
    }

    if (m.type === 'valorant') {
      wrap.appendChild(makeValorantScene(m));
    }

    if (m.type === 'confession') {
      const confCard = document.createElement('div');
      confCard.className = 'discord-chat-card';

      confCard.innerHTML = `
        <div class="discord-divider">
          <span>${m.date || '19 April 2025'}</span>
        </div>
        <div class="discord-message">
          <div class="discord-avatar">
            <img src="media/sassy-avatar.png" alt="Sassy" onerror="this.src='https://cdn.discordapp.com/embed/avatars/0.png'">
          </div>
          <div class="discord-content">
            <div class="discord-header">
              <span class="discord-username">Sassy</span>
              <span class="discord-badge">BRUH</span>
              <span class="discord-timestamp">19-04-2025 05:00</span>
            </div>
            <div class="discord-text">${m.message || m.caption || ''}</div>
          </div>
        </div>
      `;

      wrap.appendChild(confCard);
    }

    if (m.type === 'song') {
      const songWrap = document.createElement('div');
      songWrap.className = 'moment-song';

      if (m.cover) {
        const coverImg = document.createElement('img');
        coverImg.className = 'moment-media song-cover';
        coverImg.src = `media/${m.cover}`;
        coverImg.alt = m.title || 'Song Cover';
        songWrap.appendChild(coverImg);
      } else {
        const icon = document.createElement('div');
        icon.className = 'moment-song-icon';
        icon.textContent = '♫';
        songWrap.appendChild(icon);
      }

      const audio = document.createElement('audio');
      audio.controls = true;
      audio.autoplay = true;
      audio.src = `media/${m.file}`;
      audio.onerror = () => {
        const ph = makePlaceholder(`🎵 Add "${m.file}" to /media`);
        songWrap.replaceWith(ph);
      };

      songWrap.appendChild(audio);
      wrap.appendChild(songWrap);

      audio.play().catch(() => {});
    }

    if (m.caption && m.type !== 'confession') {
      const cap = document.createElement('p');
      cap.className = 'moment-caption';
      cap.textContent = m.caption;
      wrap.appendChild(cap);
    }

    stageInner.innerHTML = '';
    stageInner.appendChild(wrap);
    updateProgress();

    document.body.classList.toggle('valorant-active', m.type === 'valorant');
  }

  function makePlaceholder(text) {
    const ph = document.createElement('div');
    ph.className = 'moment-media placeholder';
    ph.textContent = text;
    return ph;
  }

  // ---------- custom Lotus / Valorant scene ----------
  function makeValorantScene(m) {
    const scene = document.createElement('div');
    scene.className = 'valorant-scene';

    const tag = document.createElement('div');
    tag.className = 'val-tag';
    tag.innerHTML = `<b>●</b> ${m.map || 'MAP'} — RANKED`;
    scene.appendChild(tag);

    const frame = document.createElement('div');
    frame.className = 'val-map-frame';
    frame.innerHTML = lotusSVG();
    const tl = document.createElement('span'); tl.className = 'val-corner tl';
    const br = document.createElement('span'); br.className = 'val-corner br';
    frame.appendChild(tl);
    frame.appendChild(br);
    scene.appendChild(frame);

    const vsRow = document.createElement('div');
    vsRow.className = 'val-vs-row';
    vsRow.appendChild(agentPin(m.agentLeft, 'left'));
    const x = document.createElement('span');
    x.className = 'val-vs-x';
    x.textContent = '×';
    vsRow.appendChild(x);
    vsRow.appendChild(agentPin(m.agentRight, 'right'));
    scene.appendChild(vsRow);

    if (m.date) {
      const date = document.createElement('div');
      date.className = 'val-date';
      date.textContent = m.date;
      scene.appendChild(date);
    }

    if (m.caption) {
      const cap = document.createElement('p');
      cap.className = 'moment-caption';
      cap.textContent = m.caption;
      scene.appendChild(cap);
    }

    return scene;
  }

  function agentPin(agent, side) {
    const el = document.createElement('div');
    el.className = 'val-agent ' + side;
    const badge = document.createElement('div');
    badge.className = 'val-agent-badge';
    badge.textContent = (agent.name || '?').charAt(0);
    const name = document.createElement('div');
    name.className = 'val-agent-name';
    name.textContent = agent.name || '';
    const role = document.createElement('div');
    role.className = 'val-agent-role';
    role.textContent = agent.role || '';
    el.appendChild(badge);
    el.appendChild(name);
    el.appendChild(role);
    return el;
  }

  function lotusSVG() {
    return `
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="rgba(94,235,213,0.08)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#grid)" />
      <path d="M100 20 L150 55 L165 110 L130 165 L70 165 L35 110 L50 55 Z"
            fill="none" stroke="#5EEBD5" stroke-width="1.4" opacity="0.55" />
      <circle cx="70" cy="60" r="5" fill="none" stroke="#ECE8E1" stroke-width="1.2" opacity="0.7"/>
      <text x="70" y="48" text-anchor="middle" font-size="9" fill="#ECE8E1" opacity="0.6" font-family="sans-serif">A</text>
      <circle cx="130" cy="140" r="5" fill="none" stroke="#ECE8E1" stroke-width="1.2" opacity="0.7"/>
      <text x="130" y="128" text-anchor="middle" font-size="9" fill="#ECE8E1" opacity="0.6" font-family="sans-serif">B</text>
      <circle cx="100" cy="100" r="5" fill="none" stroke="#ECE8E1" stroke-width="1.2" opacity="0.7"/>
      <text x="100" y="88" text-anchor="middle" font-size="9" fill="#ECE8E1" opacity="0.6" font-family="sans-serif">C</text>
      <g>
        <circle cx="88" cy="112" r="6" fill="#FF4655" opacity="0.9"/>
        <circle cx="88" cy="112" r="10" fill="none" stroke="#FF4655" stroke-width="1" opacity="0.4"/>
      </g>
      <g>
        <circle cx="104" cy="120" r="6" fill="#5EEBD5" opacity="0.9"/>
        <circle cx="104" cy="120" r="10" fill="none" stroke="#5EEBD5" stroke-width="1" opacity="0.4"/>
      </g>
    </svg>`;
  }

  function transitionTo(newIndex) {
    const outgoing = stageInner.firstElementChild;
    if (outgoing) {
      outgoing.classList.add('leaving');
      setTimeout(() => renderMoment(newIndex), 260);
    } else {
      renderMoment(newIndex);
    }
  }

  function goNext() {
    if (current < total - 1) {
      current++;
      transitionTo(current);
      updateHint();
    } else {
      showEnvelope();
    }
  }
  function goPrev() {
    if (current > 0) {
      current--;
      transitionTo(current);
      updateHint();
    }
  }
  function updateHint() {
    hint.textContent = current === total - 1 ? 'tap for the letter ›' : 'tap to continue ›';
  }

  // ---------- screen transitions ----------
  function showStage() {
    startScreen.classList.add('hidden');
    stage.classList.remove('hidden');
    buildProgress();
    renderMoment(current);
    updateHint();
  }

  function showEnvelope() {
    stage.classList.add('hidden');
    envelopeScreen.classList.remove('hidden');
    envelopeScreen.dataset.mood = 'soft';
    stage.removeAttribute('data-mood');
    document.body.classList.remove('valorant-active');
  }

  function openLetter() {
    envelope.classList.add('open');
    setTimeout(() => {
      envelopeScreen.classList.add('hidden');
      letterScreen.classList.remove('hidden');
      letterTitleEl.textContent = LETTER_TITLE;
      letterBodyEl.textContent = LETTER_TEXT;
    }, 550);
  }

  function restart() {
    current = 0;
    letterScreen.classList.add('hidden');
    envelope.classList.remove('open');
    startScreen.classList.remove('hidden');
    stage.removeAttribute('data-mood');
    document.body.classList.remove('valorant-active');
  }

  // ---------- petals ----------
  function spawnPetals() {
    const layer = document.getElementById('petals');
    const glyphs = ['♡', '✦', '·'];
    for (let i = 0; i < 14; i++) {
      const p = document.createElement('span');
      p.className = 'petal';
      p.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      p.style.left = Math.random() * 100 + 'vw';
      p.style.animationDuration = (14 + Math.random() * 12) + 's';
      p.style.animationDelay = (Math.random() * 12) + 's';
      p.style.fontSize = (10 + Math.random() * 10) + 'px';
      layer.appendChild(p);
    }
  }

  // ---------- wire up events ----------
  beginBtn.addEventListener('click', showStage);
  nextBtn.addEventListener('click', goNext);
  prevBtn.addEventListener('click', goPrev);
  envelope.addEventListener('click', openLetter);
  letterClose.addEventListener('click', restart);
  letterSignoff.addEventListener('click', restart);

  document.addEventListener('keydown', (e) => {
    if (stage.classList.contains('hidden')) return;
    if (e.key === 'ArrowRight' || e.key === ' ') goNext();
    if (e.key === 'ArrowLeft') goPrev();
  });

  spawnPetals();
})();

// ---------- global click to next navigation ----------
document.addEventListener('click', (e) => {
  const stage = document.getElementById('stage');
  if (!stage || stage.classList.contains('hidden')) return;
  if (e.target.closest('button, a, input, video, audio, .envelope, .discord-chat-card, #prev-btn, #next-btn')) return;

  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
});
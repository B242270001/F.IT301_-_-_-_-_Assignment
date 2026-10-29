/* StudyQuest — цэвэр JavaScript (framework, build шаардахгүй).
   Route-ууд: #/practice · #/quiz/:unitId · #/admin/questions */
(function () {
  const $app = document.getElementById('app');
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n) => Number(n).toLocaleString('en-US');
  const KEYS = ['A', 'B', 'C', 'D'];

  /* ---------- Дүрс (lucide хэлбэртэй inline SVG) ---------- */
  const PATHS = {
    sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
    house: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    code: '<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>',
    network: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/>',
    sigma: '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    layout: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    library: '<rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M7 16v-3"/><path d="M12 16V8"/><path d="M17 16v-6"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  };
  const icon = (n, size = 20, color = 'currentColor') =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${PATHS[n]}</svg>`;

  /* ---------- Нийтлэг хэсгүүд ---------- */
  const brand = (lg) => `<a href="#/practice" class="brand${lg ? ' brand-lg' : ''}"><span class="emblem">${icon('sparkles', 22, '#fff')}</span><span>StudyQuest</span></a>`;

  function studentNav(student, tall) {
    return `<header class="nav${tall ? ' nav-tall' : ''}">
      ${brand(tall)}
      <nav class="tabs">
        <a class="tab tab-home" href="#/practice">${icon('house', 18)} Өрөө рүү</a><span class="tab-divider"></span>
        <a class="tab tab-active" href="#/practice">Дадлага</a><span class="tab">Судлах</span><span class="tab">Чансаа</span>
      </nav>
      <div class="hud">
        <span class="hud-item">${icon('zap', 20, '#7c5cfc')} ${student ? fmt(student.xp) : '—'} XP</span>
        <span class="hud-item">${icon('flame', 20, '#e8884a')} ${student ? student.streak : '—'} өдөр</span>
        <span class="avatar">${esc(student ? student.name[0] : 'Т')}</span><span class="hud-name">${esc(student ? student.name : '')}</span>
      </div>
    </header>`;
  }

  function teacherShell(inner) {
    const items = [['layout', 'Удирдах өрөө'], ['library', 'Миний хичээлүүд'], ['help', 'Асуултууд', true], ['users', 'Суралцагчид'], ['chart', 'Тайлан']];
    return `<header class="t-nav">${brand(true)}<span class="pill">БАГШИЙН ӨРӨӨ</span>
      <div class="t-user"><span class="avatar">Н</span><div><b>Б. Номин</b><span>Мэдээлэл зүйн багш</span></div></div></header>
      <div class="t-shell"><aside class="side"><small>БАГШИЙН ЦЭС</small>
        ${items.map(([i, l, a]) => `<div class="side-item${a ? ' active' : ''}">${icon(i)} ${l}</div>`).join('')}
        <hr><div class="side-item">${icon('settings')} Тохиргоо</div>
        <div class="tip">${icon('sparkles', 20, '#7c5cfc')}<b>Мэдлэгийг хамтдаа</b><span>Жижиг алхам бүр суралцагчдыг урагшлуулдаг.</span></div></aside>
        <main class="t-main">${inner}</main></div>`;
  }
  const message = (text, err) => `<div class="state-msg${err ? ' err' : ''}">${esc(text)}</div>`;
  const mmss = (s) => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');

  /* ---------- Router ---------- */
  let token = 0; // хуучин async хариуг үл тоомсорлоход
  function route() {
    const hash = location.hash.replace(/^#/, '') || '/practice';
    const t = ++token;
    let m;
    if (hash === '/practice') return practicePage(t);
    if ((m = hash.match(/^\/quiz\/([^/]+)$/))) return quizPage(t, decodeURIComponent(m[1]));
    if (hash === '/admin/questions') return adminPage(t);
    location.hash = '#/practice';
  }
  window.addEventListener('hashchange', route);

  /* =====================================================
     1. PracticeCourses  —  #/practice
     ===================================================== */
  const P = { data: null, selectedId: null };

  function practicePage(t) {
    $app.innerHTML = studentNav(null) + message('Ачаалж байна…');
    api.practice().then((d) => {
      if (t !== token) return;
      P.data = d; P.selectedId = d.selectedCourseId; renderPractice();
    }).catch((e) => { if (t === token) $app.innerHTML = studentNav(null) + message(e.message, true); });
  }

  function renderPractice() {
    const { student, dailyGoal, courses } = P.data;
    const sel = courses.find((c) => c.id === P.selectedId) || courses[0];
    const pct = Math.min(100, Math.round((dailyGoal.earned / dailyGoal.target) * 100));
    $app.innerHTML = studentNav(student) + `<main class="page">
      <h1>Мэдлэгээ нэг алхмаар ахиул</h1>
      <p class="muted lead">Хичээлээ сонгоод, суралцах замаа үргэлжлүүлээрэй.</p>
      <span class="pill pill-wrap">Өнөөдрийн зорилго: ${dailyGoal.target} XP</span>
      <section class="course-grid">${courses.map((c) => {
        const on = c.id === sel.id;
        return `<div class="course-card${on ? ' selected' : ''}" role="button" tabindex="0" aria-pressed="${on}" data-act="select-course" data-id="${esc(c.id)}">
          <div class="course-meta"><span class="course-symbol">${icon(c.icon)}</span><span class="muted" style="font-size:12px">${c.topicsDone} / ${c.topicsTotal} сэдэв</span></div>
          <h3>${esc(c.title)}</h3>
          <div class="course-progress"><div class="progress"><i style="width:${c.progress}%"></i></div><b>${c.progress}%</b></div>
          <p>${c.lastViewed ? 'Сүүлд үзсэн: ' + esc(c.lastViewed) : 'Өөрийн хурдаар суралцаарай'}</p>
          <p style="font-size:13px">${on ? `${c.lessonsDone} / ${c.lessonsTotal} хичээл дууссан` : 'Хичээлээ сонгоод эхлээрэй.'}</p>
          <button class="btn${on ? ' btn-primary' : ''}">${on ? 'Сонгосон' : 'Сонгох'}</button></div>`;
      }).join('')}</section>
      <section class="next-steps">
        <article class="card"><span class="pill" style="align-self:flex-start">СОНГОСОН ХИЧЭЭЛ</span>
          <h2>${esc(sel.title)}</h2><p class="muted">${esc(sel.chapter)}</p>
          <p class="c-primary">${sel.lessonsDone} / ${sel.lessonsTotal} хичээл дууссан</p>
          <p><b>Дараагийн хичээл: ${esc(sel.next.title)}</b></p>
          <p class="muted">${sel.next.questions} асуулт · ${sel.next.minutes} минут · +${sel.next.xp} XP</p>
          <a class="btn btn-primary" href="#/quiz/${encodeURIComponent(sel.next.unitId)}">Дадлага эхлэх</a>
          <p class="muted" style="font-size:12px">Суралцах зам · ${esc(sel.path)}</p></article>
        <article class="card soft">${icon('flame', 20, '#e8884a')}<h2>Өдрийн жижиг ялалт</h2>
          <p class="muted">Цувралаа ${student.streak + 1} өдөр болгоход нэг хичээл үлдлээ.</p>
          <div class="progress"><i style="width:${pct}%"></i></div>
          <p class="c-primary" style="font-weight:400">${dailyGoal.earned} / ${dailyGoal.target} XP</p></article>
      </section></main>`;
  }

  /* =====================================================
     2. QuizQuestion  —  #/quiz/:unitId
     ===================================================== */
  let Z = null; // quiz төлөв

  function quizPage(t, unitId) {
    $app.innerHTML = studentNav(null, true) + message('Ачаалж байна…');
    api.quiz(unitId).then((d) => {
      if (t !== token) return;
      Z = { data: d, idx: 0, picked: null, checked: false, correct: 0, done: false, seconds: 0, start: Date.now() };
      renderQuiz();
    }).catch((e) => { if (t === token) $app.innerHTML = studentNav(null, true) + `<div class="state-msg err">${esc(e.message)} <a class="c-primary" href="#/practice">Буцах</a></div>`; });
  }

  // Таны илгээсэн зурган дээрх охин дүрстэй тааруулсан SVG
  const character = `<svg class="character" width="180" height="220" viewBox="0 0 180 220" aria-hidden="true">
    <ellipse cx="95" cy="208" rx="63" ry="7" fill="#d8d1ec"/>
    <rect x="32" y="98" width="116" height="108" rx="40" fill="#7c5cfc"/>
    <rect x="76" y="132" width="28" height="15" rx="5" fill="#9277fd"/>
    <rect x="80" y="78" width="24" height="24" rx="9" fill="#f4bfa0"/>
    <circle cx="89" cy="54" r="40" fill="#c3a4f5"/>
    <rect x="60" y="38" width="58" height="57" rx="23" fill="#f4bfa0"/>
    <ellipse cx="75" cy="64" rx="2" ry="2.5" fill="#3c2a53"/><ellipse cx="103" cy="64" rx="2" ry="2.5" fill="#3c2a53"/>
    <g transform="translate(135 31)"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#7c5cfc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PATHS.sparkles}</svg></g></svg>`;

  function renderQuiz() {
    const { student, unit, questions } = Z.data;
    if (!questions.length) { $app.innerHTML = studentNav(student, true) + `<div class="state-msg">Энэ нэгжид асуулт алга. <a class="c-primary" href="#/practice">Буцах</a></div>`; return; }
    const total = questions.length;

    if (Z.done) {
      $app.innerHTML = studentNav({ ...student, xp: student.xp + unit.xp, streak: student.streak + 1 }, true) + `<main class="result">
        <span class="eyebrow">ХИЧЭЭЛ ДУУСЛАА</span>
        <div><h1>Нэг алхам урагшиллаа!</h1><p class="muted">${esc(unit.title)} · ${esc(unit.courseTitle)}</p></div>
        <section class="card" style="padding:28px;gap:20px"><div class="metrics">
          <div class="metric m1"><b>+${unit.xp}</b>Цуглуулсан XP</div>
          <div class="metric m2"><b>${Z.correct} / ${total}</b>Зөв хариулт</div>
          <div class="metric m3"><b>${mmss(Z.seconds)}</b>Зарцуулсан хугацаа</div></div>
          <p class="muted" style="font-size:12px">Нийт XP: ${fmt(student.xp)} → ${fmt(student.xp + unit.xp)}</p></section>
        <div class="result-actions"><a class="btn" href="#/practice">Өрөө рүү буцах</a><a class="btn btn-primary" href="#/practice">Суралцах зам руу</a></div></main>`;
      return;
    }

    const q = questions[Z.idx];
    const right = Z.checked && Z.picked === q.correctIndex;
    const bubble = !Z.checked ? ['Жижиг хэсэг, том боломж!', 'Чи үүнийг чадна.', ''] : right ? ['Зөв байна!', 'Гайхалтай ажил.', 'ok'] : ['Бараг боллоо!', 'Тайлбарыг хараад үргэлжлүүлээрэй.', 'bad'];
    const opts = q.options.map((o, i) => {
      let cls = 'option';
      if (Z.checked && i === q.correctIndex) cls += ' correct'; else if (Z.checked && i === Z.picked) cls += ' wrong'; else if (!Z.checked && i === Z.picked) cls += ' selected';
      const mark = (!Z.checked && i === Z.picked) || (Z.checked && i === q.correctIndex) ? icon('check', 21) : (Z.checked && i === Z.picked ? icon('x', 21) : '');
      return `<button class="${cls}" role="radio" aria-checked="${i === Z.picked}" ${Z.checked ? 'disabled' : ''} data-act="pick" data-i="${i}"><span class="key">${o.key}</span><span class="label">${esc(o.text)}</span>${mark}</button>`;
    }).join('');
    const fbText = !Z.checked ? (Z.picked === null ? 'Хариултаа сонгоно уу.' : 'Нэг хариулт сонгосон. Шалгаж, тайлбарыг хараарай.') : (right ? 'Зөв хариулт! ' : 'Буруу хариулт. ') + esc(q.explanation);
    const fbBtn = !Z.checked ? `<button class="btn btn-primary" ${Z.picked === null ? 'disabled' : ''} data-act="check">Шалгах ${icon('check', 18)}</button>`
      : `<button class="btn btn-primary" data-act="next">${Z.idx + 1 >= total ? 'Дуусгах' : 'Үргэлжлүүлэх'}</button>`;

    $app.innerHTML = studentNav(student, true) + `<main class="quiz">
      <div class="quiz-top"><button class="icon-btn" aria-label="Гарах" data-act="exit">${icon('x')}</button>
        <div class="progress"><i style="width:${((Z.idx + 1) / total) * 100}%"></i></div>
        <span class="muted" style="font-weight:600">${Z.idx + 1} / ${total} асуулт</span><span class="pill">${icon('zap', 15)} +${unit.xp} XP</span></div>
      <div class="crumb">${esc(unit.courseTitle)} ${icon('right', 14)} <b>${esc(unit.title)}</b></div>
      <div class="stage"><aside class="guide"><div class="bubble ${bubble[2]}"><b>${bubble[0]}</b><span>${bubble[1]}</span></div>${character}</aside>
        <section class="q-card"><div class="q-meta"><span class="pill">НЭГ ХАРИУЛТ СОНГОХ</span><span>${Z.idx + 1}-р асуулт</span></div>
          <h2>${esc(q.text)}</h2>${q.hint ? `<p class="muted hint">${esc(q.hint)}</p>` : ''}
          <div class="options" role="radiogroup">${opts}</div></section></div>
      <div class="feedback${Z.checked ? (right ? ' ok' : ' bad') : ''}"><p>${fbText}</p>${fbBtn}</div>
      <div class="study-footer"><span>${esc(unit.chapter)}</span><a href="#/practice">Суралцах зам руу буцах</a></div></main>`;
  }

  /* =====================================================
     3. AdminQuestions  —  #/admin/questions
     ===================================================== */
  const emptyForm = (unitId) => ({ unitId: unitId || '', text: '', hint: '', options: ['', '', '', ''], correctIndex: 0, explanation: '' });
  let A = null;

  function adminPage(t) {
    $app.innerHTML = teacherShell(message('Ачаалж байна…'));
    Promise.all([api.units(), api.questions()]).then(([units, list]) => {
      if (t !== token) return;
      A = { units, list, search: '', filterUnit: '', form: emptyForm(units[0] && units[0].id), editingId: null, errors: {}, saving: false, confirmId: null, loadError: '' };
      renderAdmin();
    }).catch((e) => { if (t === token) $app.innerHTML = teacherShell(message(e.message, true)); });
  }

  function validateForm(f) {
    const e = {};
    if (!f.unitId) e.unitId = 'Нэгжээ сонгоно уу.';
    if (!f.text.trim()) e.text = 'Асуултын текстийг заавал оруулна уу.';
    else if (f.text.trim().length < 5) e.text = 'Асуулт хамгийн багадаа 5 тэмдэгт байна.';
    if (f.options.some((o) => !o.trim())) e.options = 'Дөрвөн хариултын сонголтыг бүгдийг нь бөглөнө үү.';
    return e;
  }

  function rowsHtml() {
    if (A.loadError) return message(A.loadError, true);
    if (!A.list.length) return message('Асуулт олдсонгүй.');
    return A.list.map((q) => `<div class="row${A.editingId === q.id ? ' editing' : ''}">
      <div><b>${esc(q.text)}</b><span>${esc(q.unitTitle)} · Зөв хариулт: <em class="badge-ok" style="font-style:normal">${KEYS[q.correctIndex]}</em></span></div>
      ${A.confirmId === q.id
        ? `<div class="row-actions confirm">Устгах уу? <button class="btn btn-sm btn-danger" data-act="delete" data-id="${q.id}">Тийм</button><button class="btn btn-sm" data-act="cancel-delete">Болих</button></div>`
        : `<div class="row-actions"><button class="btn btn-sm" data-act="edit" data-id="${q.id}">Засах</button><button class="btn btn-sm" data-act="ask-delete" data-id="${q.id}">Устгах</button></div>`}</div>`).join('');
  }

  function renderAdmin() {
    const { units, form, errors } = A;
    const n = Object.keys(errors).length;
    const inv = (k) => (errors[k] ? ' invalid' : '');
    $app.innerHTML = teacherShell(`
      <div class="t-head"><div><div class="back">${icon('left', 16)} Удирдах өрөө / Асуулт засах</div><h1>Асуулт засах</h1>
        <p class="muted" style="margin:0">Нэгж бүрийн дадлагын асуултыг нэмж, засаж, устгаарай.</p></div>
        <button class="btn btn-primary" data-act="new">${icon('plus', 18)} Асуулт нэмэх</button></div>
      <div class="t-cols">
        <section class="t-card"><h2>Асуултын сан</h2><p id="count">${A.list.length} асуулт</p>
          <div class="toolbar"><label class="search">${icon('search', 18)}<input id="search" placeholder="Асуултаар хайх..." value="${esc(A.search)}"></label>
            <button class="chip${A.filterUnit ? '' : ' on'}" data-act="filter" data-id="">Бүгд</button>
            ${units.map((u) => `<button class="chip${A.filterUnit === u.id ? ' on' : ''}" data-act="filter" data-id="${esc(u.id)}">${esc(u.title)}</button>`).join('')}</div>
          <div class="rows"><div class="rows-head"><span>Асуулт</span><span style="text-align:right">Үйлдэл</span></div><div id="rows">${rowsHtml()}</div></div></section>
        <section class="t-card sticky"><h2>${A.editingId ? 'Асуулт засах' : 'Асуулт нэмэх'}</h2>
          ${n ? `<span class="pill pill-err" style="align-self:flex-start">${n} алдаа байна</span>` : ''}${errors.form ? `<span class="err-text">${esc(errors.form)}</span>` : ''}
          <div class="field"><label for="f-unit">Нэгж *</label><select id="f-unit" class="select${inv('unitId')}" data-f="unitId"><option value="">Нэгж сонгоно уу</option>
            ${units.map((u) => `<option value="${esc(u.id)}"${form.unitId === u.id ? ' selected' : ''}>${esc(u.title)}</option>`).join('')}</select>${errors.unitId ? `<span class="err-text">${errors.unitId}</span>` : ''}</div>
          <div class="field"><label for="f-text">Асуултын текст *</label><textarea id="f-text" class="textarea${inv('text')}" data-f="text" placeholder="Жишээ: React компонент гэж юу вэ?">${esc(form.text)}</textarea>${errors.text ? `<span class="err-text">${errors.text}</span>` : ''}</div>
          <div class="field"><label for="f-hint">Зөвлөмж</label><input id="f-hint" class="input" data-f="hint" value="${esc(form.hint)}" placeholder="Хамгийн зөв тайлбарыг сонгоорой."></div>
          <div class="field"><label>Хариултын сонголт * <span class="hint">· Зөв хариултыг үсгээр нь сонго</span></label>
            ${form.options.map((o, i) => `<div class="opt-row"><button type="button" class="opt-key${form.correctIndex === i ? ' correct' : ''}" aria-pressed="${form.correctIndex === i}" aria-label="${KEYS[i]} — зөв хариулт болгох" data-act="correct" data-i="${i}">${KEYS[i]}</button>
              <input class="input${errors.options && !o.trim() ? ' invalid' : ''}" data-opt="${i}" value="${esc(o)}" placeholder="${KEYS[i]} сонголт"></div>`).join('')}
            ${errors.options ? `<span class="err-text">${errors.options}</span>` : ''}</div>
          <div class="field"><label for="f-exp">Тайлбар</label><textarea id="f-exp" class="textarea" style="min-height:64px" data-f="explanation" placeholder="Хариулсны дараа харагдах тайлбар">${esc(form.explanation)}</textarea></div>
          <div class="form-actions"><button class="btn" data-act="new">Цуцлах</button><button class="btn btn-primary" data-act="save" ${A.saving ? 'disabled' : ''}>${A.saving ? 'Хадгалж байна…' : A.editingId ? 'Шинэчлэх' : 'Хадгалах'}</button></div></section>
      </div>`);
  }

  function reloadList() {
    const params = {};
    if (A.filterUnit) params.unitId = A.filterUnit;
    if (A.search.trim()) params.q = A.search.trim();
    return api.questions(params).then((l) => { A.list = l; A.loadError = ''; }).catch((e) => { A.loadError = e.message; })
      .then(() => { const r = document.getElementById('rows'); if (r) { r.innerHTML = rowsHtml(); document.getElementById('count').textContent = A.list.length + ' асуулт'; } });
  }
  function toast(msg) {
    const el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); el.textContent = msg;
    document.body.appendChild(el); setTimeout(() => el.remove(), 2200);
  }
  async function saveQuestion() {
    A.errors = validateForm(A.form);
    if (Object.keys(A.errors).length) return renderAdmin();
    A.saving = true; renderAdmin();
    try {
      if (A.editingId) await api.updateQuestion(A.editingId, A.form); else await api.createQuestion(A.form);
      toast(A.editingId ? 'Асуулт шинэчлэгдлээ.' : 'Асуулт нэмэгдлээ.');
      A.editingId = null; A.form = emptyForm(A.units[0] && A.units[0].id); A.errors = {};
    } catch (e) { A.errors = e.errors || { form: e.message }; }
    A.saving = false; await reloadList(); renderAdmin();
  }

  /* ---------- Үйлдлүүд (event delegation) ---------- */
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-act]'); if (!el) return;
    const act = el.dataset.act, id = el.dataset.id, i = Number(el.dataset.i);
    // Дадлага
    if (act === 'select-course') { P.selectedId = id; return renderPractice(); }
    // Асуулт
    if (act === 'pick') { Z.picked = i; return renderQuiz(); }
    if (act === 'check') { Z.checked = true; if (Z.picked === Z.data.questions[Z.idx].correctIndex) Z.correct++; return renderQuiz(); }
    if (act === 'next') {
      if (Z.idx + 1 >= Z.data.questions.length) { Z.seconds = Math.round((Date.now() - Z.start) / 1000); Z.done = true; }
      else { Z.idx++; Z.picked = null; Z.checked = false; }
      return renderQuiz();
    }
    if (act === 'exit') { location.hash = '#/practice'; return; }
    // Багш
    if (act === 'new') { A.editingId = null; A.errors = {}; A.form = emptyForm(A.units[0] && A.units[0].id); return renderAdmin(); }
    if (act === 'filter') { A.filterUnit = id; return reloadList().then(renderAdmin); }
    if (act === 'edit') { const q = A.list.find((x) => x.id === id); A.editingId = id; A.errors = {}; A.form = { unitId: q.unitId, text: q.text, hint: q.hint || '', options: q.options.slice(), correctIndex: q.correctIndex, explanation: q.explanation || '' }; return renderAdmin(); }
    if (act === 'ask-delete') { A.confirmId = id; return renderAdmin(); }
    if (act === 'cancel-delete') { A.confirmId = null; return renderAdmin(); }
    if (act === 'delete') {
      return api.deleteQuestion(id).then(() => { toast('Асуулт устгагдлаа.'); if (A.editingId === id) { A.editingId = null; A.form = emptyForm(A.units[0] && A.units[0].id); } })
        .catch((e) => toast(e.message)).then(() => { A.confirmId = null; return reloadList(); }).then(renderAdmin);
    }
    if (act === 'correct') { A.form.correctIndex = i; return renderAdmin(); }
    if (act === 'save') return saveQuestion();
  });
  document.addEventListener('keydown', (ev) => { // course card-ыг гараас сонгох
    if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.matches && ev.target.matches('.course-card')) { ev.preventDefault(); ev.target.click(); }
  });
  let searchTimer;
  document.addEventListener('input', (ev) => {
    const el = ev.target;
    if (!A || !el.closest('.t-main')) return;
    if (el.id === 'search') { A.search = el.value; clearTimeout(searchTimer); searchTimer = setTimeout(reloadList, 200); }
    else if (el.dataset.f) A.form[el.dataset.f] = el.value;          // rerender хийхгүй — cursor алдагдахгүй
    else if (el.dataset.opt !== undefined) A.form.options[Number(el.dataset.opt)] = el.value;
  });

  route();
})();

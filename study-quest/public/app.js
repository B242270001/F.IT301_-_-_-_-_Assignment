// StudyQuest - Single Page Application Client
// TASK-02: Мөнхбаяр
// Pure JavaScript ES6+ • Zero dependencies • Modern UI

(function() {
  'use strict';

  // Global State
  const state = {
    currentPath: window.location.pathname || '/practice',
    practiceData: null,
    quizData: null,
    quizIndex: 0,
    selectedOption: null,
    isAnswerChecked: false,
    quizScore: 0,
    quizCompleted: false,
    adminQuestions: [],
    adminFilterText: '',
    adminFilterUnit: 'all',
    adminFilterStatus: 'all',
    editingQuestion: null,
    hudXp: 2480,
    hudStreak: 7
  };

  // Toast notification helper
  function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        ${type === 'success' ? '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>' :
                               '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'}
      </svg>
      <span>${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // HTML Escape helper
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Mascot SVG generator
  function renderMascotSvg() {
    return `
      <svg viewBox="0 0 120 120" width="100%" height="100%">
        <!-- Glow Circle -->
        <circle cx="60" cy="60" r="54" fill="#EDE9FE"/>
        <!-- Body Shape -->
        <rect x="30" y="32" width="60" height="64" rx="28" fill="url(#mascotGrad)"/>
        <!-- Belly -->
        <ellipse cx="60" cy="68" rx="20" ry="18" fill="#FFFFFF" opacity="0.9"/>
        <!-- Eyes -->
        <circle cx="48" cy="48" r="6.5" fill="#1E1B4B"/>
        <circle cx="72" cy="48" r="6.5" fill="#1E1B4B"/>
        <circle cx="50" cy="46" r="2.5" fill="#FFFFFF"/>
        <circle cx="74" cy="46" r="2.5" fill="#FFFFFF"/>
        <!-- Cute Blush -->
        <circle cx="40" cy="58" r="4" fill="#F472B6" opacity="0.6"/>
        <circle cx="80" cy="58" r="4" fill="#F472B6" opacity="0.6"/>
        <!-- Smile -->
        <path d="M54 58 Q60 64 66 58" stroke="#1E1B4B" stroke-width="2.5" stroke-linecap="round" fill="none"/>
        <!-- Wand / Star Antenna -->
        <line x1="60" y1="32" x2="60" y2="18" stroke="#8B5CF6" stroke-width="3" stroke-linecap="round"/>
        <circle cx="60" cy="16" r="6" fill="#FBBF24"/>
        <defs>
          <linearGradient id="mascotGrad" x1="30" y1="32" x2="90" y2="96" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8B5CF6"/>
            <stop offset="1" stop-color="#6366F1"/>
          </linearGradient>
        </defs>
      </svg>
    `;
  }

  // Update HUD Display
  function updateHud() {
    const xpEl = document.getElementById('hud-xp-value');
    const streakEl = document.getElementById('hud-streak-value');
    if (xpEl) xpEl.textContent = `${state.hudXp.toLocaleString()} XP`;
    if (streakEl) streakEl.textContent = `${state.hudStreak} өдөр`;
  }

  // Update Nav tabs active state
  function updateNavTabs(path) {
    document.querySelectorAll('.nav-tab').forEach(tab => {
      const nav = tab.getAttribute('data-nav');
      if (path === '/practice' && nav === 'practice') {
        tab.classList.add('active');
      } else if (path.startsWith('/quiz') && nav === 'quiz') {
        tab.classList.add('active');
      } else if (path.startsWith('/admin') && nav === 'admin') {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }

  // Client Routing
  function navigateTo(url, replace = false) {
    if (replace) {
      window.history.replaceState(null, '', url);
    } else {
      window.history.pushState(null, '', url);
    }
    state.currentPath = url;
    handleRoute();
  }

  function handleRoute() {
    const path = window.location.pathname || '/practice';
    state.currentPath = path;
    updateNavTabs(path);

    if (path === '/' || path === '/practice') {
      loadPracticeView();
    } else if (path.startsWith('/quiz')) {
      const match = path.match(/^\/quiz\/([^/]+)/);
      const unitId = match ? match[1] : '2';
      loadQuizView(unitId);
    } else if (path === '/admin/questions' || path.startsWith('/admin')) {
      loadAdminView();
    } else {
      loadPracticeView();
    }
  }

  // Setup click interception for <a data-link>
  document.addEventListener('click', e => {
    const link = e.target.closest('a[data-link]');
    if (link && link.href) {
      e.preventDefault();
      const href = link.getAttribute('href');
      navigateTo(href);
    }
  });

  window.addEventListener('popstate', () => {
    handleRoute();
  });

  // =========================================================================
  // VIEW 1: PracticeCourses (/practice)
  // API: GET /api/courses/practice
  // =========================================================================
  async function loadPracticeView() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Хичээлийн агуулгыг уншиж байна...</p>
      </div>
    `;

    try {
      const res = await fetch('/api/courses/practice');
      if (!res.ok) throw new Error('Сүлжээний алдаа');
      state.practiceData = await res.json();
      renderPracticeView(container, state.practiceData);
    } catch (err) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>Хичээл уншихад алдаа гарлаа</h3>
          <p>${escapeHtml(err.message)}</p>
          <button class="btn-start-quiz" style="margin-top:1rem;" onclick="location.reload()">Дахин оролдох</button>
        </div>
      `;
    }
  }

  function renderPracticeView(container, data) {
    const courses = data.courses || [];
    const chapter = data.currentChapter || {};
    const units = chapter.units || [];
    const student = data.student || {};
    const dailyGoal = student.dailyGoal || {};

    let coursesHtml = courses.map(c => `
      <div class="course-card ${c.selected ? 'selected' : ''}" data-course-id="${c.id}">
        <div class="course-card-top">
          <div class="course-icon-box" style="background: ${c.color}">
            ${c.icon === 'globe' ? '🌐' : c.icon === 'database' ? '🗄️' : '📐'}
          </div>
          <div class="course-meta">
            <span class="course-name">${escapeHtml(c.title)}</span>
            <span class="course-level">${escapeHtml(c.level)}</span>
          </div>
        </div>
        <div class="progress-section">
          <div class="progress-labels">
            <span>Ахиц</span>
            <span>${c.progress}%</span>
          </div>
          <div class="progress-bar-bg">
            <div class="progress-bar-fill" style="width: ${c.progress}%; background: ${c.color}"></div>
          </div>
        </div>
      </div>
    `).join('');

    let unitsHtml = units.map(u => {
      const lessonsHtml = (u.lessons || []).map(l => {
        if (l.status === 'completed') {
          return `
            <div class="node-wrapper">
              <div class="path-node completed" title="${escapeHtml(l.title)} (Дууссан)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          `;
        } else if (l.status === 'current') {
          return `
            <div class="node-wrapper current-node">
              <div class="path-node current" title="${escapeHtml(l.title)} (Эхлэхэд бэлэн)">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div class="current-lesson-popover">
                <span class="popover-badge">${escapeHtml(l.badge || 'ДАРААГИЙН ХИЧЭЭЛ')}</span>
                <span class="popover-title">${escapeHtml(l.title)}</span>
                <span class="popover-meta">${escapeHtml(l.subtitle || '3 асуулт • 5 минут • +50 XP')}</span>
                <a href="${l.quizRoute || '/quiz/2'}" class="btn-start-quiz" data-link>
                  <span>Эхлэх</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="node-wrapper">
              <div class="path-node locked" title="${escapeHtml(l.title)} (Түгжигдсэн)">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
            </div>
          `;
        }
      }).join('');

      return `
        <div class="unit-block">
          <div class="unit-header">
            <span class="unit-title-pill">${escapeHtml(u.title)}</span>
            <span class="unit-desc">${escapeHtml(u.description)}</span>
          </div>
          <div class="path-nodes">
            ${lessonsHtml}
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="practice-view">
        <div class="page-header">
          <h1 class="page-title">Суралцах зам (PracticeCourses)</h1>
          <p class="page-subtitle">Хичээлээ сонгоод, дадлагаар мэдлэгээ бататган суралцах замаа үргэлжлүүлээрэй.</p>
        </div>

        <!-- Course Shelf Folders -->
        <div class="courses-shelf">
          ${coursesHtml}
        </div>

        <!-- Main Layout: Roadmap + Side Widgets -->
        <div class="practice-layout">
          <!-- Stepping Stone Roadmap -->
          <div class="roadmap-container">
            <div class="chapter-banner">
              <div>
                <h2 class="chapter-title">${escapeHtml(chapter.chapterNumber)}-Р БҮЛЭГ • ${escapeHtml(chapter.chapterTitle)}</h2>
                <span class="chapter-subtitle">${chapter.completedLessons} хичээл амжилттай дууссан</span>
              </div>
              <span class="chapter-badge">${chapter.completedLessons} / ${chapter.totalLessons}</span>
            </div>

            <!-- Units and Stepping Nodes -->
            ${unitsHtml}
          </div>

          <!-- Side Widgets -->
          <div class="practice-side">
            <!-- Daily Goal Card -->
            <div class="widget-card">
              <div class="widget-header">
                <span class="widget-title">ӨДРИЙН ЗОРИЛГО</span>
                <span style="font-size:1.2rem;">🎯</span>
              </div>
              <div class="goal-headline">Нэг алхам урагш</div>
              <div class="goal-desc">${escapeHtml(dailyGoal.statusText || '1 хичээл дуусгаад 50 XP цуглуулаарай.')}</div>
              
              <div class="progress-section">
                <div class="progress-labels">
                  <span>Оноо</span>
                  <span>${dailyGoal.currentXp || 0} / ${dailyGoal.targetXp || 50} XP</span>
                </div>
                <div class="progress-bar-bg">
                  <div class="progress-bar-fill" style="width: ${((dailyGoal.currentXp || 0)/(dailyGoal.targetXp || 50))*100}%"></div>
                </div>
              </div>
            </div>

            <!-- Streak Card -->
            <div class="widget-card streak-card">
              <div class="streak-header">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#EA580C">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.165-7.333-3.856-7.333 3.856 1.399-8.165-5.934-5.784 8.2-1.192zm0 5.702l-2.023 4.099-4.523.658 3.273 3.19-.773 4.504 4.046-2.127 4.046 2.127-.773-4.504 3.273-3.19-4.523-.658z"/>
                </svg>
                <span>Өдрийн ${student.streak} дэх цуврал!</span>
              </div>
              <p style="font-size:0.85rem; color:#92400e;">${escapeHtml(dailyGoal.streakMessage || 'Цувралаа 8 өдөр болгоход нэг хичээл үлдлээ.')}</p>
            </div>

            <!-- Teacher Room Callout -->
            <div class="widget-card admin-callout-card">
              <div class="admin-callout-title">Багшийн асуулт засах</div>
              <p class="admin-callout-desc">Багшийн эрхээр сорилын асуулт нэмэх, засах, устгах үйлдлүүдийг хийх боломжтой.</p>
              <a href="/admin/questions" class="btn-start-quiz" style="background:#4338ca; font-size:0.85rem;" data-link>
                <span>Удирдах өрөө рүү очих</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // VIEW 2: QuizQuestion (/quiz/:unitId)
  // API: GET /api/quiz/:unitId
  // =========================================================================
  async function loadQuizView(unitId) {
    const container = document.getElementById('main-content');
    container.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Сорилын асуултуудыг бэлтгэж байна...</p>
      </div>
    `;

    try {
      const res = await fetch(`/api/quiz/${unitId}`);
      if (!res.ok) throw new Error('Сорил уншихад алдаа гарлаа');
      state.quizData = await res.json();
      state.quizIndex = 0;
      state.selectedOption = null;
      state.isAnswerChecked = false;
      state.quizScore = 0;
      state.quizCompleted = false;

      renderQuizView(container);
    } catch (err) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>Сорилын агуулга олдсонгүй</h3>
          <p>${escapeHtml(err.message)}</p>
          <a href="/practice" class="btn-start-quiz" style="margin-top:1rem;" data-link>Суралцах зам руу буцах</a>
        </div>
      `;
    }
  }

  function renderQuizView(container) {
    const quiz = state.quizData;
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>Энэ нэгжид асуулт байхгүй байна.</h3>
          <a href="/practice" class="btn-start-quiz" data-link>Буцах</a>
        </div>
      `;
      return;
    }

    // Check if quiz is finished
    if (state.quizCompleted) {
      renderQuizFinished(container);
      return;
    }

    const currentQ = quiz.questions[state.quizIndex];
    const totalQ = quiz.questions.length;
    const progressPercent = Math.round(((state.quizIndex) / totalQ) * 100);

    // Dynamic mascot speech bubble based on question
    let bubbleText = quiz.character?.speechBubble || 'Жижиг хэсэг, том боломж! Чи үүнийг чадна.';
    if (state.quizIndex === 1) bubbleText = 'Өгүүлбэрийг сайн уншаад үнэн эсвэл худал гэж сонгоорой.';
    if (state.quizIndex === 2) bubbleText = 'Кодын мөр бүрийг анхааралтай хараарай!';

    // Code snippet HTML if present
    let codeHtml = '';
    if (currentQ.codeSnippet) {
      codeHtml = `
        <div class="code-snippet-box">
          <pre><code>${escapeHtml(currentQ.codeSnippet)}</code></pre>
        </div>
      `;
    }

    // Options HTML
    const optionKeys = ['A', 'B', 'C', 'D'];
    const optionsHtml = currentQ.options.map((opt, idx) => {
      const isSelected = state.selectedOption === idx;
      return `
        <div class="option-card ${isSelected ? 'selected' : ''}" data-opt-index="${idx}">
          <div class="option-key">${currentQ.type === 'true_false' ? (idx === 0 ? '✓' : '✗') : optionKeys[idx] || (idx + 1)}</div>
          <div class="option-text">${escapeHtml(opt)}</div>
        </div>
      `;
    }).join('');

    // Bottom Action Bar HTML
    let bottomBarHtml = '';
    if (!state.isAnswerChecked) {
      bottomBarHtml = `
        <div class="quiz-action-bar">
          <div class="feedback-container">
            <span style="font-size:0.9rem; color:var(--text-muted);">
              ${state.selectedOption !== null ? 'Нэг хариулт сонгосон. Шалгаж, тайлбарыг хараарай.' : 'Хариултаа сонгоод шалгана уу.'}
            </span>
          </div>
          <button id="btn-check" class="btn-check-quiz" ${state.selectedOption === null ? 'disabled' : ''}>Шалгах</button>
        </div>
      `;
    } else {
      const isCorrect = state.selectedOption === currentQ.correctOptionIndex;
      bottomBarHtml = `
        <div class="quiz-action-bar ${isCorrect ? 'correct' : 'incorrect'}">
          <div class="feedback-container">
            <div class="feedback-icon-box">
              ${isCorrect ? '✓' : '✕'}
            </div>
            <div class="feedback-text-wrap">
              <span class="feedback-headline">${isCorrect ? 'Зөв хариуллаа!' : 'Буруу хариулт'}</span>
              <span class="feedback-detail">${escapeHtml(currentQ.explanation || (isCorrect ? 'Зөв ойлгожээ!' : 'Алдаа бол суралцах нэг хэсэг.'))}</span>
            </div>
          </div>
          <button id="btn-continue" class="btn-continue-quiz">Үргэлжлүүлэх</button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="quiz-view">
        <!-- Quiz Top Progress Header -->
        <div class="quiz-top-bar">
          <a href="/practice" class="quiz-back-btn" data-link>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Буцах</span>
          </a>

          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progressPercent}%"></div>
          </div>

          <div class="quiz-step-label">${state.quizIndex + 1} / ${totalQ}</div>
        </div>

        <!-- Quiz Stage -->
        <div class="quiz-stage">
          <!-- Character Guide Mascot -->
          <div class="character-guide">
            <div class="speech-bubble">${escapeHtml(bubbleText)}</div>
            <div class="mascot-svg-wrap">
              ${renderMascotSvg()}
            </div>
          </div>

          <!-- Question Content -->
          <div class="question-content">
            <span class="question-type-badge">${escapeHtml(currentQ.typeLabel || 'НЭГ ХАРИУЛТ СОНГОХ')}</span>
            <h2 class="question-title">${escapeHtml(currentQ.question)}</h2>
            ${currentQ.subtitle ? `<p class="question-subtitle">${escapeHtml(currentQ.subtitle)}</p>` : ''}
            ${codeHtml}

            <!-- Options -->
            <div class="options-list">
              ${optionsHtml}
            </div>
          </div>
        </div>

        <!-- Bottom Action Drawer -->
        ${bottomBarHtml}
      </div>
    `;

    // Attach Event Listeners
    if (!state.isAnswerChecked) {
      container.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', () => {
          const idx = parseInt(card.getAttribute('data-opt-index'), 10);
          state.selectedOption = idx;
          renderQuizView(container);
        });
      });

      const checkBtn = document.getElementById('btn-check');
      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          if (state.selectedOption === null) return;
          state.isAnswerChecked = true;
          if (state.selectedOption === currentQ.correctOptionIndex) {
            state.quizScore++;
          }
          renderQuizView(container);
        });
      }
    } else {
      const contBtn = document.getElementById('btn-continue');
      if (contBtn) {
        contBtn.addEventListener('click', () => {
          if (state.quizIndex + 1 < totalQ) {
            state.quizIndex++;
            state.selectedOption = null;
            state.isAnswerChecked = false;
            renderQuizView(container);
          } else {
            // Finished
            state.quizCompleted = true;
            state.hudXp += quiz.rewardXp || 50;
            state.hudStreak += 1;
            updateHud();
            renderQuizFinished(container);
          }
        });
      }
    }
  }

  // Quiz Finished Screen
  function renderQuizFinished(container) {
    const quiz = state.quizData;
    const totalQ = quiz.questions.length;
    const score = state.quizScore;

    container.innerHTML = `
      <div class="quiz-view">
        <div class="quiz-finished-card">
          <div class="trophy-badge">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#854D0E">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <h1 class="finished-title">ХИЧЭЭЛ ДУУСЛАА!</h1>
          <p class="finished-subtitle">Нэг алхам урагшиллаа! Мэдлэгээ бататгаж өдрийн зорилгодоо хүрлээ.</p>

          <div class="finished-stats-grid">
            <div class="finished-stat-box">
              <span class="stat-value">+${quiz.rewardXp || 50} XP</span>
              <span class="stat-label">Цуглуулсан</span>
            </div>
            <div class="finished-stat-box">
              <span class="stat-value">${score} / ${totalQ}</span>
              <span class="stat-label">Зөв хариулт</span>
            </div>
            <div class="finished-stat-box">
              <span class="stat-value">02:15</span>
              <span class="stat-label">Хугацаа</span>
            </div>
          </div>

          <div style="display:flex; gap:1rem; margin-top:1rem;">
            <a href="/practice" class="btn-start-quiz" data-link style="padding:0.85rem 2rem;">
              <span>Суралцах зам руу буцах</span>
            </a>
            <button id="btn-retry-quiz" class="btn-action-edit" style="padding:0.85rem 1.5rem; font-size:0.95rem;">
              Дахин оролдох
            </button>
          </div>
        </div>
      </div>
    `;

    const retryBtn = document.getElementById('btn-retry-quiz');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        state.quizIndex = 0;
        state.selectedOption = null;
        state.isAnswerChecked = false;
        state.quizScore = 0;
        state.quizCompleted = false;
        renderQuizView(container);
      });
    }
  }

  // =========================================================================
  // VIEW 3: AdminQuestions (/admin/questions)
  // APIs:
  //   GET /api/admin/questions
  //   POST /api/admin/questions (CRUD 1)
  //   PUT /api/admin/questions/:id (CRUD 1)
  //   DELETE /api/admin/questions/:id
  // =========================================================================
  async function loadAdminView() {
    const container = document.getElementById('main-content');
    container.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Асуултын сангийн мэдээллийг татаж байна...</p>
      </div>
    `;

    await fetchAdminQuestions();
    renderAdminView(container);
  }

  async function fetchAdminQuestions() {
    try {
      let qUrl = '/api/admin/questions?';
      if (state.adminFilterText) qUrl += `q=${encodeURIComponent(state.adminFilterText)}&`;
      if (state.adminFilterUnit !== 'all') qUrl += `unitId=${encodeURIComponent(state.adminFilterUnit)}&`;
      if (state.adminFilterStatus !== 'all') qUrl += `status=${encodeURIComponent(state.adminFilterStatus)}&`;

      const res = await fetch(qUrl);
      if (!res.ok) throw new Error('Асуултын жагсаалт авахад алдаа гарлаа');
      const data = await res.json();
      state.adminQuestions = data.questions || [];
    } catch (err) {
      showToast(err.message, 'error');
    }
  }

  function renderAdminView(container) {
    const questions = state.adminQuestions || [];
    const publishedCount = questions.filter(q => q.status === 'published').length;
    const draftCount = questions.filter(q => q.status === 'draft').length;

    // Table rows
    const rowsHtml = questions.length === 0 ? `
      <tr>
        <td colspan="8" style="text-align:center; padding:3rem; color:var(--text-muted);">
          Хайлтад тохирох асуулт олдсонгүй.
        </td>
      </tr>
    ` : questions.map(q => {
      const typeLabel = q.type === 'true_false' ? 'Үнэн/Худал' :
                        q.type === 'code' ? 'Кодын дүрслэл' : 'Нэг сонголт';
      const correctOptText = (q.options && q.options[q.correctOptionIndex]) ? q.options[q.correctOptionIndex] : '-';

      return `
        <tr data-question-id="${q.id}">
          <td style="font-weight:700; color:var(--text-muted);">#${q.id}</td>
          <td><span class="tag-unit">${escapeHtml(q.unitTitle || `Нэгж ${q.unitId}`)}</span></td>
          <td style="max-width:320px;">
            <div style="font-weight:600; color:var(--text-main); margin-bottom:2px;">${escapeHtml(q.question)}</div>
            ${q.subtitle ? `<div style="font-size:0.75rem; color:var(--text-muted);">${escapeHtml(q.subtitle)}</div>` : ''}
          </td>
          <td><span style="font-size:0.8rem; font-weight:600;">${typeLabel}</span></td>
          <td style="max-width:180px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
            <span style="color:#059669; font-weight:600;">✓ ${escapeHtml(correctOptText)}</span>
          </td>
          <td style="font-weight:700; color:var(--primary);">${q.points || 15} XP</td>
          <td>
            <span class="badge-tag ${q.status === 'published' ? 'tag-published' : 'tag-draft'}">
              ${q.status === 'published' ? 'Нийтэлсэн' : 'Ноорог'}
            </span>
          </td>
          <td>
            <div class="table-actions">
              <button class="btn-action-edit btn-edit-q" data-id="${q.id}">Засах</button>
              <button class="btn-action-delete btn-del-q" data-id="${q.id}">Устгах</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    container.innerHTML = `
      <div class="admin-view">
        <!-- Teacher Profile Header -->
        <div class="teacher-header-card">
          <div class="teacher-profile">
            <div class="teacher-avatar">БН</div>
            <div>
              <h1 class="teacher-name">Б. Номин — Удирдах өрөө</h1>
              <p class="teacher-title">Мэдээлэл зүйн багш • Асуулт ба сорилын удирдлага (TASK-02: Мөнхбаяр)</p>
            </div>
          </div>
          <div>
            <a href="/practice" class="btn-start-quiz" style="font-size:0.88rem;" data-link>
              <span>Дадлага хуудас руу очих</span>
            </a>
          </div>
        </div>

        <!-- Metric Cards -->
        <div class="admin-stats-shelf">
          <div class="admin-stat-card">
            <div class="stat-icon-wrap stat-icon-purple">📚</div>
            <div class="admin-stat-meta">
              <span class="admin-stat-number">${questions.length}</span>
              <span class="admin-stat-label">Нийт асуулт (${publishedCount} нийтэлсэн, ${draftCount} ноорог)</span>
            </div>
          </div>

          <div class="admin-stat-card">
            <div class="stat-icon-wrap stat-icon-cyan">📑</div>
            <div class="admin-stat-meta">
              <span class="admin-stat-number">46</span>
              <span class="admin-stat-label">Сэдэв, нэгжид багтсан</span>
            </div>
          </div>

          <div class="admin-stat-card">
            <div class="stat-icon-wrap stat-icon-amber">🎓</div>
            <div class="admin-stat-meta">
              <span class="admin-stat-number">248</span>
              <span class="admin-stat-label">Суралцагч дадлага хийсэн</span>
            </div>
          </div>
        </div>

        <!-- Table Toolbar -->
        <div class="table-toolbar">
          <div class="toolbar-filters">
            <div class="search-input-wrap">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" id="admin-search-input" class="search-input" placeholder="Хичээлийн нэр, асуултаар хайх..." value="${escapeHtml(state.adminFilterText)}">
            </div>

            <select id="admin-filter-unit" class="filter-select">
              <option value="all" ${state.adminFilterUnit === 'all' ? 'selected' : ''}>Бүх нэгжүүд</option>
              <option value="1" ${state.adminFilterUnit === '1' ? 'selected' : ''}>Нэгж 1: Вебийн үндэс</option>
              <option value="2" ${state.adminFilterUnit === '2' ? 'selected' : ''}>Нэгж 2: Компонент суурь</option>
              <option value="3" ${state.adminFilterUnit === '3' ? 'selected' : ''}>Нэгж 3: Бататгал төсөл</option>
            </select>

            <select id="admin-filter-status" class="filter-select">
              <option value="all" ${state.adminFilterStatus === 'all' ? 'selected' : ''}>Бүх төлөв</option>
              <option value="published" ${state.adminFilterStatus === 'published' ? 'selected' : ''}>Нийтэлсэн</option>
              <option value="draft" ${state.adminFilterStatus === 'draft' ? 'selected' : ''}>Ноорог</option>
            </select>
          </div>

          <button id="btn-open-create-modal" class="btn-add-question">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Шинэ асуулт нэмэх</span>
          </button>
        </div>

        <!-- Questions Table -->
        <div class="table-card">
          <table class="questions-table">
            <thead>
              <tr>
                <th style="width:60px;">ID</th>
                <th style="width:160px;">Хамаарах нэгж</th>
                <th>Асуултын текст</th>
                <th style="width:120px;">Төрөл</th>
                <th>Зөв хариулт</th>
                <th style="width:90px;">Оноо</th>
                <th style="width:110px;">Төлөв</th>
                <th style="width:140px;">Үйлдэл</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;

    // Attach Admin Events
    const searchInput = document.getElementById('admin-search-input');
    if (searchInput) {
      let timeout = null;
      searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
          state.adminFilterText = searchInput.value.trim();
          await fetchAdminQuestions();
          renderAdminView(container);
        }, 300);
      });
    }

    const unitSelect = document.getElementById('admin-filter-unit');
    if (unitSelect) {
      unitSelect.addEventListener('change', async () => {
        state.adminFilterUnit = unitSelect.value;
        await fetchAdminQuestions();
        renderAdminView(container);
      });
    }

    const statusSelect = document.getElementById('admin-filter-status');
    if (statusSelect) {
      statusSelect.addEventListener('change', async () => {
        state.adminFilterStatus = statusSelect.value;
        await fetchAdminQuestions();
        renderAdminView(container);
      });
    }

    const createBtn = document.getElementById('btn-open-create-modal');
    if (createBtn) {
      createBtn.addEventListener('click', () => {
        openQuestionModal(null);
      });
    }

    container.querySelectorAll('.btn-edit-q').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        const q = state.adminQuestions.find(item => item.id === id);
        if (q) openQuestionModal(q);
      });
    });

    container.querySelectorAll('.btn-del-q').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = parseInt(btn.getAttribute('data-id'), 10);
        if (confirm(`Та #${id} дугаартай асуултыг устгахдаа итгэлтэй байна уу?`)) {
          await deleteQuestion(id);
        }
      });
    });
  }

  // Delete Question Handler (DELETE /api/admin/questions/:id)
  async function deleteQuestion(id) {
    try {
      const res = await fetch(`/api/admin/questions/${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Устгахад алдаа гарлаа');
      showToast('Асуулт амжилттай устгагдлаа', 'success');
      await fetchAdminQuestions();
      const container = document.getElementById('main-content');
      renderAdminView(container);
    } catch (err) {
      showToast(err.message, 'error');
    }
  }

  // =========================================================================
  // Question Modal: Create & Edit (POST & PUT /api/admin/questions)
  // =========================================================================
  function openQuestionModal(question) {
    // Remove existing modal if any
    const existingModal = document.getElementById('question-modal-wrap');
    if (existingModal) existingModal.remove();

    const isEdit = !!question;
    const initialData = question || {
      unitId: 2,
      type: 'single_choice',
      question: '',
      subtitle: 'Хамгийн зөв тайлбарыг сонгоорой.',
      codeSnippet: '',
      options: ['', '', '', ''],
      correctOptionIndex: 0,
      explanation: '',
      points: 15,
      status: 'published'
    };

    let currentOptions = [...(initialData.options || ['', '', '', ''])];
    let correctIdx = initialData.correctOptionIndex ?? 0;

    const modalWrap = document.createElement('div');
    modalWrap.id = 'question-modal-wrap';
    modalWrap.className = 'modal-backdrop';

    function renderModalContent(errors = []) {
      const errorHtml = errors.length > 0 ? `
        <div class="validation-alert">
          <div class="validation-alert-title">${errors.length} алдаа байна:</div>
          <ul>
            ${errors.map(e => `<li>${escapeHtml(e)}</li>`).join('')}
          </ul>
        </div>
      ` : '';

      const optionsRowsHtml = currentOptions.map((opt, i) => `
        <div class="option-edit-row">
          <label class="option-radio-label">
            <input type="radio" name="modal-correct-opt" value="${i}" ${correctIdx === i ? 'checked' : ''}>
            <span>Зөв</span>
          </label>
          <input type="text" class="form-input modal-option-input" data-index="${i}" placeholder="Сонголт ${i + 1}" value="${escapeHtml(opt)}">
          ${currentOptions.length > 2 ? `<button type="button" class="btn-remove-opt" data-index="${i}" title="Сонголт устгах">✕</button>` : ''}
        </div>
      `).join('');

      modalWrap.innerHTML = `
        <div class="modal-card">
          <div class="modal-header">
            <h2 class="modal-title">${isEdit ? 'Асуулт засах (PUT)' : 'Шинэ асуулт нэмэх (POST)'}</h2>
            <button class="modal-close-btn" id="modal-close-x">&times;</button>
          </div>

          <form id="question-form" class="modal-body">
            ${errorHtml}

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Хамаарах нэгж <span class="required-star">*</span></label>
                <select id="modal-unit" class="form-select">
                  <option value="1" ${initialData.unitId === 1 ? 'selected' : ''}>НЭГЖ 1: Вебийн үндэс</option>
                  <option value="2" ${initialData.unitId === 2 ? 'selected' : ''}>НЭГЖ 2: Компонент суурь</option>
                  <option value="3" ${initialData.unitId === 3 ? 'selected' : ''}>НЭГЖ 3: Бататгал төсөл</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Асуултын төрөл <span class="required-star">*</span></label>
                <select id="modal-type" class="form-select">
                  <option value="single_choice" ${initialData.type === 'single_choice' ? 'selected' : ''}>Нэг хариулт сонгох</option>
                  <option value="true_false" ${initialData.type === 'true_false' ? 'selected' : ''}>Үнэн эсвэл худал</option>
                  <option value="code" ${initialData.type === 'code' ? 'selected' : ''}>Кодын жишээтэй асуулт</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Асуултын текст <span class="required-star">*</span></label>
              <textarea id="modal-question" class="form-textarea" placeholder="Жишээ нь: React компонент гэж юу вэ?">${escapeHtml(initialData.question)}</textarea>
            </div>

            <div class="form-group">
              <label class="form-label">Дэд тайлбар / Заавар</label>
              <input type="text" id="modal-subtitle" class="form-input" placeholder="Хамгийн зөв тайлбарыг сонгоорой." value="${escapeHtml(initialData.subtitle || '')}">
            </div>

            <div class="form-group" id="code-snippet-wrap" style="${initialData.type === 'code' ? '' : 'display:none;'}">
              <label class="form-label">Кодын жишээ (JSX / JavaScript)</label>
              <textarea id="modal-code" class="form-textarea" style="font-family:var(--font-mono); font-size:0.85rem;" placeholder="function App() {\n  return &lt;div&gt;Hello&lt;/div&gt;;\n}">${escapeHtml(initialData.codeSnippet || '')}</textarea>
            </div>

            <!-- Options List with Radio for Correct Option -->
            <div class="form-group">
              <label class="form-label">Хариултын сонголтууд ба Зөв хариулт <span class="required-star">*</span></label>
              <div class="options-edit-box">
                ${optionsRowsHtml}
                <button type="button" id="btn-add-option" class="btn-add-opt">+ Сонголт нэмэх</button>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Зөв хариултын тайлбар (Explanation)</label>
              <textarea id="modal-explanation" class="form-textarea" placeholder="Зөв ойлгожээ! Компонент нь...">${escapeHtml(initialData.explanation || '')}</textarea>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Оноо (XP)</label>
                <input type="number" id="modal-points" class="form-input" min="5" max="100" value="${initialData.points || 15}">
              </div>

              <div class="form-group">
                <label class="form-label">Төлөв</label>
                <select id="modal-status" class="form-select">
                  <option value="published" ${initialData.status === 'published' ? 'selected' : ''}>Нийтэлсэн (Published)</option>
                  <option value="draft" ${initialData.status === 'draft' ? 'selected' : ''}>Ноорог (Draft)</option>
                </select>
              </div>
            </div>
          </form>

          <div class="modal-footer">
            <button type="button" class="btn-modal-cancel" id="modal-cancel-btn">Болих</button>
            <button type="button" class="btn-modal-draft" id="modal-draft-btn">Ноорог хадгалах</button>
            <button type="button" class="btn-modal-submit" id="modal-save-btn">${isEdit ? 'Шинэчлэх (PUT)' : 'Хадгалах (POST)'}</button>
          </div>
        </div>
      `;

      attachModalEvents();
    }

    function attachModalEvents() {
      // Close buttons
      const closeX = document.getElementById('modal-close-x');
      const cancelBtn = document.getElementById('modal-cancel-btn');
      if (closeX) closeX.addEventListener('click', () => modalWrap.remove());
      if (cancelBtn) cancelBtn.addEventListener('click', () => modalWrap.remove());

      // Type change toggle for code snippet
      const typeSelect = document.getElementById('modal-type');
      const codeWrap = document.getElementById('code-snippet-wrap');
      if (typeSelect && codeWrap) {
        typeSelect.addEventListener('change', () => {
          if (typeSelect.value === 'code') {
            codeWrap.style.display = 'flex';
          } else {
            codeWrap.style.display = 'none';
          }
          if (typeSelect.value === 'true_false' && currentOptions.length !== 2) {
            currentOptions = ['ҮНЭН', 'ХУДАЛ'];
            correctIdx = 0;
            renderModalContent();
          }
        });
      }

      // Option inputs sync
      modalWrap.querySelectorAll('.modal-option-input').forEach(input => {
        input.addEventListener('input', () => {
          const idx = parseInt(input.getAttribute('data-index'), 10);
          currentOptions[idx] = input.value;
        });
      });

      // Correct radio sync
      modalWrap.querySelectorAll('input[name="modal-correct-opt"]').forEach(radio => {
        radio.addEventListener('change', () => {
          correctIdx = parseInt(radio.value, 10);
        });
      });

      // Remove option
      modalWrap.querySelectorAll('.btn-remove-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-index'), 10);
          currentOptions.splice(idx, 1);
          if (correctIdx >= currentOptions.length) correctIdx = 0;
          renderModalContent();
        });
      });

      // Add option
      const addOptBtn = document.getElementById('btn-add-option');
      if (addOptBtn) {
        addOptBtn.addEventListener('click', () => {
          currentOptions.push('');
          renderModalContent();
        });
      }

      // Submit handlers
      const saveBtn = document.getElementById('modal-save-btn');
      const draftBtn = document.getElementById('modal-draft-btn');

      if (saveBtn) saveBtn.addEventListener('click', () => handleSave('published'));
      if (draftBtn) draftBtn.addEventListener('click', () => handleSave('draft'));
    }

    async function handleSave(statusOverride) {
      const qInput = document.getElementById('modal-question');
      const subInput = document.getElementById('modal-subtitle');
      const unitSelect = document.getElementById('modal-unit');
      const typeSelect = document.getElementById('modal-type');
      const codeInput = document.getElementById('modal-code');
      const explInput = document.getElementById('modal-explanation');
      const pointsInput = document.getElementById('modal-points');

      // Sync latest inputs
      modalWrap.querySelectorAll('.modal-option-input').forEach(input => {
        const idx = parseInt(input.getAttribute('data-index'), 10);
        currentOptions[idx] = input.value;
      });

      const payload = {
        unitId: parseInt(unitSelect.value, 10),
        unitTitle: `НЭГЖ ${unitSelect.value}: ${unitSelect.value === '1' ? 'Вебийн үндэс' : unitSelect.value === '2' ? 'Компонент суурь' : 'Бататгал төсөл'}`,
        type: typeSelect.value,
        question: qInput.value.trim(),
        subtitle: subInput.value.trim(),
        codeSnippet: typeSelect.value === 'code' ? codeInput.value.trim() : null,
        options: currentOptions.map(o => o.trim()),
        correctOptionIndex: correctIdx,
        explanation: explInput.value.trim(),
        points: parseInt(pointsInput.value, 10) || 15,
        status: statusOverride
      };

      // Client-side quick validation check
      const errors = [];
      if (!payload.question || payload.question.length < 3) {
        errors.push('Асуултын текст хамгийн багадаа 3 тэмдэгт байна.');
      }
      if (payload.options.length < 2) {
        errors.push('Хариултын сонголт хамгийн багадаа 2 байх ёстой.');
      } else {
        const emptyCount = payload.options.filter(o => !o).length;
        if (emptyCount > 0) {
          errors.push('Хариултын бүх сонголтыг бөглөнө үү.');
        }
      }
      if (payload.correctOptionIndex < 0 || payload.correctOptionIndex >= payload.options.length) {
        errors.push('Зөв хариултын сонголтыг заавал заана уу.');
      }

      if (errors.length > 0) {
        renderModalContent(errors);
        return;
      }

      try {
        const url = isEdit ? `/api/admin/questions/${question.id}` : '/api/admin/questions';
        const method = isEdit ? 'PUT' : 'POST';

        const res = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const resData = await res.json();
        if (!res.ok) {
          const apiErrors = resData.errors || [resData.message || 'Хадгалахад алдаа гарлаа'];
          renderModalContent(apiErrors);
          return;
        }

        modalWrap.remove();
        showToast(resData.message || (isEdit ? 'Асуулт шинэчлэгдлээ' : 'Асуулт амжилттай хадгалагдлаа'), 'success');
        await fetchAdminQuestions();
        const container = document.getElementById('main-content');
        renderAdminView(container);
      } catch (err) {
        renderModalContent([err.message]);
      }
    }

    document.body.appendChild(modalWrap);
    renderModalContent();
  }

  // Initialize Application
  function init() {
    updateHud();
    handleRoute();
  }

  init();
})();

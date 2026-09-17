"use client";

import { useState } from "react";

type Ad = {
  title: string;
  text: string;
  button: string;
  image: string;
};

type Banner = {
  title: string;
  subtitle: string;
  button: string;
  image: string;
};

export default function Home() {
  const [mode, setMode] = useState<"question" | "ads" | "banner">(
    "question"
  );

  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [ads, setAds] = useState<Ad[]>([]);
  const [banner, setBanner] = useState<Banner | null>(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("");

  async function generate() {
    if (!message.trim()) return;

    setLoading(true);
    setAnswer("");
    setAds([]);
    setBanner(null);
    setSelected("");

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setAnswer(data.error || "Произошла ошибка");
        return;
      }

      if (data.type === "answer") {
        setAnswer(data.answer);
      }

      if (data.type === "ads") {
        setAds(data.advertisements || []);
      }

      if (data.type === "banner") {
        setBanner(data.banner);
      }
    } catch {
      setAnswer("Не удалось подключиться к серверу.");
    } finally {
      setLoading(false);
    }
  }

  function chooseAd(title: string) {
    setSelected(title);
  }

  return (
    <main className="site">
      <nav className="navbar">
        <div className="logo">
          <span>AI</span> STUDIO
        </div>

        <div className="nav-links">
          <a href="#services">Возможности</a>
          <a href="#generator">Генератор</a>
          <a href="#about">О проекте</a>
        </div>

        <a href="#generator" className="nav-button">
          Попробовать AI
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            ✦ AI STUDIO ДЛЯ МАЛОГО БИЗНЕСА
          </div>

          <h1>
            Развивайте бизнес
            <br />
            <span>с помощью AI</span>
          </h1>

          <p>
            Отвечаем на вопросы по бизнесу, создаём рекламные тексты
            и красивые рекламные баннеры за несколько секунд.
          </p>

          <div className="hero-buttons">
            <a href="#generator" className="primary-button">
              Начать работу →
            </a>

            <a href="#services" className="secondary-button">
              Возможности
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>3</strong>
              <span>режима AI</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>доступность</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>для бизнеса</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span className="status-dot"></span>
            AI ASSISTANT
          </div>

          <div className="hero-message">
            <span>AI</span>
            <p>
              Чем я могу помочь вашему бизнесу сегодня?
            </p>
          </div>

          <div className="hero-mini-card">
            <span>✦</span>
            Создать рекламную кампанию
          </div>

          <div className="hero-mini-card">
            <span>✦</span>
            Проанализировать аудиторию
          </div>

          <div className="hero-mini-card">
            <span>✦</span>
            Создать рекламный баннер
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="section-heading">
          <div>
            <span className="section-label">ВОЗМОЖНОСТИ</span>
            <h2>Всё необходимое для бизнеса</h2>
          </div>

          <p>
            Один инструмент для идей, рекламы, контента
            и развития вашего бизнеса.
          </p>
        </div>

        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon">💬</div>
            <h3>AI-консультант</h3>
            <p>
              Получайте ответы на вопросы о маркетинге,
              продажах, клиентах и развитии бизнеса.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📢</div>
            <h3>Реклама</h3>
            <p>
              Создавайте рекламные тексты и несколько
              вариантов предложений для клиентов.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🖼️</div>
            <h3>Баннеры</h3>
            <p>
              Создавайте визуальные рекламные баннеры
              с заголовком, описанием и призывом к действию.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💡</div>
            <h3>Идеи</h3>
            <p>
              Получайте идеи для продвижения, контента,
              акций и новых бизнес-предложений.
            </p>
          </div>
        </div>
      </section>

      <section id="generator" className="ai-section">
        <div className="ai-section-heading">
          <span className="section-label">AI GENERATOR</span>
          <h2>Что будем создавать?</h2>
          <p>
            Выберите режим и напишите задачу своими словами.
          </p>
        </div>

        <div className="mode-switch">
          <button
            className={mode === "question" ? "active" : ""}
            onClick={() => setMode("question")}
          >
            💬 Задать вопрос
          </button>

          <button
            className={mode === "ads" ? "active" : ""}
            onClick={() => setMode("ads")}
          >
            📢 Создать рекламу
          </button>

          <button
            className={mode === "banner" ? "active" : ""}
            onClick={() => setMode("banner")}
          >
            🖼️ Создать баннер
          </button>
        </div>

        <div className="ai-box">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              mode === "question"
                ? "Например: Как привлечь клиентов в новую кофейню?"
                : mode === "ads"
                ? "Например: Создай рекламу для магазина одежды"
                : "Например: Создай баннер для кофейни со скидкой 20%"
            }
          />

          <div className="quick-tags">
            <button onClick={() => setMessage("цветочный магазин")}>
              🌸 Цветы
            </button>

            <button onClick={() => setMessage("кофейня")}>
              ☕ Кофейня
            </button>

            <button onClick={() => setMessage("магазин одежды")}>
              👕 Одежда
            </button>

            <button onClick={() => setMessage("магазин техники")}>
              💻 Техника
            </button>
          </div>

          <button
            className="generate-button"
            onClick={generate}
            disabled={loading}
          >
            {loading
              ? "Создаём..."
              : mode === "question"
              ? "Получить ответ ✦"
              : mode === "ads"
              ? "Создать рекламу ✦"
              : "Создать баннер ✦"}
          </button>
        </div>

        {answer && (
          <div className="ai-result">
            <div className="result-header">
              <span>✦ AI STUDIO</span>
              <span>Результат</span>
            </div>

            <div className="answer-text">
              {answer.split("\n").map((line, index) => (
                <p key={index}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        )}

        {ads.length > 0 && (
          <div className="advertisements">
            <div className="results-title">
              <span>РЕКЛАМНЫЕ ВАРИАНТЫ</span>
              <h3>Выберите подходящий вариант</h3>
            </div>

            <div className="ad-grid">
              {ads.map((ad, index) => (
                <div
                  className={`ad-card ${
                    selected === ad.title ? "selected" : ""
                  }`}
                  key={index}
                >
                  <div className="ad-image">
                    <img src={ad.image} alt={ad.title} />
                    <div className="ad-image-label">
                      AI AD {index + 1}
                    </div>
                  </div>

                  <div className="ad-content">
                    <h3>{ad.title}</h3>
                    <p>{ad.text}</p>

                    <button
                      onClick={() => chooseAd(ad.title)}
                      className="ad-button"
                    >
                      {ad.button} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {banner && (
          <div className="banner-result">
            <div className="results-title">
              <span>AI BANNER</span>
              <h3>Ваш рекламный баннер</h3>
            </div>

            <div
              className="generated-banner"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(10, 7, 25, .9), rgba(10, 7, 25, .25)), url(${banner.image})`,
              }}
            >
              <div className="banner-content">
                <div className="banner-small">
                  AI STUDIO
                </div>

                <h2>{banner.title}</h2>

                <p>{banner.subtitle}</p>

                <button>{banner.button}</button>
              </div>
            </div>

            <div className="banner-info">
              <span>✓ Готовый дизайн</span>
              <span>✓ Заголовок</span>
              <span>✓ Описание</span>
              <span>✓ CTA-кнопка</span>
            </div>
          </div>
        )}

        {selected && (
          <div className="selected-message">
            ✓ Вы выбрали рекламный вариант:
            <strong>{selected}</strong>
          </div>
        )}
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <span className="section-label">О ПРОЕКТЕ</span>

          <h2>
            AI-инструменты,
            <br />
            созданные для малого бизнеса
          </h2>

          <p>
            AI STUDIO объединяет консультации, создание рекламы
            и визуальный контент в одном удобном интерфейсе.
            Это учебный проект, демонстрирующий возможности
            современных AI-инструментов для предпринимателей.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-icon">✦</div>
          <h3>AI STUDIO</h3>
          <p>
            Идея → Реклама → Контент → Клиенты
          </p>
        </div>
      </section>

      <footer>
        <div className="logo">
          <span>AI</span> STUDIO
        </div>

        <p>AI-инструменты для малого бизнеса</p>

        <span>© 2026 AI STUDIO</span>
      </footer>
    </main>
  );
}
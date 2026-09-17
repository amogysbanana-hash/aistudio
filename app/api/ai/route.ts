import { NextResponse } from "next/server";

function getBusinessAnswer(message: string) {
  const text = message.toLowerCase();

  if (
    text.includes("клиент") ||
    text.includes("привлеч") ||
    text.includes("продаж")
  ) {
    return `Чтобы привлечь больше клиентов, начните с определения целевой аудитории. Затем используйте социальные сети, акции, полезный контент и рекламу.

Для малого бизнеса можно начать с:
1. Определить, кто ваш основной клиент.
2. Создать понятное предложение.
3. Запустить рекламу в Instagram и TikTok.
4. Предложить скидку или бонус новым клиентам.
5. Собирать отзывы и показывать их потенциальным покупателям.

Главное — не пытаться рекламировать всё сразу. Лучше сделать несколько конкретных предложений для своей аудитории.`;
  }

  if (
    text.includes("маркетинг") ||
    text.includes("реклама") ||
    text.includes("продвиж")
  ) {
    return `Для малого бизнеса эффективнее всего начинать с простого маркетингового плана.

Определите:
• целевую аудиторию;
• главное преимущество бизнеса;
• площадки для продвижения;
• рекламное предложение;
• бюджет;
• способ измерения результата.

Хорошая реклама должна быстро объяснять три вещи: что вы предлагаете, какую пользу получает клиент и что ему нужно сделать дальше.`;
  }

  if (
    text.includes("целевая аудитория") ||
    text.includes("аудитория")
  ) {
    return `Целевая аудитория — это люди, которым в первую очередь нужен ваш продукт или услуга.

Для её определения можно изучить:
• возраст;
• интересы;
• место проживания;
• потребности;
• проблемы;
• уровень дохода;
• привычки покупателей.

Например, для кофейни целевой аудиторией могут быть студенты, офисные сотрудники и люди, которые любят кофе и удобные места для встреч.`;
  }

  if (
    text.includes("бизнес модель") ||
    text.includes("бизнес-модель") ||
    text.includes("canvas")
  ) {
    return `Для бизнес-модели удобно использовать Business Model Canvas.

Основные блоки:
• ценностное предложение;
• сегменты клиентов;
• каналы взаимодействия;
• отношения с клиентами;
• источники дохода;
• ключевые ресурсы;
• ключевые виды деятельности;
• ключевые партнёры;
• структура расходов.

Так можно быстро понять, как работает бизнес и откуда он получает доход.`;
  }

  if (
    text.includes("контент") ||
    text.includes("пост") ||
    text.includes("соцсет")
  ) {
    return `Для малого бизнеса можно использовать несколько типов контента:

📌 Полезный — советы и рекомендации.
📌 Рекламный — товары, услуги и акции.
📌 Развлекательный — короткие видео и интересные публикации.
📌 Доверительный — отзывы клиентов и история компании.
📌 Экспертный — демонстрация знаний и опыта.

Хороший вариант — составить контент-план на неделю и заранее подготовить публикации.`;
  }

  if (
    text.includes("цена") ||
    text.includes("стоимость") ||
    text.includes("дорого")
  ) {
    return `При формировании цены учитывайте себестоимость, расходы бизнеса, цены конкурентов и ценность продукта для клиента.

Можно использовать несколько вариантов:
• базовый пакет;
• стандартный пакет;
• расширенный пакет.

Так клиент сможет выбрать подходящий вариант, а бизнес сможет работать с разными категориями покупателей.`;
  }

  return `Я AI-консультант AI STUDIO для малого бизнеса.

Я могу помочь вам с:
• маркетингом;
• рекламой;
• целевой аудиторией;
• бизнес-моделью;
• контентом;
• продажами;
• продвижением;
• идеями для бизнеса;
• рекламными предложениями.

Например, спросите:

«Как привлечь клиентов в кофейню?»

«Как определить целевую аудиторию?»

«Как продвигать новый магазин?»

«Как составить бизнес-модель?»`;
}

function getAds(message: string) {
  const text = message.toLowerCase();

  let category = "business";

  if (
    text.includes("цвет") ||
    text.includes("букет") ||
    text.includes("роз")
  ) {
    category = "flowers";
  } else if (
    text.includes("кофе") ||
    text.includes("кафе") ||
    text.includes("кофейн")
  ) {
    category = "coffee";
  } else if (
    text.includes("одеж") ||
    text.includes("магазин одежды") ||
    text.includes("футбол")
  ) {
    category = "clothes";
  } else if (
    text.includes("техник") ||
    text.includes("ноутбук") ||
    text.includes("телефон")
  ) {
    category = "tech";
  } else if (
    text.includes("еда") ||
    text.includes("ресторан") ||
    text.includes("пицц")
  ) {
    category = "food";
  } else if (
    text.includes("авто") ||
    text.includes("машин") ||
    text.includes("автомобил")
  ) {
    category = "auto";
  } else if (
    text.includes("салон") ||
    text.includes("красот") ||
    text.includes("парикмах")
  ) {
    category = "beauty";
  }

  const ads: Record<string, any[]> = {
    flowers: [
      {
        title: "Цветы, которые говорят за вас",
        text: "Свежие букеты для любого важного момента. Закажите сегодня.",
        button: "Заказать букет",
        image:
          "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Подарите эмоции",
        text: "Красивые букеты из свежих цветов с быстрой доставкой.",
        button: "Выбрать букет",
        image:
          "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Красота в каждом букете",
        text: "Создадим композицию специально для вашего праздника.",
        button: "Создать букет",
        image:
          "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    coffee: [
      {
        title: "Твой кофе. Твоё настроение.",
        text: "Свежий кофе, уютная атмосфера и приятные встречи каждый день.",
        button: "Посетить кофейню",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Начни день с кофе",
        text: "Ароматный кофе и вкусные десерты уже ждут тебя.",
        button: "Попробовать",
        image:
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Кофе для своих",
        text: "Уютное место для работы, встреч и отдыха.",
        button: "Зайти к нам",
        image:
          "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    clothes: [
      {
        title: "Новый стиль начинается здесь",
        text: "Современная одежда для тех, кто хочет выглядеть уверенно.",
        button: "Смотреть коллекцию",
        image:
          "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Обнови свой гардероб",
        text: "Новые модели уже в продаже. Выбирай свой стиль.",
        button: "Выбрать одежду",
        image:
          "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Стиль на каждый день",
        text: "Удобная и современная одежда для любого образа.",
        button: "Подробнее",
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    tech: [
      {
        title: "Технологии для жизни",
        text: "Современная техника для работы, учёбы и развлечений.",
        button: "Смотреть технику",
        image:
          "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Обнови свою технику",
        text: "Выбирайте современные устройства по выгодным предложениям.",
        button: "Выбрать устройство",
        image:
          "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Техника, которая помогает",
        text: "Ноутбуки, смартфоны и аксессуары для любых задач.",
        button: "Перейти в магазин",
        image:
          "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    food: [
      {
        title: "Вкус, который хочется повторить",
        text: "Свежие блюда и любимые вкусы с быстрой доставкой.",
        button: "Заказать",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Голодным быть не обязательно",
        text: "Закажите любимые блюда и наслаждайтесь вкусом.",
        button: "Посмотреть меню",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Вкусная идея для вечера",
        text: "Соберите заказ для себя, друзей или всей семьи.",
        button: "Сделать заказ",
        image:
          "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    auto: [
      {
        title: "Автомобиль вашей мечты",
        text: "Подберите автомобиль, который подходит именно вам.",
        button: "Посмотреть автомобили",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Новый автомобиль — новые возможности",
        text: "Современные автомобили для города и путешествий.",
        button: "Выбрать авто",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Двигайся вперёд",
        text: "Найдите автомобиль под свои задачи и бюджет.",
        button: "Подробнее",
        image:
          "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    beauty: [
      {
        title: "Время для себя",
        text: "Профессиональный уход и процедуры в комфортной атмосфере.",
        button: "Записаться",
        image:
          "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Подчеркни свою красоту",
        text: "Уход, стиль и профессиональный подход.",
        button: "Выбрать услугу",
        image:
          "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Новый образ начинается здесь",
        text: "Запишитесь на процедуру в удобное время.",
        button: "Записаться сейчас",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
      },
    ],

    business: [
      {
        title: "Ваш бизнес — наша идея",
        text: "Создайте современную рекламу и привлекайте новых клиентов.",
        button: "Узнать больше",
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Больше клиентов. Больше возможностей.",
        text: "Продвигайте свой бизнес с помощью современных инструментов.",
        button: "Попробовать",
        image:
          "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1000&q=80",
      },
      {
        title: "Идея превращается в результат",
        text: "Создавайте рекламу, контент и новые предложения быстрее.",
        button: "Начать",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80",
      },
    ],
  };

  return ads[category];
}

function getBanner(message: string) {
  const text = message.toLowerCase();

  let category = "business";

  if (text.includes("цвет") || text.includes("букет")) {
    category = "flowers";
  } else if (text.includes("кофе") || text.includes("кафе")) {
    category = "coffee";
  } else if (text.includes("одеж")) {
    category = "clothes";
  } else if (text.includes("техник") || text.includes("ноутбук")) {
    category = "tech";
  } else if (text.includes("еда") || text.includes("пицц")) {
    category = "food";
  } else if (text.includes("авто") || text.includes("машин")) {
    category = "auto";
  } else if (text.includes("салон") || text.includes("красот")) {
    category = "beauty";
  }

  const banners: Record<string, any> = {
    flowers: {
      title: "ЦВЕТЫ С ДОСТАВКОЙ",
      subtitle: "Подарите эмоции близким",
      button: "ЗАКАЗАТЬ БУКЕТ",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    },
    coffee: {
      title: "ЛЮБИМЫЙ КОФЕ КАЖДЫЙ ДЕНЬ",
      subtitle: "Свежий кофе • уютная атмосфера",
      button: "ПОСЕТИТЬ КОФЕЙНЮ",
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80",
    },
    clothes: {
      title: "НОВАЯ КОЛЛЕКЦИЯ",
      subtitle: "Найди свой стиль",
      button: "СМОТРЕТЬ КОЛЛЕКЦИЮ",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80",
    },
    tech: {
      title: "СОВРЕМЕННАЯ ТЕХНИКА",
      subtitle: "Технологии для работы и жизни",
      button: "СМОТРЕТЬ ТОВАРЫ",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80",
    },
    food: {
      title: "ВКУС, КОТОРЫЙ ХОЧЕТСЯ ПОВТОРИТЬ",
      subtitle: "Закажите любимые блюда",
      button: "ЗАКАЗАТЬ",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    },
    auto: {
      title: "ВЫБЕРИ СВОЙ АВТОМОБИЛЬ",
      subtitle: "Комфорт. Стиль. Возможности.",
      button: "ПОСМОТРЕТЬ АВТО",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80",
    },
    beauty: {
      title: "ВРЕМЯ ДЛЯ СЕБЯ",
      subtitle: "Красота начинается с ухода",
      button: "ЗАПИСАТЬСЯ",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
    },
    business: {
      title: "РАЗВИВАЙТЕ СВОЙ БИЗНЕС",
      subtitle: "Современные решения для малого бизнеса",
      button: "УЗНАТЬ БОЛЬШЕ",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80",
    },
  };

  return banners[category];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Введите сообщение" },
        { status: 400 }
      );
    }

    const mode = body.mode || "question";

    if (mode === "question") {
      return NextResponse.json({
        type: "answer",
        answer: getBusinessAnswer(message),
      });
    }

    if (mode === "ads") {
      return NextResponse.json({
        type: "ads",
        advertisements: getAds(message),
      });
    }

    if (mode === "banner") {
      return NextResponse.json({
        type: "banner",
        banner: getBanner(message),
      });
    }

    return NextResponse.json({
      type: "answer",
      answer: getBusinessAnswer(message),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Произошла ошибка сервера" },
      { status: 500 }
    );
  }
}
// Общие данные сайта: кейсы и статьи блога.
// Text fields are bilingual: { ru: "...", en: "..." }. English is the primary language.
// "icon" is a name from assets/js/icons.js.
// Чтобы добавить кейс или статью, достаточно дописать объект в массив.

window.SITE_DATA = {
  cases: [
    {
      id: "ecom-fashion",
      title: { ru: "Интернет-магазин одежды", en: "Online fashion retailer" },
      industry: "ecommerce",
      industryLabel: { ru: "E-commerce", en: "E-commerce" },
      icon: "shirt",
      color: "linear-gradient(135deg,#ec4899,#8b5cf6)",
      task: {
        ru: "Снизить стоимость заказа из контекстной рекламы и масштабировать бюджет без потери эффективности.",
        en: "Cut the cost per order from paid search and scale the budget without losing efficiency."
      },
      solution: {
        ru: "Пересобрали структуру кампаний по категориям товаров, подключили динамический ремаркетинг, внедрили сквозную аналитику и еженедельные A/B-тесты креативов.",
        en: "Rebuilt the campaign structure around product categories, added dynamic remarketing, set up end-to-end analytics and ran weekly A/B tests on creatives."
      },
      period: { ru: "6 месяцев", en: "6 months" },
      metrics: [
        { value: "-38%", label: { ru: "стоимость заказа", en: "cost per order" } },
        { value: "x2.4", label: { ru: "выручка из рекламы", en: "revenue from ads" } },
        { value: "5.1", label: { ru: "ROAS", en: "ROAS" } }
      ]
    },
    {
      id: "saas-crm",
      title: { ru: "SaaS-сервис для малого бизнеса", en: "SaaS platform for small businesses" },
      industry: "saas",
      industryLabel: { ru: "SaaS", en: "SaaS" },
      icon: "cloud",
      color: "linear-gradient(135deg,#06b6d4,#4f46e5)",
      task: {
        ru: "Увеличить количество регистраций на бесплатный триал и долю конверсии в платную подписку.",
        en: "Grow free-trial sign-ups and improve the conversion rate from trial to paid subscription."
      },
      solution: {
        ru: "Запустили контент-стратегию под низкочастотные запросы, переписали лендинги под сегменты аудитории, настроили email-цепочки онбординга.",
        en: "Launched a content strategy targeting long-tail search queries, rewrote landing pages for each audience segment and built onboarding email sequences."
      },
      period: { ru: "8 месяцев", en: "8 months" },
      metrics: [
        { value: "+164%", label: { ru: "органический трафик", en: "organic traffic" } },
        { value: "+71%", label: { ru: "регистраций", en: "sign-ups" } },
        { value: "18%", label: { ru: "конверсия в оплату", en: "trial-to-paid conversion" } }
      ]
    },
    {
      id: "dental-clinic",
      title: { ru: "Сеть стоматологических клиник", en: "Dental clinic chain" },
      industry: "services",
      industryLabel: { ru: "Услуги", en: "Services" },
      icon: "stethoscope",
      color: "linear-gradient(135deg,#10b981,#06b6d4)",
      task: {
        ru: "Заполнить расписание врачей в трёх новых филиалах и повысить узнаваемость бренда в районе.",
        en: "Fill the appointment books at three new clinics and build brand awareness in the local area."
      },
      solution: {
        ru: "Локальное SEO и карты, геотаргетированная реклама, программа отзывов, посевы у районных блогеров.",
        en: "Local SEO and map listings, geo-targeted ads, a review program and seeding with neighborhood bloggers."
      },
      period: { ru: "4 месяца", en: "4 months" },
      metrics: [
        { value: "+240", label: { ru: "заявок в месяц", en: "leads per month" } },
        { value: { en: "$10", ru: "920 ₽" }, label: { ru: "стоимость заявки", en: "cost per lead" } },
        { value: "4.9", label: { ru: "рейтинг на картах", en: "rating on maps" } }
      ]
    },
    {
      id: "fintech-app",
      title: { ru: "Мобильное финтех-приложение", en: "Mobile fintech app" },
      industry: "saas",
      industryLabel: { ru: "SaaS", en: "SaaS" },
      icon: "credit-card",
      color: "linear-gradient(135deg,#f59e0b,#ef4444)",
      task: {
        ru: "Снизить стоимость установки приложения и увеличить долю активных пользователей на 30-й день.",
        en: "Reduce the cost per install and increase the share of users still active on day 30."
      },
      solution: {
        ru: "Перезапустили рекламу в мобильных сетях с новыми креативами, внедрили push-сценарии и реферальную программу.",
        en: "Relaunched mobile ad campaigns with new creatives, added push notification flows and a referral program."
      },
      period: { ru: "5 месяцев", en: "5 months" },
      metrics: [
        { value: "-45%", label: { ru: "стоимость установки", en: "cost per install" } },
        { value: "+52%", label: { ru: "удержание D30", en: "day-30 retention" } },
        { value: "180K", label: { ru: "установок", en: "installs" } }
      ]
    },
    {
      id: "furniture-brand",
      title: { ru: "Мебельный бренд", en: "Furniture brand" },
      industry: "ecommerce",
      industryLabel: { ru: "E-commerce", en: "E-commerce" },
      icon: "armchair",
      color: "linear-gradient(135deg,#8b5cf6,#ec4899)",
      task: {
        ru: "Выйти на маркетплейсы и построить собственный канал продаж через соцсети.",
        en: "Launch on marketplaces and build a direct sales channel through social media."
      },
      solution: {
        ru: "Оптимизировали карточки товаров, запустили рекламу на маркетплейсах, вели регулярный контент и коллаборации с дизайнерами интерьеров.",
        en: "Optimized product listings, launched marketplace ads, and ran a steady stream of content and collaborations with interior designers."
      },
      period: { ru: "7 месяцев", en: "7 months" },
      metrics: [
        { value: "x3.2", label: { ru: "продажи на маркетплейсах", en: "marketplace sales" } },
        { value: "48K", label: { ru: "подписчиков", en: "followers" } },
        { value: "27%", label: { ru: "повторных покупок", en: "repeat purchases" } }
      ]
    },
    {
      id: "edu-courses",
      title: { ru: "Онлайн-школа английского", en: "Online English school" },
      industry: "education",
      industryLabel: { ru: "Образование", en: "Education" },
      icon: "graduation-cap",
      color: "linear-gradient(135deg,#4f46e5,#06b6d4)",
      task: {
        ru: "Масштабировать набор на курсы, сохранив окупаемость рекламы.",
        en: "Scale course enrollment while keeping advertising profitable."
      },
      solution: {
        ru: "Воронка через бесплатный вебинар, чат-бот для прогрева, ретаргетинг по сегментам и партнёрская программа.",
        en: "A free-webinar funnel, a chatbot for nurturing leads, segmented retargeting and an affiliate program."
      },
      period: { ru: "9 месяцев", en: "9 months" },
      metrics: [
        { value: "+310%", label: { ru: "продаж курсов", en: "course sales" } },
        { value: "3.4", label: { ru: "ROMI", en: "ROMI" } },
        { value: "12 500", label: { ru: "участников вебинаров", en: "webinar attendees" } }
      ]
    }
  ],

  posts: [
    {
      id: "unit-economics",
      title: {
        ru: "Юнит-экономика в маркетинге: как понять, что реклама окупается",
        en: "Unit economics in marketing: how to know your ads are paying off"
      },
      category: { ru: "Аналитика", en: "Analytics" },
      date: "2026-09-10",
      readTime: 7,
      excerpt: {
        ru: "Разбираем CAC, LTV, ROMI и показываем, как считать их на простых примерах, чтобы не сливать бюджет.",
        en: "A plain-English guide to CAC, LTV and ROMI, with simple examples so you stop burning budget."
      },
      body: {
        ru: `
<p>Юнит-экономика отвечает на главный вопрос: сколько денег приносит один клиент и сколько стоит его привлечь. Без этих цифр любые разговоры о «росте» бессмысленны.</p>
<h2>Три главные метрики</h2>
<ul>
<li><strong>CAC</strong> (Customer Acquisition Cost) — расходы на маркетинг, делённые на число новых клиентов.</li>
<li><strong>LTV</strong> (Lifetime Value) — прибыль, которую клиент приносит за всё время работы с вами.</li>
<li><strong>ROMI</strong> (Return on Marketing Investment) — отношение прибыли от маркетинга к затратам на него.</li>
</ul>
<h2>Простой пример</h2>
<p>Потратили 100 000 ₽ на рекламу и получили 50 клиентов: CAC = 2 000 ₽. Каждый клиент в среднем приносит 6 000 ₽ маржи за год: LTV = 6 000 ₽. Соотношение LTV/CAC = 3 — это здоровая экономика. Если показатель ниже 1, канал работает в убыток.</p>
<h2>Что делать с цифрами</h2>
<p>Считайте метрики по каждому каналу отдельно. Часто общая картина выглядит хорошо, а один канал тянет всё вниз. Перераспределяйте бюджет от слабых каналов к сильным и проверяйте результат каждые две недели.</p>`,
        en: `
<p>Unit economics answers the main question: how much money one customer brings and how much it costs to acquire them. Without these numbers any talk about "growth" is meaningless.</p>
<h2>The three key metrics</h2>
<ul>
<li><strong>CAC</strong> (Customer Acquisition Cost) — marketing spend divided by the number of new customers.</li>
<li><strong>LTV</strong> (Lifetime Value) — the profit a customer brings over the whole time they work with you.</li>
<li><strong>ROMI</strong> (Return on Marketing Investment) — the ratio of marketing profit to marketing spend.</li>
</ul>
<h2>A simple example</h2>
<p>You spent $10,000 on ads and got 50 customers: CAC = $200. Each customer brings $600 of margin per year on average: LTV = $600. An LTV/CAC ratio of 3 is healthy economics. If it drops below 1, the channel is losing money.</p>
<h2>What to do with the numbers</h2>
<p>Calculate the metrics for each channel separately. The overall picture often looks fine while one channel drags everything down. Move budget from weak channels to strong ones and check the result every two weeks.</p>`
      }
    },
    {
      id: "content-strategy",
      title: {
        ru: "Контент-стратегия за 5 шагов: от аудита до редакционного плана",
        en: "Content strategy in 5 steps: from audit to editorial calendar"
      },
      category: { ru: "Контент", en: "Content" },
      date: "2026-08-28",
      readTime: 6,
      excerpt: {
        ru: "Пошаговый план, который поможет превратить хаотичные публикации в систему, приводящую клиентов.",
        en: "A step-by-step plan for turning random posts into a system that brings in customers."
      },
      body: {
        ru: `
<p>Контент работает только тогда, когда у него есть цель, аудитория и регулярность. Разберём, как это выстроить.</p>
<h2>Шаг 1. Аудит</h2>
<p>Посмотрите, что уже опубликовано и что из этого приносит трафик и заявки. Обычно 20% материалов дают 80% результата.</p>
<h2>Шаг 2. Портрет аудитории</h2>
<p>Опишите 2–3 сегмента: их задачи, боли, вопросы, которые они вводят в поиск.</p>
<h2>Шаг 3. Семантика и темы</h2>
<p>Соберите запросы, сгруппируйте по этапам воронки: осведомлённость, выбор, покупка.</p>
<h2>Шаг 4. Форматы и каналы</h2>
<p>Статьи, короткие видео, рассылка, кейсы. Один материал — несколько форматов.</p>
<h2>Шаг 5. Редакционный план</h2>
<p>Зафиксируйте темы на 2–3 месяца вперёд, назначьте ответственных и метрики успеха для каждого материала.</p>`,
        en: `
<p>Content only works when it has a goal, an audience and regularity. Here is how to build that.</p>
<h2>Step 1. Audit</h2>
<p>Look at what you have already published and which pieces bring traffic and leads. Usually 20% of the content delivers 80% of the results.</p>
<h2>Step 2. Audience profile</h2>
<p>Describe 2–3 segments: their tasks, pain points and the questions they type into search.</p>
<h2>Step 3. Keywords and topics</h2>
<p>Collect search queries and group them by funnel stage: awareness, consideration, purchase.</p>
<h2>Step 4. Formats and channels</h2>
<p>Articles, short videos, newsletters, case studies. One piece of content, several formats.</p>
<h2>Step 5. Editorial calendar</h2>
<p>Lock in topics 2–3 months ahead and assign an owner and a success metric to every piece.</p>`
      }
    },
    {
      id: "ab-testing",
      title: {
        ru: "A/B-тесты рекламных креативов: 7 правил, чтобы не обмануть себя",
        en: "A/B testing ad creatives: 7 rules so you don't fool yourself"
      },
      category: { ru: "Реклама", en: "Ads" },
      date: "2026-08-14",
      readTime: 5,
      excerpt: {
        ru: "Почему большинство тестов не дают достоверного результата и как проводить их правильно.",
        en: "Why most tests produce unreliable results, and how to run them properly."
      },
      body: {
        ru: `
<p>A/B-тест кажется простым: запустили два варианта, выбрали лучший. На практике большинство тестов проводят с ошибками.</p>
<h2>Правила</h2>
<ul>
<li>Тестируйте одну гипотезу за раз.</li>
<li>Заранее определите метрику победы: клики, заявки или продажи.</li>
<li>Рассчитайте нужный объём выборки до старта.</li>
<li>Не останавливайте тест раньше срока, даже если «уже всё ясно».</li>
<li>Запускайте варианты одновременно, а не по очереди.</li>
<li>Учитывайте сезонность и дни недели.</li>
<li>Фиксируйте результаты в общей базе гипотез.</li>
</ul>
<p>Следуя этим правилам, вы получите результаты, на которые действительно можно опираться при масштабировании бюджета.</p>`,
        en: `
<p>An A/B test looks simple: run two variants, pick the winner. In practice most tests are run with mistakes.</p>
<h2>The rules</h2>
<ul>
<li>Test one hypothesis at a time.</li>
<li>Define the winning metric in advance: clicks, leads or sales.</li>
<li>Calculate the required sample size before you start.</li>
<li>Don't stop the test early, even if "it's already obvious".</li>
<li>Run the variants simultaneously, not one after another.</li>
<li>Account for seasonality and days of the week.</li>
<li>Record the results in a shared hypothesis log.</li>
</ul>
<p>Follow these rules and you will get results you can actually rely on when it is time to scale the budget.</p>`
      }
    },
    {
      id: "local-seo",
      title: {
        ru: "Локальное SEO для офлайн-бизнеса: карты, отзывы и запросы «рядом со мной»",
        en: "Local SEO for brick-and-mortar businesses: maps, reviews and \"near me\" searches"
      },
      category: { ru: "SEO", en: "SEO" },
      date: "2026-07-30",
      readTime: 6,
      excerpt: {
        ru: "Как клиника, кафе или салон могут получать клиентов из карт и поиска без большого бюджета.",
        en: "How a clinic, café or salon can win customers from maps and search without a big budget."
      },
      body: {
        ru: `
<p>Для офлайн-бизнеса запросы вида «стоматология рядом» — самый горячий трафик. Разбираем, как его получить.</p>
<h2>Карточки на картах</h2>
<p>Заполните все поля: часы работы, фото, услуги, цены. Карточки с полным профилем показываются выше и получают больше звонков.</p>
<h2>Отзывы</h2>
<p>Просите отзывы у довольных клиентов сразу после визита. Отвечайте на все отзывы, включая негативные.</p>
<h2>Локальные страницы на сайте</h2>
<p>Для каждого филиала — отдельная страница с адресом, картой, схемой проезда и перечнем услуг.</p>`,
        en: `
<p>For an offline business, searches like "dentist near me" are the hottest traffic there is. Here is how to get it.</p>
<h2>Map listings</h2>
<p>Fill in every field: opening hours, photos, services, prices. Listings with a complete profile rank higher and get more calls.</p>
<h2>Reviews</h2>
<p>Ask happy customers for a review right after their visit. Reply to every review, including negative ones.</p>
<h2>Local pages on your website</h2>
<p>A separate page for each branch with the address, a map, directions and the list of services.</p>`
      }
    },
    {
      id: "email-automation",
      title: {
        ru: "Email-автоматизация: 4 цепочки, которые должны быть у каждого бизнеса",
        en: "Email automation: 4 flows every business should have"
      },
      category: { ru: "CRM", en: "CRM" },
      date: "2026-07-12",
      readTime: 5,
      excerpt: {
        ru: "Приветственная серия, брошенная корзина, реактивация и допродажи — сценарии, которые работают сами.",
        en: "Welcome series, abandoned cart, win-back and upsell: sequences that run on their own."
      },
      body: {
        ru: `
<p>Email остаётся одним из самых рентабельных каналов. Автоматические цепочки работают круглосуточно и почти бесплатно.</p>
<h2>1. Приветственная серия</h2>
<p>3–5 писем после подписки: знакомство, польза, социальные доказательства, предложение.</p>
<h2>2. Брошенная корзина</h2>
<p>Напоминание через час, через сутки и через три дня. Возвращает до 15% ушедших покупателей.</p>
<h2>3. Реактивация</h2>
<p>Если клиент не открывал письма 90 дней — спросите, что изменилось, и предложите бонус.</p>
<h2>4. Допродажи</h2>
<p>Через неделю после покупки предложите сопутствующие товары или расширенный тариф.</p>`,
        en: `
<p>Email remains one of the most profitable channels. Automated flows work around the clock and almost for free.</p>
<h2>1. Welcome series</h2>
<p>3–5 emails after sign-up: introduction, value, social proof, offer.</p>
<h2>2. Abandoned cart</h2>
<p>A reminder after one hour, one day and three days. Brings back up to 15% of lost shoppers.</p>
<h2>3. Win-back</h2>
<p>If a customer hasn't opened your emails in 90 days, ask what changed and offer an incentive to come back.</p>
<h2>4. Upsell</h2>
<p>A week after the purchase, suggest related products or an upgraded plan.</p>`
      }
    }
  ]
};

export const languages = {
  ru: "Русский",
  en: "English",
} as const

export const defaultLang = "ru"

export type Lang = keyof typeof languages

export const ui = {
  ru: {
    meta: {
      title: "QADAM",
    },
    nav: {
      home: "Главная",
      about: "О нас",
      blog: "Блог",
      login: "Войти",
      language: "Язык",
      selectLanguage: "Выбрать язык",
    },
    landing: {
      hero: {
        title: "ИИ-агент для юридических проектов.",
        subtitle: "Ваше главное технологическое преимущество",
        cta: "Попробовать",
        imageAlt: "Интерфейс юридического ИИ-агента QADAM",
      },
      benefits: {
        title: "Преимущества QADAM",
        description:
          "Наш ИИ-агент - это не просто инструмент, а ваш надежный партнер в юридической практике. Он помогает юристам создавать более качественные документы, быстрее достигать результатов и снижать риски ошибок. С QADAM вы можете быть уверены, что ваши юридические проекты будут на высоте.",
        items: [
          {
            title: "Ускоряйте результат",
            description: "Переходите от черновика к готовому документу быстрее",
            imageSrc: "/content-paper-edit.svg",
            imageAlt: "Редактирование документа",
          },
          {
            title: "Повышайте качество",
            description: "Делайте документы понятнее, точнее и сильнее",
            imageSrc: "/focus-frame-target.svg",
            imageAlt: "Проверка качества документа",
          },
          {
            title: "Снижайте риски",
            description: "Находите ошибки до отправки документа",
            imageSrc: "/vinyl-record-gramophone.svg",
            imageAlt: "Выявление юридических рисков",
          },
        ],
      },
      features: {
        title: "Сделай шаг навстречу росту вместе с Qadam",
        items: [
          {
            title: "Генерация документов",
            description:
              "Создавайте черновики договоров, заявлений и юридических документов по заданным параметрам за несколько минут.",
            imageUrl: "/feature-chat.png",
            imageAlt: "Генерация юридического документа в QADAM",
          },
          {
            title: "Проверка качества документа",
            description:
              "Проверяйте документ на ошибки и повышайте качество юридических материалов.",
            imageUrl: "/feature-document-verification.png",
            imageAlt: "Проверка документа в QADAM",
          },
          {
            title: "Ваш стиль в каждом тексте",
            description:
              "Добавляйте свои документы, чтобы ИИ-агент писал в вашем стиле.",
            imageUrl: "/feature-add-document.png",
            imageAlt: "Добавление документов в QADAM",
          },
        ],
      },
      contact: {
        title: "Запросить демо-доступ",
        description:
          "В профессии, где исход дела решают детали и время, наш ИИ обрабатывает гигабайты правовой информации за секунды. Исключите риск человеческой ошибки и получайте готовые аргументы быстрее.",
      },
    },
    about: {
      title: "Наше видение",
      founderName: "Yerentalov Yerdos",
      founderRole: "Founder QADAM",
      founderAlt: "Основатель QADAM",
      officeAlt: "Современный офис QADAM",
      columns: [
        [
          "Юристы приносят в работу суждение, стратегию и ответственность. ИИ добавляет скорость, масштаб и точность. Вместе они открывают новый способ делать юридическую работу понятнее, быстрее и сильнее.",
          "Наше видение - дать каждой юридической команде инструменты, которые возвращают фокус на главное: консультации, решения, переговоры и движение проекта вперед.",
        ],
        [
          "Мы строим больше, чем продукт. Вместе с юристами и командами бизнеса мы формируем рабочую среду, где технология усиливает экспертизу, а не заменяет ее. Будущее, в котором у каждого юриста больше времени на работу, где его опыт действительно важен.",
        ],
      ],
    },
    blog: {
      title: "Блог QADAM",
      openPost: "Открыть статью",
      backToBlog: "Блог",
      authorSeparator: ", ",
    },
    footer: {
      contacts: "Контакты",
      navigation: "Навигация",
      home: "Главная",
      about: "О нас",
      blog: "Блог",
      city: "Алматы, Казахстан",
      copyright: "Все права защищены.",
    },
    contactForm: {
      labels: {
        lastname: "Фамилия",
        firstname: "Имя",
        email: "Почта",
        company: "Компания",
        city: "Город",
        organizationType: "Тип организации",
        source: "Откуда вы о нас узнали?",
      },
      placeholders: {
        lastname: "Иванов",
        firstname: "Иван",
        email: "ivan@example.com",
        company: "ТОО Qadam",
        city: "Алматы",
        organizationType: "Юридическая компания",
        source: "По рекомендации",
      },
      validation: {
        firstnameMin: "Имя должно содержать не менее 2 символов.",
        firstnameMax: "Имя должно содержать не более 50 символов.",
        lastnameMin: "Фамилия должна содержать не менее 2 символов.",
        lastnameMax: "Фамилия должна содержать не более 50 символов.",
        email: "Неверный адрес электронной почты.",
        companyMin: "Название компании должно содержать не менее 2 символов.",
        companyMax: "Название компании должно содержать не более 100 символов.",
        cityMin: "Город должен содержать не менее 2 символов.",
        cityMax: "Город должен содержать не более 100 символов.",
        organizationType: "Пожалуйста, выберите тип организации.",
        source: "Пожалуйста, укажите, откуда вы о нас узнали.",
      },
      submit: "Попробовать демо",
      toastSuccess: "Форма была отправлена",
      errors: {
        network:
          "Не удалось подключиться к серверу. Проверьте интернет и попробуйте снова.",
        server: "Сервер временно недоступен. Попробуйте позже.",
        submit: "Не удалось отправить форму. Попробуйте еще раз.",
      },
    },
  },
  en: {
    meta: {
      title: "QADAM",
    },
    nav: {
      home: "Home",
      about: "About",
      blog: "Blog",
      login: "Sign in",
      language: "Language",
      selectLanguage: "Choose language",
    },
    landing: {
      hero: {
        title: "AI agent for legal projects.",
        subtitle: "Your core technology advantage",
        cta: "Try it",
        imageAlt: "QADAM legal AI agent interface",
      },
      benefits: {
        title: "Why legal teams use QADAM",
        description:
          "QADAM is more than a tool. It works as a reliable partner for legal practice, helping teams create stronger documents, move faster, and reduce the risk of mistakes.",
        items: [
          {
            title: "Move faster",
            description:
              "Go from first draft to ready document with less delay",
            imageSrc: "/content-paper-edit.svg",
            imageAlt: "Document editing",
          },
          {
            title: "Improve quality",
            description: "Make legal documents clearer, sharper, and stronger",
            imageSrc: "/focus-frame-target.svg",
            imageAlt: "Document quality review",
          },
          {
            title: "Reduce risk",
            description: "Find issues before a document is sent",
            imageSrc: "/vinyl-record-gramophone.svg",
            imageAlt: "Legal risk detection",
          },
        ],
      },
      features: {
        title: "Take the next step toward growth with QADAM",
        items: [
          {
            title: "Document generation",
            description:
              "Create drafts for contracts, applications, and legal documents from clear parameters in minutes.",
            imageUrl: "/feature-chat-en.png",
            imageAlt: "Generating a legal document in QADAM",
          },
          {
            title: "Document quality review",
            description:
              "Check documents for mistakes and improve the quality of legal materials.",
            imageUrl: "/feature-document-verification-en.png",
            imageAlt: "Reviewing a document in QADAM",
          },
          {
            title: "Your style in every text",
            description:
              "Add your own documents so the AI agent can write in your team's style.",
            imageUrl: "/feature-add-document-en.png",
            imageAlt: "Adding documents to QADAM",
          },
        ],
      },
      contact: {
        title: "Request demo access",
        description:
          "In a profession where details and timing shape outcomes, QADAM processes legal context in seconds. Reduce manual error risk and get stronger arguments faster.",
      },
    },
    about: {
      title: "Our vision",
      founderName: "Yerentalov Yerdos",
      founderRole: "Founder QADAM",
      founderAlt: "Founder of QADAM",
      officeAlt: "Modern QADAM office",
      columns: [
        [
          "Lawyers bring judgment, strategy, and responsibility to their work. AI adds speed, scale, and precision. Together, they open a better way to make legal work clearer, faster, and stronger.",
          "Our vision is to give every legal team tools that return focus to what matters most: advice, decisions, negotiations, and moving each project forward.",
        ],
        [
          "We are building more than a product. Together with lawyers and business teams, we are shaping a work environment where technology strengthens expertise instead of replacing it. A future where every lawyer has more time for meaningful work and where their experience truly matters.",
        ],
      ],
    },
    blog: {
      title: "QADAM Blog",
      openPost: "Open article",
      backToBlog: "Blog",
      authorSeparator: ", ",
    },
    footer: {
      contacts: "Contacts",
      navigation: "Navigation",
      home: "Home",
      about: "About",
      blog: "Blog",
      city: "Almaty, Kazakhstan",
      copyright: "All rights reserved.",
    },
    contactForm: {
      labels: {
        lastname: "Last name",
        firstname: "First name",
        email: "Email",
        company: "Company",
        city: "City",
        organizationType: "Organization type",
        source: "How did you hear about us?",
      },
      placeholders: {
        lastname: "Ivanov",
        firstname: "Ivan",
        email: "ivan@example.com",
        company: "Qadam LLP",
        city: "Almaty",
        organizationType: "Law firm",
        source: "Recommendation",
      },
      validation: {
        firstnameMin: "First name must be at least 2 characters.",
        firstnameMax: "First name must be no more than 50 characters.",
        lastnameMin: "Last name must be at least 2 characters.",
        lastnameMax: "Last name must be no more than 50 characters.",
        email: "Enter a valid email address.",
        companyMin: "Company name must be at least 2 characters.",
        companyMax: "Company name must be no more than 100 characters.",
        cityMin: "City must be at least 2 characters.",
        cityMax: "City must be no more than 100 characters.",
        organizationType: "Please enter an organization type.",
        source: "Please tell us how you heard about us.",
      },
      submit: "Try demo",
      toastSuccess: "The form has been submitted",
      errors: {
        network:
          "Could not connect to the server. Check your internet connection and try again.",
        server: "The server is temporarily unavailable. Please try later.",
        submit: "Could not submit the form. Please try again.",
      },
    },
  },
} as const

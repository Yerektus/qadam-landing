import type { ImageMetadata } from "astro"

import type { Lang } from "@/i18n/ui"
import blogAiImage from "@/assets/blog/blog-ai.png"
import blogAutomationImage from "@/assets/blog/blog-automation.png"
import blogContractsImage from "@/assets/blog/blog-contracts.png"
import blogDocumentImage from "@/assets/blog/blog-document.png"
import blogHeroImage from "@/assets/blog/blog-hero.png"
import blogIntegrationImage from "@/assets/blog/blog-integration.png"
import blogTeamImage from "@/assets/blog/blog-team.png"

export type BlogSection = {
  title: string
  paragraphs: string[]
  items?: string[]
}

export type BlogPost = {
  slug: string
  title: string
  date: string
  image: ImageMetadata
  author: string
  role: string
  lead: string
  sections: BlogSection[]
}

const ruBlogPosts: BlogPost[] = [
  {
    slug: "what-is-qadam",
    title: "Что такое QADAM и как получить максимум от юридического ИИ-агента",
    date: "09.05.2026",
    image: blogHeroImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "QADAM помогает юридическим командам быстрее готовить документы, находить ответы в материалах проекта и держать рабочий процесс под контролем.",
    sections: [
      {
        title: "QADAM работает с вашим контекстом",
        paragraphs: [
          "Юридический ИИ-агент полезен только тогда, когда понимает документы, переписку и цель задачи. Поэтому QADAM строится вокруг проекта: вы загружаете материалы, формулируете задачу и получаете результат, привязанный к конкретному контексту.",
          "Такой подход снижает риск общих ответов. Агент не просто пересказывает шаблон, а помогает собрать черновик, проверить формулировки и найти важные фрагменты в документах.",
        ],
      },
      {
        title: "С чего начать",
        paragraphs: [
          "Лучший первый сценарий — выбрать один повторяемый процесс: подготовку договора, анализ входящего документа или сбор позиции по проекту. Не нужно сразу переносить всю работу команды.",
          "Когда один процесс становится понятным, проще масштабировать QADAM на соседние задачи и выстроить единый порядок работы с документами.",
        ],
        items: [
          "Создайте проект под конкретную задачу.",
          "Загрузите документы, которые должен учитывать агент.",
          "Сформулируйте ожидаемый результат простым языком.",
          "Проверьте черновик и сохраните удачные инструкции для команды.",
        ],
      },
      {
        title: "Где появляется эффект",
        paragraphs: [
          "QADAM особенно заметен там, где юристы тратят много времени на сбор исходных данных, повторение похожих формулировок и поиск нужных условий в документах.",
          "Агент не заменяет юридическое решение, но ускоряет подготовительную работу и помогает команде быстрее перейти к проверке смысла, рисков и финальной позиции.",
        ],
      },
      {
        title: "Что подготовить до первой задачи",
        paragraphs: [
          "Перед началом полезно собрать не только сам документ, но и рабочие вводные: цель клиента, позицию вашей стороны, ограничения по срокам, применимое право и внутренние требования к стилю.",
          "Чем лучше описан контекст, тем меньше времени уходит на уточнения. QADAM может работать с неполными данными, но сильный результат обычно появляется тогда, когда команда заранее отделяет факты от предположений.",
        ],
        items: [
          "Укажите тип документа и ожидаемый формат ответа.",
          "Добавьте материалы, на которые агент должен ссылаться.",
          "Опишите, что считать критичным риском.",
          "Отметьте ограничения: юрисдикция, сторона, сроки, стиль.",
        ],
      },
      {
        title: "Как встроить QADAM в ежедневную работу",
        paragraphs: [
          "Лучший способ внедрения — не отдельная демонстрация возможностей, а регулярное использование в реальном процессе. Например, команда может договориться, что каждый новый проект начинается с загрузки ключевых материалов и короткого запроса на резюме.",
          "После этого агент становится частью рабочей привычки: помогает быстро понять состав документов, выделить вопросы и подготовить первую версию текста. Юрист сохраняет контроль, но тратит меньше времени на механическую подготовку.",
        ],
      },
    ],
  },
  {
    slug: "first-week-with-qadam",
    title:
      "Как начать пользоваться QADAM без перегруза: сценарий первой недели",
    date: "09.05.2026",
    image: blogContractsImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Первую неделю лучше посвятить не всем возможностям сразу, а одному понятному рабочему сценарию, который команда сможет повторять.",
    sections: [
      {
        title: "День 1: выберите задачу",
        paragraphs: [
          "Начните с процесса, который часто повторяется и уже имеет понятный результат. Например: первичный анализ договора, подготовка ответа контрагенту или сбор краткого резюме по документам.",
          "Чем конкретнее задача, тем легче оценить качество ответа и объяснить команде, как использовать QADAM в работе.",
        ],
      },
      {
        title: "Дни 2-3: соберите материалы",
        paragraphs: [
          "Загрузите документы проекта и проверьте, какие вопросы по ним возникают чаще всего. Это даст агенту контекст и поможет сформировать полезные ответы.",
          "На этом этапе важно не количество файлов, а качество источников: договор, приложение, переписка, требования клиента или внутренний шаблон.",
        ],
      },
      {
        title: "Дни 4-7: закрепите процесс",
        paragraphs: [
          "Попросите команду использовать один и тот же сценарий несколько раз. Сравните результаты, уточните инструкции и зафиксируйте формулировки, которые дают лучший итог.",
          "После первой недели у команды должен появиться не просто инструмент, а понятный способ применять его без лишних переключений.",
        ],
      },
      {
        title: "Что важно отслеживать в первые дни",
        paragraphs: [
          "На старте не стоит оценивать только скорость ответа. Важно смотреть, насколько легко юристу проверить результат, где агенту не хватает контекста и какие формулировки запроса дают стабильное качество.",
          "Если команда фиксирует эти наблюдения, внедрение становится управляемым. Вместо случайных экспериментов появляется короткий набор правил, который можно передать новым участникам.",
        ],
        items: [
          "Какие документы чаще всего нужны агенту для ответа.",
          "Какие вопросы приходится уточнять повторно.",
          "Какие ответы можно использовать как черновик без большой переработки.",
          "Какие задачи пока лучше оставлять полностью вручную.",
        ],
      },
      {
        title: "Как перейти от пилота к привычке",
        paragraphs: [
          "В конце первой недели полезно выбрать один сценарий, который команда будет использовать постоянно. Это может быть анализ входящего договора, подготовка резюме по проекту или черновик письма контрагенту.",
          "Важно назначить ответственного за качество инструкций. Он собирает удачные запросы, удаляет лишние формулировки и помогает команде использовать QADAM одинаково, а не каждый раз начинать с чистого листа.",
        ],
      },
    ],
  },
  {
    slug: "how-to-brief-ai-agent",
    title: "Как ставить задачи ИИ-агенту и не терять контроль над результатом",
    date: "09.05.2026",
    image: blogAiImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Качество ответа ИИ-агента зависит от того, насколько ясно задана цель, ограничения и критерии проверки результата.",
    sections: [
      {
        title: "Опишите результат, а не только действие",
        paragraphs: [
          "Фраза «проверь договор» слишком широкая. Лучше указать, что именно нужно получить: список рисков, краткое резюме, правки в конкретных пунктах или вопросы для контрагента.",
          "Так агент понимает формат работы, а вы быстрее видите, можно ли использовать ответ в проекте.",
        ],
      },
      {
        title: "Добавляйте ограничения",
        paragraphs: [
          "Укажите юрисдикцию, позицию вашей стороны, тип документа и уровень детализации. Эти вводные помогают избежать лишних рассуждений и держать ответ в нужных рамках.",
          "Если задача связана с рисками, попросите отделить критичные замечания от второстепенных. Это делает результат удобнее для принятия решения.",
        ],
      },
      {
        title: "Проверяйте вывод",
        paragraphs: [
          "ИИ-агент ускоряет подготовку, но финальная юридическая оценка остается за специалистом. Используйте ответ как черновик, список гипотез или карту проверки.",
          "Хорошая практика — просить агента указывать, на какие документы и условия он опирается. Так проще проверить аргументацию.",
        ],
      },
      {
        title: "Используйте структуру запроса",
        paragraphs: [
          "Хороший запрос обычно состоит из четырех частей: контекст, задача, ограничения и формат результата. Такая структура помогает агенту понять не только что сделать, но и как именно представить ответ.",
          "Например, вместо общего запроса можно попросить подготовить таблицу рисков с уровнем критичности, ссылкой на пункт договора и предлагаемой правкой. Это сокращает время проверки и делает результат удобнее для команды.",
        ],
        items: [
          "Контекст: кто сторона, какой документ, какая цель.",
          "Задача: проверить, сократить, переписать, найти риски.",
          "Ограничения: юрисдикция, стиль, объем, позиция клиента.",
          "Формат: список, таблица, резюме, проект письма или правки.",
        ],
      },
      {
        title: "Когда запрос нужно уточнить",
        paragraphs: [
          "Если ответ получился слишком общим, проблема часто не в инструменте, а в ширине задачи. Разбейте ее на меньшие шаги: сначала попросите краткое резюме документа, затем список рисков, затем варианты правок.",
          "Такой пошаговый подход лучше подходит для юридической работы. Он сохраняет прозрачность рассуждений и позволяет остановиться на этапе, где нужна профессиональная оценка.",
        ],
      },
    ],
  },
  {
    slug: "legal-process-without-chaos",
    title: "Как собрать юридический процесс без хаоса в документах и переписке",
    date: "09.05.2026",
    image: blogTeamImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Когда документы, комментарии и решения живут в разных местах, юридическая команда теряет время на поиск и восстановление контекста.",
    sections: [
      {
        title: "Единый проект вместо разрозненных файлов",
        paragraphs: [
          "Для каждой рабочей задачи полезно создать отдельное пространство: договор, материалы, вопросы и результаты анализа должны быть связаны между собой.",
          "Так команда быстрее понимает, какие документы актуальны, какие решения уже приняты и что еще нужно проверить.",
        ],
      },
      {
        title: "Фиксируйте логику работы",
        paragraphs: [
          "Важно сохранять не только финальный документ, но и причины правок, список рисков и вопросы, которые остались открытыми.",
          "QADAM помогает собрать эту логику рядом с материалами проекта, чтобы не восстанавливать ее заново перед каждым созвоном или согласованием.",
        ],
      },
      {
        title: "Снижайте ручные переключения",
        paragraphs: [
          "Чем меньше команда переключается между папками, письмами и заметками, тем быстрее идет работа. ИИ-агент полезен именно в связке с организованным контекстом.",
          "Порядок в процессе не требует сложной методологии: достаточно договориться, где лежат документы, как задаются вопросы и где хранится результат.",
        ],
      },
      {
        title: "Сделайте проект единым источником правды",
        paragraphs: [
          "Для юридической команды особенно важно понимать, какая версия документа актуальна и на каких материалах основан вывод. Если эти сведения разрознены, даже сильный анализ быстро теряет практическую ценность.",
          "В QADAM проект можно использовать как рабочую папку с контекстом: документы, вопросы, ответы и черновики остаются рядом. Это снижает риск того, что команда будет спорить не о правовой позиции, а о том, где лежит последняя версия файла.",
        ],
      },
      {
        title: "Как поддерживать порядок без лишней бюрократии",
        paragraphs: [
          "Достаточно ввести несколько простых правил: называть проекты по делу, добавлять только релевантные документы и фиксировать итоговые выводы после ключевых этапов.",
          "Такой порядок не замедляет работу. Наоборот, он помогает быстрее возвращаться к проекту через несколько дней и передавать контекст другому юристу без длинных объяснений.",
        ],
        items: [
          "Создавайте отдельный проект под каждую юридическую задачу.",
          "Удаляйте устаревшие или случайные файлы из рабочего контекста.",
          "Сохраняйте финальные выводы рядом с исходными документами.",
          "Используйте одинаковые названия для повторяемых типов работ.",
        ],
      },
    ],
  },
  {
    slug: "documents-to-automate-first",
    title: "Какие документы стоит автоматизировать в первую очередь",
    date: "09.05.2026",
    image: blogAutomationImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Автоматизацию стоит начинать с документов, которые часто повторяются, требуют много ручной проверки и имеют понятные критерии качества.",
    sections: [
      {
        title: "Повторяемые документы дают быстрый эффект",
        paragraphs: [
          "NDA, типовые договоры, приложения, письма и краткие правовые заключения обычно быстрее всего показывают пользу ИИ-агента.",
          "В таких задачах команда уже знает структуру результата, поэтому проще сравнить черновик с привычным стандартом.",
        ],
      },
      {
        title: "Выбирайте задачи с понятным риском",
        paragraphs: [
          "Если документ каждый раз требует уникальной стратегии, автоматизировать его первым не стоит. Лучше начать с проверки условий, поиска несоответствий и подготовки черновиков.",
          "Так команда получает экономию времени, но не передает агенту решения, где нужна глубокая профессиональная оценка.",
        ],
      },
      {
        title: "Соберите базовые шаблоны",
        paragraphs: [
          "После первых успешных сценариев стоит зафиксировать шаблоны инструкций: как анализировать договор, как готовить резюме и как формировать список вопросов.",
          "Эти шаблоны помогают всей команде получать стабильный результат, а не зависеть от того, кто именно формулирует запрос.",
        ],
      },
      {
        title: "Начните с документов с понятной структурой",
        paragraphs: [
          "Лучшие первые кандидаты для автоматизации — документы, где команда уже знает обязательные блоки и критерии проверки. Это позволяет быстро увидеть, где агент экономит время, а где еще нужна ручная работа.",
          "Если документ каждый раз сильно зависит от стратегии клиента, его лучше оставить на более поздний этап. Сначала стоит автоматизировать подготовку и проверку, а не саму финальную правовую позицию.",
        ],
        items: [
          "NDA и типовые соглашения.",
          "Письма и ответы контрагентам.",
          "Краткие резюме по документам проекта.",
          "Проверка реквизитов, сроков, условий оплаты и ответственности.",
        ],
      },
      {
        title: "Как не потерять контроль качества",
        paragraphs: [
          "Автоматизация не должна превращаться в автоматическую отправку результата. Для каждого типа документа полезно заранее определить, что проверяется человеком обязательно: правовая позиция, коммерческие условия, ссылки на документы и тон коммуникации.",
          "Так команда получает скорость без снижения стандарта. QADAM берет на себя подготовительную работу, а специалист остается владельцем юридического решения.",
        ],
      },
    ],
  },
  {
    slug: "ai-adoption-for-legal-team",
    title: "Как юридической команде внедрять ИИ без резких изменений",
    date: "09.05.2026",
    image: blogIntegrationImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Внедрение ИИ в юридической работе проходит спокойнее, когда команда начинает с вспомогательных задач и постепенно переносит успешные практики в общий процесс.",
    sections: [
      {
        title: "Не меняйте весь процесс сразу",
        paragraphs: [
          "Резкие изменения вызывают сопротивление, особенно когда речь идет о юридической ответственности и качестве документов.",
          "Лучше выбрать один участок работы, где ИИ помогает подготовить черновик, собрать информацию или ускорить проверку.",
        ],
      },
      {
        title: "Сделайте правила видимыми",
        paragraphs: [
          "Команде нужно понимать, какие задачи можно отдавать агенту, какие ответы требуют обязательной проверки и где нельзя полагаться на автоматический вывод.",
          "Прозрачные правила снижают тревогу и помогают использовать инструмент одинаково по всей команде.",
        ],
      },
      {
        title: "Измеряйте не только скорость",
        paragraphs: [
          "Скорость важна, но внедрение стоит оценивать также по качеству черновиков, удобству поиска информации и снижению повторной ручной работы.",
          "Если команда видит практическую пользу в ежедневных задачах, ИИ становится частью процесса без давления сверху.",
        ],
      },
      {
        title: "Работайте с доверием команды",
        paragraphs: [
          "Юристы осторожно относятся к новым инструментам, потому что несут ответственность за итоговый документ. Поэтому внедрение должно показывать не только возможности ИИ, но и границы его применения.",
          "Команде важно видеть, что агент не принимает решения вместо специалиста. Он помогает быстрее собрать материал, проверить текст и подготовить черновик, но финальный вывод остается профессиональной задачей юриста.",
        ],
      },
      {
        title: "Сформулируйте правила использования",
        paragraphs: [
          "Короткие правила снимают большую часть неопределенности. Они объясняют, какие данные можно загружать, какие ответы нужно проверять и как сохранять удачные инструкции для повторного использования.",
          "Такие правила не должны быть длинным регламентом. Достаточно одной страницы с практическими примерами и ограничениями, которую команда регулярно обновляет по мере накопления опыта.",
        ],
        items: [
          "Какие документы можно добавлять в проект.",
          "Какие типы задач подходят для агента.",
          "Какие ответы нельзя использовать без проверки.",
          "Где хранить удачные запросы и шаблоны.",
        ],
      },
    ],
  },
  {
    slug: "document-speed-and-project-outcomes",
    title: "Почему скорость подготовки документов влияет на весь проект",
    date: "09.05.2026",
    image: blogDocumentImage,
    author: "Команда QADAM",
    role: "продуктовая команда",
    lead: "Документы часто становятся узким местом проекта: пока команда ждет правки, согласование или анализ, остальные решения тоже замедляются.",
    sections: [
      {
        title: "Задержка в документе становится задержкой в проекте",
        paragraphs: [
          "Договор, приложение или правовая позиция редко существуют отдельно от бизнеса. Они влияют на сроки запуска, переговоры, оплату и операционные решения.",
          "Когда юридическая команда быстрее готовит качественный черновик, проект получает больше времени на обсуждение сути, а не на ожидание первой версии.",
        ],
      },
      {
        title: "Скорость не должна снижать качество",
        paragraphs: [
          "Ускорение полезно только тогда, когда сохраняется контроль. QADAM помогает быстрее пройти этап сбора информации и подготовки текста, но оставляет финальную проверку специалисту.",
          "Так команда выигрывает время без отказа от юридической аккуратности.",
        ],
      },
      {
        title: "Повторяемость важнее разового ускорения",
        paragraphs: [
          "Самый большой эффект появляется не от одного быстрого документа, а от стабильного процесса, который каждый раз сокращает ручную работу.",
          "Поэтому стоит фиксировать удачные инструкции, шаблоны и подходы к проверке, чтобы следующий проект начинался быстрее.",
        ],
      },
      {
        title: "Почему скорость влияет на переговоры",
        paragraphs: [
          "В переговорах качество аргумента важно, но время реакции часто не менее критично. Если команда быстро готовит комментарии, вопросы и альтернативные формулировки, она лучше управляет ритмом обсуждения.",
          "Задержка с документом может переносить встречи, оплату, запуск проекта или согласование бюджета. Поэтому ускорение юридической подготовки влияет не только на юристов, но и на всю операционную команду.",
        ],
      },
      {
        title: "Как ускоряться без хаоса",
        paragraphs: [
          "Скорость должна опираться на понятный порядок: единый проект, актуальные документы, сохраненные инструкции и обязательная финальная проверка. Без этого команда просто быстрее производит больше несогласованных черновиков.",
          "QADAM помогает удерживать этот порядок, потому что работа строится вокруг контекста проекта. Команда видит, какие материалы использовались, какие вопросы задавались и как развивался результат.",
        ],
        items: [
          "Сначала соберите материалы, затем запускайте подготовку текста.",
          "Отделяйте быстрый черновик от финального документа.",
          "Фиксируйте удачные инструкции после каждого проекта.",
          "Проверяйте, что ускорение не создало новых рисков.",
        ],
      },
    ],
  },
]

const enBlogPosts: BlogPost[] = [
  {
    slug: "what-is-qadam",
    title: "What QADAM is and how to get more from a legal AI agent",
    date: "09.05.2026",
    image: blogHeroImage,
    author: "QADAM Team",
    role: "product team",
    lead: "QADAM helps legal teams prepare documents faster, find answers in project materials, and keep legal workflows under control.",
    sections: [
      {
        title: "QADAM works with your context",
        paragraphs: [
          "A legal AI agent is useful only when it understands the documents, correspondence, and goal behind the task. QADAM is built around the project: you upload materials, define the task, and receive output tied to the specific context.",
          "This approach reduces generic answers. The agent does not simply repeat a template. It helps assemble drafts, review wording, and find important fragments in documents.",
        ],
      },
      {
        title: "Where to start",
        paragraphs: [
          "The best first scenario is one repeatable process: preparing a contract, analyzing an incoming document, or building a position on a project. You do not need to move the entire team workflow at once.",
          "Once one process is clear, it becomes easier to expand QADAM to adjacent tasks and create a consistent way to work with documents.",
        ],
        items: [
          "Create a project for a specific task.",
          "Upload the documents the agent should consider.",
          "Describe the expected result in plain language.",
          "Review the draft and save useful instructions for the team.",
        ],
      },
      {
        title: "Where the value appears",
        paragraphs: [
          "QADAM is especially useful where lawyers spend time collecting source data, repeating similar wording, and searching for relevant provisions in documents.",
          "The agent does not replace legal judgment. It speeds up preparation and helps the team move faster to reviewing substance, risks, and the final position.",
        ],
      },
      {
        title: "What to prepare before the first task",
        paragraphs: [
          "Before starting, it helps to gather not only the document itself, but also the working inputs: the client's goal, your party's position, time limits, applicable law, and internal style requirements.",
          "The clearer the context, the less time is spent on follow-up questions. QADAM can work with incomplete data, but stronger output usually appears when the team separates facts from assumptions in advance.",
        ],
        items: [
          "State the document type and expected response format.",
          "Add the materials the agent should rely on.",
          "Define what should count as a critical risk.",
          "Mark constraints: jurisdiction, party, timing, and style.",
        ],
      },
      {
        title: "How to fit QADAM into daily work",
        paragraphs: [
          "The best adoption path is not a standalone feature demo, but regular use in a real process. For example, the team can agree that every new project starts by uploading key materials and asking for a short summary.",
          "After that, the agent becomes part of the working habit: it helps understand the document set, identify questions, and prepare the first version of a text. The lawyer keeps control, but spends less time on mechanical preparation.",
        ],
      },
    ],
  },
  {
    slug: "first-week-with-qadam",
    title: "How to start using QADAM without overload: a first-week plan",
    date: "09.05.2026",
    image: blogContractsImage,
    author: "QADAM Team",
    role: "product team",
    lead: "The first week is better spent on one clear workflow that the team can repeat, not on every possible feature at once.",
    sections: [
      {
        title: "Day 1: choose the task",
        paragraphs: [
          "Start with a process that repeats often and already has a clear result. For example: initial contract analysis, preparing a response to a counterparty, or summarizing documents.",
          "The more specific the task, the easier it is to assess the answer and explain to the team how QADAM should be used.",
        ],
      },
      {
        title: "Days 2-3: gather materials",
        paragraphs: [
          "Upload the project documents and check which questions come up most often. This gives the agent context and helps it produce useful answers.",
          "At this stage, quality matters more than file count: the contract, appendix, correspondence, client requirements, or internal template.",
        ],
      },
      {
        title: "Days 4-7: make the process repeatable",
        paragraphs: [
          "Ask the team to use the same scenario several times. Compare results, refine instructions, and save the wording that produces the strongest output.",
          "After the first week, the team should have more than a tool. It should have a clear way to use it without extra switching.",
        ],
      },
      {
        title: "What to track in the first days",
        paragraphs: [
          "At the start, do not evaluate only response speed. Look at how easy the result is to verify, where the agent lacks context, and which prompts produce stable quality.",
          "When the team captures these observations, adoption becomes manageable. Instead of random experiments, you get a short rule set that can be shared with new team members.",
        ],
        items: [
          "Which documents the agent usually needs for useful answers.",
          "Which questions have to be clarified repeatedly.",
          "Which answers can be used as drafts with little rework.",
          "Which tasks should still stay fully manual for now.",
        ],
      },
      {
        title: "How to move from pilot to habit",
        paragraphs: [
          "At the end of the first week, choose one scenario the team will use consistently. It can be incoming contract analysis, a project summary, or a draft letter to a counterparty.",
          "It is useful to make one person responsible for prompt quality. They collect successful prompts, remove unnecessary wording, and help the team use QADAM consistently instead of starting from scratch every time.",
        ],
      },
    ],
  },
  {
    slug: "how-to-brief-ai-agent",
    title: "How to brief an AI agent without losing control of the result",
    date: "09.05.2026",
    image: blogAiImage,
    author: "QADAM Team",
    role: "product team",
    lead: "The quality of an AI agent's answer depends on how clearly you define the goal, constraints, and review criteria.",
    sections: [
      {
        title: "Describe the result, not only the action",
        paragraphs: [
          "The phrase 'review the contract' is too broad. It is better to state what you need: a risk list, a short summary, edits to specific clauses, or questions for the counterparty.",
          "This gives the agent a working format and helps you see faster whether the output can be used in the project.",
        ],
      },
      {
        title: "Add constraints",
        paragraphs: [
          "Specify the jurisdiction, your party's position, document type, and level of detail. These inputs help avoid unnecessary reasoning and keep the answer within the right boundaries.",
          "If the task concerns risks, ask the agent to separate critical issues from secondary comments. This makes the result easier to use for decisions.",
        ],
      },
      {
        title: "Review the output",
        paragraphs: [
          "An AI agent speeds up preparation, but final legal assessment remains with the specialist. Use the answer as a draft, a list of hypotheses, or a review map.",
          "A good practice is to ask the agent to show which documents and provisions it relies on. That makes the reasoning easier to check.",
        ],
      },
      {
        title: "Use a prompt structure",
        paragraphs: [
          "A strong prompt usually has four parts: context, task, constraints, and output format. This helps the agent understand not only what to do, but also how to present the answer.",
          "For example, instead of a broad request, ask for a risk table with severity, a reference to the contract clause, and a proposed edit. This reduces review time and makes the result easier for the team to use.",
        ],
        items: [
          "Context: party, document, and goal.",
          "Task: review, shorten, rewrite, or find risks.",
          "Constraints: jurisdiction, style, length, and client position.",
          "Format: list, table, summary, draft letter, or edits.",
        ],
      },
      {
        title: "When the request needs refinement",
        paragraphs: [
          "If the answer is too generic, the issue is often the breadth of the task. Split it into smaller steps: first ask for a short document summary, then a risk list, then suggested edits.",
          "This step-by-step approach fits legal work better. It keeps the reasoning transparent and lets the lawyer stop at the stage where professional assessment is needed.",
        ],
      },
    ],
  },
  {
    slug: "legal-process-without-chaos",
    title: "How to organize a legal process without document chaos",
    date: "09.05.2026",
    image: blogTeamImage,
    author: "QADAM Team",
    role: "product team",
    lead: "When documents, comments, and decisions live in different places, legal teams lose time searching and rebuilding context.",
    sections: [
      {
        title: "One project instead of scattered files",
        paragraphs: [
          "Each work task benefits from a dedicated space where the contract, materials, questions, and analysis results are connected.",
          "This helps the team understand which documents are current, which decisions have already been made, and what still needs review.",
        ],
      },
      {
        title: "Capture the logic of the work",
        paragraphs: [
          "It is important to save not only the final document, but also the reasons for edits, the risk list, and the questions that remain open.",
          "QADAM helps keep this logic next to the project materials, so it does not need to be rebuilt before every call or approval.",
        ],
      },
      {
        title: "Reduce manual switching",
        paragraphs: [
          "The less a team switches between folders, emails, and notes, the faster the work moves. An AI agent is most useful when paired with organized context.",
          "Process order does not require a complex methodology. It is enough to agree where documents live, how questions are asked, and where results are stored.",
        ],
      },
      {
        title: "Make the project the source of truth",
        paragraphs: [
          "Legal teams need to know which document version is current and which materials support a conclusion. When that information is scattered, even strong analysis loses practical value quickly.",
          "In QADAM, a project can work as a context workspace: documents, questions, answers, and drafts stay together. This reduces the risk that the team spends time arguing about file versions instead of the legal position.",
        ],
      },
      {
        title: "How to keep order without extra bureaucracy",
        paragraphs: [
          "A few simple rules are enough: name projects clearly, add only relevant documents, and capture final conclusions after key stages.",
          "This order does not slow the work down. It helps the team return to a project days later and hand context to another lawyer without long explanations.",
        ],
        items: [
          "Create a separate project for each legal task.",
          "Remove outdated or accidental files from the working context.",
          "Save final conclusions next to the source documents.",
          "Use consistent names for repeatable types of work.",
        ],
      },
    ],
  },
  {
    slug: "documents-to-automate-first",
    title: "Which documents to automate first",
    date: "09.05.2026",
    image: blogAutomationImage,
    author: "QADAM Team",
    role: "product team",
    lead: "Automation should start with documents that repeat often, require a lot of manual checking, and have clear quality criteria.",
    sections: [
      {
        title: "Repeatable documents show value quickly",
        paragraphs: [
          "NDAs, standard contracts, appendices, letters, and short legal opinions usually show the benefit of an AI agent fastest.",
          "In these tasks, the team already knows the expected structure, so it is easier to compare the draft with the usual standard.",
        ],
      },
      {
        title: "Choose tasks with clear risk",
        paragraphs: [
          "If a document requires a unique strategy every time, it should not be automated first. Start with checking provisions, finding inconsistencies, and preparing drafts.",
          "This gives the team time savings without handing the agent decisions that require deep professional judgment.",
        ],
      },
      {
        title: "Build basic templates",
        paragraphs: [
          "After the first successful scenarios, save instruction templates: how to analyze a contract, prepare a summary, and form a list of questions.",
          "These templates help the whole team get stable results instead of depending on who writes the prompt.",
        ],
      },
      {
        title: "Start with documents that have clear structure",
        paragraphs: [
          "The best first candidates for automation are documents where the team already knows the required blocks and review criteria. This makes it easier to see where the agent saves time and where manual work is still needed.",
          "If a document depends heavily on unique client strategy every time, leave it for a later stage. First automate preparation and review, not the final legal position itself.",
        ],
        items: [
          "NDAs and standard agreements.",
          "Letters and responses to counterparties.",
          "Short summaries of project documents.",
          "Checks of details, deadlines, payment terms, and liability.",
        ],
      },
      {
        title: "How to keep quality control",
        paragraphs: [
          "Automation should not turn into automatic delivery of the result. For each document type, define what must always be reviewed by a person: legal position, commercial terms, document references, and communication tone.",
          "This gives the team speed without lowering its standard. QADAM handles preparatory work, while the specialist remains responsible for the legal decision.",
        ],
      },
    ],
  },
  {
    slug: "ai-adoption-for-legal-team",
    title: "How legal teams can adopt AI without sudden change",
    date: "09.05.2026",
    image: blogIntegrationImage,
    author: "QADAM Team",
    role: "product team",
    lead: "AI adoption in legal work is smoother when teams start with supporting tasks and gradually move successful practices into the shared process.",
    sections: [
      {
        title: "Do not change the whole process at once",
        paragraphs: [
          "Sudden change creates resistance, especially when legal responsibility and document quality are involved.",
          "It is better to choose one area where AI helps prepare a draft, gather information, or speed up review.",
        ],
      },
      {
        title: "Make the rules visible",
        paragraphs: [
          "The team needs to understand which tasks can go to the agent, which answers require mandatory review, and where automatic output should not be relied on.",
          "Clear rules reduce uncertainty and help the tool be used consistently across the team.",
        ],
      },
      {
        title: "Measure more than speed",
        paragraphs: [
          "Speed matters, but adoption should also be measured by draft quality, ease of finding information, and reduction of repeated manual work.",
          "When the team sees practical value in daily tasks, AI becomes part of the process without pressure from above.",
        ],
      },
      {
        title: "Build trust with the team",
        paragraphs: [
          "Lawyers are careful with new tools because they remain responsible for the final document. Adoption should show not only what AI can do, but also where its boundaries are.",
          "The team needs to see that the agent does not make decisions instead of the specialist. It helps gather material, review text, and prepare drafts faster, while the final conclusion remains professional legal work.",
        ],
      },
      {
        title: "Write simple usage rules",
        paragraphs: [
          "Short rules remove much of the uncertainty. They explain which data can be uploaded, which answers must be reviewed, and how useful prompts should be saved for reuse.",
          "These rules do not need to become a long policy. One page with practical examples and limits is enough, and the team can update it as experience grows.",
        ],
        items: [
          "Which documents can be added to a project.",
          "Which task types are suitable for the agent.",
          "Which answers cannot be used without review.",
          "Where to store successful prompts and templates.",
        ],
      },
    ],
  },
  {
    slug: "document-speed-and-project-outcomes",
    title: "Why document speed affects the whole project",
    date: "09.05.2026",
    image: blogDocumentImage,
    author: "QADAM Team",
    role: "product team",
    lead: "Documents often become the bottleneck of a project. While the team waits for edits, approval, or analysis, other decisions slow down too.",
    sections: [
      {
        title: "Document delay becomes project delay",
        paragraphs: [
          "A contract, appendix, or legal position rarely exists separately from the business. It affects launch timelines, negotiations, payment, and operational decisions.",
          "When a legal team prepares a strong draft faster, the project gets more time to discuss substance instead of waiting for the first version.",
        ],
      },
      {
        title: "Speed should not lower quality",
        paragraphs: [
          "Acceleration is useful only when control remains. QADAM helps move faster through information gathering and text preparation, while final review stays with the specialist.",
          "This gives the team time savings without giving up legal accuracy.",
        ],
      },
      {
        title: "Repeatability matters more than a single speed gain",
        paragraphs: [
          "The largest effect does not come from one fast document, but from a stable process that reduces manual work every time.",
          "That is why successful instructions, templates, and review approaches should be saved so the next project starts faster.",
        ],
      },
      {
        title: "Why speed affects negotiations",
        paragraphs: [
          "In negotiations, the quality of an argument matters, but response time is often just as important. When a team quickly prepares comments, questions, and alternative wording, it can better control the pace of discussion.",
          "A document delay can move meetings, payment, launch dates, or budget approvals. That is why faster legal preparation affects not only lawyers, but the whole operating team.",
        ],
      },
      {
        title: "How to move faster without chaos",
        paragraphs: [
          "Speed needs a clear working order: one project, current documents, saved instructions, and mandatory final review. Without that, the team simply produces more inconsistent drafts faster.",
          "QADAM helps maintain this order because the work is built around project context. The team can see which materials were used, what questions were asked, and how the result developed.",
        ],
        items: [
          "Gather materials before generating text.",
          "Separate a fast draft from the final document.",
          "Save useful instructions after each project.",
          "Check that acceleration has not created new risks.",
        ],
      },
    ],
  },
]

const blogPostsByLang: Record<Lang, BlogPost[]> = {
  ru: ruBlogPosts,
  en: enBlogPosts,
}

export const blogPosts = ruBlogPosts

export function getBlogPosts(lang: Lang) {
  return blogPostsByLang[lang] ?? blogPostsByLang.ru
}

export function getBlogPost(lang: Lang, slug: string) {
  return getBlogPosts(lang).find((post) => post.slug === slug)
}

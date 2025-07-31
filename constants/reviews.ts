interface IReviews {
  id: number
  image: string
  nameEn: string
  nameRu: string
  jobTitleEn: string
  jobTitleRu: string
  company: string
  textEn: string
  textRu: string
  stars: number
  rate: string
}

export const reviews: IReviews[] = [
  {
    id: 0,
    image: '🛡️',
    nameEn: 'Antifraud System',
    nameRu: 'Antifraud System',
    jobTitleEn: 'CTO, FinTech Company',
    jobTitleRu: 'Технический директор, FinTech-компания',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '️🛡️ Antifraud System – Financial Services Client. <br/> The team delivered a fault-tolerant infrastructure for our fraud detection platform with surgical precision. From CI/CD to a multi-node PostgreSQL cluster, every component was meticulously implemented. Their ability to integrate observability tools like Grafana and Loki helped us catch and resolve issues before they reached production. We now sleep easier at night.',
    textRu:
      '🛡️ Antifraud System – Клиент из сферы финансовых технологий. <br/> Команда создала отказоустойчивую инфраструктуру для нашей antifraud-платформы с невероятной точностью. Каждый компонент — от CI/CD до кластеров PostgreSQL и MinIO — был внедрён с учётом всех нюансов производственной среды. Система мониторинга и логирования теперь позволяет выявлять инциденты ещё до их эскалации.',
  },
  {
    id: 1,
    image: '👁️',
    nameEn: 'Face-ID Platform – AI & Biometrics Provider',
    nameRu: 'Face-ID – Поставщик AI-решений',
    jobTitleEn: 'Head of ML, AI company',
    jobTitleRu: 'Руководитель направления ML, AI-компания',
    company: '',
    stars: 5,
    rate: '5',
    textEn:
      '👁️ Face-ID Platform – AI & Biometrics Provider. Working with this team was a game-changer. They not only deployed a high-availability Kubernetes environment in the cloud but also seamlessly integrated a third-party AI engine with GPU support. Their attention to detail and use of best practices in security and automation exceeded our expectations.',
    textRu:
      '👁️ Face-ID – Поставщик AI-решений. Проект был сложным: высоконагруженная облачная инфраструктура, кластерная БД, CI/CD, а также интеграция стороннего AI-модуля для распознавания лиц. Команда продемонстрировала глубокую экспертизу в DevOps и MLOps, реализовав всё в срок и с высоким качеством.',
  },
  {
    id: 2,
    image: '📚',
    nameEn: 'Education Project',
    nameRu: 'EDU-платформа',
    jobTitleEn: 'CTO, EdTech company',
    jobTitleRu: 'CTO, EdTech-компания',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '📚 Education Project – eLearning Company. We needed a reliable infrastructure for our virtual learning platform, and this team delivered just that. They configured Kubernetes in our virtual environment, automated all provisioning with Ansible, and ensured everything was highly available and secure. Our platform is now more stable than ever.',
    textRu:
      '📚 EDU-платформа – Клиент из сферы онлайн-обучения. Была необходима стабильная и отказоустойчивая платформа. Команда внедрила Kubernetes-кластер в виртуализированной среде, автоматизировала подготовку серверов и развернула мониторинг. Теперь наша платформа работает без сбоев, даже при высоких нагрузках.',
  },
  {
    id: 3,
    image: '🧠',
    nameEn: 'RIITM',
    nameRu: 'RIITM',
    jobTitleEn: 'Head of IT Department',
    jobTitleRu: 'Руководитель ИТ-направления',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '🧠 RIITM – Cybersecurity Firm. From Kafka to ClickHouse, they built a robust, on-premise platform that handles large-scale event streaming and analytics. The custom logging and monitoring stack they delivered gave us real-time visibility we never had before. Their expertise in hybrid on-prem/cloud architectures was obvious from day one.',
    textRu:
      '🧠 RIITM – Компания в сфере информационной безопасности. Решения, внедрённые командой, охватили всё: от отказоустойчивого Kubernetes до Kafka и ClickHouse. Архитектура логирования и мониторинга позволила нам добиться полной прозрачности процессов. Это один из лучших DevOps-подрядчиков, с кем мы работали.',
  },
  {
    id: 4,
    image: '💳',
    nameEn: 'Davrbank',
    nameRu: 'Davrbank',
    jobTitleEn: 'Lead DevOps Engineer',
    jobTitleRu: 'Главный DevOps-инженер',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '💳 Davrbank – Fintech Organization.  We had a complex infrastructure with strict compliance needs. The team deployed highly available Kubernetes and PostgreSQL clusters on-premises and added vulnerability scanning into our CI/CD pipeline. Their understanding of financial-grade security was impressive.',
    textRu:
      '💳 Davrbank – Финансовая организация. Перед командой стояла задача выстроить защищённую on-prem-инфраструктуру с учётом всех требований регулятора. Они внедрили HA-кластеры, систему CI/CD с анализом уязвимостей и обеспечили надёжную миграцию сервисов. Всё реализовано строго по плану.',
  },
  {
    id: 5,
    image: '🎬',
    nameEn: 'Episode',
    nameRu: 'Episode',
    jobTitleEn: 'Solution Architect, MediaTech Company',
    jobTitleRu: 'Архитектор решений, MediaTech-компания',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '🎬 Episode – Media Streaming Service. Their work on our cloud infrastructure and CI/CD pipelines helped us streamline releases and scale our media processing workflows. They were professional, agile, and deeply knowledgeable — everything you want in a DevOps partner.',
    textRu:
      '🎬 Episode – Сервис потокового видео. Благодаря этой команде мы кардинально улучшили процессы доставки обновлений. Они развернули инфраструктуру в облаке, организовали централизованный мониторинг и CI/CD. Сейчас мы можем масштабироваться без лишних рисков.',
  },
  {
    id: 6,
    image: '🏦',
    nameEn: 'Mobile Banking Migration',
    nameRu: 'Финтех-проекты',
    jobTitleEn: 'IT Director of the Bank',
    jobTitleRu: 'ИТ-директор банка',
    company: '',
    stars: 5,
    rate: '5.0',
    textEn:
      '🏦 Mobile Banking Migration – Banking Sector Client. Migrating our entire infrastructure was a critical operation, and they nailed it. They built everything from scratch: Kubernetes, PostgreSQL clusters, monitoring with remoteWrite Prometheus, even data migration from legacy systems. It was done without disruption, and the performance boost has been significant.',
    textRu:
      '🏦 Финтех-проекты – Мобильный банкинг. Полный переход на новую инфраструктуру с нуля — от настройки отказоустойчивых кластеров Kubernetes и PostgreSQL до миграции сервисов и данных. Всё было сделано на высшем уровне: без простоев, с полной автоматизацией и глубоким контролем ресурсов через Prometheus и Zabbix.',
  },
]

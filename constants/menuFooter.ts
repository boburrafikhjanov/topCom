interface IMenu {
  href: string
  label: string
  labelRu: string
}

interface IMenuFooter {
  title: string
  titleRu: string
  menu: IMenu[]
}

export const menuFooter: IMenuFooter[] = [
  {
    title: 'Services',
    titleRu: 'Услуги',
    menu: [
      {
        href: '#services',
        label: 'Classical Linux administration',
        labelRu: 'Классическое администрирование Linux',
      },
      {
        href: '#services',
        label: 'DevOps as a service',
        labelRu: 'DevOps как услуга',
      },
      {
        href: '#services',
        label: 'Standard Kubernetes Cluster',
        labelRu: 'Стандартный кластер Kubernetes',
      },
      {
        href: '#services',
        label: 'Penetration testing',
        labelRu: 'Тестирование на проникновение',
      },
    ],
  },
  {
    title: 'About',
    titleRu: 'О нас',
    menu: [
      {
        href: '#about',
        label: 'About TopCom',
        labelRu: 'О нас',
      },
      {
        href: '/',
        label: 'Privacy policy',
        labelRu: 'Политика конфиденциальности',
      },
      {
        href: '/',
        label: 'Terms of service',
        labelRu: 'Условия обслуживания',
      },
    ],
  },

  {
    title: 'Contacts',
    titleRu: 'Контакты',
    menu: [
      {
        href: '#',
        label:
          'Office 922, Blue Bay Tower, Business Bay, Dubai, United Arab Emirates',
        labelRu:
          'Офис 922, Blue Bay Tower, Business Bay, Dubai, Объединенные Арабские Эмираты',
      },
      {
        href: 'tel:+971 52 392 1010',
        label: '+971 52 392 1010',
        labelRu: '+971 52 392 1010',
      },
      {
        href: 'info@topcom.com',
        label: 'info@topcom.com',
        labelRu: 'info@topcom.com',
      },
    ],
  },
]

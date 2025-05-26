interface IMenu {
  href: string
  label: string
}

interface IMenuFooter {
  title: string
  menu: IMenu[]
}

export const menuFooter: IMenuFooter[] = [
  {
    title: 'Services',
    menu: [
      {
        href: '/',
        label: 'Classical Linux administration',
      },
      {
        href: '/',
        label: 'DevOps as a service',
      },
      {
        href: '/',
        label: 'Standard Kubernetes Cluster',
      },
      {
        href: '/',
        label: 'Penetration testing',
      },
    ],
  },
  {
    title: 'About',
    menu: [
      {
        href: '/',
        label: 'About TopCom',
      },
      {
        href: '/',
        label: 'Privacy policy',
      },
      {
        href: '/',
        label: 'Terms of service',
      },
    ],
  },

  {
    title: 'Contacts',
    menu: [
      {
        href: '',
        label:
          'Office 922, Blue Bay Tower, Business Bay, Dubai, United Arab Emirates',
      },
      {
        href: '+971 52 392 1010',
        label: '+971 52 392 1010',
      },
      {
        href: 'info@topcom.com',
        label: 'info@topcom.com',
      },
    ],
  },
]

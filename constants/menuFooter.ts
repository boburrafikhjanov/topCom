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
        href: '+998 77 077 077 3',
        label: '+998 77 077 077 3',
      },
      {
        href: 'info@topcom.com',
        label: 'info@topcom.com',
      },
    ],
  },
]

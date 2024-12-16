interface IServices {
  title: string
  description: string
  href: string
}

export const services: IServices[] = [
  {
    title: 'Classical Linux administration',
    description:
      'Our permanent team of engineers offers initial project setup and round-the-clock support.',
    href: '/',
  },
  {
    title: 'DevOps as a service',
    description:
      'Our services include infrastructure support, creating a developer-friendly environment, and implementing DevOps practices.',
    href: '/',
  },
  {
    title: 'Standard Kubernetes Cluster',
    description:
      'We provide a fully-managed, secure and scalable Kubernetes environment with automatic upgrades, seamless integration, and 24/7 support to meet your application needs.',
    href: '/',
  },
  {
    title: 'Penetration testing',
    description: 'Complex audit of security of your infrastructure',
    href: '/',
  },
]

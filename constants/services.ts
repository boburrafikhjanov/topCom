interface IServices {
  title: string
  description: string
  href: string
}

export const services: IServices[] = [
  {
    title: 'Cloud',
    description:
      'Cloud strategy, Cloud adoption, Cloud operations, Cloud Security, Cloud accelerators, Cloud migration',
    href: '/',
  },
  {
    title: 'Infrastructure Automation & Orchestration',
    description:
      'Infrastructure as code (IaC)\n' +
      '\tFaster resources provisioning and configuration\n' +
      '\tAutomating routine tasks\n' +
      '\tInfrastructure and environment consistency\n' +
      '\tGitOps\n' +
      '\tReduce IT overhead and management costs',
    href: '/',
  },
  {
    title: 'Continuous Integration & Continuous Delivery',
    description:
      'Set up and manage CI/CD pipelines to automate the build, test, and deployment processes.\n' +
      '\tFaster delivery of high-quality software releases with minimal manual intervention.\n' +
      '\tImprove the quality of deliverable services and applications',
    href: '/',
  },
  {
    title: 'Monitoring, Logging, Alerting',
    description:
      'Design logging and monitoring systems\n' +
      '\tAdopt organization-wide logging and monitoring policies\n' +
      '\tFull visibility into infrastructure components and applications\n' +
      '\tMonitoring, analysis, forecast, alerting, and incident management\n' +
      '\tPrevent services downtime',
    href: '/',
  },
  {
    title: 'Virtualization & Containerization',
    description:
      'Reduce workload\n' +
      '\tImprove hardware utilization\n' +
      '\tPortability and flexibility\n' +
      '\tImproved security and isolation\n' +
      '\tEnsure resource efficiency\n' +
      '\tDeploy applications faster and more securely',
    href: '/',
  },
  {
    title: 'Security & Audit',
    description:
      'Static application security testing\n' +
      '\tDynamic application security testing\n' +
      '\tInteractive application security testing\n' +
      '\tSoftware composition analysis\n' +
      '\tStatic code analysis\n' +
      '\tVulnerability scanning',
    href: '/',
  },
]

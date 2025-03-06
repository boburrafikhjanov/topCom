interface IServices {
  title: string
  description: string
  href: string
}

interface IServicesInfo {
  id: string
  title: string
  description: string
}

export const services: IServices[] = [
  {
    title: 'sectionServices.cloudTechnologies',
    description: 'sectionServices.cloudDesc',
    href: '/services/cloud',
  },
  {
    title: 'sectionServices.infrastructure',
    description: 'sectionServices.infrastructureDesc',
    href: '/services/infrastructure',
  },
  {
    title: 'sectionServices.ci/cd',
    description: 'sectionServices.ci/cdDesc',
    href: '/services/ci-cd',
  },
  {
    title: 'sectionServices.monitoring',
    description: 'sectionServices.monitoringDesc',
    href: '/services/monitoring',
  },
  {
    title: 'Virtualization & Containerization',
    description:
      'Reduce workload Improve hardware utilization Portability and flexibility Improved security and isolation Ensure resource efficiency Deploy applications faster and more securely',
    href: '/services/virtualization',
  },
  {
    title: 'Security & Audit',
    description:
      'Static application security testing Dynamic application security testing Interactive application security testing Software composition analysis Static code analysis Vulnerability scanning',
    href: '/services/security',
  },
]

export const servicesInfo: IServicesInfo[] = [
  {
    id: 'cloud',
    title: 'Cloud Services',
    description: `<ul>
      <li>
        1. Cloud Strategy
        Develop a tailored roadmap to align cloud adoption with your business goals.
        Evaluate existing infrastructure and recommend the best cloud solutions for scalability, cost-efficiency, and agility.
      </li>

      <li>
        2. Cloud Adoption
        Seamlessly transition to cloud environments, ensuring minimal disruption.
        Enable teams with the skills and tools to leverage cloud technologies effectively.
      </li>

      <li>
        3. Cloud Operations
        Manage day-to-day cloud infrastructure to ensure optimal performance and availability.
        Implement automation for routine tasks, reducing manual intervention.
      </li>

      <li>
        4. Cloud Security
        Protect your cloud environments with robust security measures, including identity management, encryption, and continuous monitoring.
        Ensure compliance with industry standards like GDPR, ISO 27001, and SOC 2.
      </li>

      <li>
        5. Cloud Accelerators
        Deploy pre-built solutions to accelerate time-to-market for cloud initiatives.
        Use proven frameworks and tools to simplify cloud adoption and operations.
      </li>

      <li>
        6. Cloud Migration
        Execute seamless migrations of workloads and applications to the cloud.
        Minimize downtime with careful planning and risk mitigation strategies.
      </li>
    </ul>`,
  },

  {
    id: 'infrastructure',
    title: 'Infrastructure Automation & Orchestration',
    description: `<ul>
      <li>
        1. Infrastructure as Code (IaC)
        Use tools like Terraform and Ansible to automate provisioning and manage infrastructure as code.
        Ensure consistency across development, staging, and production environments.
      </li>

      <li>
        2. Faster Resource Provisioning and Configuration
        Speed up resource deployment to match dynamic business needs.
        Reduce the time required to set up and configure new environments.
      </li>

      <li>
        3. Automating Routine Tasks
        Eliminate repetitive manual processes with automation tools.
        Enhance productivity and focus on strategic initiatives.
      </li>

      <li>
        4. Infrastructure and Environment Consistency
        Standardize configurations to avoid discrepancies and minimize errors.
        Simplify debugging and issue resolution with uniform environments.
      </li>

      <li>
        5. GitOps
        Manage infrastructure using version-controlled configurations stored in Git repositories.
        Enable seamless collaboration and rollbacks through Git-based workflows.
      </li>

      <li>
        6. Reduce IT Overhead and Management Costs
        Streamline operations to lower administrative burdens.
        Achieve significant cost savings through efficient resource utilization.
      </li>
    </ul>`,
  },

  {
    id: 'ci-cd',
    title: 'Continuous Integration & Continuous Delivery (CI/CD)',
    description: `<ul>
      <li>
        1. Setup and Management
        Design, implement, and manage CI/CD pipelines to automate build, test, and deployment processes.
      </li>

      <li>
        2. Faster Software Delivery
        Enable rapid, reliable releases with minimal manual intervention.
        Shorten time-to-market while maintaining high-quality standards.
      </li>

      <li>
        3. Improved Service and Application Quality
        Detect and fix issues early with automated testing and validation.
        Enhance customer satisfaction with dependable and feature-rich applications.
      </li>
    </ul>`,
  },

  {
    id: 'monitoring',
    title: 'Monitoring, Logging, and Alerting',
    description: `<ul>
      <li>
        1. Design Logging and Monitoring Systems
        Build robust systems to track application and infrastructure performance.
        Use tools like Prometheus, Grafana, and ELK Stack for efficient monitoring.
      </li>

      <li>
        2. Organization-Wide Policies
        Establish standardized policies for logging and monitoring across all teams.
        Ensure consistent practices to maintain system reliability.
      </li>

      <li>
        3. Full Visibility
        Gain deep insights into infrastructure components and applications.
        Identify and address issues proactively with real-time data.
      </li>
      
      <li>
        4. Comprehensive Alerting and Management
        Set up intelligent alerts and incident management workflows.
        Prevent service downtime with predictive analysis and forecasting.
      </li>
    </ul>`,
  },

  {
    id: 'virtualization',
    title: 'Virtualization & Containerization',
    description: `<ul>
      <li>
        1. Kubernetes Cluster Management
        Design, deploy, and manage Kubernetes clusters for efficient container orchestration.
        Ensure high availability, scalability, and optimized resource allocation for your workloads.
        Streamline operations with automated scaling, rolling updates, and self-healing capabilities.
      </li>

      <li>
        2. Dockerization
        Containerize applications using Docker for enhanced portability and efficiency.
        Simplify application deployment across different environments, from development to production.
        Optimize resource usage and improve isolation for secure and reliable application management.
      </li>

      <li>
        3. Reduce Workload
        Simplify application management by leveraging virtualization and containerization technologies.
        Eliminate repetitive tasks and focus on core business objectives.
      </li>
      
      <li>
        4. Improve Hardware Utilization
        Maximize the use of hardware resources by running multiple workloads on virtualized or containerized infrastructure.
      </li>
      
      <li>
        5. Portability and Flexibility
        Deploy applications across on-premise, cloud, or hybrid environments effortlessly.
        Enable seamless migration and scalability with container-based solutions.
      </li>
      
      <li>
        6. Improved Security and Isolation
        Enhance security with isolated environments for each application.
        Minimize risks of cross-application interference and vulnerabilities.
      </li>
      
      <li>
        7. Deploy Applications Faster and More Securely
        Accelerate deployment timelines using Docker and Kubernetes while maintaining high security and reliability.
      </li>
    </ul>`,
  },

  {
    id: 'security',
    title: 'Security & Audit',
    description: `<ul>
      <li>
        1. Static Application Security Testing (SAST)
        Identify vulnerabilities in source code during development.
        Integrate SAST tools into your CI/CD pipelines for continuous security checks.
      </li>

      <li>
        2. Dynamic Application Security Testing (DAST)
        Analyze running applications to detect vulnerabilities in real-time.
      </li>

      <li>
        3. Interactive Application Security Testing (IAST)
        Combine SAST and DAST approaches for comprehensive application security testing.
      </li>
      
      <li>
        4. Software Composition Analysis (SCA)
        Analyze open-source and third-party components for known vulnerabilities.
        Ensure compliance with licensing requirements and standards.
      </li>
      
      <li>
        5. Static Code Analysis
        Perform in-depth code reviews to detect issues and maintain coding standards.
      </li>
      
      <li>
        6. Vulnerability Scanning
        Regularly scan applications and infrastructure to uncover security risks.
        Provide actionable insights to mitigate threats effectively.
      </li>
    </ul>`,
  },
]

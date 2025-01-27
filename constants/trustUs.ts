interface ITrustUs {
  number: string
  text: string
}

interface ITrustInfo {
  title: string
  text: string
}

export const trustUs: ITrustUs[] = [
  {
    number: '5+',
    text: 'years of experience',
  },
  {
    number: '1 500+',
    text: 'tasks delivered',
  },
  {
    number: '70+',
    text: 'projects nailed',
  },
]

export const trustInfo: ITrustInfo[] = [
  {
    title: 'Expert Team',
    text: 'Our engineers bring a wealth of international experience and certifications in top DevOps tools and methodologies. They have successfully executed projects for businesses across industries, ensuring seamless infrastructure and process optimization.',
  },
  {
    title: 'Focus on Business Requirements',
    text: 'We understand that every business is unique. That’s why we tailor our solutions to meet your specific goals, whether it’s reducing costs, improving deployment speed, or enhancing system reliability. Your business success drives our approach.',
  },
  {
    title: 'Continuous Support',
    text: 'Our dedicated support team is available 24/7 to address any issues and ensure uninterrupted operations. From resolving incidents to proactive monitoring, we’re committed to keeping your systems running smoothly.',
  },
  {
    title: 'Transparent Processes',
    text: 'We believe in clear communication and accountability. You’ll receive regular updates, detailed progress reports, and direct access to our team. This ensures you remain informed and in control at every step of the project.',
  },
]

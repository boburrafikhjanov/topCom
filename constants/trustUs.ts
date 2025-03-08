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
    title: 'trustInfo.expertTeam',
    text: 'trustInfo.expertTeamDesc',
  },
  {
    title: 'trustInfo.focus',
    text: 'trustInfo.focusDesc',
  },
  {
    title: 'trustInfo.support',
    text: 'trustInfo.supportDesc',
  },
  {
    title: 'trustInfo.transparent',
    text: 'trustInfo.transparentDesc',
  },
]

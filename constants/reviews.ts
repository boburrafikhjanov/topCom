interface IReviews {
  id: number
  image: string
  name: string
  jobTitle: string
  company: string
  text: string
  stars: number
  rate: string
}

export const reviews: IReviews[] = [
  {
    id: 0,
    image: '/img/reviews/1.png',
    name: 'Abdullo Hidoyatov',
    jobTitle: 'CTO',
    company: 'Udevs',
    stars: 3,
    rate: '3.0',
    text: 'Working with TopCom on 24 projects demonstrated their high competence and responsiveness in DevOps. They effectively address errors and adhere to deadlines, making our collaboration productive. I recommend TopCom as a reliable partner in DevOps outsourcing.',
  },
  {
    id: 1,
    image: '/img/reviews/2.png',
    name: 'Rasulbek Mirzayev',
    jobTitle: 'CTO',
    company: 'UNICONSOFT',
    stars: 5,
    rate: '4.5',
    text: 'Working with TopCom on 24 projects demonstrated their high competence and responsiveness in DevOps. They effectively address errors and adhere to deadlines, making our collaboration productive. I recommend TopCom as a reliable partner in DevOps outsourcing.',
  },
  {
    id: 2,
    image: '/img/reviews/3.png',
    name: 'Andrew Hnatyuk',
    jobTitle: 'CTO',
    company: 'zip24',
    stars: 5,
    rate: '5.0',
    text: 'Working with TopCom on 24 projects demonstrated their high competence and responsiveness in DevOps. They effectively address errors and adhere to deadlines, making our collaboration productive. I recommend TopCom as a reliable partner in DevOps outsourcing.',
  },
]

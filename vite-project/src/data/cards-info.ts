import Congrats from '../assets/img/cards/congrats.webp';
import Activist from '../assets/img/cards/activist.webp';
import Finish from '../assets/img/cards/finish.webp';
import Deadline from '../assets/img/cards/deadline.webp';
import Expert from '../assets/img/cards/expert.webp';
import Git from '../assets/img/cards/git.webp';
import Slothzy from '../assets/img/cards/slothzy.webp';
import Aws from '../assets/img/cards/aws.webp';
import Helper from '../assets/img/cards/helper.webp';
import Github from '../assets/img/cards/github.webp';
import Feature from '../assets/img/cards/feature.webp';


type Card = {
  id: number
  name: string
  year: string
  picture: string
}

export const CARDS_INFO: Card[] = [
  {
    id: 0,
    name: 'Congrats',
    year: '2022',
    picture: Congrats
  },
  {
    id: 1,
    name: 'Activist',
    year: '2022',
    picture: Activist
  },
  {
    id: 2,
    name: 'Finished work',
    year: '2023',
    picture: Finish
  },
  {
    id: 3,
    name: 'Deadline',
    year: '2020',
    picture: Deadline
  },
  {
    id: 4,
    name: 'Expert',
    year: '2021',
    picture: Expert
  },
  {
    id: 5,
    name: 'Git problem',
    year: '2022',
    picture: Git
  },
  {
    id: 6,
    name: 'Slothzy',
    year: '2023',
    picture: Slothzy
  },
  {
    id: 7,
    name: 'Hugs with AWS',
    year: '2023',
    picture: Aws
  },
  {
    id: 8,
    name: 'Helper',
    year: '2023',
    picture: Helper
  },
  {
    id: 9,
    name: 'Github friends',
    year: '2020',
    picture: Github
  },
  {
    id: 10,
    name: 'Feature in disguise',
    year: '2021',
    picture: Feature
  }
]
import { FriendMatch, FriendMatchType } from './../../interfaces/index'

const data: FriendMatch[] = [
  {
    id: 1,
    type: FriendMatchType.SPEED,
    date: '2021.4.1 (목) 23:00',
    score: [0, 1],
    team: ['로즈샤론', '퍼플레인'],
    members: [],
  },
  {
    id: 2,
    type: FriendMatchType.SPEED,
    date: '2021.4.2 (금) 22:00',
    score: [0, 1],
    team: ['로즈샤론', 'Apink'],
    members: [],
  },
  {
    id: 3,
    type: FriendMatchType.ITEM,
    date: '2021.4.3 (일) 19:30',
    score: [0, 1],
    team: ['로즈샤론', 'Lotto'],
    members: [],
  },
  {
    id: 4,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:00',
    score: [7, 0],
    team: ['로즈샤론', '포커스'],
    members: ['CURATOR', 'MINDDU', 'TT', 'LIFE'],
  },
  {
    id: 5,
    type: FriendMatchType.SPEED,
    date: '2021.4.4 (일) 19:40',
    score: [7, 3],
    team: ['로즈샤론', '무자비'],
    members: ['IPHONE', 'BLANK', 'BORADOLI', 'RAMYEON'],
  },
  {
    id: 6,
    type: FriendMatchType.SPEED,
    date: '2021.4.7 (수) 23:00',
    score: [3, 7],
    team: ['로즈샤론', 'After'],
    members: [],
  },
  {
    id: 7,
    type: FriendMatchType.ITEM,
    date: '2021.4.15 (목) 21:00',
    score: [3, 7],
    team: ['로즈샤론', '유머일번지'],
    members: ['MINDDU', 'LEGEND', 'CURATOR', 'BAMBI'],
  },
  {
    id: 8,
    type: FriendMatchType.SPEED,
    date: '2021.4.23 (금) 20:00',
    score: [7, 3],
    team: ['로즈샤론', 'JET'],
    members: ['PROTEIN', 'INCORNER', 'LIFE', 'TT'],
  },
  {
    id: 9,
    type: FriendMatchType.SPEED,
    date: '2021.5.5 (수) 22:00',
    score: [1, 7],
    team: ['로즈샤론', 'AGAPE'],
    members: ['IPHONE', 'BORADOLI', 'BLANK', 'RAMYEON'],
  },
  {
    id: 10,
    type: FriendMatchType.SPEED,
    date: '2021.5.13 (목) 22:00',
    score: [1, 7],
    team: ['로즈샤론', '바람'],
    members: ['BORADOLI', 'RAMYEON', 'CASEIN', 'LIFE'],
  },
  {
    id: 11,
    type: FriendMatchType.SPEED,
    date: '2021.5.15 (토) 21:00',
    score: [3, 7],
    team: ['로즈샤론', '도모다찌'],
    members: ['BARAM', 'BLANK', 'INCORNER', 'LIFE'],
  },
  {
    id: 12,
    type: FriendMatchType.SPEED,
    date: '2021.5.15 (토) 22:00',
    score: [0, 7],
    team: ['로즈샤론', '여명'],
    members: ['INCORNER', 'BLANK', 'LIFE', 'MINDDU'],
  },
]

export default data

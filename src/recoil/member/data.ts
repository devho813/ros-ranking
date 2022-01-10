import { CompetitionType, EntitleType, Graduate, MemberInfo } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'HONEYMOON',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [Graduate.PUBLIC],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 2,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 2,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 2,
    name: 'SASAK',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 2,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 2
      },
    ],
    position: PositionType.SUBMASTER,
  },
  {
    id: 3,
    name: '바람',
    avatar: AvatarType.DIZNI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 2,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 4,
    name: 'RIGEL',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 2,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 5,
    name: 'JIZZANG',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.ITEM_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 6,
    name: 'RAMYEON',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.MASTER,
        season: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 3,
      },
      {
        title: CompetitionType.MASTER,
        season: 8,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 2,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 2
      },
      {
        title: CompetitionType.MASTER,
        season: 1,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 3,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 8,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 7,
    name: 'MINDDU',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.OFFICIAL_MATCH, EntitleType.NUMBER_ONE],
    graduates: [Graduate.MASTER],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
      },
      {
        title: CompetitionType.MASTER,
        season: 9,
      },],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 9,
        rank: 1,
      },
    ],
    position: PositionType.SUBMASTER,
  },
  {
    id: 8,
    name: '주난',
    avatar: AvatarType.MARID,
    entitles: [EntitleType.ITEM_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 9,
    name: 'LEGEND',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
    ],
    position: PositionType.MASTER,
  },
  {
    id: 10,
    name: 'DDANDOLI',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.ITEM_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 3,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 3,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 11,
    name: '우주',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 1,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 12,
    name: 'TT',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.NUMBER_ONE],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ELITE,
        season: 1,
      }
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 2,
      },
      {
        title: CompetitionType.ELITE,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 13,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 14,
    name: 'JISU',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 15,
    name: 'IPHONE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 16,
    name: 'HUNJANG',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 17,
    name: 'TAEYEON',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.NUMBER_ONE],
    graduates: [Graduate.ELITE],
    trophys: [
      {
        title: CompetitionType.ELITE,
        season: 4,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.ELITE,
        season: 4,
        rank: 1,
      },
      {
        title: CompetitionType.PUBLIC,
        season: 4,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 18,
    name: 'COMZZANG',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 19,
    name: '써니',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 20,
    name: 'CHAERIN',
    avatar: AvatarType.MARID,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 21,
    name: 'HANGI',
    avatar: AvatarType.MARID,
    entitles: [EntitleType.OFFICIAL_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 1
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 22,
    name: 'BAMBI',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.OFFICIAL_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 1,
      }
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 23,
    name: 'CLEAN',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 4,
        rank: 2
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: '쫑쫑',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [Graduate.PUBLIC],
    trophys: [
      {
        title: CompetitionType.PUBLIC,
        season: 5,
      },
    ],
    records: [
      {
        title: CompetitionType.PUBLIC,
        season: 5,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
    name: 'MOON',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'MIN',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'OOO',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: '카린이',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 29,
    name: 'JOKBAB',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
    name: 'JD',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 31,
    name: 'APPLE',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 32,
    name: 'LEVI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 33,
    name: 'KAI',
    avatar: AvatarType.DIZNI,
    entitles: [EntitleType.NUMBER_ONE],
    graduates: [Graduate.MASTER],
    trophys: [
      {
        title: CompetitionType.MASTER,
        season: 10,
      },
    ],
    records: [
      {
        title: CompetitionType.MASTER,
        season: 10,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 34,
    name: 'NABAL',
    avatar: AvatarType.ETHAN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 35,
    name: 'CHU',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: '마네',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 37,
    name: 'KNIFE',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: 'AURORA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: 'JAY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: 'HARU',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name: 'DANMUJI',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'SUNGJIN',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: 'SIGUR',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: '밍공',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: 'KAIN',
    avatar: AvatarType.DIZNI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 46,
    name: 'HOON',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 47,
    name: 'SPET',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 48,
    name: 'QUATTRO',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 49,
    name: 'DALVIT',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 50,
    name: '와인',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 51,
    name: 'ROA',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 52,
    name: '치즈',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  { 
    id: 53,
    name: 'SUZY',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 54,
    name: '영이',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 55,
    name: 'NOONNA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 56,
    name: 'HOPE',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 57,
    name: '리내',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 58,
    name: '송주',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 59,
    name: '설사똥',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 60,
    name: 'XION',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 61,
    name: 'HANI',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 62,
    name: 'BABI',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 63,
    name: 'JANI',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 64,
    name: 'SSOMACK',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 65,
    name: '순조',
    avatar: AvatarType.ETHAN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 66,
    name: 'NAJI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 67,
    name: 'SKY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 68,
    name: '봉봉',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 69,
    name: 'LISBON',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 70,
    name: 'S',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 71,
    name: '찌니',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 72,
    name: 'LUPY',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 73,
    name: '나비',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 74,
    name: 'CHAN',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data

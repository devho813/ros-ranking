import { CompetitionType, EntitleType, Graduate, MemberInfo } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'RYANG-A',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.ITEM_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 2,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 3,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 2,
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
    id: 3,
    name: 'PUPPY',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 4,
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
    id: 5,
    name: 'SIBSUNBI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
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
    id: 6,
    name: '바람',
    avatar: AvatarType.DIZNI,
    entitles: [],
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
    name: 'MINDDU',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.OFFICIAL_MATCH, EntitleType.NUMBER_TWO],
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
    id: 11,
    name: 'RUFA',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
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
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 12,
    name: 'BLACK',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 13,
    name: 'JOONAN',
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
    name: 'TT',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.NUMBER_TWO],
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
    id: 18,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 19,
    name: 'EOLPPAK',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 20,
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
    id: 21,
    name: 'IPHONE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 22,
    name: 'YABURI',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 23,
    name: 'HUNJANG',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: 'TAEYEON',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.NUMBER_TWO],
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
    id: 25,
    name: 'COMZZANG',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'DDAKGON',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'MOZZY',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: '써니',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 29,
    name: 'CHAERIN',
    avatar: AvatarType.MARID,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
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
    id: 31,
    name: 'WITTY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 32,
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
    id: 33,
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
    id: 34,
    name: 'JJONG',
    avatar: AvatarType.CHENCHEN,
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
    id: 35,
    name: 'MOON',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: 'MIN',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 37,
    name: 'OOO',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: '주노',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: '_',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: 'JOKBAB',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name: '덕구',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'JD',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: '타짜',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: '정쌤',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: 'CHOOJEOK',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 46,
    name: 'NEWBIE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 47,
    name: '철봉',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 48,
    name: 'MEINESES',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 49,
    name: 'UJA',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 50,
    name: 'APPLE',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 51,
    name: '라둥',
    avatar: AvatarType.DAO,
    entitles: [EntitleType.NUMBER_TWO],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 52,
    name: 'KAI',
    avatar: AvatarType.DIZNI,
    entitles: [EntitleType.NUMBER_TWO],
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
    id: 53,
    name: 'NABAL',
    avatar: AvatarType.ETHAN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 54,
    name: '츄르',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 55,
    name: 'PICASSO',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 56,
    name: 'JUSTIN',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 57,
    name: 'SIA',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 58,
    name: '마네다롱',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 59,
    name: '다롱마네',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 60,
    name: 'YARN',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 61,
    name: 'HORENG',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 62,
    name: 'YEOLMEG',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 63,
    name: 'LOTTE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 64,
    name: 'NIKE',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 65,
    name: '엉덩이',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 66,
    name: '이꼬',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 67,
    name: '지원',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 68,
    name: 'AURORA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 69,
    name: 'AJIN',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 70,
    name: 'KRO',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data

import { CompetitionType, EntitleType, Graduate, MemberInfo } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'RYANG-A',
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
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 2,
      },
    ],
    position: PositionType.MASTER,
  },
  {
    id: 2,
    name: 'HONEYMOON',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.PUBLIC],
    graduates: [Graduate.PUBLIC],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
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
        title: CompetitionType.PUBLIC,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
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
    name: 'BARAM',
    avatar: AvatarType.UNI,
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
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 7,
    name: 'RIGEL',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 8,
    name: 'BAMBOO',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 9,
    name: 'JIZZANG',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [
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
        title: CompetitionType.PUBLIC,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 10,
    name: 'RAMYEON',
    avatar: AvatarType.BAZZI,
    entitles: [],
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
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
        rank: 2,
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
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 11,
    name: 'MINDDU',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
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
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 12,
    name: 'LEMON',
    avatar: AvatarType.ETHAN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 13,
    name: 'TERA',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 14,
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
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 15,
    name: 'BLACK',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 16,
    name: 'ICEKING',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 17,
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
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 18,
    name: 'MINZHILY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 19,
    name: 'BORADOLI',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 4,
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
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 2,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 4,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 20,
    name: 'LEGEND',
    avatar: AvatarType.DAO,
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
    position: PositionType.ELITE,
  },
  {
    id: 21,
    name: 'DDANDOLI',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 22,
    name: 'SUNNY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 23,
    name: 'STYLE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: 'TT',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.ELITE],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ELITE,
        season: 1,
      },
    ],
    records: [
      {
        title: CompetitionType.ELITE,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
    name: 'RUMA',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'JOONGSA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'CURATOR',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: 'BLANK',
    avatar: AvatarType.DAO,
    entitles: [EntitleType.MASTER],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.MASTER,
        season: 5,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 5,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 29,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
    name: 'ZZANGA',
    avatar: AvatarType.BAZZI,
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
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 31,
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
    id: 32,
    name: 'JISU',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 33,
    name: 'IPHONE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 34,
    name: 'BAZZI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 35,
    name: 'NEOGUL',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: 'DAOBF',
    avatar: AvatarType.DAO,
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
    id: 37,
    name: 'BAPE',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: 'LIOKKU',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 1,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: 'ROSE',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: 'YABURI',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name: 'LISAKKU',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'JIBALY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: 'MUYAHO',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: 'ZUTOMAYO',
    avatar: AvatarType.ETHAN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: 'LIFE',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 46,
    name: 'BAMBI',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 47,
    name: 'INCORNER',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 48,
    name: 'NANA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 49,
    name: 'SAEKOM',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data

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
    entitles: [EntitleType.OFFICIAL_MATCH],
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
    entitles: [EntitleType.MASTER],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
      },
      {
        title: CompetitionType.MASTER,
        season: 9,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
        rank: 3,
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
    name: 'TERA',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 12,
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
    id: 13,
    name: 'BLACK',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
    name: 'DETAIL',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.OFFICIAL_MATCH],
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
    id: 18,
    name: 'TT',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ELITE,
        season: 1,
      },
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
    id: 19,
    name: 'RUMA',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 20,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 21,
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
    id: 22,
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
    id: 23,
    name: 'IPHONE',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: 'NEOGUL',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
    name: 'YABURI',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'HUNJANG',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'SSOMACK',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: 'TAEYEON',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.PUBLIC, EntitleType.ELITE],
    graduates: [],
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
    id: 29,
    name: 'COMZZANG',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
    name: 'DDAKGON',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 31,
    name: 'MOZZY',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 32,
    name: 'SUNNY',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 33,
    name: 'MUNGMUNG',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 34,
    name: 'MANGMANG',
    avatar: AvatarType.MARID,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 35,
    name: 'WITTY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: 'BAMBI',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 37,
    name: 'ENJOY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: 'CLEAN',
    avatar: AvatarType.UNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: 'JJONG',
    avatar: AvatarType.DIZNI,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: 'MOON',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name: 'MIN',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'YEOLMEG',
    avatar: AvatarType.RABBIT,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: 'OCO',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: 'ORI',
    avatar: AvatarType.DAO,
    entitles: [],
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data

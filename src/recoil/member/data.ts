import { CompetitionType, EntitleType, Graduate, MemberInfo, Tier } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'HONEYMOON',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    name: 'HAMNYA',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 1,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
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
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 1
      },
    ],
    position: PositionType.SUBMASTER,
  },
  {
    id: 3,
    name: '펑키',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_TWO,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
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
    tier: Tier.NUMBER_PUBLIC,
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
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 2
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 5,
    name: 'JIZZANG',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    name: '민뚜',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_PUBLIC,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 1,
      },
      {
        title: CompetitionType.MASTER,
        season: 9,
        rank: 1,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 8,
    name: '주난',
    avatar: AvatarType.MARID,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 2,
        rank: 2,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 2
      }
    ],
    position: PositionType.MASTER,
  },
  {
    id: 10,
    name: 'DDANDOLI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    tier: Tier.NUMBER_ONE,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 2,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 2,
        rank: 3,
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 12,
    name: 'TT',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.ITEM_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
      },
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
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 1,
      },
      {
        title: CompetitionType.ELITE,
        season: 1,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 13,
    name: 'ELLIS',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 14,
    name: 'HUNJANG',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 15,
    name: 'TAEYEON',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_ONE,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
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
    id: 16,
    name: 'COMZZANG',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 1
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 17,
    name: '써니쁘니',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 18,
    name: 'CHAERIN',
    avatar: AvatarType.MARID,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 19,
    name: 'BAMBI',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    id: 20,
    name: '쫑쫑',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
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
    id: 21,
    name: 'OOO',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 22,
    name: 'JD',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 23,
    name: 'LEVI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_TWO,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 24,
    name: 'NABAL',
    avatar: AvatarType.ETHAN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
    name: 'CHU',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 26,
    name: 'KNIFE',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 27,
    name: 'JAY',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
    name: 'HARU',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_ONE,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 29,
    name: 'DANMUJI',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 30,
    name: 'SUNGJIN',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 31,
    name: 'SIGUR',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 32,
    name: '밍공',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 33,
    name: 'KAIN',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_ONE,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 34,
    name: 'HOON',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 2
      }
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 35,
    name: 'SPET',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 36,
    name: 'QUATTRO',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 37,
    name: 'DALVIT',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 38,
    name: '와인',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 1
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: 'ROA',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_TWO,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: '치즈',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.ITEM_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 1
      },
    ],
    position: PositionType.MEMBER,
  },
  { 
    id: 41,
    name: 'SUZY',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: '영이',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 43,
    name: 'NOONNA',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.ITEM_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: 'HOPE',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: '리내',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 46,
    name: 'XION',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_TWO,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 47,
    name: 'SSOMACK',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 48,
    name: '순조',
    avatar: AvatarType.ETHAN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 49,
    name: 'SULDOG',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 50,
    name: 'S',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 2,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 51,
    name: '찌니쁘니',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 3,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 52,
    name: '홀릭',
    avatar: AvatarType.MARID,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 2
      }
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 53,
    name: 'CHAN',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 54,
    name: 'RITTY',
    avatar: AvatarType.RODUMANI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 55,
    name: 'HAIM',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 56,
    name: '짱돌',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  }, 
  {
    id: 57,
    name: '노을',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 58,
    name: '누나',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 59,
    name: 'SANGJA',
    avatar: AvatarType.UNI,
    entitles: [EntitleType.ITEM_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
      },
    ],
    records: [
      {
        title: CompetitionType.ITEM_MATCH,
        season: 4,
        rank: 1,
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 60,
    name: '가을',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 61,
    name: '백사',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 62,
    name: 'HOY',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 63,
    name: '여운',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 64,
    name: '빠따',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 65,
    name: 'YEONJIN',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 66,
    name: '퐁퐁',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 67,
    name: '항공',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 68,
    name: '뽀야',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 69,
    name: 'ZEPHY',
    avatar: AvatarType.ETHAN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 70,
    name: 'DDOK',
    avatar: AvatarType.ETHAN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 71,
    name: '후니데디',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
]

export default data

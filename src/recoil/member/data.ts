import { CompetitionType, EntitleType, Graduate, MemberInfo, Tier } from './../../interfaces/index'
import { AvatarType, PositionType } from '../../interfaces/index'

const data: MemberInfo[] = [
  {
    id: 1,
    name: 'SASAK',
    avatar: AvatarType.UNI,
    entitles: [],
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
    position: PositionType.MEMBER,
  },
  {
    id: 2,
    name: '바람',
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
    id: 3,
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
    id: 4,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 2
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
    id: 5,
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
    id: 6,
    name: '민뚜',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_TWO,
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
    position: PositionType.SUBMASTER,
  },
  {
    id: 7,
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
    id: 8,
    name: '레전드',
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
    id: 9,
    name: '딴또',
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
    id: 10,
    name: '우주',
    avatar: AvatarType.BAZZI,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_ONE,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 3,
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 1
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
    id: 11,
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
    id: 12,
    name: 'TAEYEON',
    avatar: AvatarType.CHENCHEN,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_ONE,
    graduates: [Graduate.ELITE],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
      },
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
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 1
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
    id: 13,
    name: '컴짱',
    avatar: AvatarType.RABBIT,
    entitles: [],
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
    id: 14,
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
    id: 15,
    name: 'LEVI',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
    name: '눈나시종',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_ONE,
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
    id: 22,
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
    id: 23,
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
    id: 24,
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
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 5,
        rank: 1
      },
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 1
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 25,
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
    id: 26,
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
    position: PositionType.ELITE,
  },
  { 
    id: 27,
    name: 'SUZY',
    avatar: AvatarType.RABBIT,
    entitles: [EntitleType.OFFICIAL_MATCH],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
      },
    ],
    records: [
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 1
      },
    ],
    position: PositionType.MEMBER,
  },
  {
    id: 28,
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
    id: 29,
    name: '눈나',
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
    id: 30,
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
    id: 31,
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
    id: 32,
    name: '찌니',
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
      {
        title: CompetitionType.OFFICIAL_MATCH,
        season: 6,
        rank: 2
      },
    ],
    position: PositionType.ELITE,
  },
  {
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
    name: '포돌S',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 39,
    name: '요시빠따',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 40,
    name: '후니데디',
    avatar: AvatarType.UNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 41,
    name:'QUEEN',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 42,
    name: 'KING',
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
    name: 'OU',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 44,
    name: '참새',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 45,
    name: '나린아토',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 46,
    name: 'YUNJAM',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 47,
    name: 'ORI',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 48,
    name: '똘이',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 49,
    name: '경봉',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 50,
    name: '써니',
    avatar: AvatarType.RABBIT,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 51,
    name: 'SULHWA',
    avatar: AvatarType.ETHAN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 52,
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
    id: 53,
    name: '햄니',
    avatar: AvatarType.MARID,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 54,
    name: 'MARIN',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 55,
    name: 'DALVIT',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 56,
    name: '리내',
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
    name: '루피',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.ELITE,
  },
  {
    id: 58,
    name: '그로',
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
    name: 'MARIN',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 60,
    name: '겨울',
    avatar: AvatarType.DIZNI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 61,
    name: '기니',
    avatar: AvatarType.CHENCHEN,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 62,
    name: '단무지',
    avatar: AvatarType.DAO,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  },
  {
    id: 63,
    name: '트루',
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
    name: '또꼬',
    avatar: AvatarType.BAZZI,
    entitles: [],
    tier: Tier.NUMBER_PUBLIC,
    graduates: [],
    trophys: [],
    records: [],
    position: PositionType.MEMBER,
  }
]

export default data

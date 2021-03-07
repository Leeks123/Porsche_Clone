export type menuDataProp = {
    title: string,
    imgSrc: string,
    subMenu?: menuDataProp[],
  };

export const modelMenu: menuDataProp[] = [
  {
    title: '718',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/718@2x.jpg',
    subMenu: [
      {
        title: '718 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/718-cayman@2x.jpg',
      },
    ],
  },
  {
    title: '911',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/911@2x.jpg',
    subMenu: [
      {
        title: '911 Carrerra & Targa 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/911-carrera@2x.jpg',
      },
      {
        title: '911 Turbo S 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/911-turbo-s@2x.jpg',
      },
    ],
  },
  {
    title: 'Taycan',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/taycan@2x.jpg',
    subMenu: [
      {
        title: 'Taycan 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/taycan@2x.jpg',
      },
    ],
  },
  {
    title: 'Panamera',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/panamera@2x.jpg',
    subMenu: [
      {
        title: 'Panamera 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/panamera@2x.jpg',
      },
    ],
  },
  {
    title: 'Macan',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/macan@2x.jpg',
    subMenu: [
      {
        title: 'Macan 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/macan@2x.jpg',
      },
    ],
  },
  {
    title: 'Cayenne',
    imgSrc: 'https://nav.porsche.com/00BC524/series-assets/1366/cayenne@2x.jpg',
    subMenu: [
      {
        title: 'Cayenne 모델',
        imgSrc: 'https://nav.porsche.com/00BC524/model-assets/1366/cayenne@2x.jpg',
      },
    ],
  },
];

export type textMenuProp = {
    title: string,
    data: string[],
};

export const shopMenu: textMenuProp[] = [
  {
    title: '부품 및 액세서리',
    data: [
      '라이프스타일 - 패션 & 액세서리', '포르쉐 클래식 - 순정 부품',
    ],
  },
];
export const moreMenu: textMenuProp[] = [
  {
    title: '서비스',
    data: [
      'E-모빌리티 & E-퍼포먼스',
      '포르쉐 파이낸셜 서비스 - 리스 & 금융 서비스',
      '팩토리 컬렉션',
      '서비스 & 메인터넌스',
      '테큅먼트 - 순정 액세서리',
      'Porsche Exclusive Manufaktur',
      '포르쉐클래식',
      'Approved - 포르쉐 인증 중고차 및 워런티',
    ],
  },
  {
    title: '익스피리언스',
    data: [
      '모터스포츠',
      '포르쉐 익스피리언스 - 트레이닝 & 트래블',
      '포르쉐 클럽',
      '포르쉐 골프',
      '가상 현실(VR)',
      '포르쉐 소셜 미디어',
      '포르쉐 매거진',
      '포르쉐 뉴스레터',
      '포르쉐 박물관',
    ],
  },
  {
    title: '포르쉐에 대하여',
    data: [
      '포르쉐 브랜드 개요',
      '포르쉐 코리아 소개',
      '지속 가능성',
      '커리어',
      '포르쉐 딜러 지원',
      '포르쉐 계열사',
      '뉴스 룸 및 보도 자료',
      '문의하기',
    ],
  },
];

import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '젠틀몬스터 글로벌 통합 어드민 시스템 구축',
      startedAt: '2024-07',
      endedAt: '2024-12',
      where: '아이아이컴바인드',
      descriptions: [
        {
          content:
            '이커머스 운영팀에서 요구하는 다양한 기능을 추가하여 어드민 시스템을 개발하였습니다.',
        },
        {
          content: '기술 스택',
          descriptions: [
            'Next.js (App Router), TypeScript, Tanstack Query, Zustand',
            'React-hook-form, Zod, MUI X 등',
          ].map((content) => ({ content })),
        },
        {
          content: '작업 내용',
          descriptions: [
            'Next.js App Router 기반 어드민 아키텍처 설계 및 구현',
            '상태 관리를 위한 Zustand 및 데이터 페칭을 위한 Tanstack Query 도입',
            'RESTful API 연동을 통한 데이터 CRUD 인터페이스 구현',
            'Zod 기반 폼 벨리데이션 시스템 구축',
            'MUI X - Data Grid 를 활용한 데이터 테이블 최적화',
            '드래그 앤 드롭(DnD) 기반 직관적인 데이터 관리 인터페이스 구현',
          ].map((content) => ({ content })),
        },
        {
          content: '작업 성과',
          descriptions: [
            {
              content: '연간 운영 비용 최적화',
              descriptions: [
                '연간 운영 비용 1억원 절감 (Magento PaaS 서비스 대체)',
              ].map((content) => ({ content })),
            },
            {
              content: '국가 통합 어드민으로 운영 프로세스 단순화',
              descriptions: [
                'AS-IS : 국가별 개별 어드민 접속 후 수정 및 배포 진행',
                'TO-BE : 통합 어드민에서 수정 후 국가 선택하여 일괄 배포 가능',
              ].map((content) => ({ content })),
            },
            {
              content: '기능 고도화',
              descriptions: [
                '복잡한 데이터 테이블 및 PLP 실시간 미리보기 등 고급 커스텀 기능 구현',
                '다국어 및 다중 국가 관리 기능 통합',
              ].map((content) => ({ content })),
            },
          ],
        },
      ],
    },
    {
      title: '사내 기부 페이지 제작',
      startedAt: '2024-09',
      endedAt: '2024-09',
      where: '아이아이컴바인드',
      descriptions: [
        {
          content:
            '아이아이컴바인드 내부 직원들이 사내 기부를 할 수 있는 신청 페이지 제작하였습니다.',
        },
        {
          content: '기술 스택',
          descriptions: ['Vue, VeeValidate, TailwindCSS'].map((content) => ({
            content,
          })),
        },
        {
          content: '작업 내용',
          descriptions: [
            '위기가정, 영케어러, 1:1 결연 후원 등 후원 프로그램 제공 및 신청 페이지 구현',
            '후원 신청 및 후원자 정보 입력 폼 구현',
            '사내 기부 현황을 볼 수 있는 UI 인터페이스 구현',
          ].map((content) => ({ content })),
        },
        {
          content: '작업 성과',
          descriptions: ['사내 기부 페이지를 통해 총 7억 7천만원 모금'].map((content) => ({
            content,
          })),
        },
      ],
    },
    {
      title: '탬버린즈 글로벌 이커머스 플랫폼 구축',
      startedAt: '2023-10',
      endedAt: '2024-03',
      where: '아이아이컴바인드',
      descriptions: [
        {
          content: '프론트엔드 개발 PL 및 아키텍처 총괄을 도맡아 진행하였습니다.',
        },
        {
          content: '기술 스택',
          descriptions: [
            'Next.js (App Router), TypeScript, Tanstack Query, Zustand',
            'TailwindCSS, CSS Module, Next-Auth, Lokalise 등',
          ].map((content) => ({ content })),
        },
        {
          content: '작업 내용',
          descriptions: [
            'Next.js App Router 기반 아키텍처 설계 및 구현',
            '다중 소셜 인증 연동 구현 (Kakao, Naver, Google, Apple)',
            'NICE 본인인증 API 연동 구현',
            'i18n + Lokalise 를 통한 다국어 지원 처리',
            '반응형 및 접근성 최적화 UI/UX 개발',
          ].map((content) => ({ content })),
        },
        {
          content: '작업 성과',
          descriptions: [
            { content: 'Lokalise 번역 시스템을 도입하여 운영 효율성 향상' },
            {
              content: 'Next.js 마이그레이션을 통한 개발 생산성 향상',
              descriptions: [
                'AS-IS : PHP 모놀리식 구조로 인한 프론트엔드/백엔드 코드 혼재로 작업 복잡성 및 코드 충돌 우려 존재',
                'TO-BE : 프론트엔드/백엔드 분리 + Swagger 기반 API 체계 도입으로 개발 효율성 향상',
              ].map((content) => ({ content })),
            },

            {
              content: '글로벌 콘텐츠 관리 프로세스 자동화',
              descriptions: [
                'AS-IS : 수동 번역 관리로 인한 개발자 개입 필수 및 배포 지연 발생',
                'TO-BE : Lokalise 기반 번역 관리 시스템 도입으로 운영팀 자체 콘텐츠 관리 가능',
              ].map((content) => ({ content })),
            },
            {
              content: '시스템 성능 최적화',
              descriptions: [
                'Next.js 도입으로 Lighthouse 접근성, 검색엔진 최적화 점수 향상',
                // "AWS Lambda@Edge를 통한 이미지 최적화로 페이지 로딩 속도 개선 및 Lighthouse 성능 점수 향상",
              ].map((content) => ({ content })),
            },
          ],
        },
      ],
    },
    {
      title: '젠틀몬스터 VISION 대시보드 제작',
      startedAt: '2023-02',
      endedAt: '2023-05',
      where: '아이아이컴바인드',
      descriptions: [
        {
          content:
            '젠틀몬스터에서 운영되는 프로젝트 진행 상황을 한눈에 파악할 수 있는 스케줄 관리 시스템을 개발하였습니다.',
        },
        {
          content: '기술 스택',
          descriptions: ['React, Tanstack Query, Recoil, Style-Components'].map((content) => ({
            content,
          })),
        },
        {
          content: '작업 내용',
          descriptions: [
            'RESTful API 연동을 통한 데이터 CRUD 인터페이스 구현',
            '드래그 앤 드롭 기반 데이터 관리 인터페이스 구현',
          ].map((content) => ({ content })),
        },
      ],
    },
    {
      title: '젠틀몬스터 글로벌 이커머스 운영 및 개선',
      startedAt: '2022-04',
      where: '아이아이컴바인드',
      descriptions: [
        '제품 및 컬렉션 업데이트에 따른 브랜드이슈 컨텐츠 제작',
        'GSAP, Pixi.js 활용한 고성능 인터랙티브 애니메이션 구현',
        '고화질 이미지/영상 렌더링에 따른 Canvas 사용 등 인터렉션 성능 고려',
        'PLP, PDP 실시간 이슈 대응 및 성능 최적화',
        '기존 레거시 코드 ADA 웹접근성 준수 및 개선',
        '국가별 맞춤 UI/UX 업데이트 및 다국어 대응',
      ].map((content) => ({ content })),
    },
    {
      title: '배민 아카데미 웹사이트 리뉴얼',
      startedAt: '2021-05',
      endedAt: '2021-12',
      where: '메가존',
      descriptions: [
        'Vue, Vuex 기반 프론트엔드 개발',
        '온/오프라인 교육 신청 폼 개발 및 REST API 연동',
      ].map((content) => ({ content })),
    },
    {
      title: 'GalaxyJapan Harajuku 브랜드 사이트 리뉴얼',
      startedAt: '2020-06',
      endedAt: '2020-09',
      where: '펑타이 그레이터 차이나',
      descriptions: [
        ...[
          'GalaxyJapan 공식사이트 내 Harajuku 플래그십 스토어 사이트 리뉴얼',
          'A-Frame.js 를 활용한 3D 애니메이션 구현',
          '스토어 예약 시스템 구현',
        ].map((content) => ({ content })),
      ],
    },
    {
      title: '갤럭시 재팬 웹사이트 운영 및 개선',
      startedAt: '2019-07',
      endedAt: '2021-01',
      where: '펑타이 그레이터 차이나',
      descriptions: [
        '일본에서는 삼성닷컴 대신 갤럭시재팬이라는 차별화된 웹사이트를 운영',
        '갤럭시 S/노트, 갤럭시 워치 사전 예약 랜딩페이지 제작',
        'SWCAG 웹접근성 준수에 따른 자바스크립트 개발',
      ].map((content) => ({ content })),
    },
    {
      title: '삼성닷컴 하만 브랜드 사이트 리뉴얼',
      startedAt: '2019-01',
      endedAt: '2019-03',
      where: '펑타이 그레이터 차이나',
      descriptions: [
        '삼성닷컴 내 하만 브랜드 별도의 마이크로 웹사이트 리뉴얼',
        '프리미엄 브랜드의 부합하는 마이크로 인터랙션 구현',
      ].map((content) => ({
        content,
      })),
    },
    {
      title: '삼성닷컴 글로벌 플랫폼 운영 및 개선',
      startedAt: '2016-11',
      endedAt: '2021-01',
      where: '펑타이 그레이터 차이나',
      descriptions: [
        '스크롤 인터랙션 기반 갤럭시 S/노트 시리즈 사전 예약 랜딩페이지 제작',
        '두 캐릭터의 대화형 애니메이션을 GSAP 으로 구현한 삼성플러스앱 온보딩 인터랙티브 컨텐츠 제작',
        '냉장고 랜딩 페이지의 도어/기능 필터 기반 맞춤형 제품 추천 인터페이스 개발',
        '에어컨 제품 성능을 시각적으로 표현하는 인터랙티브 랜딩페이지 제작',
        'SWCAG 웹접근성 준수에 따른 자바스크립트 개발',
      ].map((content) => ({
        content,
      })),
    },
    {
      title: '캐논윈도우 영업사원용 하이브리드앱 페이지 제작',
      startedAt: '2016-07',
      endedAt: '2016-09',
      where: '베니크레비즈',
      descriptions: [
        '영업사원 업무 효율성 증대를 위한 페이지 제작',
        '반응형 하이브리드 앱 UI/UX 구현',
        'REST API를 통한 데이터 연동 및 실시간 업데이트 기능 구현',
      ].map((content) => ({ content })),
    },
    {
      title: '골프존 계열사 사이트 리뉴얼',
      startedAt: '2015-10',
      endedAt: '2016-08',
      where: '베니크레비즈',
      descriptions: [
        '골프존엘리트아카데미, 골프문화상품권, 골프존유원홀딩스 등 다수의 계열사 사이트 리뉴얼',
        '본인인증 및 골프문화상품권 구매 프로세스 구현',
        'IR 정보, 공고사항 등 REST API를 통한 데이터 연동 구현',
      ].map((content) => ({ content })),
    },
    {
      title: '오리온 차이나 프로모션 제작',
      startedAt: '2015-01',
      endedAt: '2015-04',
      where: '베니크레비즈',
      descriptions: [
        '쉬엔, 큐티 등 오리온 중국 시장 신제품 프로모션 페이지 개발',
        'CSS3와 Javascript를 활용한 인터랙티브 애니메이션 구현',
      ].map((content) => ({ content })),
    },
    {
      title: 'SPC 파리바게뜨 유지보수',
      startedAt: '2014-12',
      endedAt: '2016-10',
      where: '베니크레비즈',
      descriptions: [
        '파리바게뜨 프로모션 및 이벤트 페이지 다수 제작',
        'UCC 공모전 시스템 구축 및 소셜미디어 연동 기능 개발',
        'PHP와 MySQL을 활용한 이벤트 관리자 개발',
        '마케팅 캠페인 성과 분석을 위한 데이터 트래킹 구현',
      ].map((content) => ({
        content,
      })),
    },
  ],
};

export default project;

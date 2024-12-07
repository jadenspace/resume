import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '아이아이컴바인드',
      position:
        '패션 아이웨어 브랜드 “젠틀몬스터” 와 코스메틱 브랜드 “탬버린즈” 등 여러 브랜드를 보유한 기업으로 주로 사내 브랜드 이커머스에 필요한 프론트엔드 개발을 담당하였습니다.',
      startedAt: '2022-04',
      descriptions: [
        '젠틀몬스터 글로벌 통합 어드민 시스템 구축',
        '탬버린즈 글로벌 이커머스 플랫폼 구축',
        '젠틀몬스터 글로벌 이커머스 운영 및 개선',
      ],
      skillKeywords: ['Next.js', 'React', 'TypesScript', 'ESNext', 'TailwindCSS', 'SCSS'],
    },
    {
      title: '메가존',
      position:
        '메가존은 여러 계열사를 이루는 IT 기업으로 당시 메가존 본사에 입사하여 우아한형제들 파견을 통해 배민아카데미 리뉴얼 프로젝트에 투입되었습니다.',
      startedAt: '2021-02',
      endedAt: '2022-04',
      descriptions: ['배민 아카데미 웹사이트 리뉴얼'],
      skillKeywords: ['Vue', 'Vuex', 'ES6', 'SCSS'],
    },
    {
      title: '펑타이 그레이터 차이나',
      position:
        '제일기획 자회사이자 중국의 디지털 마케팅 에이전시 기업으로, 한국 지사에 입사해 주로 삼성 계열 프로젝트의 자바스크립트 개발을 담당하였습니다.',
      startedAt: '2016-11',
      endedAt: '2021-01',
      descriptions: ['갤럭시 재팬 웹사이트 운영 및 개선', '삼성닷컴 글로벌 플랫폼 운영 및 개선'],
      skillKeywords: ['ES6', 'SCSS', 'Adobe Experience Manager'],
    },
    {
      title: '베니크레비즈',
      position:
        '베니크레비즈는 SPC, 골프존, 오리온차이나 등 기업의 다양한 프로모션을 지원하는 홍보 대행 에이전시 업체로, 해당 프로모션 및 사이트에 대한 웹 퍼블리싱 업무를 담당하였습니다.',
      startedAt: '2014-12',
      endedAt: '2016-10',
      descriptions: [
        '캐논윈도우 영업사원용 하이브리드앱 페이지 제작',
        '골프존 계열사 사이트 리뉴얼',
        '오리온 차이나 프로모션 제작',
        'SPC 파리바게뜨 유지보수',
      ],
      skillKeywords: ['ES5', 'jQuery', 'HTML/CSS', 'PHP'],
    },
  ],
};

export default experience;

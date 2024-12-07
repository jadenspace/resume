import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 프론트엔드 개발자 김연호입니다.',
    '저는 프론트엔드 기술의 급격한 변화를 몸소 겪어오며, 지속적인 학습과 적응을 통해 여러 기술 트렌드를 경험해왔습니다.',
    'ES5를 시작으로 ESNext, Vue, React, TypeScript, 그리고 Next.js를 활용한 풀스택 개발에 이르기까지, 프론트엔드 생태계의 전체적인 진화 과정을 함께해 왔습니다. ' +
      '이러한 경험을 바탕으로 앞으로도 최신 기술을 선도적으로 도입하고, 이를 팀원들과 공유하며 함께 성장해나가는 "평생 개발자"가 되는 것이 저의 목표입니다.',
    '현재는 AI 서비스에도 주목하고 있으며, 이러한 혁신적인 기술들을 연구하고 실제 프로젝트에 적용함으로써, 회사의 기술적 경쟁력 향상에 기여하도록 하겠습니다.',
  ],
  sign: 'KimYeonho',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;

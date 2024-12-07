import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'Next-js-Admin-Boilerplate',
      descriptions: [
        {
          content: 'Next.js 14+, Tailwind CSS 3.4+, MSW 2.4, Typescript 내장',
        },
        {
          content: 'MUI X를 통한 테이블 컴포넌트 제공',
        },
        {
          content: 'react-hook-form useController를 통한 폼 컨트롤',
        },
        {
          content: 'https://github.com/jadenspace/Next-js-Admin-Boilerplate',
          href: 'https://github.com/jadenspace/Next-js-Admin-Boilerplate',
        },
      ],
    },
    {
      title: 'jd-slider',
      descriptions: [
        {
          content: '슬라이더 jQuery 플러그인',
        },
        {
          content:
            '운영팀에서의 다양한 슬라이더 옵션 요청으로 인해 자유롭게 커스텀할 수 있는 플러그인 제작',
        },
        {
          content: 'https://www.npmjs.com/package/jd-slider',
          href: 'https://www.npmjs.com/package/jd-slider',
        },
        {
          content: 'Codepen 예제 (jQuery)',
          href: 'https://codepen.io/jadenspace/pen/dypLpbb',
        },
        {
          content: 'Codepen 예제 (es6 마이그레이션)',
          href: 'https://codepen.io/jadenspace/pen/LYbRjeM',
        },
      ],
    },
  ],
};

export default openSource;

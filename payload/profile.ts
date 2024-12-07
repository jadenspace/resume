import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.png';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '김연호',
    small: '프론트엔드 개발자',
  },
  contact: [
    {
      title: 'yeonhos2@naver.com',
      link: 'mailto:yeonhos2@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-9809-1386',
      link: 'tel:+82-10-9809-1386',
      icon: faPhone,
    },
    {
      link: 'https://github.com/jadenspace',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.facebook.com/groups/ubuntu.ko',
    //   icon: faFacebook,
    // },
  ],
  // notice: {
  //   title:
  //     "The content below is all fictitious and is just a sample from 'https://github.com/uyu423/resume-nextjs'.",
  //   icon: faBell,
  // },
};

export default profile;

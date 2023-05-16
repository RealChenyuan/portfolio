import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ruqi,
  r,
  joyy,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  mysql,
  forkify,
  airbnb,
  omnifood,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "关于我",
  },
  {
    id: "work",
    title: "实习经历",
  },
  {
    id: "projects",
    title: "项目经历",
  },
  {
    id: "contact",
    title: "联系我",
  },
];

const services = [
  {
    title: "前端Web开发者",
    icon: web,
  },
  {
    title: "React开发者",
    icon: mobile,
  },
  {
    title: "数据分析师",
    icon: backend,
  },
  {
    title: "网页设计者",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
];

const experiences = [
  {
    title: "数据分析实习生",
    company_name: "如祺出行",
    icon: ruqi,
    iconBg: "#E6DEDD",
    date: "2021.08 - 2021.10",
    points: [
      "使用 Excel 处理来自 7 个叫车应用的 10,000 多个样本",
      "挖掘网约车价格、折扣力度等数据，监控竞品最新动向",
      "为公司制定竞争产品分析报告，为战略调整提供依据",
    ],
  },
  {
    title: "数据分析实习生",
    company_name: "欢聚集团",
    icon: joyy,
    iconBg: "#E6DEDD",
    date: "2022.08 - 2022.11",
    points: [
      "使用SQL收集用户数据，完成漏斗分析，了解用户流失的关键因素",
      "对优惠券分发进行了 A/B 测试，在接下来的三天内使用户支付增加了 9.2%",
      "使用 R 生成词云并分析用户聊天数据，深入分析吸引用户长期聊天的原因",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Forkify食谱网",
    description:
      "Forkify是一个虚构的JavaScript应用程序，它与Forkify API互动，以获取和显示食谱的食物数据。用户可以搜索特定的食谱，并通过LocalStorage将其保存到收藏列表中。用户可以根据自己的需要轻松地增加或减少份量，并可以查看详细说明。你可以将自己的食谱添加到列表中，它将自动添加到你的书签中，并可通过搜索功能找到。",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: forkify,
    source_code_link: "https://github.com/RealChenyuan/forkify-project",
    web_link: "https://forkify-chenyuan.netlify.app/",
  },
  {
    name: "爱彼迎风格的住宿预订平台",
    description: `本住宿预订平台复刻了爱彼迎网站的基本内容，满足用户按地区、日期、出行人数搜索房源的需求。
      项目采用了React、Next.js、Tailwind CSS作为技术栈。将加载进度条、搜索信息获取等功能封装为自定义hooks，优化项目结构并增强复用性。
      同时利用Next.js框架实现服务端渲染，加快了首屏渲染。`,
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/RealChenyuan/airbnb-clone",
    web_link: "https://airbnb-clone-fawn-two.vercel.app/",
  },
  {
    name: "Omnifood健康食品配送网站",
    description: `Omnifood是一个模拟在线餐厅服务的网站项目，提供菜单浏览、在线订购、用户账户管理等功能。
    该项目采用了HTML、CSS、JavaScript等技术进行前端开发。Omnifood的设计风格简洁大方，
    色彩搭配和谐，体现了现代餐饮业的风格和特点。此外，Omnifood还采用了响应式设计，适配了不同屏幕尺寸和设备，提供了优良的用户体验。`,
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: omnifood,
    source_code_link: "https://github.com/",
    web_link: "https://omnifood-chen.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

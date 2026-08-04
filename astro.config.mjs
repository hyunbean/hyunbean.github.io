import { defineConfig } from 'astro/config';

// GitHub Pages: 사용자 페이지(hyunbean.github.io)면 base 불필요.
// 프로젝트 페이지로 배포하면 base: '/<repo-name>' 를 지정한다.
export default defineConfig({
  site: 'https://hyunbean.github.io',
});

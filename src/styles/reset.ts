import { css } from '@emotion/react'

const reset = css`
  @font-face {
    font-family: KakaoSmall;
    font-weight: 300;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall-Light-v1.0.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall-Light-v1.0.woff)
        format('woff');
  }

  @font-face {
    font-family: KakaoSmall;
    font-weight: 400;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall-Regular-v1.0.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall-Regular-v1.0.woff)
        format('woff');
  }

  @font-face {
    font-family: KakaoSmall;
    font-weight: 700;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall_Bold_OTF.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoSmall_Bold_OTF.woff)
        format('woff');
  }

  @font-face {
    font-family: KakaoBig;
    font-weight: 400;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig-Regular-v1.0.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig-Regular-v1.0.woff)
        format('woff');
  }

  @font-face {
    font-family: KakaoBig;
    font-weight: 700;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig-Bold-v1.0.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig-Bold-v1.0.woff)
        format('woff');
  }

  @font-face {
    font-family: KakaoBig;
    font-weight: 800;
    src:
      local('☺'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig_ExtraBold_OTF.woff2)
        format('woff2'),
      url(//t1.kakaocdn.net/kakaocorp/kakaocorp/service/fonts/KakaoBig_ExtraBold_OTF.woff)
        format('woff');
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

export default reset

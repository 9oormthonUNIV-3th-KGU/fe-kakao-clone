import styled from '@emotion/styled'
import ContentItem from './ContentItem'

interface ContentItem {
  title: string
  txt: string
  description: string
  img: string
  link: string
}

interface WrapCommunityProps {
  title: keyof typeof contents
  sub?: string
  marginTop?: string
}

const Wrap = styled.div<{ marginTop?: string }>`
  width: 1296px;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
`

const Title = styled.h4`
  margin: 0;
  width: 1296px;
  height: 61px;
  font-family: KakaoSmall;
  font-size: 42px;
  font-weight: 700;
  line-height: 61px;
`

const Sub = styled.span`
  margin-top: 20px;
  width: 1296px;
  height: 100%;
  color: rgb(102, 102, 102);
  font-family: KakaoSmall;

  font-size: 22px;
  font-weight: 400;
  line-height: 35px;
  overflow-wrap: break-word;
  word-break: keep-all;
  display: block;
`

const List = styled.ul`
  margin-top: 44px;
  padding-left: 0px;
  width: 1296px;
  list-style-type: none;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, 612px);
  grid-gap: 0 72px;
  font-family: KakaoSmall;
`

const Li = styled.li`
  position: relative;
  border-bottom: 1px solid #ededed;
`

const contents: Record<string, ContentItem[]> = {
  '일상의 혁신을 위한 디지털 전환': [
    {
      title: '카카오',
      txt: '사람을 이해하는 기술로, <br /> 필요한 미래를 더 가깝게 만듭니다.',
      description:
        '카카오는 사람에 대한 이해를 바탕으로 <br /> 우리에게 필요한 미래를 고민하고 기술로 그 답을 찾아왔습니다. <br /><br /> 문제의 본질에 집중해 시대에 맞는 기술과 서비스를 만들고,<br /> 안전한 디지털 환경 조성 및 모두를 위한 사회적 가치를 추구해 나갑니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6658b5b018b00001.png',
      link: 'https://careers.kakao.com/index',
    },
    {
      title: '카카오페이',
      txt: '누구에게나 이로운 금융서비스를 만듭니다.',
      description:
        '카카오페이는 모두에게 이로운 금융 서비스를 만드는 ‘생활 금융 플랫폼’입니다.  <br /> 기존 금융의 번거로움에서 벗어나 우리 생활 전반에 이로운 흐름을 만들고자 합니다. <br />결제, 송금부터 대출, 보험, 투자 등 금융까지 서비스 폭을 넓히며 일상의 모든 금융이 <br /> 카카오페이 하나로 되기 위해 노력하고 있습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6664cfa018b00001.png',
      link: 'https://www.kakaopay.com',
    },
    {
      title: '카카오뱅크',
      txt: '같지만 다른 은행',
      description:
        "카카오뱅크는 사람과 은행의 만남이 더 쉽게, 더 자주 일어나야 한다고 믿습니다. <br /> 사용자 중심의 혁신적인 기술을 통해 일상 속 어떤 순간에서도 유용한 나만의 은행. <br /> 카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작' 입니다.",
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c666f9a4018b00001.png',
      link: 'https://www.kakaobank.com/',
    },
    {
      title: '카카오모빌리티',
      txt: '우리의 기술로 일상을 움직입니다.',
      description:
        '카카오모빌리티는 생활 속 이동이 더 편리해지고, 그 방법도 더 다양해져야 한다고 생각합니다. <br /> 이를 위해 택시를 시작으로 대리, 내비, 바이크, 주차, 차량관리 서비스, 퀵/택배 등 우리 일상에  <br /> 필요한 모든 이동 서비스들을 만들어가며, AI와 자율주행 등 미래를 위한 기술을 연구합니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6679cc7018b00001.png',
      link: 'https://www.kakaomobility.com/',
    },
    {
      title: '카카오스타일',
      txt: '나로 가득한 라이프스타일',
      description:
        '카카오스타일은 모든 사람이 나만의 특별한 스타일을 가지고 있고, 내가 좋아하는 무언가를  <br /> 발견했을 때의 즐거움이 나의 일상을 더욱 나답게 만든다고 믿습니다.  <br /> 내 마음을 읽은 듯한 개인화 추천으로 누구나 나만의 스타일을 쉽게 찾도록 도움으로써 다양한 <br /> 스타일이 공존하는 세상을 만들겠습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66852ad018b00001.png',
      link: 'https://kakaostyle.com/',
    },
  ],
  'IP-IT 결합을 통한 글로벌 문화 생태계 구축': [
    {
      title: '카카오엔터테인먼트',
      txt: 'Entertain Different',
      description:
        '카카오페이지와 카카오M이 만나 출범한 ‘카카오엔터테인먼트’는 웹툰, 웹소설 중심의  <br /> 오리지널 스토리 IP부터 음악, 영상, 디지털, 공연의 기획/제작 역량까지 콘텐츠 전 분야를 <br />  아우르는 사업 포트폴리오를 갖췄습니다. 독보적인 IP 밸류체인과 글로벌 플랫폼 네트워크를 <br /> 바탕으로 산업내 다양한 파트너들과 시너지를 창출하며, 기존에 없던 새로운 엔터테인먼트를 <br /> 선보일 것입니다. 국경과 세대, 언어를 뛰어넘어 전세계 모두의 일상을 즐겁게 하며 <br /> 엔터테인먼트 산업의 새로운 역사를 만들어가겠습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66919d0018b00001.png',
      link: 'https://kakaoent.com/',
    },
    {
      title: '카카오게임즈',
      txt: '일상이 게임이 되는 세상',
      description:
        "카카오게임즈는 우리의 일상을 게임과 연결해 새로운 가치를 만들어 나갑니다. '카카오톡'과  <br /> '다음게임'의 막강한 멀티플랫폼을 갖추고, '게임 개발'에서 '글로벌 퍼블리싱'까지 모두 <br />  아우르는 종합게임사입니다. 나아가 VR·AR 기술을 접목한 콘텐츠로 새로운 일상의 즐거움을  <br /> 만들어가고 있습니다.",
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c669c200018b00001.png',
      link: 'https://www.kakaogamescorp.com',
    },
    {
      title: '카카오픽코마',
      txt: '창작자가 주인공인 콘텐츠 생태계 조성',
      description:
        '카카오픽코마는 작품과 독자의 연결을 통해 독자에게는 일상의 즐거움을, 작가에게는 작품의 <br /> 가치가 더욱 빛날 수 있는 세상을 만들고자 합니다. 세계 최대의 일본 만화 시장에서 만화, 소설 <br /> 플랫폼 ‘픽코마’를 전개하고 있으며, 나아가 작품이 국경을 초월하여 보다 넓은 세상의 <br /> 독자들과 만날 수 있는 세계를 꿈꾸고 있습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66a4f07018b00001.png',
      link: 'https://www.kakaopiccoma.com/',
    },
  ],
  'AI⋅헬스케어 중심의 뉴 이니셔티브': [
    {
      title: '카카오브레인',
      txt: "인간처럼 생각하고, 행동하는 '지능'을 통해 인류가 이제까지 풀지 못했던 난제에 도전합니다.",
      description:
        '혁신적인 인공지능 연구/개발을 통해 AI 기술 생태계 및 인류의 더 나은 삶에 기여하고자 <br /> 합니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66b27ae018b00001.png',
      link: 'https://www.kakaobrain.com/',
    },
    {
      title: '카카오엔터프라이즈',
      txt: '글로벌 기술력의 Cloud Service Provider',
      description:
        '카카오엔터프라이즈는 글로벌 Top 클래스 성능의 클라우드 서비스를 제공합니다. 국내 <br /> 클라우드를 넘어 세계에서 인정받은 클라우드의 기술과 혁신을 통해 더 빠르고 안전한 새로운 <br/> 클라우드 세상을 만들어갑니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66bc8b8018b00001.png',
      link: 'https://www.kakaoenterprise.com/',
    },
    {
      title: '카카오헬스케어',
      txt: 'To make people healthy with technology',
      description:
        "디지털 헬스케어 기술과 서비스를 통해 헬스케어 생태계 구축에 기여하며, 국민 건강을 <br /> 증진하고 글로벌 디지털 헬스케어 시장을 선도하는 것을 목표로 합니다. 이를 위해 사용자를  <br /> 위한 '모바일 기반의 개인 건강 관리(Virtual Care)' 서비스를 제공하고, 헬스케어 데이터의 <br /> 공유와 활용을 지원하는 'Data Enabler'로서 디지털 헬스케어 생태계 선순환에 기여합니다.",
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66cc57d018b00001.png',
      link: 'https://kakaohealthcare.com/',
    },
    {
      title: '카카오벤처스',
      txt: '미래를 앞당기는 개척자의 Co-Pilot',
      description:
        '카카오벤처스는 기술로 세상을 혁신하는 창업자를 개척자라고 믿고 개척자들의 되는 이유를 <br /> 찾아 투자합니다. 카카오벤처스 마피아를 지향하며, 핵심 역량 외에 부족한 부분은 적재적소에 <br /> 채워줍니다. 스타트업의 힘든 여정에도 기꺼이 함께하는 든든한 코파일럿(부조종사)이 <br /> 되겠습니다. 대표서비스로는 왓챠, 루닛, 스탠다임, 당근마켓, 한국신용데이터 등이 있습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66d7bd5018b00001.png',
      link: 'https://www.kakao.vc/',
    },
    {
      title: '카카오인베스트먼트',
      txt: '선순환이 가능한 벤처 생태계의 조성',
      description:
        '카카오인베스트먼트는 2015년 설립된 카카오의 투자전문회사입니다. “기술과 사람이 만드는 <br /> 더 나은 세상”이라는 철학을 바탕으로 혁신을 실제로 만들어낼 스타트업을 지원하며, M&A, <br /> IPO 등 Exit 기회를 제공하여 선순환이 가능한 벤처생태계를 조성하고 있습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66e295d018b00001.png',
      link: 'http://kakaoinvestment.com/',
    },
  ],
  '기타 기업집단 카카오 소속 회사': [
    {
      title: '링키지랩',
      txt: '어울려 만드는 더 나은 세상',
      description:
        '링키지랩은 카카오의 자회사형 장애인 표준사업장입니다. <br /> 카카오 플랫폼 서비스 운영과 디지털 접근성 컨설팅 등 IT 특화 업무와 <br /> 카카오 그룹 카페테리아, 스낵 큐레이션, 헬스 키퍼 운영 등 <br /> 전문적인 사내 복지 서비스를 함께 수행하고 있습니다. <br /><br /> 장애인 고용 및 장애 인식 개선 활동 등 포용기업으로서의 <br /> 사회적 가치를 창출하며, 어울려 만드는 더 나은 세상을 위해 노력하고 있습니다.',
      img: 'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66ebfbb018b00001.png',
      link: 'https://www.linkagelab.co.kr',
    },
  ],
}

function WrapCommunity({ title, sub, marginTop }: WrapCommunityProps) {
  return (
    <>
      <Wrap marginTop={marginTop}>
        <Title>{title}</Title>
        <Sub dangerouslySetInnerHTML={{ __html: sub || '' }} />
        <List>
          {contents[title]?.map(({ title, txt, description, img, link }) => (
            <Li key={title}>
              <ContentItem
                title={title}
                txt={txt}
                description={description}
                img={img}
                link={link}
              />
            </Li>
          ))}
        </List>
      </Wrap>
    </>
  )
}

export default WrapCommunity

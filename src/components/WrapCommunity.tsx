// WrapCommunity.tsx
import styled from '@emotion/styled'
import ContItem from '../components/ContItem'

const Wrap = styled.div`
  width: 1296px;
  /* height: 1651px; // 이 값을 조정하거나 제거하여 유동적으로 설정 */
`

const Title = styled.h4`
  margin: 0;
  width: 1296px;
  height: 61px;
  font-family: KakaoSmall, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
  font-size: 42px;
  font-weight: 700;
  line-height: 61px;
`

const Sub = styled.span`
  margin-top: 20px;
  width: 1296px;
  height: 35px;
  color: rgb(102, 102, 102);
  font-family: KakaoSmall, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
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
`

function WrapCommunity() {
  return (
    <Wrap>
      <Title>일상의 혁신을 위한 디지털 전환</Title>
      <Sub>
        플랫폼을 통해 이용자 및 파트너가 보다 편리하고 효율적으로 디지털 기술의
        혜택을 누릴 수 있도록 디지털 전환을 돕습니다.
      </Sub>
      <List>
        <li>
          <ContItem
            tit="카카오"
            txt="사람을 이해하는 기술로, <br /> 필요한 미래를 더 가깝게 만듭니다."
            desc="카카오는 사람에 대한 이해를 바탕으로 <br /> 우리에게 필요한 미래를 고민하고 기술로 그 답을 찾아왔습니다. <br /><br /> 문제의 본질에 집중해 시대에 맞는 기술과 서비스를 만들고,<br /> 안전한 디지털 환경 조성 및 모두를 위한 사회적 가치를 추구해 나갑니다."
            img="https://careers.kakao.com/index"
            link="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6658b5b018b00001.png"
          />
        </li>
        <li>
          <ContItem
            tit="카카오페이"
            txt="누구에게나 이로운 금융서비스를 만듭니다."
            desc="카카오페이는 모두에게 이로운 금융 서비스를 만드는 ‘생활 금융 플랫폼’입니다.  <br /> 기존 금융의 번거로움에서 벗어나 우리 생활 전반에 이로운 흐름을 만들고자 합니다. 
             <br />결제, 송금부터 대출, 보험, 투자 등 금융까지 서비스 폭을 넓히며 일상의 모든 금융이 <br /> 카카오페이 하나로 되기 위해 노력하고 있습니다."
            img="https://www.kakaopay.com"
            link="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6664cfa018b00001.png"
          />
        </li>
        <li>
          <ContItem
            tit="카카오뱅크"
            txt="같지만 다른 은행"
            desc="카카오뱅크는 사람과 은행의 만남이 더 쉽게, 더 자주 일어나야 한다고 믿습니다. <br /> 사용자 중심의 혁신적인 기술을 통해 일상 속 어떤 순간에서도 유용한 나만의 은행. <br /> 카카오뱅크는 또 하나의 은행이 아닌 '은행의 새로운 시작' 입니다."
            img="https://www.kakaobank.com/"
            link="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c666f9a4018b00001.png"
          />
        </li>
        <li>
          <ContItem
            tit="카카오모빌리티"
            txt="우리의 기술로 일상을 움직입니다."
            desc="카카오모빌리티는 생활 속 이동이 더 편리해지고, 그 방법도 더 다양해져야 한다고 생각합니다. <br /> 이를 위해 택시를 시작으로 대리, 내비, 바이크, 주차, 차량관리 서비스, 퀵/택배 등 우리 일상에  <br /> 필요한 모든 이동 서비스들을 만들어가며, AI와 자율주행 등 미래를 위한 기술을 연구합니다."
            img="https://www.kakaomobility.com/"
            link="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c6679cc7018b00001.png"
          />
        </li>
        <li>
          <ContItem
            tit="카카오스타일"
            txt="나로 가득한 라이프스타일"
            desc="카카오스타일은 모든 사람이 나만의 특별한 스타일을 가지고 있고, 내가 좋아하는 무언가를  <br /> 발견했을 때의 즐거움이 나의 일상을 더욱 나답게 만든다고 믿습니다.  <br /> 내 마음을 읽은 듯한 개인화 추천으로 누구나 나만의 스타일을 쉽게 찾도록 도움으로써 다양한 <br /> 스타일이 공존하는 세상을 만들겠습니다."
            img="https://kakaostyle.com/"
            link="https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/community/c66852ad018b00001.png"
          />
        </li>
      </List>
    </Wrap>
  )
}

export default WrapCommunity

import HighlightCard from '../components/Responsibility/HighlightCard'
import cardEnergy from '../assets/images/card_energy.png'
import cardCommittee from '../assets/images/card_committee.png'
import cardDangol from '../assets/images/card_dangol.png'
import styled from '@emotion/styled'

const Article = styled.article`
  position: relative;
  margin: 0 auto;
  max-width: 952px;
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`

function Responsibility() {
  return (
    <Article>
      <Cards>
        <HighlightCard
          title=<>
            22년 대비 <br></br>재생에너지 2배 확대
          </>
          description=<>
            제주에서 바람으로<br></br>판교에서 태양으로
          </>
          image={cardEnergy}
        ></HighlightCard>
        <HighlightCard
          title=<>
            준법과신뢰위원회 <br></br>설립ㆍ운영
          </>
          description=<>
            신뢰 회복을 위한<br></br>쇄신 시스템 마련
          </>
          image={cardCommittee}
        ></HighlightCard>
        <HighlightCard
          title=<>
            우리동네 단골시장 <br></br>대통령상 수상
          </>
          description=<>
            서비스를 통한<br></br>전통시장의 디지털 전환
          </>
          image={cardDangol}
        ></HighlightCard>
      </Cards>
    </Article>
  )
}

export default Responsibility

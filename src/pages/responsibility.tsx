import HighlightCard from '../components/Responsibility/HighlightCard'
import cardEnergy from '../assets/images/card_energy.png'
import styled from '@emotion/styled'

function Responsibility() {
  return (
    <HighlightCard
      title=<>
        22년 대비 <br></br> 재생에너지 2배 확대
      </>
      description=<>
        제주에서 바람으로<br></br> 판교에서 태양으로
      </>
      image={cardEnergy}
    ></HighlightCard>
  )
}

export default Responsibility

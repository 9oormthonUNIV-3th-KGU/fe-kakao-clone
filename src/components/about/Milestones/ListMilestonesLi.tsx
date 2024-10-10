import styled from '@emotion/styled'
import { css } from '@emotion/react'
import GoIcon from './GoIcon'
import MoreBtn from './MoreBtn'

const StyledLi = styled.li`
  padding-left: 50px;
  padding-bottom: 80px;
`

const WrapCont = styled.div`
  display: flex;
  flexbox: row;
`

const TitleCont = styled.strong`
  font-family: KakaoBig;
  font-size: 24px;
  font-weight: 700;
`

const InnerCont = styled.div`
  margin-left: 56px;
`

const WrapItem = styled.div`
  display: flex;
  flexbox: row;
`

const StyledEm = styled.em`
  margin-top: 4px;
  font-family: KakaoBig;
  font-size: 18px;
  font-weight: 700;
`

const StyledA = styled.a`
  margin-top: 4px;
  font-family: KaKaoBig;
  font-size: 18px;
  font-weight: 400;
  text-decoration: none;
  color: #333;

  &:hover {
    font-weight: bold;
    text-decoration: underline;
  }
`

interface ListMilestonesLiProps {
  year: string
  month: string
  title1?: string
  title1Link?: string
  title2?: string
  title2Link?: string
  title3?: string
  title3Link?: string
}

function ListMilestonesLi() {
  return (
    <>
      <StyledLi>
        <WrapCont>
          <TitleCont>2024년</TitleCont>
          <InnerCont>
            <WrapItem>
              <StyledEm>09월</StyledEm>
              <div css={css({ marginLeft: '36px' })}>
                <ul>
                  <li>
                    <StyledA
                      href="https://www.kakaocorp.com/page/detail/11253"
                      target="_blanck"
                    >
                      카카오, AI 언어모델 Function Call 성능 평가 벤치마크
                      데이터셋 국내 IT 기업 최초 구축 및 오픈소스 공개
                      <GoIcon />
                    </StyledA>
                  </li>
                  <li css={css({ marginTop: '10px' })}>
                    <StyledA
                      href="https://www.kakaocorp.com/page/detail/11248"
                      target="_blanck"
                    >
                      카카오, 전국 소상공인과 지역 경제 활성화 위해 다양한
                      ‘프로젝트 단골’ 캠페인 진행
                      <GoIcon />
                    </StyledA>
                  </li>
                  <li css={css({ marginTop: '10px' })}>
                    <StyledA
                      href="https://www.kakaocorp.com/page/detail/11240"
                      target="_blanck"
                    >
                      카카오프렌즈, ‘레드닷 디자인 어워드 2024’ 본상 수상
                      <GoIcon />
                    </StyledA>
                  </li>
                </ul>
                <MoreBtn />
              </div>
            </WrapItem>
          </InnerCont>
        </WrapCont>
      </StyledLi>
      <StyledLi>2</StyledLi>
      <StyledLi>3</StyledLi>
    </>
  )
}

export default ListMilestonesLi

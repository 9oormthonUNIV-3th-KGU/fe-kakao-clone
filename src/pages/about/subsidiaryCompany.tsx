import styled from '@emotion/styled'
import TitMain from '../../components/TitMain'
import WrapCommunity from '../../components/WrapCommunity'

const Main = styled.section`
  padding-top: 92px;
`

const MainContent = styled.div`
  margin: 0;
  padding: 0;
`

const ContentArticle = styled.article`
  position: relative;
  max-width: 1296px;
  margin: 0 auto;
  padding-bottom: 182px;
`

const SectionSubsidiary = styled.section`
  margin-top: 96px;
`

function SubsidiaryCompany() {
  return (
    <>
      <Main>
        <MainContent>
          <ContentArticle>
            <TitMain
              emph="카카오 그룹"
              txt="카카오가 만든 더 나은 세상"
              url="//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_subsidiary.gif"
            ></TitMain>
            <SectionSubsidiary>
              <WrapCommunity />
            </SectionSubsidiary>
          </ContentArticle>
        </MainContent>
      </Main>
    </>
  )
}

export default SubsidiaryCompany

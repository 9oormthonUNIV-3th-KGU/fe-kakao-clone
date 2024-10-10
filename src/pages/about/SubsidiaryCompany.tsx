import styled from '@emotion/styled'
import { css } from '@emotion/react'
import TitleMain from '../../components/common/TitleMain'
import WrapCommunity from '../../components/about/SubsidiaryCompany/WrapCommunity'

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

const InfoCommunity = styled.p`
  margin-top: 60px;
  width: 1296px;
  height: 31px;
  font-size: 18px;
  font-weight: 400;
  height: 31px;
  letter-spacing: -0.5px;
  line-height: 31.860001px;
`

function SubsidiaryCompany() {
  return (
    <>
      <Main>
        <MainContent>
          <ContentArticle>
            <TitleMain
              emphasize="카카오 그룹"
              txt="카카오가 만든 더 나은 세상"
              url="//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_tit_subsidiary.gif"
            />
            <SectionSubsidiary>
              <WrapCommunity
                title="일상의 혁신을 위한 디지털 전환"
                sub="플랫폼을 통해 이용자 및 파트너가 보다 편리하고 효율적으로 디지털 기술의 혜택을 누릴 수 있도록 디지털 전환을 돕습니다."
              />
              <WrapCommunity
                title="IP-IT 결합을 통한 글로벌 문화 생태계 구축"
                sub="콘텐츠 IP와 플랫폼의 시너지를 바탕으로 글로벌 시장 진출과 경쟁력 강화를 추구합니다."
                marginTop="120px"
              />
              <WrapCommunity
                title="AI⋅헬스케어 중심의 뉴 이니셔티브"
                sub="미래 성장동력을 발굴하고 육성하기 위해, AI와 헬스케어 분야에서 기술과 서비스를 개발합니다. <br /> 미래 비즈니스 파트너 발굴과 스타트업 생태계 기여를 위한 투자도 함께합니다"
                marginTop="120px"
              />
              <WrapCommunity
                title="기타 기업집단 카카오 소속 회사"
                marginTop="120px"
              />
              <InfoCommunity>
                보다 상세한 기업집단 카카오 소속회사 분류는&nbsp;
                <a
                  href="https://www.kakaocorp.com/ir/managementInformation/affiliatedcompanies"
                  target="_blank"
                  css={css({
                    fontWeight: '700',
                    textDecoration: 'underline',
                    color: 'black',
                  })}
                >
                  &lt;카카오 기업집단 설명서&gt;
                </a>
                를 참고해 주세요.
              </InfoCommunity>
            </SectionSubsidiary>
          </ContentArticle>
        </MainContent>
      </Main>
    </>
  )
}

export default SubsidiaryCompany

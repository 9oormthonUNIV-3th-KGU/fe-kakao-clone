import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'
import TitleMain from '../../components/common/TitleMain'
import ShareBtn from '../../components/about/Milestones/ShareBtn'
import OptionList from '../../components/about/Milestones/OptionList'
import ListMilestonesLi from '../../components/about/Milestones/ListMilestonesLi'

interface ShareContentsProps {
  ariaLabel: string
  dataUrl: string
  path: string
  pathLink?: string
  linkIconPath?: string
  translate?: string
  stroke?: string
  marginLeft?: string
}

const AriaTitle = styled.div`
  width: 1296px;
  height: 40px;
  display: flex;
  alignitems: flex-end;
  justify-content: space-between;
`

const TitleSection = styled.h4`
  color: rgb(0, 0, 0);
  display: block;
  font-family: KakaoBig;
  font-size: 30px;
  font-weight: 700;
  width: auto;
  height: 40px;
  margin-top: 100px;
  line-height: 40px;
`

const WrapShare = styled.div`
  margin-top: 4px;
  width: 168px;
  height: 36px;
  text-align: center;
  padding: 0;
`

const OptionComment = styled.div<{ view: boolean }>`
  position: relative;
  margin-top: 144px;
  width: 167px;
  height: 44px;

  ::after {
    position: absolute;
    top: ${({ view }) => (view ? '13px' : '18px')};
    right: 20px;
    border: 5px solid transparent;
    border-top: 5px solid #000;
    content: '';
    transform: ${({ view }) => (view ? 'rotate(180deg)' : 'rotate(0)')};
  }
`

const SelectedItem = styled.div`
  position: relative;
  width: 100%;
  height: 44px;
  border-radius: 30px;
  background: #eee;
  box-sizing: border-box;
`

const OptionBtn = styled.button`
  appearance: auto;
  display: block;
  overflow: hidden;
  position: relative;
  z-index: 10;
  width: 167px;
  height: 44px;
  padding: 8px 20px 12px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #000;
  text-align: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

const OptionBtnTxt = styled.span`
  display: inline;
  line-height: 1.5;
  font-family: KakaoSmall;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.5px;
  color: #000;
  text-align: left;
  white-space: nowrap;
`

const OptionUl = styled.ul<{ view: boolean }>`
  display: ${({ view }) => (view ? 'block' : 'none')};
  overflow-y: auto;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 56px;
  width: 100%;
  max-height: 202px;
  padding: 10px 0;
  border-radius: 12px;
  background: #eee;

  ::-webkit-scrollbar {
    display: block;
    width: 29px;
    background: #eee;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background: #d8d8d8;
    border-radius: 14px;
    background-clip: padding-box;
    border: 12px solid transparent;
  }
`

const ListMilestones = styled.ul`
  margin-top: 32px;
`

const ShareContents: ShareContentsProps[] = [
  {
    ariaLabel: '카카오톡으로 공유하기, 새창열림',
    dataUrl: 'https://www.kakaocorp.com/page/about/milestones?lang=KOR',
    path: 'M9.375 1.5C5.025 1.5 1.5 4.393 1.5 7.962c0 2.718 1.151 3.858 2.949 5.042l.01 3.315c0 .149.178.234.303.145L7.827 14.3c.5.082 1.018.125 1.548.125 4.35 0 7.875-2.893 7.875-6.463 0-3.569-3.526-6.462-7.875-6.462',
  },
  {
    ariaLabel: '페이스북으로 공유하기, 새창열림',
    dataUrl: 'https://www.kakaocorp.com/page/about/milestones?lang=KOR',
    path: 'M9.556 16.5V9.658h2.297l.344-2.667h-2.64V5.289c0-.772.213-1.298 1.321-1.298h1.412V1.604c-.684-.073-1.37-.107-2.058-.105-2.035 0-3.43 1.243-3.43 3.525v1.967H4.5v2.666h2.303V16.5h2.753z',
    marginLeft: '8px',
  },
  {
    ariaLabel: '트위터로 공유하기, 새창열림',
    dataUrl: 'https://www.kakaocorp.com/page/about/milestones?lang=KOR',
    path: 'M6.162 15.75c6.514 0 10.076-5.195 10.076-9.697 0-.149 0-.297-.008-.439.69-.48 1.293-1.081 1.77-1.767-.632.269-1.314.453-2.034.538.734-.425 1.292-1.089 1.557-1.888-.683.39-1.44.672-2.247.827-.647-.664-1.565-1.074-2.585-1.074-1.954 0-3.54 1.527-3.54 3.407 0 .268.03.53.095.777-2.944-.141-5.551-1.498-7.299-3.562-.301.502-.477 1.088-.477 1.71 0 1.18.624 2.227 1.579 2.835-.58-.014-1.124-.17-1.601-.424v.042c0 1.654 1.219 3.025 2.842 3.343-.294.078-.61.12-.933.12-.228 0-.448-.02-.668-.063.448 1.357 1.755 2.34 3.304 2.368-1.211.911-2.739 1.456-4.398 1.456-.287 0-.566-.014-.845-.05 1.55.976 3.415 1.541 5.412 1.541',
    marginLeft: '8px',
  },
  {
    ariaLabel: '링크 복사하기',
    dataUrl: 'https://www.kakaocorp.com/page/about/milestones?lang=KOR',
    path: 'M6.717 11.106l-.887.886c-1.333 1.334-3.496 1.334-4.83 0-1.333-1.334-1.333-3.496 0-4.83l2.146-2.145c1.334-1.334 3.496-1.334 4.83 0',
    linkIconPath:
      'M6.276 1.887L7.162 1c1.334-1.333 3.496-1.333 4.83 0 1.334 1.334 1.334 3.497 0 4.83L9.846 7.976c-1.333 1.334-3.496 1.334-4.83 0',
    translate: 'translate(2.25 2.25) translate(.035 .033)',
    stroke: '#333',
    marginLeft: '8px',
  },
]

function Milestones() {
  const [view, setView] = useState(false)

  const handleOptionClick = () => {
    setView(!view)
  }

  return (
    <>
      <TitleMain
        emphasize="연혁"
        txt="카카오가 걸어온 길"
        url="//t1.kakaocdn.net/kakaocorp/kakaocorp/service/ico_milestones.gif"
      />
      <AriaTitle>
        <TitleSection>
          카카오가 디딘 첫걸음부터 지금까지의 발걸음을 담았습니다
        </TitleSection>
        <WrapShare>
          <ul
            css={css({
              width: '168px',
              height: '36px',
              margin: '0',
              padding: '0',
            })}
          >
            {ShareContents.map((shareContent, index) => (
              <ShareBtn
                key={index}
                ariaLabel={shareContent.ariaLabel}
                dataUrl={shareContent.dataUrl}
                path={shareContent.path}
                linkIconPath={shareContent.linkIconPath}
                translate={shareContent.translate}
                stroke={shareContent.stroke}
                marginLeft={shareContent.marginLeft}
              />
            ))}
          </ul>
        </WrapShare>
      </AriaTitle>
      <OptionComment view={view}>
        <SelectedItem>
          <OptionBtn
            aria-expanded={view ? 'true' : 'false'}
            aria-haspopup="listbox"
            onClick={handleOptionClick}
          >
            <OptionBtnTxt>모든 연도</OptionBtnTxt>
          </OptionBtn>
        </SelectedItem>
        <OptionUl view={view}>
          <OptionList />
        </OptionUl>
      </OptionComment>
      <ListMilestones>
        <ListMilestonesLi />
      </ListMilestones>
    </>
  )
}

export default Milestones

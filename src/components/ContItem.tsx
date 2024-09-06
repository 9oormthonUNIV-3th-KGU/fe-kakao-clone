import styled from '@emotion/styled'
import { css } from '@emotion/react'
import OutlinkBtn from './OutlinkBtn'

interface TitItemProps {
  tit: string
  txt: string
  desc: string
  img: string
  link: string
}

const Cont = styled.div`
  padding-botton: 196px;
  width: 612px;
  height: 528px;
  border-bottom: 1px solid #ededed;
`

const TitItem = styled.strong`
  padding-top: 36px;
  width: 612px;
  height: 40px;
  font-family: KakaoBig, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
  font-size: 30px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  display: block;
`

const TxtItem = styled.span`
  margin-top: 12px;
  width: 612px;
  height: 80px;
  font-family: KakaoBig, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
  font-size: 30px;
  font-weight: 400;
  height: 80px;
  line-height: 40px;
  display: block;
`

const DescItem = styled.p`
  margin-top: 24px;
  width: 612px;
  height: 140px;
  color: rgb(102, 102, 102);
  font-family: KakaoSmall, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
  font-size: 16px;
  font-weight: 300;
  height: 140px;
  line-height: 28px;
  display: block;
`

const WrapLogo = styled.a`
  width: 612px;
  height: 44px;
  cursor: auto;
  display: block;
  font-family: KakaoSmall, 'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕',
    sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 44px;
  left: 0px;
  line-height: 21px;
`

const ImgLogo = styled.img`
  width: full;
  height: 44px;
`

function ContItem({ tit, txt, desc, img, link }: TitItemProps) {
  return (
    <>
      <Cont>
        <TitItem>{tit}</TitItem>
        <TxtItem dangerouslySetInnerHTML={{ __html: txt }} />
        <DescItem dangerouslySetInnerHTML={{ __html: desc }} />
        <WrapLogo href={img} target="_blank" rel="noopener noreferrer">
          <span
            css={css({
              position: 'relative',
              width: '612px',
              height: '44px',
              display: 'inline-flex',
              flexDirection: 'row',
              marginTop: '58px',
            })}
          >
            <ImgLogo src={link}></ImgLogo>
            <OutlinkBtn></OutlinkBtn>
          </span>
        </WrapLogo>
      </Cont>
    </>
  )
}

export default ContItem

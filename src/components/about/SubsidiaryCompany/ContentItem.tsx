import styled from '@emotion/styled'
import { css } from '@emotion/react'
import OutlinkSvg from './OutlinkSvg'

interface TitleItemProps {
  title: string
  txt: string
  description: string
  img: string
  link: string
}

const Content = styled.div`
  padding-bottom: 196px;
  width: 612px;
  height: auto;
`

const TitleItem = styled.strong`
  padding-top: 36px;
  width: 612px;
  height: 40px;
  font-family: KakaoBig;
  font-size: 30px;
  font-weight: 700;
  height: 40px;
  line-height: 40px;
  display: block;
`

const TxtItem = styled.span`
  margin-top: 12px;
  width: 612px;
  height: auto;
  font-family: KakaoBig;
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
  display: block;
`

const DescriptionItem = styled.p`
  margin-top: 24px;
  margin-bottom: 0px;
  width: 612px;
  height: auto;
  color: rgb(102, 102, 102);
  font-family: KakaoSmall;

  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  display: block;
`

const ImgLogo = styled.img`
  width: auto;
  height: 44px;
`

function ContentItem({ title, txt, description, img, link }: TitleItemProps) {
  return (
    <>
      <Content>
        <TitleItem>{title}</TitleItem>
        <TxtItem dangerouslySetInnerHTML={{ __html: txt }} />
        <DescriptionItem dangerouslySetInnerHTML={{ __html: description }} />
        <a
          css={css({
            position: 'absolute',
            bottom: '96px',
            width: '612px',
            height: '44px',
            cursor: 'auto',
            display: 'block',
            fontFamily: 'KakaoSmall',
            fontSize: '14px',
            fontWeight: '400',
            left: '0px',
            lineHeight: '21px',
          })}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            css={css({
              position: 'relative',
              width: '612px',
              height: '44px',
              display: 'inline-flex',
              flexDirection: 'row',
            })}
          >
            <ImgLogo src={img}></ImgLogo>
            <OutlinkSvg></OutlinkSvg>
          </span>
        </a>
      </Content>
    </>
  )
}

export default ContentItem

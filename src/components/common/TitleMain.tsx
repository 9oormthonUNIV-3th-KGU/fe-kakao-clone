import styled from '@emotion/styled'

interface TitleMainProps {
  emphasize: string
  txt: string
  url: string
}

const Main = styled.div<{ url: string }>`
  width: 1296px;
  height: 124px;
  font-family: KakaoBig;
  padding-top: 96px;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-position: 0px 94px;
  background-size: 72px 72px;
  margin: 0;
`

const EmphasizeTitle = styled.h3`
  padding-left: 84px;
  width: 1212px;
  height: 66px;
  font-size: 53.81px;
  font-weight: 700;
  line-height: 66px;
  letter-spacing: -1px;
  color: var(--baseForeground);
  margin: 0;
`

const TxtTitle = styled.span`
  margin-top: 22px;
  width: 1296px;
  height: 36px;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: -1px;
  display: block;
`

function TitleMain({ emphasize, txt, url }: TitleMainProps) {
  return (
    <Main url={url}>
      <EmphasizeTitle>{emphasize}</EmphasizeTitle>
      <TxtTitle>{txt}</TxtTitle>
    </Main>
  )
}

export default TitleMain

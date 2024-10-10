import styled from '@emotion/styled'
import { css } from '@emotion/react'

interface ShareBtnProps {
  ariaLabel: string
  dataUrl: string
  path: string
  linkIconPath?: string
  translate?: string
  stroke?: string
  marginLeft?: string
}

const Share = styled.button<{ marginLeft?: string }>`
  align-items: flex-start;
  appearance: auto;
  background-color: transparent;
  padding: 0;
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  border: none;
  cursor: pointer;

  &:hover circle {
    fill: #000;
  }

  &:hover path.icon {
    fill: #eee;
    stroke: #eee;
  }
`

const ShareSvg = styled.svg`
  display: block;
  width: 36px;
  height: 36px;
`

const ShareCircle = styled.circle`
  fill: #eee;
  cx: 18px;
  cy: 18px;
  r: 18px;
  text-align: center;
`

function ShareBtn({
  ariaLabel,
  dataUrl,
  path,
  linkIconPath,
  translate,
  stroke,
  marginLeft,
}: ShareBtnProps) {
  return (
    <Share aria-label={ariaLabel} data-url={dataUrl} marginLeft={marginLeft}>
      <ShareSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
        <g css={css({ fill: 'none', fillRule: 'evenodd' })}>
          <g transform={`translate(-639 -362) translate(639 362)`}>
            <ShareCircle />
            <g css={css({ width: 'auto', height: 'auto', display: 'inline' })}>
              <path
                d={linkIconPath || 'M0 0H18V18H0z'}
                transform={`translate(9 9) ${translate || ''}`}
                css={css({
                  stroke: stroke ? stroke : 'none',
                })}
              />
              <path
                className="icon"
                d={path}
                transform={`translate(9 9) ${translate || ''}`}
                css={css({
                  stroke: stroke ? stroke : 'none',
                  fill: stroke ? 'none' : '#333',
                })}
              />
            </g>
          </g>
        </g>
      </ShareSvg>
    </Share>
  )
}

export default ShareBtn

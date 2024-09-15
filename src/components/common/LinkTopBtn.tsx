import styled from '@emotion/styled'
import { css } from '@emotion/react'

const TopBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 0px;
  left: 1246px;
  bottom: 36px;
  appearance: auto;
  background-color: transparent;
  border-image-repeat: stretch;
  cursor: pointer;
  padding: 0;
  border: none;
  &:hover circle {
    fill: #444;
  }
`

const TopSvg = styled.svg`
  width: 50px;
  height: 50px;
`

const TopCircle = styled.circle`
  fill: #000;
  cx: 25px;
  cy: 25px;
  r: 25px;
`

function LinkTopBtn() {
  const goToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <TopBtn onClick={goToTop}>
      <TopSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <g css={css({ fill: 'none', fillRule: 'evenodd' })}>
          <g transform="translate(-1318 -4124) translate(1318 4124)">
            <TopCircle />
            <g css={css({ strokeWidth: '1.5' })}>
              <path
                d="M8.467 16.933L0 8.467 8.467 0M.085 8.467L19.918 8.534"
                transform="rotate(90 9.5 24)"
                css={css({ stroke: '#fff' })}
              />
            </g>
          </g>
        </g>
      </TopSvg>
    </TopBtn>
  )
}

export default LinkTopBtn

import styled from '@emotion/styled'
import { css } from '@emotion/react'

const OutlinkCircle = styled.svg`
  position: absolute;
  right: 0px;
  margin-bottom: 96px;
  width: 44px;
  height: 44px;
  box-sizing: border-box;
  &:hover circle {
    fill: #ddd;
  }
`

function OutlinkSvg() {
  return (
    <>
      <OutlinkCircle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
        <g css={css({ fill: 'none', fillRule: 'evenodd' })}>
          <g
            css={css({
              transform: 'translate(-640px, -581px) translate(640px, 581px)',
            })}
          >
            <circle
              cx="22"
              cy="22"
              r="22"
              css={css({
                fill: '#eee',
              })}
            />
            <g>
              <path d="M0 0H14V14H0z" transform="translate(15 15)" />
              <path
                d="M2.792 1.67L12.354 1.67 12.354 11.233M12.354 1.67L2.143 11.881"
                transform="translate(15 15)"
                strokeWidth="1.5"
                css={css({ stroke: 'black' })}
              />
            </g>
          </g>
        </g>
      </OutlinkCircle>
    </>
  )
}

export default OutlinkSvg

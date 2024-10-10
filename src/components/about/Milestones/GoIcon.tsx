import styled from '@emotion/styled'

const GoSvg = styled.svg`
  width: 14px;
  height: 14px;
  margin-top: 8px;
  margin-left: 8px;
  stroke: #000000;
`

function GoIcon() {
  return (
    <>
      <GoSvg viewBox="0 0 14 14" fill="none">
        <polyline
          data-v-289a64ed=""
          id="Stroke-1"
          transform="translate(7.000000, 7.500000) scale(-1, 1) rotate(90.000000) translate(-7.000000, -7.500000) "
          points="13 5 7 10 1 5"
        ></polyline>
      </GoSvg>
    </>
  )
}

export default GoIcon

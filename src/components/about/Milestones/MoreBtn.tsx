import styled from '@emotion/styled'
import { css } from '@emotion/react'

const StyledBtn = styled.button`
  width: 100px;
  height: 42px;
  margin-top: 40px;
  padding-right: 20px;
  padding-left: 20px;
  border-radius: 21px;
  background-color: #eee;
  border: 0;
`

function MoreBtn() {
  return (
    <>
      <StyledBtn>
        <strong
          css={css({
            fontFamily: 'KaKaoBig',
            fontSize: '14px',
            fontWeight: '700',
          })}
        >
          더보기
        </strong>
        <svg
          data-v-9d92f428=""
          data-v-6d25c8f8=""
          width="14"
          height="14"
          fill="none"
          stroke="#000000"
          viewBox="0 0 14 14"
          css={css({ marginTop: '4px', marginLeft: '6px' })}
        >
          <path data-v-9d92f428="" stroke-width="1.5" d="M13 4 7 9 1 4"></path>
        </svg>
      </StyledBtn>
    </>
  )
}

export default MoreBtn

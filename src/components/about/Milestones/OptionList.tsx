import styled from '@emotion/styled'

const Option = styled.button<{ fontWeight?: string }>`
  position: relative;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 6px;
  border: 0;
  margin: 0;
  width: 138px;
  height: 36px;
  align-items: flex-start;
  appearance: auto;
  font-family: KakaoSmall;
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  letter-spacing: normal;
  line-height: 24px;
  color: rgb(0, 0, 0);
  cursor: pointer;
  display: block;
  text-align: left;
  writing-mode: horizontal-tb;
  background-color: transparent;
`

function OptionList() {
  return (
    <>
      {/* map */}
      <Option fontWeight="700">모든 연도</Option>
      <Option>2024</Option>
      <Option>2023</Option>
      <Option>2022</Option>
      <Option>2021</Option>
      <Option>2020</Option>
      <Option>2019</Option>
      <Option>2018</Option>
      <Option>2017</Option>
      <Option>2016</Option>
      <Option>2015</Option>
      <Option>2014</Option>
      <Option>2013</Option>
      <Option>2012</Option>
      <Option>2011</Option>
      <Option>2010</Option>
      <Option>2008</Option>
      <Option>2006</Option>
      <Option>2006</Option>
      <Option>2004</Option>
      <Option>1999</Option>
      <Option>1997</Option>
      <Option>1995</Option>
    </>
  )
}

export default OptionList

import styled from '@emotion/styled'

interface Props {
  title: React.ReactNode
  description: React.ReactNode
  image: string
}

const Card = styled.div`
  position: relative;
  width: 264px;
  height: 316px;
  background-color: #fff;
  padding: 18px;
  border-radius: 12px;
  font-family:
    KakaoBig,
    Apple SD Gothic Neo,
    Malgun Gothic,
    맑은 고딕,
    sans-serif;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
  margin-bottom: 30px;
`

const Title = styled.strong`
  display: block;
  font-size: 22px;
  margin: 6px 0px 8px;
  letter-spacing: -0.6px;
  line-height: 1.45;
`

const Description = styled.p`
  display: block;
  font-size: 14px;
  letter-spaicing: -0.44px;
  line-height: 1.5;
  margin: 0;
`

const Image = styled.img`
  position: absolute;
  right: 18px;
  bottom: 18px;
  width: 162px;
  height: 162px;
`

const Button = styled.button`
  position: absolute;
  left: 18px;
  bottom: 18px;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 16px;
  z-index: 10;
  background-color: #eee;
  cursor: pointer;
`

const PlusIcon = styled.svg`
  display: block;
  margin: 0 auto;
  width: 12px;
  height: 12px;
`

const HighlightCard = ({ title, description, image }: Props) => {
  return (
    <>
      <Card>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Image src={image}></Image>
        <Button>
          <PlusIcon
            data-v-75150fa2=""
            data-v-58fb0f01=""
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
          >
            <path
              data-v-75150fa2=""
              d="M6.222 0H7.7780000000000005V14H6.222z"
              transform="translate(-1414 -643) translate(80 245) translate(1334 398)"
            ></path>{' '}
            <path
              data-v-75150fa2=""
              d="M6.222 0H7.7780000000000005V14H6.222z"
              transform="translate(-1414 -643) translate(80 245) translate(1334 398) rotate(90 7 7)"
            ></path>
          </PlusIcon>
        </Button>
      </Card>
    </>
  )
}

export default HighlightCard

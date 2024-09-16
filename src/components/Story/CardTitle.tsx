import styled from "@emotion/styled";
import CardHeader from "./CardHeader";

interface CardTitleProps {
    data: {
        icon: string;
        category: string;
        date: string;
        title: string;
        subTitle: string;
        tags: string[];
        image: string;
    }[];
}

const Wrapper = styled.div`
    width: 365px;
    height: 435px;
    padding: 24px 25px 0px;
    border-radius: 20px;
    position: relative;
    background-color: var(--colorBg10);
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, .09);
    transition: transform 0.3s ease;
    margin-bottom: 36px;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, .2);
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.strong`
    font-size: 30px;
    font-weight: bold;
    margin-top: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: KakaoBig;
`;

const SubTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-top: 13px;
    margin-bottom: 18px;
    font-family: KakaoSmall;
`;

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const HashTag = styled.span`
    font-size: 13px;
    margin: 0px 3px 0px 0px;
    margin-top: 15px;
    font-family: KakaoSmall;
`;

const Image = styled.img`
    width: 100%;
    height: 235px;
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const CardTitle: React.FC<CardTitleProps> = ({data}) => {
    return (
        <>
            {data.map((item, index) => (
                <Wrapper key={index}>
                    <CardHeader 
                        icon={item.icon}
                        category={item.category}
                        date={item.date}
                    />
                    <Column>
                        <Title>{item.title}</Title>
                        <SubTitle>{item.subTitle}</SubTitle>
                        <TagContainer>
                            {item.tags.map((tag, index) => (
                                <HashTag key={index}>{tag}</HashTag>
                            ))}
                        </TagContainer>
                    </Column>
                    <Image src={item.image} alt={`카드 이미지 ${index + 1}`} />
                </Wrapper>
            ))}
        </>
    );
}

export default CardTitle;
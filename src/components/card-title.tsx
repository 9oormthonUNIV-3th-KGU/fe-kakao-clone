import styled from "@emotion/styled";
import CardHeader from "./card-header";

const Wrapper = styled.div`
    width: 365px;
    height: 435px;
    padding: 24px 25px 0px;
    border-radius: 20px;
    position: relative;
    background-color: var(--colorBg10);
    box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, .09);
    transition: transform 0.3s ease;

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
`;

const SubTitle = styled.span`
    font-size: 18px;
    font-weight: bold;
    margin-top: 13px;
    margin-bottom: 18px;
`;

const HashTag = styled.span`
    font-size: 13px;
    margin: 0px 3px 0px 0px;
    margin-top: 15px;
`;

const Image = styled.img`
    width: 100%;
    height: 235px;
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const data = [
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.08.29",
        "title": "[주니어랩] 카카오모빌리티의 작은 연구실, 주니어랩",
        "subTitle": "카카오모빌리티",
        "tags": ["#임팩트", "#주니어랩", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2Fb03fc30c019100001.jpg"
    },
];
  

function CardTitle() {
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
                        <HashTag>{item.tags.join(' ')}</HashTag>
                    </Column>
                    <Image src={item.image} alt={`카드 이미지 ${index + 1}`} />
                </Wrapper>
            ))}
        </>
    );
}

export default CardTitle;
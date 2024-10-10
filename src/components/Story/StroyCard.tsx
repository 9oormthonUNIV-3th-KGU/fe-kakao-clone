import styled from "@emotion/styled";
import CardHeader from "./CardHeader";

interface StoryCardProps {
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

const Card = styled.div`
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

const Image = styled.img`
    width: 100%;
    height: 235px;
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: 0;
    left: 0;
`;

const StoryCard: React.FC<StoryCardProps> = ({data}) => {
    return (
        <>
            {data.map((item, index) => (
                <Card key={index}>
                    <CardHeader 
                        icon={item.icon}
                        category={item.category}
                        date={item.date}
                        title={item.title}
                        subTitle={item.subTitle}
                        tags={item.tags}
                    />
                    <Image src={item.image} alt={`카드 이미지 ${index + 1}`} />
                </Card>
            ))}
        </>
    );
}

export default StoryCard;
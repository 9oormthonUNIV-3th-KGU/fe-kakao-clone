import styled from "@emotion/styled";
import { css } from "@emotion/react";
import ShareMenuIcon from "../../assets/icons/ShareMenuIcon";

interface CardHeaderProps {
    icon: string
    category: string
    date: string
    title: string
    subTitle: string
    tags: string[]
}

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LeftGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const ImgIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const CategoryStyle = css`
    display: inline-block;
    position: relative;
    height: 34px;
    margin-top: 1px;
    padding: 0 13px;
    border-radius: 13px;
    font-size: 13px;
    line-height: 34px;
    background-color: #EEEEEE;
    vertical-align: top;
    font-family: KakaoBig;

    &::before {
        content: '';
        position: absolute;
        left: -4px;
        top: 2px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #EEEEEE;
    }
`;

const Category = styled.div`
    ${CategoryStyle}
`;

const Date = styled.span`
    color: #666666;
    font-size: 12px;
    font-family: KakaoSmall;
`;

const ShareMenu = styled.svg`
    display: block;
    width: 20px;
    height: 20px;
    margin: 0px 2px;
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

function CardHeader({ icon, category, date, title, subTitle, tags }: CardHeaderProps) {
    return (
        <div>
            <Row>
                <LeftGroup>
                    <ImgIcon src={icon} alt="icon" />
                    <Category>{category}</Category>
                    <Date>{date}</Date>
                </LeftGroup>
                <ShareMenuIcon />
            </Row>
            <Column>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <TagContainer>
                    {tags.map((tag, index) => (
                        <HashTag key={index}>{tag}</HashTag>
                    ))}
                </TagContainer>
            </Column>
        </div>
    );
}

export default CardHeader;
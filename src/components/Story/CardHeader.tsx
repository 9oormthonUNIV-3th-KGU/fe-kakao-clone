import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface CardHeaderProps {
    icon: string,
    category: string,
    date: string;
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

function CardHeader({ icon, category, date }: CardHeaderProps) {
    return (
        <Row>
            <LeftGroup>
                <ImgIcon src={icon} alt="icon" />
                <Category>{category}</Category>
                <Date>{date}</Date>
            </LeftGroup>
            <ShareMenu viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" />
                <circle cx="2" cy="10" r="2" />
                <circle cx="2" cy="18" r="2" />
            </ShareMenu>
        </Row>
    );
}

export default CardHeader;
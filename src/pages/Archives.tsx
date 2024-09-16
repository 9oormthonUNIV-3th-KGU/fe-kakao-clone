import styled from "@emotion/styled";
import CardTitle from "../components/Story/CardTitle";

const ArchivesContents = styled.ul`
    width: 1332px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
`;

const Content = styled.li`
    width: 30%;
    margin: 0 20px;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

function chunkArray<T>(arr: T[], size: number) {
    const result = [];
    for(let i=0; i<arr.length; i+=size) {
        result.push(arr.slice(i,i+size));
    }
    return result;
}

const datas = [
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.08.29",
        "title": "[주니어랩] 카카오모빌리티의 작은 연구실, 주니어랩",
        "subTitle": "카카오모빌리티",
        "tags": ["#임팩트", "#주니어랩", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2Fb03fc30c019100001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.08.21",
        "title": "[기브셔틀 2회차] 수달의 서식지를 보호하라! 🦦",
        "subTitle": "카카오모빌리티",
        "tags": ["#기브셔틀", "#임팩트", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F9b947ff7019100001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.08.07",
        "title": "미래의 주인공, 아이들의 꿈을 카카오모빌리티가 응원합니다",
        "subTitle": "카카오모빌리티",
        "tags": ["#미래모빌리티", "#임팩트", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F6f14ebd2019100001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.07.15",
        "title": "카톡 특) 이모티콘 없이 말 못함🤭 feat. 프로미스나인 & 라이즈ㅣ 당신의 카톡이지 EP.4",
        "subTitle": "카카오",
        "tags": ["#당신의카톡이지", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F6f00c6c9019100001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.07.03",
        "title": "[기브셔틀] 카카오 T와 함께 떠나는 GIVE & GET 봉사여행",
        "subTitle": "카카오",
        "tags": ["#기브셔틀", "#임팩트", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F9b947ff7019100001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.06.25",
        "title": "카톡이 세상에서 제일 쉬워야 하는 이유 💡ㅣ모두의 삶 프로젝트 EP.4",
        "subTitle": "카카오",
        "tags": ["#모두의삶프로젝트", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F712fbd08019000001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.06.12",
        "title": "결제는. 어디서나 #카카오페이",
        "subTitle": "카카오",
        "tags": ["#제로페이", "#카카오페이", "#카페이백"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F713a2351019000001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.06.11",
        "title": "유기견 봉사를 시작하는 가장 쉬운 방법 🐶 ft. 카카오톡 오픈채팅 🤳ㅣ모두의 삶 프로젝트 EP.3",
        "subTitle": "카카오",
        "tags": ["#모두의삶프로젝트", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F712c8bc1019000001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.05.21",
        "title": "이런 가족, 저런 가족, 요런 가족 다 만나고 옴🏡ㅣ 당신의 카톡이지 EP.3",
        "subTitle": "카카오",
        "tags": ["#당신의카톡이지", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2F7126c3a0019000001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.04.19",
        "title": "장애인 국가대표들의 국대급 카톡 사용법! 이렇게 금메달까지 가는거야~!ㅣ 당신의 카톡이지 EP.2",
        "subTitle": "카카오",
        "tags": ["#당신의카톡이지", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2Fc37e753c018f00001.jpg"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "임팩트",
        "date": "2024.04.19",
        "title": "[서대문희망차] 이용자 분들이 보내주신 응원의 메시지",
        "subTitle": "카카오",
        "tags": ["#서대문희망차", "#임팩트", "#카카오모빌리티"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2Fc8aa85d8018f00001.png"
    },
    {
        "icon": "https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/category/dd2b88f5018800001.png?type=thumb&opt=C72x72.fwebp",
        "category": "서비스",
        "date": "2024.03.21",
        "title": "요즘 대학생들 카톡 근황 : 아이돌한테 고백하고 친구 사귀고 AI 찍먹 중 ㅣ당신의 카톡이지 EP.1",
        "subTitle": "카카오",
        "tags": ["#당신의카톡이지", "#카카오", "#카카오톡"],
        "image": "https://t1.kakaocdn.net/thumb/C630x354.fwebp.q100/?fname=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Farchives%2Fc3773580018f00001.jpg"
    },
];

function Archives() {
    const rows = chunkArray(datas, 3);

    return (
        <ArchivesContents>
            {rows.map((row, rowIndex)=>(
                <Row key={rowIndex}>
                    {row.map((item, index) => (
                        <Content key={index}>
                            <CardTitle data={[item]} />
                        </Content>
                    ))}
                </Row>
            ))}
        </ArchivesContents>
    );
}

export default Archives;
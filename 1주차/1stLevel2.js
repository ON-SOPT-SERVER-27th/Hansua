/*
과제 2
자신의 팀원들을 소개할 수 있는 json Array 만들기 
(팀원들의 이름, 사는 곳, 나이, 취미, 정보를 출력하는 함수 포함)
*/

const teamMember = [
    {
    name: '김지현',
    location: '서초구 잠원동',
    age: '22',
    hobby: '운동',
    },

    {
    name: '박상수',
    location: '인천광역시 연수구',
    age: '27',
    hobby: '사진찍기',
    },

    {
    name: '한수아',
    location: '서울시 강서구',
    age: '22',
    hobby: '영상편집',
    },

    {
    name: '신연상',
    location: '서울시 강남구',
    age: '21',
    hobby: '유튜브&방탈출',
    },

    {
    name: '강준우',
    location: '경기도 성남시 분당구',
    age: '24',
    hobby: '음악듣기, 운동하기',
    },
];

var introduce = teamMember.map((member) => {
    const name = members.map(item => item.name);
    const location = members.map(item => item.location);
    const age = members.map(item => item.age);
    const hobby = members.map(item => item.hobby);
    1
    console.log(`팀원이름 ${member.name}, 사는 곳 :  ${member.location}, 
    나이 : ${member.age}, 취미 : ${member.hobby}`)
}

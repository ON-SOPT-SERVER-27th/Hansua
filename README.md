# Hansua
🎀이름 : 한수아 <br>
🎀사는곳 : 서울시 강서구<br>
🎀나이 : 22 <br>
🎀취미 : 영상편집 <br>


# Node.js 개발 시 주의사항
<h3> 1. 이벤트 루프의 블록킹 </h3>
Node.js의 자바스크립트는 싱글 쓰레드 방식의 환경입니다. 
두 개의 작업을 병렬로 진행하는 것이 불가능하기 때문에 IO기반으로 비동기적으로 동시에 발생하는 여러 작업들을 다루고 있습니다.

만약 Node.js가 데이터베이스의 데이터를 가져오는 작업을 요청하면, 데이터를 가져오는 동안 어플리케이션의 다른 일에 집중 할 수 있게 됩니다.
 <code>
  db.User.get(userId, function(err, user) {
           // 여기에 데이터가 불려오는 동안 다른 일을 함
})
 </code>

그러나 처리할 작업이 클 경우에는 문제가 생길 수 있습니다.
예를 들어 매우 큰 배열을 sorting 하거나 매우 큰 loop를 도는 작업 등이 있다고 가정한다면,
 <code>
 function sortUsersByAge(users) {
           users.sort(function(a, b) {
                     return a.age < b.age ? -1 : 1
           })
}
 </code>

사용자가 적다면 문제가 없지만 수천 수만 명이 동시에 접속해서 동일한 작업을 요청할 경우, 이전 작업이 마칠 때까지 다른 사용자들은 결과를 오래 기다려야 하는 문제가 발생합니다. 
(결국 callback을 통한 비동기적인 코드의 효과가 전혀 없어지게 됩니다.)









출처 https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
</PRE>

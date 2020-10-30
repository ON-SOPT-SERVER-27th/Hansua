# Hansua
🎀이름 : 한수아 <br>
🎀사는곳 : 서울시 강서구<br>
🎀나이 : 22 <br>
🎀취미 : 영상편집 <br>

<PRE>
<h1> Node.js 개발 시 주의사항 </h1>

<h3> 1. 이벤트 루프의 블록킹 </h3>

Node.js의 자바스크립트는 싱글 쓰레드 방식의 환경입니다. 
두 개의 작업을 병렬로 진행하는 것이 불가능하기 때문에 
IO기반으로 비동기적으로 동시에 발생하는 여러 작업들을 다루고 있습니다.

예를들면 Node.js가 데이터베이스의 데이터를 가져오는 작업을 요청을 한다면 
데이터를 가져오는 동안 어플리케이션의 다른 일에 집중 할 수 있다는 말입니다.
 <code>
  db.User.get(userId, function(err, user) {
           // 여기에 데이터가 불려오는 동안 다른 일을 함
})
 </code>









출처 https://www.toptal.com/nodejs/top-10-common-nodejs-developer-mistakes
</PRE>

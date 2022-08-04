
# Twodo-li(투두리)

친구와 함께 Todo를 완주하며 나만의 아바타를 성장시키자!
<br></br>
<img src="https://user-images.githubusercontent.com/102137877/182862057-94943ad6-d349-4cb8-8967-6e595bdc8654.jpg" width="100%" />
<br></br>

💘 [Twodo-li 바로가기](https://todo-li.click/)
<br/>
💓 [Twodo-li Notion 바로가기](https://spice-hoodie-f35.notion.site/Twodo-li-24208171115f4ddead5e22e1cde7ee8a)
<br/>
🎥 [Twodo-li 시연영상 바로가기](https://www.youtube.com/watch?v=lHrFr86lD0Y)

<br/>
<br/>

##  Twodo-li 서비스 소개
챗바퀴같은 일상속에서 **Twodo-li가 즐거움을 줄 수 있다면**,<br/>
Twodo-li가 지루한 Todolist달성을 도와드릴게요.<br/>

Twodo-li서비스는 `Todo를 친구와 작성하고 서로가 목표달성을 위한 동료가 됩니다.` <br/>
그 과정에서 자신의 `캐릭터도 자유롭게 꾸밀 수 있어요.`

<br/>
<br/>

##  핵심기능


##  기술스택
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)        
<img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> 
![Google](https://img.shields.io/badge/google-4285F4.svg?style=for-the-badge&logo=google&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)         
![Axios](https://img.shields.io/badge/Axios-%23593d88.svg?style=for-the-badge&logoColor=000000)
![PWA](https://img.shields.io/badge/PWA-%239146FF.svg?style=for-the-badge&logoColor=000000)
<img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=Chart.js&logoColor=white">
<img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white">

##  기술스택 선정이유

## 서비스 아키텍처
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7c812c8c-289f-404d-b192-e7e511c55f37/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220804T142506Z&X-Amz-Expires=86400&X-Amz-Signature=0fcbc18f5a90881b60a9f547db6758589ff41b83d9118c8d4d7e88cbbf4db764&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject">

##  Troble Shooting

<details>
  <summary>1.구글 OAUTH 인증 구현</summary>
  <div markdown="1">
    <br/>
    <strong>[문제발생]</strong> 처음에는 서버가 주로 구글 로그인을 구현하는 방식으로 하려고 했으나 구글 로그인 페이지로의 리다이렉트와 로그인 이후의 리다이렉트 모두 제대로 실행되지 않았습니다.
    <br/>
    <br/>
    <strong>[의사 결정]</strong> 디버깅을 하면서 서버에서 리다이렉트시키는 방식은 서버와 웹이 같은 도메인을 사용할 때 가능한 방식이라는 것을 알게 되었습니다. 따라서 프론트에서 구글 로그인을 구현하는 방식으로 하기로 결정하였습니다.
    <br/>
    <br/>
    <strong>[해결방안]</strong> <br/>
    1. 프론트에서 유저에게 구글 로그인 페이지를 띄우는 것<br/>
    2. 로그인 성공 시 코드를 받아서 서버가 해당 코드로 구글로부터 토큰을 받는 것<br/>
    3. 그 토큰을 프론트로 전달받아 로그인 성공한 상태로 만드는 것.<br/>
이 세 가지가 핵심적인 플로우라고 파악하여, 구글 로그인 페이지 주소를 생성하여 리다이렉트하는 부분과 유저가 구글 로그인에 성공한 이후 다시 서버에 토큰을 요청하는 부분을 프론트에서 구현하여 구글 로그인 기능을 붙일 수 있었습니다.
  </div>
</details>
  
<details>
  <summary>2. PWA 적용</summary>
  <div markdown="2">
    <br/>
    <strong>[도입이유]</strong> 프로젝트의 주제가 웹사이트보다 웹앱의 구조에 가까웠기때문에 모바일에서의 사용성을 고려했습니다. 하지만 지금까지 배웠던 웹기술로는 네이티브앱으로 동작하는것이 어려울 것이라 판단하여  PWA를 적용했습니다.
    <br/>
    <br/>
    <strong>[문제발생]</strong> : pwa의 service-worker와 manifest가 제대로 적용이 되지 않는 것을 발견했습니다.
    <br/>
    <br/>
    <strong>[해결방안]</strong> <br/>
    1)service-worker 적용해결<br/>
    우선은 service-worker가 로컬에서 적용할 수 없는 것을 발견했습니다.<br/>
    <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d722d505-2e25-4d88-9d6a-88f74b980390/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220804T151825Z&X-Amz-Expires=86400&X-Amz-Signature=ed0f80892d0e71c7ccdb131a4d570ad777b32b8f72dac1a0b74490b6077df485&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"><br/>
    아직 배포단계 전이었기 때문에 build한 파일을 로컬에서 볼 수 있는 라이브러리를 설치한 후 실험해보니 service-worker는 정상적으로 도입이 되는것을 확인했습니다.
    <br/><br/>
    2) manifest 적용해결<br/>
    PWA를 적용하려면 필수적으로 http가 아닌 https로 배포를 해야 적용이 될 수 있다는 것을 알고<br/>
   프로젝트 초반이라 쉽게 https 주소를 주는 깃허브와 ngrok로 실험해봤지만 적용이 되지 않았습니다.<br/>
    그래서 아예 실제 배포 하는것처럼 S3로 배포를 해보기로 결정했습니다.<br/>
    ROUTE53으로 도메인을 신청한 뒤 ACM에서 받은 도메인으로 SSL 인증서를 신청하고<br/>
    CloudFront로 https로 무조건 리다이렉트 시키도록 한 뒤 https 주소를 배당받았더니 정상적으로 PWA가 동작하는 것을 확인했습니다.

    
  </div>
</details>

##  팀원소개

|이름|담당|깃허브|
|---|---|---|
|김환희|FrontEnd|https://github.com/JoyKim66|
|백종석|BackEnd|https://github.com/devjjongs|
|전성영|BackEnd|https://github.com/junsj119|
|함형준|BackEnd|https://github.com/hyeongjun-Ham|
|윤가람|Designer||






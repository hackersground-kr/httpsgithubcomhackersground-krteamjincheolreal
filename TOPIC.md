저희 신진철 팀이 개발한 `Jump Up Happy School`은 사교육을 받지 못하는 환경에 있는 학생들과 학업에 뒤쳐져 기본 개념 조차 습득하지 못한 학생들을 위해 개발되었습니다.

1. 해당 플랫폼을 개발하게 된 배경
- 교육 문제가 대구와 경북 지역 뿐만 아니라 전국적인 사회적 문제로 대두되고 있음. 특히 사교육이 잘 발달된 지역의 학생들은 다양한 교육 옵션을 선택할 수 있어서 빠르게 성장할 수 있음.
- 그러나 저소득층이나 농어촌 지역과 같이 교육을 받기 어려운 환경에 있는 학생들은 그러지 못함. 또한 최근 들어서 학업을 따라가지 못하는 학생들이 바로 포기하는 경우도 많이 증가하고 있음.
- 이는 공교육의 특성상 수업을 한 번 놓쳐버리게 되면, 학업을 계속해서 놓쳐버리기 때문임.

2. 해결 방안
- 인터넷이라는 매체를 통해서 누구나 들을 수 있도록 접근성을 높여 지역 간의 교육 편차를 줄일 수 있음. 또한 높은 사교육비 같은 경우에는 문제를 랜덤으로 생성하는 알고리즘을 개발하여 무료로 학습할 수 있게 하여 해결할 수 있음.
- 뒤쳐지거나 뒤늦게 공부를 시작하는 학생들에게는 기본적인 개념을 잡을 수 있는 문제를 제공하여 도움을 줄 수 있음.

3. 아키텍처
- [Architecture Diagram]<br>
![제목 없는 다이어그램 drawio (2)](https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/0ca39a03-2b7e-4c99-8d81-8df464322333)
- 사용자가 WEB에 접근을 하여 로그인을 하면 mySQL 정보와 대조하여 이상이 없다면 접속 가능.
- 프론트 서버는 리액트를 사용하여 구현하였고, 백엔드 서버는 플라스트를 통해 구현함.
- Azure Web Server와 Azure Database for MySQL을 통해 배포.
4. 주요 기능 소개
- 현재 제공 과목은 수학과 영어로 크게 두 가지임.
- 이용자가 첫 방문일 경우, 수학과 영어에 대한 역량 체크를 위한 간단한 시험을 보게 됨.
- 수학 과목에서는 사칙연산부터 다항식, 함수, 부등식 등의 문제를 풀며 개념을 익힐 수 있고 영어 과목에서는 기본 단어, 문법, 독해 등의 문제를 풀면서 개념을 익힐 수 있음.
- 또한 사용자끼리 문제를 낼 수 있는 게시판 기능을 제공함으로써 다양한 문제를 접할 수 있고 다양한 풀이를 공유할 수 있음.(개발 예정)
- 문제를 맞출 때마다 레벨이 증가하여 이를 통해 학업에 대한 흥미 유도가 가능함.(개발 예정)
5. 기대효과
  - 먼저, 무료이기 때문에 누구나 자유롭게 학습을 할 수 있어 교육 불균형 문제를 해결할 수 있음.
  - 사교육 비용을 절감할 수 있음.
  - 학생들의 학업에 대한 관심과 흥미를 높일 수 있음.
  - 학업을 늦게 접해 기본 개념부터 쌓고 싶거나 학업에 뒤쳐진 학생들도 플랫폼 사용으로 인해 천천히 정진할 수 있음.
6. 향후 계획
  - 수학과 영어 뿐만 아니라, 한국사와 국어 과목을 추가할 예정임.
  - 수학 과목에서 연립방정식 문제와 입체도형 넓이 구하기 문제 등 중고등학교 교육 과정의 문제를 차근차근 추가할 예정임. 영어 과목에서는 문법과 독해 관련 문제를 추가할 예정임.
  - 사용자들끼리 소통할 수 있는 게시판 기능을 추가할 예정임.
  - 게시판을 추가하게 된다면 사용자들끼리 문제를 출제하여 다양한 문제를 접할 수 있고 다양한 풀이 과정을 접할 수 있을 것으로 보이며, 또한 개인이 직접 강의 영상을 제작하여 다양한 학습을 접할 수 있을 것임.

#### 웹 사이트 소개
[시연 영상]
https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/1305a60e-48cc-4a46-9faa-27f4d0e933a2


[로그인 화면]<br>
<img width="1727" alt="Screenshot 2023-06-22 at 19 57 47" src="https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/94893d9b-ff63-4ded-b901-937a4ba5115e"><br>

[수학 문제(사칙연산) 화면]<br>
<img width="493" alt="Screenshot 2023-06-23 at 8 19 26" src="https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/594e8657-e0b6-4271-86cc-6dc96c0a0b49"><br>

[수학 문제(방정식) 화면]<br>
<img width="506" alt="Screenshot 2023-06-23 at 8 19 45" src="https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/e24d42da-fb45-4706-8a18-8daaccb916e7"><br>

[영어 문제(영어 단어 테스트) 화면]<br>
<img width="512" alt="Screenshot 2023-06-23 at 8 20 05" src="https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/cf367bdc-5a65-4dcc-8537-59e4daf3ef34"><br>



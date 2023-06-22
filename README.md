# `신진철` - `Jump up happy school`

해커그라운드 해커톤에 참여하는 `신진철` 팀의 `Jump up happy school`입니다.

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**<br>
> Visual Studio Code Extensions에서 Azure Tools 설치<br>
> 루트폴더에 있는 config.json에서 **[mysql-server-name]** 과 **[python-server-name]**, **[react-server-name]** 을 설정한다.<br>
> src폴더에 있는 config.js에서 **[MYSQL_SERVER_NAME]** 을 설정한다.<br>
> Azure Portal App Services에서 이름이 **[python-server-name]** 인 python 3.10 용 웹앱을 만든다. (백엔드)<br>
> Azure Portal App Services에서 이름이 **[react-server-name]** 인 Node 18 lts 용 웹앱을 만든다. (프론트엔드)<br>
> Azure Portal Azure Database for MySQL에서 이름이 **[mysql-server-name]** 인 Azure database for MySQL 서버를 만든다. (백엔드)<br>

## 설치 방법

> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**<br>
#### 백엔드(flask) 배포 방법(visual studio code에서 작업)<br>
> 1. ```git clone https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal```<br>
> 2. ```code httpsgithubcomhackersground-krteamjincheolreal```<br>
> 3. VScode에서 Azure Tools 설치 및 Sign in to Azure<br>
> 4. Hackers Ground 클릭 -> App Services 클릭 -> **사전 준비 사항** 에서 만들었던 **[python-server-name]** 우클릭 -> Deploy to Web App 클릭<br>
> 5. [python_server_name].azurewebsites.net 로 접근<br>

#### 프론트엔드(React) 배포 방법(visual studio code에서 작업)<br>
> 1. ```git clone https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal```<br>
> 2. ```code httpsgithubcomhackersground-krteamjincheolreal```<br>
> 3. VScode에서 Azure Tools 설치 및 Sign in to Azure<br>
> 4. Hackers Ground 클릭 -> App Services 클릭 -> **사전 준비 사항** 에서 만들었던 **[react-server-name]** 우클릭 -> Deploy to Web App 클릭<br>
> 5. https://**[react-server-name]**.azurewebsites.net 로 접근<br>

#### MySQL DB 배포 방법(Azure Portal에서 작업)<br>
> 1. Azure Database for MySQL 서버에 접근한다.<br>
> 2. 만들기 클릭 -> 유연한 서버 만들기 -> 서버 이름은 **[mysql-server-name]** 으로 설정<br>
> 3. mysql 버전: 5.7, 사용자 이름: **[mysql-server-name]** , 비밀번호: qwer1234!@#$ <br>
> 4. 검토+만들기 클릭<br>

프론트엔드는 https://**[react-server-name]**.azurewebsites.net 을 통해 접근할 수 있다.<br>



## 시작하기

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위한 절차를 구체적으로 나열해 주세요.**<br>
> 내일 아침 8시까지 작성예정

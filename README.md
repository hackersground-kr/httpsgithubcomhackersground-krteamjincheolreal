# `신진철` - `Jump up happy school`

해커그라운드 해커톤에 참여하는 `신진철` 팀의 `Jump up happy school`입니다. 저희 팀은 교육의 불균형을 해결하기 위한 플랫폼 "Jump Up Happy School"을 개발하였습니다.

## 제품/서비스 소개

<!-- 아래 링크는 지우지 마세요 -->
[제품/서비스 소개 보기](TOPIC.md)
<!-- 위 링크는 지우지 마세요 -->

### 사전 준비 사항

> **여러분의 제품/서비스를 Microsoft 애저 클라우드에 배포하기 위해 사전에 필요한 준비 사항들을 적어주세요.**<br>
- GitHub Account
- Visual Studio Code
- Azure Account
- Azure Web App
- Azure Database for MySQL
  
## 설치 방법
> **아래 제공하는 설치 방법을 통해 심사위원단이 여러분의 제품/서비스를 실제 Microsoft 애저 클라우드에 배포하고 설치할 수 있어야 합니다. 만약 아래 설치 방법대로 따라해서 배포 및 설치가 되지 않을 경우 본선에 진출할 수 없습니다.**<br>

> 1. Visual Studio Code Extensions에서 Azure Tools 설치합니다.<br>
> 2. 이 레포지토리를 클론합니다.
```ps1
git clone https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal
cd httpsgithubcomhackersground-krteamjincheolreal
```
> 3. 루트폴더에 있는 config.json에서 **[mysql-server-name]** 과 **[python-server-name]**, **[react-server-name]** 을 설정합니다.<br>
> 3-1. src폴더에 있는 config.js에서 **[MYSQL_SERVER_NAME]** 을 설정합니다.<br>
> 4. Azure Portal App Services에서 이름이 **[python-server-name]** 인 python 3.10 용 웹앱을 만듭니다. (백엔드)<br>
> 4-1. App Services에서 만들기 -> 웹 앱 -> 런타임 스택 python 3.10, 지역 East US -> 검토 + 만들기 클릭
> 5. Azure Portal App Services에서 이름이 **[react-server-name]** 인 Node 18 lts 용 웹앱을 만듭니다. (프론트엔드)<br>
> 5-1. App Services에서 만들기 -> 웹 앱 -> 런타임 스택 Node 18 LTS, 지역 East US -> 검토 + 만들기 클릭

#### 백엔드(flask) 배포 방법(visual studio code에서 작업)<br>
> 1. VScode에서 Azure Tools 설치 및 Sign in to Azure<br>
> 2. Hackers Ground 클릭 -> App Services 클릭 -> **사전 준비 사항** 에서 만들었던 **[python-server-name]** 우클릭 -> Deploy to Web App 클릭<br>
> 3. https://**[python_server_name]**.azurewebsites.net 로 접근<br>
<img width="529" alt="image" src="https://github.com/hackersground-kr/httpsgithubcomhackersground-krteamjincheolreal/assets/49835246/946788a8-862c-4c9e-855c-3de11e1f2420">


#### 프론트엔드(React) 배포 방법(visual studio code에서 작업)<br>
> 1. VScode에서 Azure Tools 설치 및 Sign in to Azure<br>
> 2. Hackers Ground 클릭 -> App Services 클릭 -> **사전 준비 사항** 에서 만들었던 **[react-server-name]** 우클릭 -> Deploy to Web App 클릭<br>
> 3. https://**[react-server-name]**.azurewebsites.net 로 접근<br>

#### MySQL DB 배포 방법(Azure Portal에서 작업)<br>
> 1. Azure Portal에 들어가서 Azure Database for MySQL 검색 및 접근.<br>
> 2. 만들기 클릭 -> 유연한 서버 만들기 -> 서버 이름은 **[mysql-server-name]** 으로 설정<br>
> 3. mysql 버전: 5.7, 사용자 이름: **[mysql-server-name]** , 비밀번호: qwer1234!@#$ <br>
> 4. 검토+만들기 클릭<br>
> 5. ```ps1
>    create database user_data;
>    use user_data;
>    CREATE TABLE member_table (
>     no        INT NOT NULL AUTO_INCREMENT,
>     id     VARCHAR(50),
>     pw    VARCHAR(50),
>     primary key(no)
>    );
>    INSERT INTO user_data (id, pw)
>	   	    VALUE('guest', 'guest');
>    ```<br>
    
위 코드를 **[mysql-server-name]** Azure Portal 개요에 있는 연결 클릭 -> 붙여넣기

서비스는 https://**[react-server-name]**.azurewebsites.net 을 통해 접근 가능.<br>


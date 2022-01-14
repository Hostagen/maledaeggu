# XXが口答え?!

<div align="center">
  <br />
  <p>
    <a href="https://namu.wiki/w/여자가⋯ 말대꾸⁈"><img src="https://w.namu.la/s/d30cd45c1959e4025247d60a8f14a830bc389c6e94a34f832c56e3520bb9b0496b4b108e5331949f86288bffe4e615f48f0b24c5baeefd3f5da66a93af2502435441c257751afeac36cafe2a23d89f6b3397f11b9abf8a49c10a6e5d321a4ab5acd31fa27b83bfc23fea3543669f24e0" width="546" alt="여말대" /></a>
  </p>
</div>

## 紹介

キム·ソンモ作家の ショーザラッキーチャン!(쇼더럭키짱!) 13話に出てくるカン·ゴンマのセリフXXが XXX？！ ミーム生成器ディスコッドボットです。

## ウェブトゥーン漫画を見る
[リンク](https://comic.naver.com/webtoon/list?titleId=783054)

## 使用例
<div align="center">
  <img src="_media/example-en.png" />
</div>

## 何でできていますか？
[discord.js](https://github.com/discordjs/discord.js)とタイプスクリプト·バージョン4.4.4で製作されました。

# 설치
말대꾸봇은 TypeScript로 제작되었습니다. 그렇기에 Node.js가 설치되어있어야합니다。
설치되지 않았다면 이곳을 확인하세요。 [Node.js를 설치하는 법](#nodejs-설치)

## Node.js 설치

### Windows의 경우
1. https://nodejs.org/en/ 페이지를 엽니다。
2. LTS 버전을 다운합니다。
3. 설치가 끝난 후 명령프롬프트(cmd)를 엽니다。

아래의 명령어들을 입력합니다。

```sh
node -v
npm -v
```

만약 모든 명령어가 정상적으로 작동한다면 설치가 완료되었습니다。

### Linux의 경우
- CRUL가 설치되어 있어야합니다。

```sh
sudo yum install -y nodejs
```

설치가 끝난 후 아래의 명령어들을 입력합니다。

```sh
node -v
npm -v
```

만약 모든 명령어가 정상적으로 작동한다면 설치가 완료되었습니다。

## 말대꾸 봇을 설치하는 법

### Windows의 경우
- https://github.com/Hostagen/maledaeggu 페이지를 엽니다.
- `Code` 버튼을 누릅니다.
- 그런 후 `Download ZIP` 버튼을 누릅니다.
- 원하는 곳에 봇 파일을 압축 해제합니다.

### Linux의 경우
- `git`이 설치되어 있어야합니다.

```sh
git clone https://github.com/Hostagen/maledaeggu.git
```

## 애플리케이션을 만들고 봇을 초대

1. https://discord.com/developers/applications/ 페이지를 엽니다.
2. 우측 상단의 "New Application" 버튼을 누릅니다.
3. 애플리케이션의 이름을 입력합니다. (애플리케이션 이름은 봇 이름과 별개입니다.)
4. 좌측에서 "Bot" 탭으로 이동하여 우측의 "Add Bot" 버튼을 누릅니다.
5. "General Information" 탭으로 돌아간 뒤 "APPLICATION ID" 섹션에서 ID 복사 버튼을 누릅니다.
6. 아래 URL에 복사한 ID를 APPLICATION_ID 자리에 붙여넣기합니다.
https://discord.com/api/oauth2/authorize?client_id=APPLICATION_ID&permissions=0&scope=bot%20applications.commands

이 링크가 봇의 초대 링크입니다.

## config.json를 설정하는 법

봇 파일을 설치한 후 config.json을 설정해야합니다.

1. "config.json"을 생성한 뒤 아래의 내용을 복사, 붙여넣기합니다.

```json
{
    "token": "BOT_TOKEN",
    "guildId": "GUILD_ID"
}
```

2. "BOT_TOKEN" 자리에 봇의 토큰을 붙여넣기합니다.
3. 명령어를 자신의 서버에서만 사용을 원하거나 빠른 등록을 원한다면 "GUILD_ID" 자리에 사용을 원하는 서버의 ID를 붙여넣기하세요.

명령어를 글로벌 명령어로 등록할려면 "GUILD_ID"를 `null`로 지정하세요.

글로벌 명령어 등록에는 약 한 시간 정도가 소요됩니다. 즉각적인 사용을 원한다면 서버 ID를 입력하세요.

## 모듈 다운로드.

만약 Node.js를 설치하지 않았다면, [이곳을 확인하세요.](#nodejs-설치)

1. 명령프롬프트 또는 터미널을 봇 파일을 설치한 곳에서 여세요.
2. `npm install`을 입력하고 설치가 끝날 때까지 기다리세요.
3. 아래 명령어를 입력하세요.

```sh
tsc
npm start
```

정상적으로 완료되었다면 봇이 실행될 것입니다.

# 명령어들

## 말대꾸하기
말대꾸를 합니다.

### 옵션들
- 이름: 무엇이 하는지 입력합니다.
- 무엇을?: 대상이 무엇을 하는지 입력합니다.

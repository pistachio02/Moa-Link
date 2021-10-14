# Moa-Link

---

## Moa-Link 실행 방법

### 1. npm install

클라이언트와 서버에 각각 npm install을 해줍니다.

<br />

### 2. 사설 인증서를 발급 해줍니다. (맥 기준으로)

아래 순서대로 진행하시면 됩니다.

```
& cd server
$ brew install mkcert
$ mkcert -install
$ mkcert -key-file key.pem -cert-file cert.pem localhost 127.0.0.1 ::1
```

<br />

### 3. 클라이언트 패키지 설정

패키지 제이슨에서 스크립트 start 부분에서 아래와 같이 바꿔 줍니다.

```js
 "scripts": {
"start":"HTTPS=true SSL_CRT_FILE=../server/cert.pem SSL_KEY_FILE=../server/key.pem react-scripts start"
// 생략
}
```

<br />

### 4. env 환경변수 설정

모아링크라는 데이터베이스 하나 만들어 주고 env파일에 해당 정보를 입력해주시면 됩니다.

```
DB_USER=
DB_PASSWORD=
DB_DATABASE=moalink
ACCESS_SECRET=
DB_HOST=127.0.0.1
```

<br />

### 5. 클라이언트 서버 실행

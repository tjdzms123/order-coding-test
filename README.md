**2024년 (주) 두번째 프론트엔드 개발자 채용 과제**

**1. 기술 스택**

- React.js: 사용자 인터페이스를 만들기 위한 라이브러리
- Redux: 전역 상태 관리를 위한 라이브러리
- Axios: 서버와의 HTTP 통신을 위한 라이브러리
- Styled-components: CSS-in-JS 라이브러리로 스타일을 동적으로 관리

**2. 빌드 방법**

- **의존성 설치**: 프로젝트 루트 폴더에서 다음 명령어를 실행하여 필요한 패키지를 설치합니다.

  ```bash
  npm install
  ```

- **환경 변수 설정**: 서비스에서 사용하는 환경 변수를 설정합니다.

  ```bash
  # .env 파일 생성
  touch .env
  ```

- **로컬 서버 실행**: 다음 명령어로 개발 서버를 실행합니다.

  ```bash
  npm start
  ```

- **빌드**: 서비스를 빌드하여 배포할 준비를 합니다.

  ```bash
  npm run build
  ```

**3. 빌드한 서비스 확인 방법**

- 서비스를 로컬 환경에서 실행한 경우, 웹 브라우저에서 `http://localhost:3000`을 열어 확인할 수 있습니다.

- 실제 서버에 배포한 경우, 배포된 URL을 통해 서비스에 접속하여 확인할 수 있습니다.

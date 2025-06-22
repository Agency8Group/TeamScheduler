# 전사 공용 캘린더 개선 프로젝트

## 개요

전사 공용 캘린더에 중요 일정 고정 표시, 오늘 일정 표시, 일정 등록 요청 기능을 추가한 개선 버전입니다.

## 주요 기능

### 1. 중요 일정 & 오늘 일정 통합 표시

-   상단에 중요 일정과 오늘 일정을 하나의 박스에 통합 표시
-   중요 공지와 오늘 일정을 구분하여 표시
-   기존 Mock 데이터 유지

### 2. 오늘 일정 표시

-   `today-events.json` 파일에서 오늘 일정 데이터를 fetch로 불러옴
-   중요 일정 박스 내 하단에 '오늘 일정' 섹션으로 표시
-   자동으로 지정된 Webhook URL로 해당 내용 POST 전송

### 3. 일정 등록 요청 팝업

-   중요 일정 타이틀 옆에 '일정 등록 요청' 버튼 추가
-   클릭 시 모달 창 열림
-   입력 항목: 요청자 / 날짜 / 회사 / 제목 / 설명
-   전송 시 "이대로 등록할까요?" 확인창 → 확인 시 로딩 창 → 접수 완료 메시지 표시

## 파일 구조

```
TeamScheduler/
├── index.html              # 메인 HTML 파일
├── googleappscript.js      # Google Apps Script 서버 사이드 코드
├── today-events.json       # 오늘 일정 데이터
└── README.md              # 프로젝트 설명서
```

## 설정 방법

### 1. 로컬 개발 환경

1. 모든 파일을 웹 서버에 업로드
2. `index.html` 파일을 브라우저에서 열기
3. CORS 정책으로 인해 로컬 파일 접근 시 fetch 오류가 발생할 수 있음

### 2. Google Apps Script 배포

1. [Google Apps Script](https://script.google.com/) 접속
2. 새 프로젝트 생성
3. `index.html` 파일을 HTML 파일로 추가
4. `googleappscript.js` 내용을 코드 편집기에 복사
5. 웹 앱으로 배포

### 3. Webhook URL 설정

`index.html` 파일의 `sendTodayEventsToWebhook` 함수에서 Webhook URL을 실제 URL로 변경:

```javascript
const webhookUrl = "https://your-webhook-url.com/events";
```

### 4. API 엔드포인트 설정

`index.html` 파일의 `submitEventRequest` 함수에서 API 엔드포인트를 실제 URL로 변경:

```javascript
const apiUrl = "https://your-api-endpoint.com/event-requests";
```

## 데이터 형식

### today-events.json

```json
{
    "date": "2024-12-19",
    "events": [
        {
            "id": "today-1",
            "title": "월간 실적 보고회",
            "time": "14:00-15:30",
            "company": "회사전체",
            "location": "대회의실",
            "description": "12월 월간 실적 점검 및 1월 계획 수립",
            "type": "meeting"
        }
    ]
}
```

### 일정 등록 요청 데이터

```json
{
    "requester": "홍길동",
    "eventDate": "2024-12-25",
    "company": "회사전체",
    "eventTitle": "연말 회식",
    "eventDescription": "전사 연말 회식 일정",
    "requestTime": "2024-12-19T10:30:00.000Z"
}
```

## Google Apps Script 기능

### 자동 실행 설정

1. Google Apps Script 편집기에서 `setupTriggers` 함수 실행
2. 매일 오전 9시에 자동으로 오늘 일정을 Webhook으로 전송
3. 관리자에게 이메일 알림 발송

### Google Sheets 연동

-   일정 등록 요청을 Google Sheets에 자동 저장
-   '일정요청' 시트가 필요 (없으면 자동 생성되지 않음)

### 이메일 알림 설정

`googleappscript.js` 파일에서 다음 설정을 변경:

-   관리자 이메일: `adminEmail` 변수
-   직원 이메일 목록: `employeeEmails` 배열

## 사용법

### 1. 캘린더 보기

-   월별 캘린더에서 일정 확인
-   이벤트에 마우스 오버 시 상세 정보 툴팁 표시
-   상단 중요 일정과 오늘 일정을 하나의 박스에 통합 표시
-   중요 공지와 오늘 일정을 구분하여 표시

### 2. 일정 등록 요청

1. 상단 '일정 등록 요청' 버튼 클릭
2. 모달 창에서 정보 입력
3. '요청하기' 버튼 클릭
4. 확인 창에서 '확인' 클릭
5. 로딩 후 접수 완료 메시지 확인

### 3. 월 이동

-   좌우 화살표 버튼으로 월 이동
-   '오늘' 버튼으로 현재 월로 이동

## 브라우저 호환성

-   Chrome, Firefox, Safari, Edge 최신 버전 지원
-   모바일 브라우저 반응형 디자인 지원

## 주의사항

1. CORS 정책으로 인해 로컬 파일에서 fetch 사용 시 오류 발생 가능
2. 실제 배포 시 Webhook URL과 API 엔드포인트를 실제 URL로 변경 필요
3. Google Apps Script 사용 시 권한 설정 필요
4. 이메일 알림 기능 사용 시 Gmail 권한 필요

## 문제 해결

### fetch 오류 발생 시

-   웹 서버를 통해 파일 제공
-   또는 Google Apps Script로 배포

### 모달이 열리지 않는 경우

-   JavaScript 콘솔에서 오류 확인
-   브라우저 캐시 삭제 후 재시도

### Webhook 전송 실패 시

-   Webhook URL이 올바른지 확인
-   네트워크 연결 상태 확인
-   서버 로그에서 오류 메시지 확인

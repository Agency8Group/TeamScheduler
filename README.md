# TeamScheduler - 전사 공용 캘린더

![TeamScheduler](https://img.shields.io/badge/TeamScheduler-v1.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

## 📋 프로젝트 개요

TeamScheduler는 회사 전체 팀원들이 공유하는 일정 관리 시스템입니다. 각 브랜드별 일정을 시각적으로 구분하여 표시하고, 중요 일정을 상단에 강조 표시하며, 매일 오전 8시에 오늘 일정을 자동으로 알림하는 기능을 제공합니다.

## ✨ 주요 기능

### 🗓️ 캘린더 기능

-   **월별 캘린더 뷰**: 직관적인 월별 캘린더 인터페이스
-   **브랜드별 색상 구분**: 회사전체(빨간색), 압타밀(파란색), 드리미(주황색), bt몰(노란색)
-   **일정 툴팁**: 마우스 호버 시 일정 상세 정보 표시
-   **오늘 날짜 하이라이트**: 현재 날짜를 시각적으로 강조

### 📢 중요 일정 & 오늘 일정

-   **중요 공지 섹션**: `important: true`로 설정된 일정들을 상단에 표시
-   **오늘 일정 요약**: 오늘 날짜의 모든 일정을 브랜드별로 구분하여 표시
-   **실시간 업데이트**: 페이지 로드 시 최신 일정 정보 반영

### 📝 일정 등록 요청

-   **모달 기반 폼**: 사용자 친화적인 일정 등록 요청 인터페이스
-   **Google Apps Script 연동**: 요청된 일정을 Google Sheets에 자동 저장
-   **실시간 처리**: 요청 즉시 처리 및 확인 메시지 표시

### 🔔 자동 알림 시스템

-   **매일 오전 8시 Webhook**: 오늘 일정을 자동으로 팀룸에 발송
-   **네이트온 연동**: 팀룸 Webhook을 통한 자동 알림
-   **스마트 알림**: 일정이 있을 때만 알림 발송

## 🛠️ 기술 스택

-   **Frontend**: HTML5, CSS3, JavaScript (ES6+)
-   **Styling**: Tailwind CSS
-   **Backend Integration**: Google Apps Script
-   **Data Storage**: JSON (events.json)
-   **Webhook**: 네이트온 팀룸 API

## 📁 프로젝트 구조

```
TeamScheduler/
├── index.html              # 메인 캘린더 페이지
├── events.json             # 일정 데이터 파일
├── google/
│   ├── googleappscript.js  # Google Apps Script 코드
│   └── index.html          # Google Apps Script HTML
└── README.md               # 프로젝트 문서
```

## 🚀 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/TeamScheduler.git
cd TeamScheduler
```

### 2. 로컬 서버 실행

```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 또는 Live Server (VS Code 확장)
```

### 3. 브라우저에서 접속

```
http://localhost:8000
```

## 📊 일정 데이터 형식

`events.json` 파일의 구조:

```json
{
    "events": [
        {
            "date": "2024-01-15",
            "title": "월간 회의",
            "description": "전사 월간 회의 진행",
            "type": "company",
            "time": "14:00",
            "important": true
        }
    ]
}
```

### 일정 타입별 색상

-   `company`: 회사전체 (빨간색)
-   `aptamil`: 압타밀 (파란색)
-   `dreame`: 드리미 (주황색)
-   `btmall`: bt몰 (노란색)

## ⚙️ 설정

### Google Apps Script 설정

1. `google/googleappscript.js` 파일의 코드를 Google Apps Script에 복사
2. Google Apps Script에서 새 프로젝트 생성
3. 코드 배포 후 Web App URL 획득
4. `index.html`의 `googleAppsScriptUrl` 변수에 URL 입력

### Webhook 설정

1. 네이트온 팀룸에서 Webhook URL 생성
2. `index.html`의 `webhookUrl` 변수에 URL 입력

## 🎨 UI/UX 특징

-   **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원
-   **모던 UI**: Tailwind CSS를 활용한 깔끔하고 현대적인 디자인
-   **애니메이션**: 부드러운 전환 효과와 호버 애니메이션
-   **접근성**: 키보드 네비게이션 및 스크린 리더 지원

## 🔧 개발 가이드

### 일정 추가 방법

1. `events.json` 파일에 새 일정 데이터 추가
2. 브라우저에서 페이지 새로고침
3. 캘린더에서 일정 확인

### 스타일 커스터마이징

-   `index.html`의 `<style>` 섹션에서 CSS 수정
-   Tailwind CSS 클래스를 활용한 스타일링
-   브랜드별 색상은 `tailwind.config`에서 정의

## 📱 브라우저 지원

-   Chrome 80+
-   Firefox 75+
-   Safari 13+
-   Edge 80+

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

## 🔄 업데이트 로그

### v1.0.0 (2024-01-15)

-   초기 버전 릴리즈
-   기본 캘린더 기능 구현
-   일정 등록 요청 시스템
-   자동 Webhook 알림 기능
-   반응형 디자인 적용

---

**TeamScheduler** - 팀의 일정을 한눈에! 📅✨

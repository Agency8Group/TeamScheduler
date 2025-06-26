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

백업
// 최종 버전 - Google Apps Script (팀스케줄러용)

// 전역 설정 변수
var CONFIG = null;

/\*\*

-   설정 파일을 로드하는 함수
    \*/
    function loadConfig() {
    try {
    // config.json 파일에서 설정 로드
    var configUrl = "https://agency8group.github.io/TeamScheduler/config.json";
    var response = UrlFetchApp.fetch(configUrl);
        if (response.getResponseCode() === 200) {
          CONFIG = JSON.parse(response.getContentText());
          Logger.log("설정 파일 로드 성공");
          Logger.log("Webhook URL: " + CONFIG.webhook.url);
          Logger.log("Timezone: " + CONFIG.app.timezone);
          return true;
        } else {
          Logger.log("설정 파일 로드 실패: HTTP " + response.getResponseCode());
          return false;
        }
    } catch (error) {
    Logger.log("설정 파일 로드 오류: " + error.toString());
    return false;
    }
    }

/\*\*

-   웹페이지를 보여주는 함수 (수정할 필요 없음)
    \*/
    function doGet() {
    return HtmlService.createHtmlOutputFromFile('index.html')
    .setTitle('전사 공용 캘린더')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }

/\*\*

-   폼 데이터를 받아서 구글 시트에 저장하는 함수
    \*/
    function doPost(e) {
    var sheet;
    var data;

// 0. 요청 로그 기록
Logger.log("=== 팀스케줄러 일정 요청 시작 ===");
Logger.log("요청 시간: " + new Date().toString());
Logger.log("요청 데이터: " + e.postData.contents);

// 1. 데이터를 정상적으로 받았는지 확인하고 객체로 변환합니다.
try {
data = JSON.parse(e.postData.contents);
Logger.log("데이터 파싱 성공: " + JSON.stringify(data));
} catch (error) {
// 데이터가 잘못됐으면 여기서 실행을 멈추고 에러를 기록합니다.
Logger.log("데이터 파싱 에러: " + error.toString());
return ContentService.createTextOutput(JSON.stringify({
success: false,
message: "데이터 형식 오류: " + error.toString()
}));
}

// 2. '일정요청'이라는 이름의 시트를 찾습니다.
try {
sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("일정요청");
Logger.log("시트 검색 결과: " + (sheet ? "찾음" : "없음"));

    // 만약 '일정요청' 시트가 없다면, 스크립트가 직접 시트를 생성합니다.
    if (!sheet) {
      Logger.log("일정요청 시트 생성 중...");
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("일정요청");
      // 새로 만든 시트의 첫 줄에 헤더(제목)를 추가합니다.
      sheet.getRange("A1:F1").setValues([
        ["요청시간", "작성자명", "요청일자", "브랜드명", "제목", "상세설명"]
      ]);
      Logger.log("일정요청 시트 생성 완료");
    }

} catch (error) {
// 스프레드시트 자체를 못 찾는 등 다른 에러가 나면 기록합니다.
Logger.log("시트 접근 에러: " + error.toString());
return ContentService.createTextOutput(JSON.stringify({
success: false,
message: "시트 접근 오류: " + error.toString()
}));
}

// 3. 전달받은 데이터를 가지고 시트에 새로운 행을 추가합니다.
try {
var rowData = [
new Date(), // A열: 현재 시간 (자동)
data.requester || '', // B열: 작성자명
data.eventDate || '', // C열: 요청일자
data.company || '', // D열: 브랜드명
data.eventTitle || '', // E열: 제목
data.eventDescription || ''// F열: 상세설명
];

    Logger.log("저장할 데이터: " + JSON.stringify(rowData));
    sheet.appendRow(rowData);
    Logger.log("데이터 저장 완료");

} catch (error) {
// 행 추가 중에 에러가 나면 기록합니다.
Logger.log("데이터 기록 에러: " + error.toString());
return ContentService.createTextOutput(JSON.stringify({
success: false,
message: "데이터 기록 오류: " + error.toString()
}));
}

// 4. 모든 과정이 성공하면, 성공 메시지를 반환합니다.
Logger.log("=== 팀스케줄러 일정 요청 완료 ===");
return ContentService.createTextOutput(
JSON.stringify({
success: true,
message: "성공적으로 접수되었습니다.",
timestamp: new Date().toISOString()
})
).setMimeType(ContentService.MimeType.JSON);
}

/\*\*

-   매일 설정된 시간에 실행되는 Webhook 발송 함수
-   Google Apps Script의 시간 기반 트리거로 설정해야 함 (매일 실행)
    \*/
    function sendDailyWebhook() {
    try {
    Logger.log("=== 일일 Webhook 발송 시작 ===");

        // 설정 파일 로드
        if (!loadConfig()) {
          Logger.log("설정 파일을 로드할 수 없어 Webhook 발송을 중단합니다.");
          return;
        }

        // Webhook이 비활성화되어 있으면 실행하지 않음
        if (!CONFIG.webhook.enabled) {
          Logger.log("Webhook이 비활성화되어 있습니다. config.json에서 enabled를 true로 설정하세요.");
          return;
        }

        // 현재 시간과 설정된 발송 시간 비교
        var now = new Date();
        var currentHour = now.getHours();
        var targetHour = CONFIG.webhook.hour || 8; // 기본값 8시

        Logger.log("현재 시간: " + currentHour + "시");
        Logger.log("설정된 발송 시간: " + targetHour + "시");

        // 설정된 시간이 아니면 발송하지 않음
        if (currentHour !== targetHour) {
          Logger.log("설정된 발송 시간(" + targetHour + "시)이 아니므로 발송을 건너뜁니다.");
          return;
        }

        // 오늘 날짜 계산 (설정된 타임존 기준)
        var today = new Date();
        var todayString = Utilities.formatDate(today, CONFIG.app.timezone, "yyyy-MM-dd");

        Logger.log("오늘 날짜: " + todayString);
        Logger.log("Webhook URL: " + CONFIG.webhook.url);
        Logger.log("Timezone: " + CONFIG.app.timezone);

        // events.json에서 일정 데이터 가져오기
        var eventsData = getEventsData();
        if (!eventsData || !eventsData.events) {
          Logger.log("일정 데이터를 가져올 수 없습니다.");
          return;
        }

        // 오늘 일정 필터링
        var todayEvents = eventsData.events.filter(function(event) {
          return event.date === todayString;
        });

        Logger.log("오늘 일정 수: " + todayEvents.length);

        if (todayEvents.length === 0) {
          Logger.log("오늘 일정이 없어 Webhook 발송을 건너뜁니다.");
          return;
        }

        // Webhook 페이로드 구성 (파이썬 코드와 동일하게 수정)
        var messageTitle = "📅 " + todayString + " 오늘 일정 안내";
        var messageBody = todayEvents.map(function(event) {
          return "- " + event.title + (event.description ? " (" + event.description + ")" : "");
        }).join("\n");

        var payload = {
          "text": messageTitle + "\n" + messageBody
        };

        Logger.log("Webhook 페이로드: " + JSON.stringify(payload));

        // Webhook 발송 (파이썬 코드와 동일하게 수정)
        var options = {
          'method': 'post',
          'contentType': 'application/json',
          'payload': JSON.stringify(payload)
        };

        var response = UrlFetchApp.fetch(CONFIG.webhook.url, options);

        if (response.getResponseCode() === 200) {
          Logger.log("✅ Webhook 발송 성공: " + todayString);
          Logger.log("발송된 일정: " + todayEvents.map(function(e) { return e.title; }).join(", "));
        } else {
          Logger.log("❌ Webhook 발송 실패: HTTP " + response.getResponseCode());
          Logger.log("응답: " + response.getContentText());
        }

} catch (error) {
Logger.log("❌ Webhook 발송 오류: " + error.toString());
}

Logger.log("=== 일일 Webhook 발송 완료 ===");
}

/\*\*

-   events.json 파일에서 일정 데이터를 가져오는 함수
    \*/
    function getEventsData() {
    try {
    // 설정이 로드되지 않았으면 로드
    if (!CONFIG) {
    if (!loadConfig()) {
    return null;
    }
    }
        // GitHub Pages URL에서 events.json 가져오기
        var response = UrlFetchApp.fetch(CONFIG.events.url);

        if (response.getResponseCode() === 200) {
          var data = JSON.parse(response.getContentText());
          Logger.log("일정 데이터 로드 성공");
          return data;
        } else {
          Logger.log("일정 데이터 로드 실패: HTTP " + response.getResponseCode());
          return null;
        }
    } catch (error) {
    Logger.log("일정 데이터 로드 오류: " + error.toString());
    return null;
    }
    }

/\*\*

-   수동으로 Webhook을 발송하는 함수 (테스트용)
    \*/
    function sendWebhookNow() {
    Logger.log("수동 Webhook 발송 시작...");
    sendDailyWebhook();
    }

/\*\*

-   현재 설정을 확인하는 함수
    \*/
    function checkConfig() {
    if (loadConfig()) {
    Logger.log("=== 현재 설정 확인 ===");
    Logger.log("Webhook URL: " + CONFIG.webhook.url);
    Logger.log("Webhook 활성화: " + CONFIG.webhook.enabled);
    Logger.log("발송 시간: " + CONFIG.webhook.hour + "시");
    Logger.log("타임존: " + CONFIG.app.timezone);
    Logger.log("앱 이름: " + CONFIG.app.name);
    Logger.log("앱 버전: " + CONFIG.app.version);
    Logger.log("=====================");
    } else {
    Logger.log("설정 파일을 로드할 수 없습니다.");
    }
    }

/\*\*

-   트리거 설정 안내 함수
-   이 함수를 실행하면 트리거 설정 방법을 로그에 출력합니다
    \*/
    function setupTrigger() {
    Logger.log("=== Google Apps Script 트리거 설정 방법 ===");
    Logger.log("1. Google Apps Script 편집기에서 '트리거' 메뉴 클릭");
    Logger.log("2. '트리거 추가' 버튼 클릭");
    Logger.log("3. 다음 설정으로 트리거 생성:");
    Logger.log(" - 실행할 함수: sendDailyWebhook");
    Logger.log(" - 실행할 배포: Head");
    Logger.log(" - 이벤트 소스: 시간 기반");
    Logger.log(" - 시간 기반 트리거 유형: 매일");
    Logger.log(" - 시간: 매일 오전 12:00 (또는 원하는 시간)");
    Logger.log("4. '저장' 버튼 클릭");
    Logger.log("");
    Logger.log("※ 발송 시간 변경은 config.json의 webhook.hour 값을 수정하면 됩니다.");
    Logger.log("※ 트리거는 매일 실행되지만, config.json의 시간과 일치할 때만 실제 발송됩니다.");
    Logger.log("==========================================");
    }

/\*\*

-   Webhook 연결 테스트 함수
    \*/
    function testWebhookConnection() {
    try {
    Logger.log("=== Webhook 연결 테스트 시작 ===");
        if (!loadConfig()) {
          Logger.log("설정 파일을 로드할 수 없습니다.");
          return;
        }

        var testPayload = {
          test: true,
          message: "Webhook 연결 테스트",
          timestamp: new Date().toISOString(),
          timezone: CONFIG.app.timezone
        };

        var options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': CONFIG.app.name + '/' + CONFIG.app.version
          },
          payload: JSON.stringify(testPayload)
        };

        var response = UrlFetchApp.fetch(CONFIG.webhook.url, options);

        if (response.getResponseCode() === 200) {
          Logger.log("✅ Webhook 연결 테스트 성공!");
          Logger.log("응답: " + response.getContentText());
        } else {
          Logger.log("❌ Webhook 연결 테스트 실패: HTTP " + response.getResponseCode());
          Logger.log("응답: " + response.getContentText());
        }

} catch (error) {
Logger.log("❌ Webhook 연결 테스트 오류: " + error.toString());
}

Logger.log("=== Webhook 연결 테스트 완료 ===");
}

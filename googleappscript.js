// Google Apps Script - 전사 공용 캘린더 서버 사이드 코드

// 웹 앱으로 배포할 때 사용할 doGet 함수
function doGet() {
  const htmlContent = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>전사 공용 캘린더 - 일정 등록 요청</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif; }
    </style>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 py-8 max-w-2xl">
        <div class="text-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800 mb-2">전사 공용 캘린더</h1>
            <p class="text-gray-600">일정 등록 요청</p>
        </div>
        
        <!-- 일정 등록 요청 폼 -->
        <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-6 text-center">일정 등록 요청서</h2>
            
            <form action="https://script.google.com/macros/s/AKfycbzGOrivcOR2O0pphxWZoA8Jzzejyil2i5mQe1ePMWXkGQGxRfTnZwOZUeoUaR2NODRj/exec" method="POST">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">요청자 *</label>
                        <input type="text" name="requester" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">날짜 *</label>
                        <input type="date" name="eventDate" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">회사 *</label>
                        <select name="company" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="">회사를 선택하세요</option>
                            <option value="company">🔴 회사전체</option>
                            <option value="aptamil">🔵 압타밀</option>
                            <option value="dreame">🟠 드리미</option>
                            <option value="btmall">🟡 BT몰</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">제목 *</label>
                        <input type="text" name="eventTitle" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">설명</label>
                        <textarea name="eventDescription" rows="3" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                    </div>
                    
                    <div class="pt-4">
                        <button type="submit" class="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold text-lg">
                            일정 등록 요청 제출
                        </button>
                    </div>
                </div>
            </form>
            
            <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 class="font-semibold text-blue-800 mb-2">📋 요청 처리 안내</h3>
                <ul class="text-sm text-blue-700 space-y-1">
                    <li>• 요청이 제출되면 Google Sheets에 자동 저장됩니다</li>
                    <li>• 관리자가 검토 후 events.json에 등록합니다</li>
                    <li>• 처리 결과는 별도로 안내드리지 않습니다</li>
                </ul>
            </div>
        </div>
        
        <!-- 메인 캘린더로 돌아가기 -->
        <div class="text-center mt-8">
            <a href="index.html" class="text-blue-500 hover:text-blue-600 font-medium">
                ← 메인 캘린더로 돌아가기
            </a>
        </div>
    </div>
</body>
</html>`;

  return HtmlService.createHtmlOutput(htmlContent)
    .setTitle('일정 등록 요청')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// POST 요청을 처리하는 함수 (로컬 환경에서 API 호출용)
function doPost(e) {
  try {
    // 요청 데이터 파싱
    const requestData = JSON.parse(e.postData.contents);
    
    if (requestData.action === 'submitEventRequest') {
      // 일정 등록 요청 처리
      const result = submitEventRequest(requestData.data);
      
      // JSON 응답 반환
      return ContentService
        .createTextOutput(JSON.stringify(result))
        .setMimeType(ContentService.MimeType.JSON);
    } else {
      throw new Error('알 수 없는 액션: ' + requestData.action);
    }
    
  } catch (error) {
    console.error('POST 요청 처리 오류:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: '요청 처리 중 오류가 발생했습니다: ' + error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 일정 등록 요청을 Google Sheets에 저장하는 함수
function submitEventRequest(requestData) {
  try {
    // 요청 데이터 검증
    if (!requestData.requester || !requestData.eventDate || !requestData.company || !requestData.eventTitle) {
      throw new Error('필수 입력 항목이 누락되었습니다.');
    }
    
    // Google Sheets에 데이터 저장
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName('일정요청');
    
    // 시트가 없으면 새로 생성
    if (!sheet) {
      sheet = spreadsheet.insertSheet('일정요청');
      // 헤더 추가
      sheet.getRange(1, 1, 1, 7).setValues([['요청시간', '요청자', '날짜', '회사', '제목', '설명', '상태']]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }
    
    // 새 요청을 시트에 추가
    sheet.appendRow([
      new Date(), // 요청 시간
      requestData.requester,
      requestData.eventDate,
      requestData.company,
      requestData.eventTitle,
      requestData.eventDescription || '',
      '대기중' // 상태
    ]);
    
    // 시트 자동 정렬 (최신 요청이 위로)
    const lastRow = sheet.getLastRow();
    if (lastRow > 2) {
      const range = sheet.getRange(2, 1, lastRow - 1, 7);
      range.sort({column: 1, ascending: false}); // 요청시간 기준 내림차순
    }
    
    console.log('일정 등록 요청이 Google Sheets에 저장되었습니다.');
    
    return {
      success: true,
      message: '일정 등록 요청이 성공적으로 접수되었습니다. 관리자 검토 후 등록됩니다.'
    };
    
  } catch (error) {
    console.error('일정 요청 처리 오류:', error);
    return {
      success: false,
      message: '일정 등록 요청 처리 중 오류가 발생했습니다: ' + error.message
    };
  }
}

// Google Sheets에서 대기중인 요청 목록을 조회하는 함수 (관리자용)
function getPendingRequests() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('일정요청');
    
    if (!sheet) {
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      return []; // 헤더만 있거나 데이터가 없음
    }
    
    // 헤더 제외하고 데이터만 반환
    const requests = data.slice(1).map(row => ({
      requestTime: row[0],
      requester: row[1],
      eventDate: row[2],
      company: row[3],
      eventTitle: row[4],
      eventDescription: row[5],
      status: row[6]
    }));
    
    // 대기중인 요청만 필터링
    return requests.filter(req => req.status === '대기중');
    
  } catch (error) {
    console.error('대기중인 요청 조회 오류:', error);
    return [];
  }
}

// 요청 상태를 업데이트하는 함수 (관리자용)
function updateRequestStatus(rowIndex, status) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('일정요청');
    
    if (!sheet) {
      throw new Error('일정요청 시트를 찾을 수 없습니다.');
    }
    
    // 상태 업데이트 (7번째 컬럼)
    sheet.getRange(rowIndex, 7).setValue(status);
    
    console.log(`요청 상태가 '${status}'로 업데이트되었습니다.`);
    
    return {
      success: true,
      message: '요청 상태가 업데이트되었습니다.'
    };
    
  } catch (error) {
    console.error('요청 상태 업데이트 오류:', error);
    return {
      success: false,
      message: '상태 업데이트 중 오류가 발생했습니다: ' + error.message
    };
  }
}

// 테스트용 함수 - Google Sheets 연결 확인
function testSheetConnection() {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('일정요청');
    
    if (sheet) {
      console.log('일정요청 시트가 존재합니다.');
      console.log('총 행 수:', sheet.getLastRow());
      return true;
    } else {
      console.log('일정요청 시트가 없습니다. 새로 생성됩니다.');
      return false;
    }
    
  } catch (error) {
    console.error('Google Sheets 연결 테스트 오류:', error);
    return false;
  }
}

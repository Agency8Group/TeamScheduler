// 최종 버전 - Google Apps Script (팀스케줄러용)

/**
 * 웹페이지를 보여주는 함수 (수정할 필요 없음)
 */
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .setTitle('전사 공용 캘린더')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * 폼 데이터를 받아서 구글 시트에 저장하는 함수
 */
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
      new Date(),                // A열: 현재 시간 (자동)
      data.requester || '',      // B열: 작성자명
      data.eventDate || '',      // C열: 요청일자
      data.company || '',        // D열: 브랜드명
      data.eventTitle || '',     // E열: 제목
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
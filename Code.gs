function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('Infographic') // Infographic.html 파일을 렌더링
    .setTitle('김동우_포트폴리오')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // 외부 사이트에서 iframe으로 삽입 허용
}

// Display HTML page
function doGet(request) {
  let html = HtmlService.createTemplateFromFile('Index').evaluate();
  let htmlOutput = HtmlService.createHtmlOutput(html);
  htmlOutput.addMetaTag('viewport', 'width=device-width, initial-scale=1');
  return htmlOutput;
}

// Include HTML
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

class pirate extends Paged.Handler {
    constructor(chunker, polisher, caller) {
      super(chunker, polisher, caller);
    }
  
    beforeParsed(content) {
        cleanLink(content);
    }
}
Paged.registerHandlers(pirate);


function cleanLink(content) {
    //add wbr to / in links
    const links = content.querySelectorAll('a[href^="http"], a[href^="www"]');
    links.forEach(link => {
      // Rerun to avoid large spaces. Break after a colon or a double slash (//) or before a single slash (/), a tilde (~), a period, a comma, a hyphen, an underline (_), a question mark, a number sign, or a percent symbol.
      const content = link.textContent;
      let printableUrl = content.replace(/\/\//g, "//\u003Cwbr\u003E");
      printableUrl = printableUrl.replace(/\,/g, ",\u003Cwbr\u003E");
      // put wbr around everything.
      printableUrl = printableUrl.replace(/(\/|\~|\-|\.|\,|\_|\?|\#|\%)/g, "\u003Cwbr\u003E$1");
      // turn hyphen in non breaking hyphen
      printableUrl = printableUrl.replace(/\-/g, "\u003Cwbr\u003E&#x2011;");
      link.setAttribute("data-print-url", printableUrl);
      link.innerHTML = printableUrl;
    });
  }
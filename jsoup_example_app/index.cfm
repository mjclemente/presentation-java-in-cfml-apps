<cfscript>
Jsoup = createObject("java", "org.jsoup.Jsoup");

uri = "https://blog.mattclemente.com";
doc = Jsoup.connect( uri ).get();

title = doc.title();
writeDump(title);

links = doc.select("a[href]");
// writeDump( var='#links#', abort='true' );
for( link in links ){
  parsed = {
    "Text": link.wholeText(),
    "href": link.attr("abs:href")
  }
  writeDump( parsed );
}

</cfscript>

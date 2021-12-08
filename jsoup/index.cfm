<cfscript>
Jsoup = createObject("java", "org.jsoup.Jsoup");

doc = Jsoup.connect("https://blog.mattclemente.com").get();
title = doc.title();
writeDump(title);

links = doc.select("a[href]");
// writeDump( var='#links#', abort='true' );
for( link in links ){
  // writeDump(link.wholeText());
  writeDump(link.attr("abs:href"));
  // writeDump(link.html());
  writeOutput('<br>');
}

</cfscript>

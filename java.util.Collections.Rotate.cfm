<cfscript>
books = [
  "Pilgrim at Tinker Creek",
  "Long Day's Journey into Night",
  "We are in a Book!",
  "A Confederacy of Dunces",
  "Pride and Prejudice"
];
writeDump(books);
createObject('java','java.util.Collections').Rotate(books,-1);
writeDump(books);
</cfscript>

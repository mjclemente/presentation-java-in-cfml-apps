<cfscript>
books = [
  "Pilgrim at Tinker Creek",
  "Long Day's Journey into Night",
  "We are in a Book!",
  "A Confederacy of Dunces",
  "Pride and Prejudice"
];
createObject('java','java.util.Collections').Shuffle(books);
writeDump(books);
</cfscript>

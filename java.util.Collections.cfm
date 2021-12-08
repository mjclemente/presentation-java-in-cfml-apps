<cfscript>
books = ["Pilgrim at Tinker Creek","Long Day's Journey into Night","We are in a Book!","A Confederacy of Dunces","Pride and Prejudice"];
writeDump(books);

createObject('java','java.util.Collections').Reverse(books);
writeDump(books);

min = createObject('java','java.util.Collections').min(books);
writeDump({"min": min});

max = createObject('java','java.util.Collections').max(books);
writeDump({"max": max});

createObject('java','java.util.Collections').swap(books,0,1);
writeDump(books);
</cfscript>

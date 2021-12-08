<cfscript>
start = getTickCount();

arr = ["Email,Rand"];
cfloop( from=1, to=50000, index="i" ){
  arr.append("#i#@test.com,#randRange(1,1000)#");
}

sys = createObject( "java", "java.lang.System" );
nl = sys.getProperty("line.separator");

csvstr = arr.toList( nl );

result = {"Time": getTickCount() - start}

writeDump(result);


// writeOutput( "<textarea>#csvstr.toString()#</textarea>" );
</cfscript>

<cfscript>
start = getTickCount();

sys = createObject( "java", "java.lang.System" );
nl = sys.getProperty("line.separator");

csvstr = createObject("java","java.lang.StringBuffer");

csvstr.append("Email,Rand" & nl );

cfloop( from=1, to=50000, index="i" ){
  csvstr.append("#i#@test.com," & randRange(1,1000) & nl);
}

result = {"Time": getTickCount() - start}

writeDump(result);


writeOutput( "<textarea>#csvstr.toString()#</textarea>" );
</cfscript>

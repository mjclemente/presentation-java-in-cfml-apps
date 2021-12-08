<cfscript>
start = getTickCount();

sys = createObject( "java", "java.lang.System" );
nl = sys.getProperty("line.separator");

csvstr = "Email,Rand" & nl;

cfloop( from=1, to=50000, index="i" ){
  csvstr &= "#i#@test.com,#randRange(1,1000)##nl#";
}

result = {"Time": getTickCount() - start}

writeDump(result);
writeOutput( "<textarea>#csvstr#</textarea>" );
</cfscript>

<cfscript>
start = getTickCount();

sys = createObject( "java", "java.lang.System" );
nl = sys.getProperty("line.separator");

savecontent variable="csvstr" {
  writeOutput("Email,Rand");
  cfloop( from=1, to=50000, index="i" ){
    writeOutput("#i#@test.com" & "," & randRange(1,1000) & nl);
  }
};

result = {"Time": getTickCount() - start}

writeDump(result);


// writeOutput( "<textarea>#csvstr.toString()#</textarea>" );
</cfscript>

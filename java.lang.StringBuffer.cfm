<cfscript>
  start = getTickCount();
  // csvstr = "Email Address,First Name" & Chr(13) & Chr(10);
  // cfloop( from=1, to=100000, index="i" ){
  //   csvstr = csvstr & i & ",";
  //   csvstr = csvstr & randRange(1,1000) & ","
  //   csvstr & Chr(13) & Chr(10);
  // }
  // 30837

  // csvstr = createObject("java","java.lang.StringBuffer");
  // csvstr.append("Email Address,First Name" & Chr(13) & Chr(10) );
  // cfloop( from=1, to=100000, index="i" ){
  //   csvstr.append(i & "," & randRange(1,1000) & "," & Chr(13) & Chr(10) );
  // }
  // writedump(arraylen(csvstr.toString().getBytes()));
  // 1049

  savecontent variable="test" {
    writeOutput("Email Address,First Name");
    cfloop( from=1, to=100000, index="i" ){
      writeOutput( i & "," & randRange(1,1000) & "," & Chr(13) & Chr(10) );
    }
  };
  writedump(arraylen(test.getBytes()));

  end = getTickCount() - start;
  writeOutput( end );
</cfscript>

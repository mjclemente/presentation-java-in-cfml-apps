<cfscript>

  data = 'H4sIAAAAAAAAAy3LMQ6AIAwAwNnHFDYHf1OR0EZK1Vb4vtE43HjkftgS4xgj8CnZ1ClXVsGQVCLams3VgBt0vgo3RoAZOgZyqRP9fbvT/ir6tQeVAvm8VgAAAA==';

  // writeDump( var='#ungzip(toBinary(data))#', abort='true' );

  buffReader = createObject("java", "java.io.BufferedReader").init(
    createObject("java", "java.io.InputStreamReader").init(
        createObject("java", "java.util.zip.GZIPInputStream").init(
            createObject("java", "java.io.ByteArrayInputStream").init( toBinary(data) )
        )
    )
);

line = buffReader.readLine();
thing1 = line.listFirst(chr(9));
buffReader.close();
writeDump( var='#line#', abort='true', label = 'test' );
</cfscript>

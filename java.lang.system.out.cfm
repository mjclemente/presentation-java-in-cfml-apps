<cfscript>
// stdout = createObject( 'java', 'java.lang.System' ).out;
// stderr = createObject( 'java', 'java.lang.System' ).err;

// stdout.println( 'ahhhhh... information.' );
// stderr.println( 'AHHHHH! ERRORS!' );

function writeToConsole(required message) {
  var args = arguments.copy();
  args["timestamp"] = now().dateTimeFormat("iso");
  stdout = createObject( "java", "java.lang.System" ).out;
  stdout.println(serializeJSON(args));
}

writeToConsole( 'testing' );
</cfscript>

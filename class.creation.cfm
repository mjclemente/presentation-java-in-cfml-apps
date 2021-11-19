<cfscript>
// Invoking a static method
javaSystem = new java( "java.lang.System" );
currentTime = javaSystem.currentTimeMillis();
writeOutput( currentTime );
</cfscript>

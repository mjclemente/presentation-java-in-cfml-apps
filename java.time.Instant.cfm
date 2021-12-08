<cfscript>
timestamp = 1637249609000;
instant = createObject("java", "java.time.Instant").ofEpochMilli(timestamp);
date_from_instant = createObject("java", "java.util.Date").from( instant );
result = dateTimeFormat( date_from_instant, 'full' );
writeDump(result);
</cfscript>

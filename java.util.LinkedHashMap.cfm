<cfscript>
serial = createObject("java","java.util.LinkedHashMap").init();

serial.a = 1;
serial.b = 2;
serial.c = 3;

writeDump( serial );
</cfscript>

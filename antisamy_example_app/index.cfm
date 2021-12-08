<cfscript>
sanitizer = createObject("java","org.owasp.validator.html.AntiSamy");

policyFile = expandPath( 'config/default.xml' );

str = "<p> This is a test for
<h1 onclick= “alert(‘malicious code’);” > AntiSamy </h1>";

clean_results = sanitizer.scan( str, policyFile );

result = [
  "Input": str,
  "Cleaned": clean_results.getCleanHTML(),
  "Errors": clean_results.getErrorMessages()
]

writeDump(result);
</cfscript>

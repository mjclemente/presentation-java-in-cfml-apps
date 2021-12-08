<cfscript>
uri = 'https://blog.mattclemente.com/2021/10/01/til-cfml-objectsave-objectload/##the-backstory';

parsed_uri = createObject( "java", "java.net.URI" ).init( uri );

uri_components = {
  "Scheme": parsed_uri.getScheme(),
  "Scheme Specific Part": parsed_uri.getSchemeSpecificPart(),
  "Authority": parsed_uri.getAuthority(),
  "User Info": parsed_uri.getUserInfo(),
  "Host": parsed_uri.getHost(),
  "Port": parsed_uri.getPort(),
  "Path": parsed_uri.getPath(),
  "Query": parsed_uri.getQuery(),
  "Fragment": parsed_uri.getFragment()
}

writeDump( uri_components );
</cfscript>

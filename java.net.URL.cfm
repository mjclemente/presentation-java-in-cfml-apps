<cfscript>
uri = 'https://blog.mattclemente.com/2021/10/01/til-cfml-objectsave-objectload/##the-backstory';

parsed_url = createObject( "java", "java.net.URL" ).init( uri );

url_components = {
  "Protocol": parsed_url.getProtocol(),
  "Authority": parsed_url.getAuthority(),
  "User Info": parsed_url.getUserInfo(),
  "Host": parsed_url.getHost(),
  "Port": parsed_url.getPort(),
  "Path": parsed_url.getPath(),
  "File": parsed_url.getFile(),
  "Query": parsed_url.getQuery(),
  "Ref": parsed_url.getRef()
}

writeDump( url_components );
  </cfscript>

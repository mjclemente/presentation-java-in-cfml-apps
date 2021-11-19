<cfscript>
public string function getHostname(){
  return createObject( 'java', 'java.net.InetAddress' ).getLocalHost().getHostName();
}
/**
 * Looks up all IP addresses for a hostname and returns them in an array.  Requires Java.
 *
 * @param host      Host name. (Required)
 * @return Returns an array.
 * @author David Chaplin-Loebell (davidcl@tlavideo.com)
 * @version 1, September 22, 2005
 */
function getAllHostAddresses(host) {
  var iaclass=""; //holds the Java object
  var addr="";    //holds the array returned by the java object
  var hostaddr=arrayNew(1);    //holds the returned array of IP addresses.
  var i = "";

  // Init class
  iaclass=CreateObject("java", "java.net.InetAddress");

  // Get address
  addr=iaclass.getAllByName(host);

  // Return the address
  for (i=1; i LTE ArrayLen(addr); i=i+1) {
      iaclass = Addr[i]; //can't access Addr[i].getHostAddress() directly in CF5
      hostaddr[i] = iaclass.getHostAddress();
  }
  return hostaddr;
}
writeDump( getHostname() );
// writeoutput('<br>');
// writeDump(cgi.http_host);
// writeoutput('<br>');
// writeDump(cgi.server_name);
writeDump( var='#getAllHostAddresses('www.classaction.org')#', abort='true' );
</cfscript>

<cfscript>
function dnsLookup(domain, type, dnsServer = "8.8.8.8", timeout = 2000, retries = 1){
  var dnsRecords = [];

  var env = CreateObject('java','java.util.Hashtable');
  env.put('java.naming.factory.initial','com.sun.jndi.dns.DnsContextFactory');
  env.put('java.naming.provider.url', 'dns://#dnsServer#');
  env.put('com.sun.jndi.dns.timeout.initial', javaCast('string', timeout));
  env.put('com.sun.jndi.dns.timeout.retries', javaCast( 'string', retries));

  var dirContext = CreateObject('java', 'javax.naming.directory.InitialDirContext');
  dirContext.init( env );

  try {
    var records = dirContext.getAttributes( domain, [ type ] ).get( type ).getAll();
    while( records.hasMore() ) {
      var record = records.next().ToString();
      dnsRecords.append( record );
    }
  } catch ( any e ){} //if there are no records, the lookup fails
  return dnsRecords;
}

mxRecords = dnsLookup( "mattclemente.com", "MX" );
writeDump( mxRecords );
</cfscript>

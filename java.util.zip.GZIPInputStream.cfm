<cfscript>
function ungzip(required string str) {
  var buffReader = createObject('java', 'java.io.BufferedReader').init(
    createObject('java', 'java.io.InputStreamReader').init(
      createObject('java', 'java.util.zip.GZIPInputStream').init(
        createObject('java', 'java.io.ByteArrayInputStream').init(
          toBinary(arguments.str))
      )
    )
  );
  var result = buffReader.readLine();
  return result;
}
str = 'H4sIAAAAAAAAAFVS25HcMAxrhQV4roGtIP9pQLboFSd67Ii0Pf67QpLmrpKA0k7m8mWZhEAA1Nfn7x9GolSbkSWmrYvJRldqtLWjmj7+tUqoo/5qgjq1wyi1a7TUeqvPgVA7yppZF2odcO48ELFxp7ZTZI7q1DlSCqc36kAUWtmM+wf9HDI4iqGUwatk7T8F0Bs2O0LON0kdrdC5hsW7yrSHjR1UQgcPrTfFQ41CjaQXh3lac2vxMfggX05WOkOWUC3fs8y96/KOoqCtqXXcfQbMdIZxWiByC4cOE51nlsT77thLLHlOYEIaY75zgE7q80ErWk6PcL45mmrcc5y2R2ZT0q/aLqVndxNcLR0qQQtUOm6WI5/NpNX3DX1xReJJinLePa5AFzSkm4bsiQpzxSsjpjnjnSsujy80HeWVfIVJnglqk/DJBSKWYewbC+gVVQHUdyEZ+tDKHMA+/oGWDGOhI4epO98LqfsFMiHEV/YlakIkVDGpQ9zIExDf8dbwgnywSRHkihelQ0Rl8U0MG3TKZq3fWElHMDvmfHx9/vkLKBERbfYCAAA=';
writeDump(ungzip(str));
</cfscript>

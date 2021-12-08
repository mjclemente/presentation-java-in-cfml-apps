<cfscript>
function urlSafeBase64Encode(str) {
  return createObject("java", "java.util.Base64")
    .getUrlEncoder()
    .withoutPadding()
    .encodeToString(str.getBytes("UTF-8"));
}

str = "String you want to encode."

base64 = toBase64(str);
writeDump({ "Standard Base64": base64});

urlSafeBase64 = urlSafeBase64Encode(str);
writeDump({ "URL Safe Base64": urlSafeBase64 });

function urlSafeBase64Decode(str) {
  var bytes = createObject("java", "java.util.Base64")
    .getUrlDecoder()
    .decode(str);
  return createObject("java", "java.lang.String").init(bytes);
}

urlSafeBase64 = urlSafeBase64Encode("String you want to encode.");
writeDump({ "URL Safe Base64": urlSafeBase64 });
writeDump({ "Decoded": urlSafeBase64Decode(urlSafeBase64)});

</cfscript>

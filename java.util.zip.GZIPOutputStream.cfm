<cfscript>
str = '“It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.”';
function gzip(required string str) {
    if (!str.length()) {
        return str;
    }
    var obj = createObject('java', 'java.io.ByteArrayOutputStream').init();
    var gzip = createObject('java', 'java.util.zip.GZIPOutputStream').init(obj);
    gzip.write(str.getBytes('UTF-8'));
    gzip.close();
    return binaryEncode(obj.toByteArray(), 'base64');
}
test = gzip(str);
writeDump(gzip(test));
</cfscript>

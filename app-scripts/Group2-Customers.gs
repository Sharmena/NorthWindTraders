function writeDataToFirebase() {
 var email = "firebase-adminsdk-vl0h7@md-northwind-traders.iam.gserviceaccount.com";
  var key = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCRdnl2CyBHQbga\nFmejQz5gW2RMr3AaGA29HUlNkpX9GOqdo+FeyCMaEendUcPdkxJ06DGi1QFk/Wow\nXWPTBoheeH3aBcYs3veFFEuIFapXDvHwjDKPXZW2aduDIniFVnRBdqBptJ9yUTrd\niKyHPBwns5usHg2EowEQB5ikH7foziupt6dj5swHmfFrHGoR5ISd+Qa9ESIhkc/U\n7ZuCYBt5yJSVoPhEf+2NlgjnHm6T8soKKAyIjWFR6M/7TqVwDH+gpKt/TZ/Y+4cu\nNmG9yJgczwUgJLvd8GfAs+RqxKaL/+2Akcb7so4UkYz2OCzaBSSRMgaGIlGnN63d\nu8FY+eN5AgMBAAECggEAOnGzCHoc7HRbv2OMHV0ppTZjHKqKbHmIn5iyOJAyYkAO\nF+td5CKec92JrKoq+44ZZs5aDxXtGwH0ld0X/BQOW4Km8h/KyYGGSrpmRJWL3LG9\nBIyXzeFogyOSFmSVruEXEaxTdFUlkR1Q/OxqgWVl3I+99tAWV1nU1fdvXVX/IvKE\nBU/jLOjyQXDTYjpvvjT0W7JEqX4qQJMBTjrHlyAGKizy6lbmmFzymhwk2WL5XqN8\n+PQW5oqEAgAiShfl14xE+0FM+vaxgjNjViJFML7YFf+an/1M9zaq43nxgjQKnRXi\nzWeJROBIl7J50cSakHx71zfBU5M7zy7LaGrGAGGytwKBgQDJO6voZc3Z4JvA/6yz\nhr5LGV/EdPFEOzamIdGrvBxvvIHNp6j7gHV0mVyIC3Fg6OzP6GWnmyEcXFWumZwz\n9Md3Na3XHgocvdJX0ygDXSvjYgQueRj3VfBJ4fGA+VLFwT8VitBpYWdsXP/corbm\n9Hy9UkS4U7eh7+mIyqg6psUenwKBgQC5DSuCM58u+vcVe9qjV0AUicKKbXgX5S/b\nRfULcxq7lGm4/XBBpR07VspsPK5QlbfyFlrIB4SjOH3A2kPZXRw+PVrH/cUauskn\nVG3uCYoxEr4Ju2ZteAaNQYYdp+I/v1lizMImxTdqV5ENQ13rfnAtYdfjFFXvfBdZ\nglXXkFd+5wKBgB0bA19GskJsKTr9//WrbISiM+bPX0IWKm5W/+ON/rLumfur31YZ\nG2P09pw6w3hX2ECuBV37owteE4qAb0ZYhi0o128Aykej8POA+A2cgUePGrm6DDFh\n/bJB+tNDvIQb0ksEW+aSDwpuXReFdVzsScp8RrI+cZX7hFSjszdgfaxTAoGBAJ8g\nuB1KjsQzg22yB50WVkBTBjtLT04dAz4ntkSWQpKzWQZ+yZ1pgu2YAJF6zNr3JCrF\nFmOUM3a4CUthZZ7w9mx/DiWUD36gyIFNlQpwoaj5WPm9cKMJ53hotA+kYmY3AYJ4\nWSxFwxVrH4ysNYNgQs6DqMXYot1BdELAVVj9AoBZAoGBAMIReVwXdR1nqhFyxIWg\ngih9WNDLhnYUyD1EU6/z6FQIlNMxvXUWOJYjc02mH8Jqaal1uu0JAT+RFjk8XDaL\n1Ix30JLRaJjc5+2Q7BiQbeOzFPMnHzLxCaVUDzNszSN0lFAtthfOpJ9ARwVzCAmZ\n7y89Rykkk/ooCHytWmfvgZBM\n-----END PRIVATE KEY-----\n";
  var projectId = "md-northwind-traders";
var firestore = FirestoreApp.getFirestore(email, key, projectId);
var url = SpreadsheetApp.getActiveSpreadsheet().getUrl();
var ss = SpreadsheetApp.openByUrl(url);
var sheet = ss.getSheets()[0];
var data = sheet.getDataRange().getValues();
var dataToImport = {};
Logger.log(data.length);
  
// id, author, country, imageLink, language, link, pages, title, year
  // *Note: the loop counter below is set for 10 documents to be created
  // if you want the whole set of documents use this loop:   for(var i = 1; i < data.length; i++) {
  
  
for(var i = 1; i < 10; i++) {
var ID = i // data[i][0];
var Author = data[i][0];
dataToImport[ID + '-' + Author] = {
id: ID,
author: Author,
country:data[i][1],
imageLink:data[i][2],
language:data[i][3],
link:data[i][4],
pages:data[i][5],
title:data[i][6],
year:data[i][7],
};
firestore.createDocument("Books/", dataToImport[ID + '-' + Author]);
Logger.log(dataToImport);
}
}

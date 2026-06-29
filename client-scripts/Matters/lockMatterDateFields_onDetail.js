
/** 
 * log("sample logging statement") --> can be used to print any data in the browser console.
 * ZDK module can be used for customising the UI and other functionalities.
 * return false to prevent <SAVE> action
**/

// List of fields to lock
var fieldsToLock = [
    "LLPS_Meeting", 
    "Design_Meeting_Date", 
    "CIMI_Review_Date_Time", 
    "Signing_Meeting", 
    "Doc_Review" 
    // Add "Funding_Meeting" if you ended up keeping it
];

// Loop through and set them to Read Only
for (var i = 0; i < fieldsToLock.length; i++) {
    var fieldObj = ZDK.Page.getField(fieldsToLock[i]);
    if (fieldObj != null) {
        fieldObj.setReadOnly(true);
    }
}

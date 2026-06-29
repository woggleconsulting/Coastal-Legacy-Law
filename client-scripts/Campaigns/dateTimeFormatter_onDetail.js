var fieldsToLock = [
    "Start_Date_and_Time",
    "Start_Date_Formatted",
    "Start_Time_Formatted",
    "End_Date_and_Time",
    "End_Date_Formatted",
    "End_Time_Formatted"
];

fieldsToLock.forEach(function(fieldApi) {
    ZDK.Page.getField(fieldApi).setReadOnly(true);
});

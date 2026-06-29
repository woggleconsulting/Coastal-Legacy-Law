$Lt._execScript(async function () {
	await async function (__globalScope) {
		$Lt._cV("formatDateTimeFields", await async function () {
			async function formatDate(dateObj) {
				return await (await (await dateObj.getMonth() + 1).toString()).padStart(2, "0") + "/" + await (await (await dateObj.getDate()).toString()).padStart(2, "0") + "/" + await dateObj.getFullYear();
			}
			async function formatTime(dateObj) {
				var hours = await dateObj.getHours();
				var minutes = await (await (await dateObj.getMinutes()).toString()).padStart(2, "0");
				var amPm = hours >= 12 ? "PM" : "AM";
				hours = hours % 12 || 12;
				return hours + ":" + minutes + " " + amPm;
			}
			async function processDateTime(dateTimeFieldApi, dateFieldApi, timeFieldApi) {
				var dateTimeValue = await (await (await $Lt._gc.ZDK.Page).getField(dateTimeFieldApi)).getValue();
				if (dateTimeValue) {
					var dateObj = await $Lt._cO($Lt._gc.Date, dateTimeValue);
					await (await (await $Lt._gc.ZDK.Page).getField(dateFieldApi)).setValue(await formatDate(dateObj));
					await (await (await $Lt._gc.ZDK.Page).getField(timeFieldApi)).setValue(await formatTime(dateObj));
				}
			}
			return {
				processStart: async function () {
						await processDateTime("Start_Date_and_Time", "Start_Date_Formatted", "Start_Time_Formatted");
					},
				processEnd: async function () {
					await processDateTime("End_Date_and_Time", "End_Date_Formatted", "End_Time_Formatted");
				},
				processAll: async function () {
					await this.processStart();
					await this.processEnd();
				}
			};
		}(), "var");
	}(self);
});

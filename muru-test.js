var obj = [
	{
		employeName: "Test1",
		checkinTime: "9:00",
		checkouttime: "10:00",
		date: "2022-03-01",
		dept: "QA",
	},
	{
		employeName: "Test2",
		checkinTime: "10:00",
		checkouttime: "11:00",
		date: "2022-03-01",
		dept: "Dev",
	},
	{
		employeName: "Test3",
		checkinTime: "11:00",
		checkouttime: "12:00",
		date: "2022-03-01",
		dept: "Finance",
	},
	{
		employeName: "Test4",
		checkinTime: "12:00",
		checkouttime: "13:00",
		date: "2022-03-01",
		dept: "HR",
	},
	{
		employeName: "Test5",
		checkinTime: "13:00",
		checkouttime: "14:00",
		date: "2022-03-01",
		dept: "BA",
	},
	{
		employeName: "Test6",
		checkinTime: "14:00",
		checkouttime: "15:00",
		date: "2022-03-01",
		dept: "Admin",
	},
	{
		employeName: "Test1",
		checkinTime: "9:00",
		checkouttime: "10:00",
		date: "2022-03-02",
		dept: "QA",
	},
	{
		employeName: "Test2",
		checkinTime: "10:00",
		checkouttime: "11:00",
		date: "2022-03-02",
		dept: "Dev",
	},
	{
		employeName: "Test3",
		checkinTime: "11:00",
		checkouttime: "12:00",
		date: "2022-03-02",
		dept: "Finance",
	},
	{
		employeName: "Test4",
		checkinTime: "12:00",
		checkouttime: "13:00",
		date: "2022-03-02",
		dept: "HR",
	},
	{
		employeName: "Test5",
		checkinTime: "13:00",
		checkouttime: "14:00",
		date: "2022-03-02",
		dept: "BA",
	},
	{
		employeName: "Test6",
		checkinTime: "14:00",
		checkouttime: "15:00",
		date: "2022-03-02",
		dept: "Admin",
	},
	{
		employeName: "Test1",
		checkinTime: "9:00",
		checkouttime: "10:00",
		date: "2022-03-03",
		dept: "QA",
	},
	{
		employeName: "Test2",
		checkinTime: "10:00",
		checkouttime: "11:00",
		date: "2022-03-03",
		dept: "Dev",
	},
	{
		employeName: "Test3",
		checkinTime: "11:00",
		checkouttime: "12:00",
		date: "2022-03-03",
		dept: "Finance",
	},
	{
		employeName: "Test4",
		checkinTime: "12:00",
		checkouttime: "13:00",
		date: "2022-03-03",
		dept: "HR",
	},
	{
		employeName: "Test5",
		checkinTime: "13:00",
		checkouttime: "14:00",
		date: "2022-03-03",
		dept: "BA",
	},
	{
		employeName: "Test6",
		checkinTime: "14:00",
		checkouttime: "15:00",
		date: "2022-03-03",
		dept: "Admin",
	},
	{
		employeName: "Test1",
		checkinTime: "9:00",
		checkouttime: "10:00",
		date: "2022-03-04",
		dept: "QA",
	},
	{
		employeName: "Test2",
		checkinTime: "10:00",
		checkouttime: "11:00",
		date: "2022-03-04",
		dept: "Dev",
	},
	{
		employeName: "Test3",
		checkinTime: "11:00",
		checkouttime: "12:00",
		date: "2022-03-04",
		dept: "Finance",
	},
	{
		employeName: "Test4",
		checkinTime: "12:00",
		checkouttime: "13:00",
		date: "2022-03-04",
		dept: "HR",
	},
	{
		employeName: "Test5",
		checkinTime: "13:00",
		checkouttime: "14:00",
		date: "2022-03-04",
		dept: "BA",
	},
	{
		employeName: "Test6",
		checkinTime: "14:00",
		checkouttime: "15:00",
		date: "2022-03-04",
		dept: "Admin",
	},
	{
		employeName: "Test1",
		checkinTime: "9:00",
		checkouttime: "10:00",
		date: "2022-03-05",
		dept: "QA",
	},
	{
		employeName: "Test2",
		checkinTime: "10:00",
		checkouttime: "11:00",
		date: "2022-03-05",
		dept: "Dev",
	},
	{
		employeName: "Test3",
		checkinTime: "11:00",
		checkouttime: "12:00",
		date: "2022-03-05",
		dept: "Finance",
	},
	{
		employeName: "Test4",
		checkinTime: "12:00",
		checkouttime: "13:00",
		date: "2022-03-05",
		dept: "HR",
	},
	{
		employeName: "Test5",
		checkinTime: "13:00",
		checkouttime: "14:00",
		date: "2022-03-05",
		dept: "BA",
	},
	{
		employeName: "Test6",
		checkinTime: "14:00",
		checkouttime: "15:00",
		date: "2022-03-05",
		dept: "Admin",
	},
];

// import readline module
const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
function question() {
	rl.question("please enter a name ", function (string) {
		var userInput = string;

		userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1);
		var finalArr = obj.filter((d) => d.employeName === userInput);
		finalArr = Object.entries(finalArr);
		finalArr.forEach(function (finArr) {
			var name = finArr[1].employeName;
			var checkinTime = finArr[1].checkinTime;
			var checkouttime = finArr[1].checkouttime;
			var dept = finArr[1].dept;
			var date = finArr[1].date;

			var days = parseInt(checkouttime) - parseInt(checkinTime);

			console.log(
				"name :",
				name,
				"\n",
				"date :",
				date,
				"\n",
				"checkin time :",
				checkinTime,
				"\n",
				"checkout time :",
				checkouttime,
				"\n",
				"dept :",
				dept,
				"\n",
				"working hours per days :",
				days,
				"\n",
				"\n",
				"\n"
			);
		});
		question();
	});
}

question();

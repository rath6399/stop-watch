Titanium.UI.setBackgroundColor('#000');

var startWind = Titanium.UI.createWindow({  
    backgroundColor:'#C0BFBF',
    layout: 'vertical'
});
var timerView = Ti.UI.createView({
	height: '20%',
	width: '100%',
	layout:'vertical',
	backgroundColor:'#C0BFBF'
});
var buttonView = Ti.UI.createView({
	height: '20%',
	width:'100%',
	backgroundColor:'#001F00',
	layout:'horizontal',
});
var startButton = Ti.UI.createButton({
	title:'START',
	color:'#C0BFBF',
	height:Ti.UI.FILL,
	width:'50%',
	textAlign:'Center',
	font:{
		fontSize:'45sp',
		fontWeight:'bold'
	},
	backgroundColor:'#00A600'
});
var stopButton = Ti.UI.createButton ({
	title:'STOP',
	color:'#C0BFBF',
	textSize:'Large',
	height:Ti.UI.FILL,
	width: '50%',
	font:{
		fontSize:'45sp',
		fontWeight:'bold'
	},
	textAlign:'Center',
	backgroundColor:'red'
});  
var resetButton = Ti.UI.createButton ({
	title: 'Reset',
	color:'#C0BFBF',
	
	height:Ti.UI.FILL,
	width:'50%',
	textAlign:'Right'
}); 
var timeLabel = Ti.UI.createLabel ({
	text: '00:00:00.0',
	textAlign:'center',
	verticalAlign:Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font:{
			fontSize:'65sp',
			fontWeight:'bold'
	}
});
var lapButton = Ti.UI.createLabel ({
	rext:'lap?',
	textAlign:'center',
	height:Ti.UI.FILL,
	width:'50%',
	textSize:'Large',
	font:{
		fontSize:'45sp',
		fontWeight:'bold'
	}
});
function Listener(watch) {
	timeLabel.text = watch.toString();
};
var stopWatch1 = require('Stopwatch');
var Stopwatch2 = new stopWatch1(Listener, 100);
var started = false;

var lapTable = Ti.UI.createTableView ({
	height:Ti.UI.FILL,
	backgroundColor:'#C0BFBF',
	width:'100%'
});

startButton.addEventListener('click', function (e) {
	if(started){
		var row = Ti.UI.createTableViewRow({
			title:Stopwatch2.toString(),
			color:'#808080',
			className:'lap',
			font:{
				fontSize:'20sp'
			}
		});
		lapTable.appendRow(row);
		
	}
	else{
		started = true;
		lapButton.title = 'lap?';
		Stopwatch2.start();
	}
});

stopButton.addEventListener('click', function (e) {
	if(started){
		stopButton.title = 'STOP',
		Stopwatch2.stop();
		started=false;
		
	}
	
});

startWind.add(timerView);
startWind.add(buttonView);
timerView.add(timeLabel);

buttonView.add(startButton);
buttonView.add(stopButton);
startWind.open();

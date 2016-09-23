$(document).ready(function(){
	$("#slide").jqFancyTransitions({
		/*đoạn này copy ở chỗ dòng cuối defaults={width:500,height:332,strips:10,delay:5000,stripDelay:50,titleOpacity:0.7,titleSpeed:1000,position:'alternate',direction:'fountainAlternate',effect:'',navigation:false,links:false} trong file jqFancyTransitions.1.8.min.js và thay navigation:true,*/
		/*muốn sửa các thứ của slideshow thì mình vào file jqFancyTransitions để tìm kiếm các # hoặc class để css*/
		width:945,
		height:250,
		strips:10,
		delay:2000,
		stripDelay:50,
		titleOpacity:0.7,
		titleSpeed:1000,
		position:'alternate',
		direction:'fountainAlternate',
		effect:'',
		navigation:true,
		links:false
	});
});
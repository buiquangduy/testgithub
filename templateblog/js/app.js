
		$(document).ready(function(){

				$('#menu2>ul>li > a').click(function(){
					//những thẻ sau thẻ a đầu tiên thì co dãn được
					var $ul=$(this).next();
					/*$('#menu ul li ul').removeClass('active');
				
						$ul.addClass('active');	
						return false;
				    */
				   //muốn mở cái khác mà cái kia tự đóng thì dùng thêm 2 dòng này
				    var $visible= $('#menu2 ul li ul:visible');
				    $visible.slideToggle();
					$ul.slideToggle();
					return false;

				});
		});
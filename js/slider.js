var last=0;
var myslider=new iSlider({
    		wrap:'#wrap',
    		item:'.page',
    		onslide:function(index)
    		{
               if (index==1)
               {
                        last=1;
                        center.style.opacity=0;
                        addClass(a1,'fadeInUp');
                        $('#center').attr('class','animated bounceInDown');
                        for (var i=1;i<=2;i++)
                            $('#round_'+i).attr('class','animated round_'+i);
                        for (var i=1;i<=5;i++)
                            $('#item_'+i).attr('class','animated item item_'+i);
               }
               if (index==0&&last==1)
               {
                        $('#cards').attr('class','cards animateds');
                       for (var i=1;i<=6;i++)
                       {
                        $('#a_'+i).attr('class','card animateds a_'+i);
                        $('#c_'+i).attr('class','animateds activity c_'+i);
                        $('#content_'+i).attr('class','content');
                        $('#a_'+i).css('opacity','0');
                        for (var j=1;j<=3;j++)
                            $('#t_'+i+j).attr('class','animateds parea parea_'+j);
                        $('#t_'+i+'4').attr('class','button b_out animateds');
                    }
                    goupFlag=0;
                }   
                   
            }  
                  
                    
                
    		});
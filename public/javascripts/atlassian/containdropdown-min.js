AJS.containDropdown=function(H,B,E){function G(){return H.$.offset().top-jQuery(B).offset().top}var C,F,D,A=25;if(H.$.parents(B).length!==-1){C=jQuery(B);F=G();A=30;D=C.outerHeight()-F-A;if(D<=parseInt(H.$.attr("scrollHeight"),10)){AJS.containDropdown.containHeight(H,D)}else{if(E){AJS.containDropdown.releaseContainment(H)}}H.reset()}};AJS.containDropdown.containHeight=function(B,A){B.$.css({height:A});if(B.$.css("overflowY")!=="scroll"){B.$.css({width:15+B.$.attr("scrollWidth"),overflowY:"scroll",overflowX:"hidden"})}};AJS.containDropdown.releaseContainment=function(A){A.$.css({height:"",width:"",overflowY:"",overflowX:""})};
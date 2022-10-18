var _grad="",_point="",GPACal="",_TotalMark="",_TotalPointWf=0,_Bn1Total,_En1Total,_MaTotal,_SsTotal,_IsTotal,_ASTotal,_BETotal,_IBTotal,_ACTotal,AgriGpa="";

var _TotalPoint =parseFloat(_TotalPointWf);

function CgpaCata(TotalMarks) {
	 

	if (TotalMarks>=80 & TotalMarks <=100) {
	 _grad="A+";
	  _point=5.00;

	}

	else if (TotalMarks>=70 & TotalMarks <=79) {
	 _grad="A";
	  _point=4;

	}

	else if (TotalMarks>=60 & TotalMarks <=69) {
	 _grad="A-";
	  _point=3.5;

	}

	else if (TotalMarks>=50 & TotalMarks <=59) {
	 _grad="B";
	  _point=3;

	}

	else if (TotalMarks>=40 & TotalMarks <=49) {
	 _grad="C";
	  _point=2.5;

	}

	else if (TotalMarks>=33 & TotalMarks <=39) {
	 _grad="D";
	  _point=2;

	}

	else if (TotalMarks>=0 & TotalMarks <=32) {
	 _grad="F";
	  _point=0.0;

	}
else{
	// alert("Wrong Number");
	// _grad="";
	//   _point="";
}
	
}

	// for bangla 1st
	function Bangla(){
	 let _Bn1WrNumber =document.getElementById("WrNumber").value;
	 let _Bn1PrNumber =document.getElementById("PrNumber").value;
	 	 _Bn1Total =document.getElementById("TotalNum").value;

	_Bn1Total=(parseInt(_Bn1WrNumber)+parseInt(_Bn1PrNumber));
	
	 CgpaCata(_Bn1Total);
     document.getElementById("TotalNum").value=_Bn1Total;
     document.getElementById("Grade").value=_grad;
     document.getElementById("Cgpa").value =_point;
     // for marksheet
     document.getElementById("BngGrade").innerText=_grad;
     document.getElementById("BngPoint").innerText =_point;

     _TotalPoint=_point;
     	_grad="";
		_point="";
     }

     // for english 1st
     function English()
     {
     	let _En1WrNumber =document.getElementById("E1WrNumber").value;
		let _En1PrNumber =document.getElementById("E1PrNumber").value;
			 _En1Total =document.getElementById("E1TotalNum").value;

		_En1Total=(parseInt(_En1WrNumber)+parseInt(_En1PrNumber));
	
	 	CgpaCata(_En1Total);
    	document.getElementById("E1TotalNum").value=_En1Total;
   		document.getElementById("E1Grade").value = _grad;
    	document.getElementById("E1Cgpa").value = _point;
    	// for marksheet
     document.getElementById("EngGrade").innerText=_grad;
     document.getElementById("EngPoint").innerText =_point;

    	 _TotalPoint=_TotalPoint+_point;
    	
    	_grad="";
		_point="";
     }
	
	// for mathmatic
     function Mathmatic(){

	let _MaWrNumber =document.getElementById("MaWrNumber").value;
	let _MaPrNumber =document.getElementById("MaPrNumber").value;
		 _MaTotal =document.getElementById("MaTotalNum").value;

	 _MaTotal=(parseInt(_MaWrNumber)+parseInt(_MaPrNumber));
	
	 CgpaCata(_MaTotal);
     document.getElementById("MaTotalNum").value=_MaTotal;
     document.getElementById("MaGrade").value = _grad;
     document.getElementById("MaCgpa").value =_point;
		// for marksheet
     document.getElementById("MathGrade").innerText=_grad;
     document.getElementById("MathPoint").innerText =_point;

       _TotalPoint=_TotalPoint+_point;
     	
     	_grad="";
		_point="";
     }


	// for islamic 
     function Islam()
     {

		let _IsWrNumber =document.getElementById("ISWrNumber").value;
		let _IsPrNumber =document.getElementById("ISPrNumber").value;
			_IsTotal =document.getElementById("ISTotalNum").value;

		_IsTotal=(parseInt(_IsWrNumber)+parseInt(_IsPrNumber));
		
	 	CgpaCata(_IsTotal);
    	document.getElementById("ISTotalNum").value=_IsTotal;
    	document.getElementById("ISGrade").value = _grad;
   		document.getElementById("ISCgpa").value = _point;
   		// for marksheet
     document.getElementById("IslamGrade").innerText=_grad;
     document.getElementById("IslamPoint").innerText =_point;
   		  _TotalPoint=_TotalPoint+_point;
   		
   		_grad="";
		_point="";
    	 }

	// for social science
     function GeneralScience()
     {

	let _SsWrNumber =document.getElementById("SSWrNumber").value;
	let _SsPrNumber =document.getElementById("SSPrNumber").value;
	 	_SsTotal =document.getElementById("SSTotalNum").value;

	_SsTotal=(parseInt(_SsWrNumber)+parseInt(_SsPrNumber));
	
	 CgpaCata(_SsTotal);
     document.getElementById("SSTotalNum").value=_SsTotal;
     document.getElementById("SSGrade").value = _grad;
   	 document.getElementById("SSCgpa").value =_point;
   	 // for marksheet
     document.getElementById("GenScGrede").innerText=_grad;
     document.getElementById("GenScPoint").innerText =_point;
	  _TotalPoint=_TotalPoint+_point;
     	
     	_grad="";
		_point="";
     }


	// for Intraduction Business

		function IntBusiness()
	     {

			let _IBWrNumber =document.getElementById("IBWrNumber").value;
			let _IBPrNumber =document.getElementById("IBPrNumber").value;
				_IBTotal =document.getElementById("ISTotalNum").value;

			_IBTotal=(parseInt(_IBWrNumber)+parseInt(_IBPrNumber));
			
		 	CgpaCata(_IsTotal);
	    	document.getElementById("IBTotalNum").value=_IBTotal;
	    	document.getElementById("IBGrade").value = _grad;
	   		document.getElementById("IBCgpa").value = _point;
	   		// for marksheet
    		 document.getElementById("IntrBusGrade").innerText=_grad;
    		 document.getElementById("IntrBusPoint").innerText =_point;

	   		  _TotalPoint=_TotalPoint+_point;
	   		
	   		_grad="";
			_point="";
	     }

		// for Accounting
		function Accounting()
		{

			let _ACWrNumber =document.getElementById("ACWrNumber").value;
			let _ACPrNumber =document.getElementById("ACPrNumber").value;
				_ACTotal =document.getElementById("ACTotalNum").value;

			_ACTotal=(parseInt(_ACWrNumber)+parseInt(_ACPrNumber));
			
		 	CgpaCata(_ACTotal);
	    	document.getElementById("ACTotalNum").value=_ACTotal;
	    	document.getElementById("ACGrade").value = _grad;
	   		document.getElementById("ACCgpa").value = _point;
	   		// for marksheet
     		document.getElementById("AccountGrade").innerText=_grad;
     		document.getElementById("AccountPoint").innerText =_point;

	   		  _TotalPoint=_TotalPoint+_point;
	   		
	   		_grad="";
			_point="";
		}

		// for Business Entrepreneurship
		function BusinessEntr()
		{
			let _BEWrNumber =document.getElementById("BEWrNumber").value;
			let _BEPrNumber =document.getElementById("BEPrNumber").value;
				_BETotal =document.getElementById("BETotalNum").value;

			_BETotal=(parseInt(_BEWrNumber)+parseInt(_BEPrNumber));
			
		 	CgpaCata(_BETotal);
	    	document.getElementById("BETotalNum").value=_BETotal;
	    	document.getElementById("BEGrade").value = _grad;
	   		document.getElementById("BECgpa").value = _point;
	   		// for marksheet
     		document.getElementById("BusiEntrGrade").innerText=_grad;
     		document.getElementById("BusiEntrEPoint").innerText =_point;

	   		  _TotalPoint=_TotalPoint+_point;
	   		
	   		_grad="";
			_point="";
		}

		// for Agriculture Studies (AD)
		function AgriStudies(){
			let _ASWrNumber =document.getElementById("ASWrNumber").value;
			let _ASPrNumber =document.getElementById("ASPrNumber").value;
				_ASTotal =document.getElementById("ASTotalNum").value;

			_ASTotal=(parseInt(_ASWrNumber)+parseInt(_ASPrNumber));
			
		 	CgpaCata(_ASTotal);
	    	document.getElementById("ASTotalNum").value=_ASTotal;
	    	document.getElementById("ASGrade").value = _grad;
	   		document.getElementById("ASCgpa").value = _point;
	   		// for marksheet
     		document.getElementById("AgriStGrade").innerText=_grad;
     		document.getElementById("AgriStPoint").innerText =_point;
			//  _TotalPoint=_TotalPoint+_point;
	   		  AgriGpa=AgriGpa+_point;
	   		
	   		_grad="";
			_point="";

		}

    function AllCalValue()
    {
    	Bangla();
    	English();
    	Mathmatic();
    	Islam();
    	GeneralScience();
    	IntBusiness();
    	Accounting();
    	BusinessEntr();
    	AgriStudies();
    	
	_TotalMark=parseFloat(_Bn1Total)+parseFloat(_En1Total)+parseFloat(_MaTotal)+parseFloat(_SsTotal)+parseFloat(_IsTotal)+parseFloat(_ASTotal)+parseFloat(_BETotal)+parseFloat(_IBTotal)+parseFloat(_ACTotal);
	document.getElementById("AllTotalNum").value =_TotalMark.toFixed(2);
	
	
	
	var extraSubGpa=(parseFloat(AgriGpa)-2);
	document.getElementById("extraSub").innerText=extraSubGpa;
	// alert(extraSubGpa);
	var TotalAvgGpa=((parseFloat(_TotalPoint+extraSubGpa)/8))
    document.getElementById("ToCgpa").value =TotalAvgGpa.toFixed(2);
	GradeCal(TotalAvgGpa);
	document.getElementById("ToGrade").value =GPACal;
	
	 
     
    // alert(_TotalPoint);
    // document.getElementById("TotalGPA").innerText=TotalGPA;
    document.getElementById("TotalGPAWiExtraSub").innerText=TotalAvgGpa;
    document.getElementById("TotalGPA").innerText=GPACal;

    }

    	function GradeCal(GPACalNum)
    	{
    		let GPACalNumFlot=parseFloat(GPACalNum);
    		if (GPACalNumFlot==5) 
    		{
    			GPACal="A+";
    		}
    		else if (GPACalNumFlot>=4 & GPACalNumFlot<5) 
    		{
    			GPACal="A";
    		}
			else if (GPACalNumFlot>=3.5 & GPACalNumFlot<4) 
    		{
    			GPACal="A-";
    		}
			else if (GPACalNumFlot>=3 & GPACalNumFlot<3.5) 
    		{
    			GPACal="B";
    		}
			else if (GPACalNumFlot>=2.5 & GPACalNumFlot<3) 
    		{
    			GPACal="c";
    		}
			else if (GPACalNumFlot>=2 & GPACalNumFlot<2.5) 
    		{
    			GPACal="c";
    		}
			else{
				GPACal="F";
			}
    	}
		// jQuery(document).ready()
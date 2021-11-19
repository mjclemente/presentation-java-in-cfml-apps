<CFOBJECT ACTION="CREATE" TYPE="Java" CLASS="java.util.GregorianCalendar" NAME="myCalendar">

<!--- Default Constructor is being called implicitly --->

<!--- Check if 2001 is a leap-year --->
<CFSET is2001LeapYear = myCalendar.isLeapYear(2001)>

<!--- Retrieve current date --->
<CFSET theYear = myCalendar.get(myCalendar.YEAR)>
<CFSET theMonth = myCalendar.get(myCalendar.MONTH) + 1>
<CFSET theDay = myCalendar.get(myCalendar.DATE)>

<cfoutput>
 <html>
 <body>
  Is 2001 a leap-year? <b>#is2001LeapYear#</b>
  <p>
  Today is the <b>#theMonth# / #theDay# / #theYear#</b>
 </body>
 </html>
</cfoutput>

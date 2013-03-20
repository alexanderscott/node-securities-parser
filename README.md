# NODE-SECURITIES-PARSER (programming challenge solution)
 - Solution by Alex Ehrnschwender (alexanderscott46@gmail.com)


## About
This solution is built in Javascript using Node.JS, which is what I've been flailing with lately.
It takes in a 10-year span of monthly security price data for 28 stocks & mutual funds and outputs
to stdout an ordered list of periods with maximum return.


## Config
Install Node.JS from http://nodejs.org/ or thru homebrew 'brew install node' on a mac.
To install the async module dependency, change to this project directory and run 'npm install'.

I have included the securities data in JSON format for validation and convenience in the 'data' directory.
It was generated and can be regenerated with 'node parseTxtData'.
To calculate the growth periods and return the answer to stdout, run 'node findBursts'.


## Result
For reference, stdout should display:

AAPL : 4202.40% growth from Feb 2004 to Jan 2011
FDEGX : 483.62% growth from Aug 2009 to Jun 2011
FDCPX : 392.65% growth from Aug 2009 to Jun 2011
FSELX : 390.87% growth from Aug 2009 to Jun 2011
FSTCX : 318.78% growth from Oct 2009 to Aug 2011
GBFAX : 276.98% growth from Mar 2003 to Nov 2003
VGSIX : 215.01% growth from Mar 2003 to Aug 2004
FEMKX : 213.51% growth from Mar 2003 to Nov 2003
FLATX : 170.82% growth from Mar 2003 to Apr 2003
QQQQ : 170.49% growth from Aug 2003 to Jun 2008
VEIEX : 168.24% growth from Mar 2003 to Nov 2003
VGTSX : 140.88% growth from Mar 2003 to Nov 2003
FMAGX : 139.54% growth from Mar 2003 to Nov 2003
PRMTX : 134.62% growth from Aug 2009 to Jun 2011
FIGRX : 132.56% growth from Mar 2003 to Nov 2003
VWIGX : 131.75% growth from Mar 2003 to Nov 2003
GE : 127.66% growth from Jan 2010 to May 2010
SWSSX : 123.57% growth from Mar 2003 to Oct 2004
VIGRX : 114.89% growth from Aug 2009 to Jun 2011
HD : 112.85% growth from Dec 2003 to Jul 2006
FUSEX : 104.04% growth from Mar 2003 to Nov 2003
VFINX : 103.95% growth from Mar 2003 to Nov 2003
VTSMX : 103.67% growth from Mar 2003 to Nov 2003
MSFT : 98.57% growth from Nov 2001 to Sep 2008
VGSTX : 55.27% growth from Mar 2003 to Nov 2003
VBINX : 48.35% growth from Mar 2003 to Nov 2003
VUSTX : 13.66% growth from May 2002 to Nov 2002
VFITX : 4.40% growth from Oct 2008 to Nov 2008



## NOTES
* I separated the JSON parsing from the main process deliberately, assuming the data you analyze is not normally in a txt file... which I really hope it isn't.
* Both processes are designed to be asynchronous for the most part and should run quite quickly, thanks to Node awesomeness.
* JavaScript date formatting really sucks but I tried to make it at least a little better using a Regex for the output.
* I haven't had a chance to validate the output or test running on a different box.

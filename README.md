# node-securities-parser
Take a raw, 10-year span of monthly stock & mutual fund price data and output an ordered list of periods achieving maximum return (or "bursts").

## Install
```
git clone https://github.com/alexanderscott/node-securities-parser.git
cd node-securities-parser
npm install
```

## Usage
Format textfile to JSON with `node parseTxtData.js`.

Calculate the growth periods and output the period of max return with `node findBursts`.

## Result
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

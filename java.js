// Embed TradingView widget
new TradingView.widget({
  "width": "100%",
  "height": 500,
  "symbol": "FX:EURUSD",
  "interval": "D",
  "timezone": "Etc/UTC",
  "theme": "dark",
  "style": "1",
  "locale": "en",
  "toolbar_bg": "#222",
  "enable_publishing": false,
  "allow_symbol_change": true,
  "studies": [
    "Moving Average@tv-basicstudies",
    "MACD@tv-basicstudies"
  ],
  "container_id": "tradingview_chart"
});

// Optionally more JS logic can go here (e.g., smooth scroll, mobile nav toggle)

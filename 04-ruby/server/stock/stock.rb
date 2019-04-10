# gem install stock_quote
require 'stock_quote'
require 'pry'

@stock_symbol = "GOOG" #IRL: params[:stock_symbol]
@stock_symbol = "AAPL" #IRL: params[:stock_symbol]

@info = StockQuote::Stock.quote @stock_symbol

@price = @info.close
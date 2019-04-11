require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do
  erb :home
end

get '/result' do
  @ticker = params[:ticker]

  @info = StockQuote::Stock.quote @ticker

  @result = case params[:operator]
   when 'name' then @company_name
   when 'price' then @info.close
   when 'low' then @info.low
   when 'high' then @info.high
   when 'pe ratio' then @info.pe_ratio
  end

  erb :result

 end

#  To know more methods at pry
# require 'stock_quote'
# <%# @stock_symbol = "GOOG" #IRL: params[:stock_symbol]
# @stock_symbol = "AAPL" #IRL: params[:stock_symbol]

# @info = StockQuote::Stock.quote @stock_symbol #all informations
# @info.methods

# @price = @info.close #get the price %>
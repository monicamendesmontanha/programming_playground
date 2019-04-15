class StocksController < ApplicationController
  def form
    render :form
  end

  def info
    @stock_symbol = params[:stock_symbol]
    # get the stock symbol
    info = StockQuote::Stock.quote @stock_symbol
    @price = info.close
    render :info
  end
end
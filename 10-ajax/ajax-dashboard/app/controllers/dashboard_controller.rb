class DashboardController < ApplicationController

  def brother
    brother = %w( Groucho Harpo Chico Zeppo Gummo ).sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    render :plain => `uptime` #backticks won't work on Heroku
  end

  def fortune
    render :plain => `fortune` #
  end

end

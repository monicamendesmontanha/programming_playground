class PagesController < ApplicationController

  def home
    @time = Time.now
    @uptime = `uptime`
    @fortune = `fortune`
  end

end

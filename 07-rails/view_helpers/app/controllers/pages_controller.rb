class PagesController < ApplicationController
  def home
    render :home
  end

  def numbers
    @amount = 242984.2323
    @large_number = 23409384938
    @phone = 2125551212
    render :numbers
  end
end
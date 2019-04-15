class PagesController < ApplicationController

  def hello
    render :hello
  end

  def faq
    render :plain
  end

  def about
    render :about
  end

end
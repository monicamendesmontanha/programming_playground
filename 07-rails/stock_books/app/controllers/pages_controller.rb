class PagesController < ApplicationController

  def home
    render :home
  end

  def faq
    render :faq
  end

  def about
    render :about
  end

end
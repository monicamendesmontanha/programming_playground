class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
    render :index
  end

end
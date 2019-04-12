require 'pry'

class MarxBrother

  # macro to write getters an setters for me
  attr_accessor :name, :instrument, :vice

  def initialize(n='', i='', v='')
    @name = n
    @instrument = i
    @vice = v
  end


  def perform
    "My name is #{ @name } and I play the #{ @instrument }"
  end
end

groucho = MarxBrother.new 'Groucho Marx', 'guitar', 'cigars'
# groucho.name = 'Groucho Marx'
# groucho.instrument = 'guitar'
# groucho.vice = 'cigars'

harpo = MarxBrother.new
harpo.name = 'Harpo Marx'
harpo.instrument = 'harp'


binding.pry

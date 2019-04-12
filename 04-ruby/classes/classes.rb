require 'pry'

class MarxBrother

  # getter
  def name()
    # return the name
    @name # Instance variable
  end

  # setter
  def name=(n)
    # remember the name provided in n
    @name = n
  end

  def instrument()
    @instrument
  end

  def instrument=(i)
    @instrument = i
  end

  def vice()
    @vice
  end

  def vice=(v)
    @vice = v
  end

end

groucho = MarxBrother.new
groucho.name= 'Groucho Marx'
groucho.instrument= 'guitar'
groucho.vice= 'cigars'

harpo = MarxBrother.new
harpo.name= 'Harpo Marx'
harpo.instrument= 'harp'


binding.pry

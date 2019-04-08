require 'pry'

def hello(name="World", adjetive="Cruel") # Variadic
  puts "Hello #{adjetive} #{name}"
end

def add(a,b)
  result = a + b
  return  # Implicit return: Ruby returns the value of the last line of code. 
end

puts "The result is #{ add 5, 7 }"

# binding.pry # Equivalent to JS: debugger;

hello
hello()
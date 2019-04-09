# ARRAY
# Examples how to using Map, Select or Reduce

# • map [1,2,3] => [4,8,12] # multiply by 4 and return a new array

# Solution with MAP
a = [1,2,3]
multiply_by_4 = a.map { |n| n * 4 }
#=> [4,8,12]
p "using map: #{multiply_by_4}"
p "-=" *10

# • select or filter [1,2,3] => [1,3] # checking if the number is odd? and return a new array
# PREDICATE return True or False

# Solution with EACH
# a = Array.new(10) { rand(1..20) }
# p a
# odds = []

# a.each do |number|
#   odds << number if number.odd?
# end

# p odds
# p "-=" *10

# Solution with SELECT
a = Array.new(10) { rand(1..20) }
a.select do |number|
  number.odd?
end

odds = a.select { |n| n.odd?}
p "odd: #{odds}"
even = a.select { |n| n.even?}
p "even: #{even}"
p "-=" *10

# You can do everything with reduce but map and select is more legible.
# • reduce or inject  [1,2,3] => 3 + 3 = 6 # if sum all numbers inside the array. Don't return a new array. Return a single element.
b = Array.new(10) { rand(1..20) }
p "sum = #{b.sum}" #method to sum all the elements in a array



c = Array.new(10) { rand(1..20) }

c.inject do |running_total, n|
  p running_total * n
end

# a.inject &:* #shortcut
# 3. Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What's surbub do you live in: "
residence = gets.chomp.capitalize

# case statement is kind of a case expression
p case residence
when 'Glebe'
  "Beautiful forehore walk"
when "Five Dock"
  "Cool gangland shooting"
when "Fairlight"
  "What a fancy name"
else
  "I'm sure that's a lovely place"
end
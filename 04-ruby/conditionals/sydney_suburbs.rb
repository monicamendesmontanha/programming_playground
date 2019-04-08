# 3. Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What's surbub do you live in: "
residence = gets.chomp.capitalize

# case statement
# JS switch() Crockford switch
case residence
when 'Glebe'
  p "Beautiful forehore walk"
when "Five Dock"
  p "Cool gangland shooting"
when "Fairlight"
  p "What a fancy name"
else
  p "I'm sure that's a lovely place"
end


# if statement
# if residence == "Glebe"
#   p "Beautiful forehore walk"
# elsif residence == "Five Dock"
#   p "Cool gangland shooting"
# elsif residence == "Fairlight"
#   p "What a fancy name"
# else
#   p "I'm sure that's a lovely place"
# end
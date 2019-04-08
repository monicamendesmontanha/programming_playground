# 2. Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."


print "What's the current temperature? "
temperature = gets.to_f

print "Is the A/C working? (y/n)"
answer = gets.chomp.downcase[0]

print "What's the desired temperature? "
desired_temperature = gets.to_f

puts "Current temperature #{temperature}, A/C working: #{answer}, Desired temperature: #{desired_temperature}. "

if (answer == "y" && temperature > desired_temperature)
  p "Turn on the A/C Please"
else (answer == "n")

  if temperature > desired_temperature
    p "Fix the A/C now! It's hot!"
  else temperature < desired_temperature
    p "Fix the A/C whenever you have the chance... It's cool..."
  end

end



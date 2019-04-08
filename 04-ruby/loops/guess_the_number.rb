# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

print "What is the maximum possible value you'd like to guess: "
MAX_VALUE = gets.to_i

SECRET_NUMBER = Random.rand 0...MAX_VALUE.to_i
p "SECRET_NUMBER:  #{SECRET_NUMBER}"
p "-------------------"

"Guess the number: "
guess = 0

until guess == SECRET_NUMBER do

  print "Guess the number between 0 and #{MAX_VALUE}: "
  guess = gets.to_i

  if guess < SECRET_NUMBER
    p "Wrong, guess higher!"
  elsif guess > SECRET_NUMBER
    p "Wrong, guess lower!"
  else
    p ">>>>> yeah! The correct number is #{guess}!"
  end

end



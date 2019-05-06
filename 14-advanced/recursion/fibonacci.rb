def fibonacci_iterative(n)

  a = 1
  b = 1

  while n > 2
    a, b = b, a+b   # atomic: parallel assignment
    n -= 1    # mutation: moves towards the base case
  end

  b   #nth fibonacci naumber
end

# version quadratic
def fibonacci_recursive(n)
  if n === 1 || n === 2
    1   # basic case
  else
    #   Quadratic O(Nˆ2)
    fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2)
  end
end

# version memoisation

# version iterative recursion




require 'pry'
binding.pry



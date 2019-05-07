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
def fibonacci_recursive(n)
  @fib ||= {} #@fib = @fib || {}

  if @fib[n] # Previously found and saved in this "memoisation" hash
    @fib[n]
  elsif n === 1 || n === 2
    1   # basic case
  else
    result = fib_memo(n - 1) + fib_memo(n - 2)
    @fib[n] = result
    result
  end
end



# version iterative recursion




require 'pry'
binding.pry



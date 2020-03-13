# fib(n) = fib(n - 1) + fib(n - 2)
# 0 1 1 2 3 5 8 13 21...

def fibonacci(n):
    if n == 0:
        return n
    last = 0
    next = 1
    for _ in range(1, n):
        last, next = next, last + next

    return next


if __name__ == "__main__":
    for i in range(0, 10):
        print("fibonacci: ", fibonacci(i))

# fib(n) = fib(n - 1) + fib(n - 2)
# 0 1 1 2 3 5 8 13 21...


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


if __name__ == "__main__":
    for i in range(0, 10):
        print("fibonacci: ", fibonacci(i))

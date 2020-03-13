def fat(n):
    if n == 0 or n == 1:
        return 1
    else:
        ft = n
        for i in range(1, n):
            ft = ft * i

        return ft


def recursiveFat(n):
    if n < 1:
        return 1
    else:
        return n * recursiveFat(n-1)


if __name__ == "__main__":
    print(fat(5))
    print(recursiveFat(5))

def linearSearch(array, value):
    for i in range(len(array)):
        if value == array[i]:
            return True
    return False


if __name__ == "__main__":
    array = [i for i in range(10, 1000)]
    print(linearSearch(array, 9))
    print(linearSearch(array, 88))

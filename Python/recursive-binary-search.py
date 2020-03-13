# Objetivo: localizar o elemento x em uma lista
# Considere o elemento m, do meio da lista
# se x == m, elemento encontrado
# se x < m, procure apenas na primeira metada da lista
# se x > m, procure apenas na segunda metade da lista

# Repita o processo até que x seja encontrado ou que a sub-lista seja vazia


def binarySearch(array, value, start=0, end=None):
    if end == None:
        end = len(array)-1

    if end < start:
        return -1
    else:
        mid = int((end + start)//2)

    if array[mid] > value:
        return binarySearch(array, value, start, mid-1)
    elif array[mid] < value:
        return binarySearch(array, value, mid+1, end)
    else:
        return mid


if __name__ == "__main__":
    array = [x * 2 for x in range(0, 12)]
    print(array)
    print(binarySearch(array, 4))
    print(binarySearch(array, 5))

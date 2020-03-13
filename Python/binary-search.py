# Objetivo: localizar o elemento x em uma lista
# Considere o elemento m, do meio da lista
# se x == m, elemento encontrado
# se x < m, procure apenas na primeira metada da lista
# se x > m, procure apenas na segunda metade da lista

# Repita o processo até que x seja encontrado ou que a sub-lista seja vazia


def binarySearch(list, value):
    start_index = 0
    end_index = len(list) - 1

    while start_index <= end_index:
        mid = (start_index + end_index) // 2
        if list[mid] == value:
            return mid
        else:
            if value < list[mid]:
                end_index = mid - 1
            else:
                start_index = mid + 1
    return -1


if __name__ == "__main__":
    list = [x * 2 for x in range(0, 100)]
    print(list)
    print(binarySearch(list, 32))
    print(binarySearch(list, 5))

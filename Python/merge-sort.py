# Divida a lista na metade recursivamente
# até que cada lista contenha apenas 1 elemento
# Repetidamente, intercale as sublistas para produzir novas listas
# Repita até que tenha apenas 1 lista no final
# Esse algoritmo aplica o principio de divisão e conquista


def mergeSort(array):
    if len(array) <= 1:
        return array

    mid = len(array) // 2
    midLeft = [array[x] for x in range(0, mid)]
    midRight = [array[x] for x in range(mid, len(array))]

    left = mergeSort(midLeft)
    right = mergeSort(midRight)

    return merge(left, right)


def merge(left, right):
    if not left:
        return right
    if not right:
        return left

    if left[0] < right[0]:
        newLeft = [left[x] for x in range(1, len(left))]
        return [left[0]] + merge(newLeft, right)

    newRight = [right[x] for x in range(1, len(right))]
    return [right[0]] + merge(left, newRight)


if __name__ == "__main__":
    array = [1, 4, 2, 6, 3, 7, 8, 9, -1]
    print(mergeSort(array))

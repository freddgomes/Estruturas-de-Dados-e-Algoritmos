import random
import time

# A cada passo, o algoritmo busca pelo menor elemento do trecho ainda não ordenado
# e o coloca no inicio da lista
# No primeiro passo, busca o menor elementos de todos e o coloca
# na posição inicial da lista
# No segundo passo, busca o segundo menor elemento e coloca na segunda posição
# O processo é repetido até terminar a lista

def selectionSort(list):
    end = len(list)

    for i in range(end - 1):
        index_min = i

        for j in range(i+1, end):
            if list[j] < list[index_min]:
                index_min = j

        list[i], list[index_min] = list[index_min], list[i]


if __name__ == "__main__":
    list = [random.randint(0, 10000) for x in range(0, 100)]
    print("old list: \n", list)
    start = time.time()
    selectionSort(list)
    end = time.time()
    print(end - start)
    print("new list: \n", list)
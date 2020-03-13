import random
import time


def bubbleSort(list):
    end = len(list)
    for i in range(end):
        for j in range(end - 1):
            if list[j] > list[j+1]:
                list[j], list[j+1] = list[j+1], list[j]


if __name__ == "__main__":
    list = [random.randint(0, 100000) for x in range(0, 100)]
    print("old list: \n", list)
    start = time.time()
    bubbleSort(list)
    end = time.time()
    print("new list: \n", list)
    print(end - start)

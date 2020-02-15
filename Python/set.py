class Set():
    def __init__(self):
        self.items = {}
    
    def has(self, value):
        if self.items.get(value):
            return True
        return False
    
    def add(self, value):
        if not self.has(value):
            self.items[value] = value
            return True
        return False
    
    def delete(self, value):
        if self.has(value):
            self.items.pop(value)
            return True
        return False

    def clear(self):
        self.items = {}

    def size(self):
        return len(self.items)
    
    def values(self):
        values = []
        for k in self.items:
            values.append(self.items.get(k))
        return values
    
    def union(self, otherSet):
        unionSet = Set()
        values = self.values()
        for v in values:
             unionSet.add(v)
        values = otherSet.values()
        for v in values:
            unionSet.add(v)
        return unionSet
    
    def intersection(self, otherSet):
        intersectionSet = Set()
        values = self.values()
        for v in values:
            if otherSet.has(v):
                intersectionSet.add(v)
        return intersectionSet

    def difference(self, otherSet):
        differenceSet = Set()
        values = self.values()
        for v in values:
            if not otherSet.has(v):
                differenceSet.add(v)
        return differenceSet

    def subset(self, otherSet):
        if self.size() > otherSet.size():
            return False
        else:
            values = self.values()
            for v in values:
                if not otherSet.has(v):
                    return False
        return True
    
def main():
    set = Set()
    set.add(2)
    set.add(2)
    set.add(9)
    print(set.has(2))
    set.add(6)
    set.add(4)
    print(set.size())
    print(set.has(3))
    set.add(9)
    print(set.items)
    set.delete(4)
    print(set.items)
    set.delete(2)
    print(set.items)
    print(set.size())
    print(set.values())
    set.add(13)
    set.add(49)
    print(set.items)
    print(set.size())
    print(set.values())

    setA = Set()
    setA.add(1)
    setA.add(2)

    setB = Set()
    setB.add(3)
    setB.add(4)

    setC = Set()
    setC.add(2)
    setC.add(9)
    setC.add(1)
    setC.add(3)

    unionAB = setA.union(setB)
    print(unionAB.values())

    intersectionAC = setA.intersection(setC)
    print(intersectionAC.values())
    
    differenceCB = setC.difference(setB)
    print(differenceCB.values())

    print(setA.subset(setB))
    print(setA.subset(setC))

if __name__ == "__main__":
    main()
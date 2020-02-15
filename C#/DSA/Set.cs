using DSA.util;
using System.Collections;

namespace DSA
{
    public class Set<T>
    {
        private readonly Hashtable items;

        public Set()
        {
            items = new Hashtable();
        }

        public bool Has(T value)
        {
            return items.Contains(value);
        }

        public bool Add(T value)
        {
            if (!Has(value))
            {
                items.Add(value, value);
                return true;
            }
            return false;
        }

        public bool Delete(T value)
        {
            if (Has(value))
            {
                items.Remove(value);
                return true;
            }
            return false;
        }

        public void Clear() { items.Clear(); }
        public int Size() { return items.Keys.Count; }
        public ArrayList Values()
        {
            var values = new ArrayList();
            var itemValues = items.Values;
            foreach (var value in itemValues)
            {
                values.Add(value);
            }
            return values;
        }

        public Set<T> Union(Set<T> otherSet)
        {
            var unionSet = new Set<T>();
            foreach (var item in Values())
            {
                unionSet.Add((T)item);
            }
            var values = otherSet.Values();
            foreach (var item in values)
            {
                unionSet.Add((T)item);
            }
            return unionSet;
        }

        public Set<T> Intersection(Set<T> otherSet)
        {
            var intersectionSet = new Set<T>();
            var values = otherSet.Values();
            foreach (var item in values)
            {
                if (Has((T)item))
                {
                    intersectionSet.Add((T)item);
                }
            }
            return intersectionSet;
        }

        public Set<T> Difference(Set<T> otherSet)
        {
            var differenceSet = new Set<T>();
            var values = Values();
            foreach (var item in values)
            {
                if (!otherSet.Has((T)item))
                {
                    differenceSet.Add((T)item);
                }
            }
            return differenceSet;
        }

        public bool Subset(Set<T> otherSet)
        {
            if (Size() > otherSet.Size())
            {
                return false;
            }
            else
            {
                var values = Values();
                foreach (var item in values)
                {
                    if (!otherSet.Has((T)item))
                    {
                        return false;
                    }
                }
                return true;
            }
        }

        public override string ToString()
        {
            return JSon.ConvertToJson(Values());
        }
    }
}

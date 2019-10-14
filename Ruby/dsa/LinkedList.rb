class Node
    attr_accessor :next
    attr_reader :value

    def initialize(value)
        @value = value
        @next = nil
    end

    def to_s
        "Node with value #{@value}"
    end
end

class LinkedList
    def initialize
        @head = nil
    end
    def find_tail
        node = @head
        return node if !node.next
        return node if !node.next while (node = node.next)
      end 

    def append(value)
        if @head
            find_tail.next = Node.new(value)
        else
            @head = Node.new(value)
        end
    end

    def append_after(target, value)
        node = find(target)
        return unless node

        old_next = node.next
        node.next = Node.new(value)
        node.next.next = old_next
    end

    def find(value)
        node = @head
        return false if !node.next
        return node if node.value == value

        while (node = node.next)
            return node if node.value == value
        end
    end
    
    def finde_before(value)
        node = @head
        return false if !node.next
        retun node if node.next.value == value

        while (node = node.next)
            return node if node.next && node.next.value == value
        end
    end

    def delete(value)
        if @head.value == value
            @head = @head.next
            return
        end

        node = finde_before(value)
        node.next = node.next.next
    end

    def display
        node = @head
        print node
        while (node = node.next)
          print " -> #{node}"
        end
        puts 
      end
end

list = LinkedList.new
list.append(8)
list.append(6)
list.append(9)
list.display
list.append_after(8, 2)
list.append_after(2, 7)
list.display
list.delete(6)
list.display
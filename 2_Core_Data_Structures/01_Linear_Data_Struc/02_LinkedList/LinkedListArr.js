//What is LinkedList?
//A linked list is a data structure consisting of a sequence of elements, each of which points to the next element in the sequence. Unlike an array, linked lists do not require contiguous memory locations, which makes them more flexible for dynamic data insertion and deletion.

//Componenet of LinkedList
//1. Node: Each element in a linked list is called a node. A node consists of two parts: data and a reference to the next node in the sequence.
//DATA: The data part of a node stores the value of the element.
//NEXT: The next part of a node is a reference that points to the next node in the sequence.

//2. Head: The head is a reference to the first node in the linked list. If the list is empty, the head is a null reference.

//3. Tail: The tail is a reference to the last node in the linked list. If the list is empty, the tail is a null reference.

//4. Length: The length of a linked list is the number of nodes in the list.

//Singly Linked List
//In a singly linked list, each node points to the next node in the sequence. The last node in the list points to null.

//Implementing a Singly Linked List in JavaScript
//The following code demonstrates how to implement a singly linked list in JavaScript using classes.

//Node class
//The Node class represents a node in a singly linked list. It has two properties: data and next. The data property stores the value of the node, and the next property is a reference to the next node in the sequence.
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//LinkedList class
//The LinkedList class represents a singly linked list. It has two properties: head and tail. The head property is a reference to the first node in the list, and the tail property is a reference to the last node in the list. The LinkedList class also has a method to add nodes to the list. The addNode method creates a new node with the given data and appends it to the end of the list.
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    addNode(data) {
        const newNode = new Node(data);
    
        if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        } else {
        this.tail.next = newNode;
        this.tail = newNode;
        }
    }
    }


    //Another way to implement LinkedList class
    class LinkedList {
        constructor() {
          this.head = null; // Start of the list
          this.size = 0;    // Number of nodes in the list
        }
      
        // Add a node at the end of the list
        append(data) {
          const newNode = new Node(data);
          if (this.head === null) {
            this.head = newNode;
          } else {
            let current = this.head;
            while (current.next !== null) {
              current = current.next;
            }
            current.next = newNode;
          }
          this.size++;
        }
      
        // Remove a node by value
        remove(data) {
          if (this.head === null) return;
      
          if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return;
          }
      
          let current = this.head;
          while (current.next !== null && current.next.data !== data) {
            current = current.next;
          }
      
          if (current.next === null) return;
      
          current.next = current.next.next;
          this.size--;
        }
      
        // Display the list
        display() {
          let current = this.head;
          let result = '';
          while (current !== null) {
            result += current.data + ' -> ';
            current = current.next;
          }
          console.log(result + 'null');
        }
      }

      //Example Usage
      const list = new LinkedList();

list.append(1);  // List: 1 -> null
list.append(2);  // List: 1 -> 2 -> null
list.append(3);  // List: 1 -> 2 -> 3 -> null

console.log('Original list:');
list.display();  // Output: 1 -> 2 -> 3 -> null

list.remove(2);  // List: 1 -> 3 -> null

console.log('After removing 2:');
list.display();  // Output: 1 -> 3 -> null

list.remove(1);  // List: 3 -> null

console.log('After removing 1:');
list.display();  // Output: 3 -> null


//Explanation of the LinkedList Operations

// Append:
// Create a new node.
// If the list is empty, set the new node as the head.
// Otherwise, traverse the list to find the end and attach the new node.

// Remove:
// If the node to remove is the head, update the head to the next node.
// Otherwise, traverse the list to find the node before the one to be removed and adjust the pointers.

// Display:
// Traverse the list from the head to the end, collecting the data from each node to display.

//Doubly Linked List
//In a doubly linked list, each node points to the next and previous nodes in the sequence. This allows for bidirectional traversal of the list.

//Implementing a Doubly Linked List in JavaScript
//The following code demonstrates how to implement a doubly linked list in JavaScript using classes.

//Node class
//The Node class represents a node in a doubly linked list. It has three properties: data, next, and prev. The data property stores the value of the node, the next property is a reference to the next node in the sequence, and the prev property is a reference to the previous node in the sequence.
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }

    //LinkedList class
    //The LinkedList class represents a doubly linked list. It has two properties: head and tail. The head property is a reference to the first node in the list, and the tail property is a reference to the last node in the list. The LinkedList class also has a method to add nodes to the list. The addNode method creates a new node with the given data and appends it to the end of the list.
    class LinkedList {
        constructor() {
          this.head = null;
          this.tail = null;
        }
      
        addNode(data) {
          const newNode = new Node(data);
      
          if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
          } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
          }
        }
      }

        //Another way to implement LinkedList class

        class LinkedList {
            constructor() {
              this.head = null; // Start of the list
              this.tail = null; // End of the list
              this.size = 0;    // Number of nodes in the list
            }
          
            // Add a node at the end of the list
            append(data) {
              const newNode = new Node(data);
              if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
              } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
              }
              this.size++;
            }
          
            // Remove a node by value
            remove(data) {
              if (this.head === null) return;
          
              if (this.head.data === data) {
                this.head = this.head.next;
                this.head.prev = null;
                this.size--;
                return;
              }
          
              let current = this.head;
              while (current.next !== null && current.next.data !== data) {
                current = current.next;
              }
          
              if (current.next === null) return;
          
              current.next = current.next.next;
              if (current.next !== null) {
                current.next.prev = current;
              }
              this.size--;
            }
          
            // Display the list
            display() {
              let current = this.head;
              let result = '';
              while (current !== null) {
                result += current.data + ' -> ';
                current = current.next;
              }
              console.log(result + 'null');
            }
          }

//Example Usage
const listes = new LinkedList();

listes.append(1);  // List: 1 -> null
listes.append(2);  // List: 1 -> 2 -> null
listes.append(3);  // List: 1 -> 2 -> 3 -> null

console.log('Original list:');
listes.display();  // Output: 1 -> 2 -> 3 -> null

listes.remove(2);  // List: 1 -> 3 -> null

console.log('After removing 2:');
listes.display();  // Output: 1 -> 3 -> null

listes.remove(1);  // List: 3 -> null

console.log('After removing 1:');

listes.display();  // Output: 3 -> null

//Explanation of the Doubly LinkedList Operations

// Append:
// Create a new node.
// If the list is empty, set the new node as the head and tail.
// Otherwise, attach the new node to the end of the list and update the tail pointer.

// Remove:
// If the node to remove is the head, update the head to the next node.
// Otherwise, traverse the list to find the node before the one to be removed and adjust the pointers.

// Display:
// Traverse the list from the head to the end, collecting the data from each node to display.

//Circular Linked List
//In a circular linked list, the last node points back to the first node, forming a circular structure. This allows for continuous traversal of the list.

//Implementing a Circular Linked List in JavaScript
//The following code demonstrates how to implement a circular linked list in JavaScript using classes.

//Node class
//The Node class represents a node in a circular linked list. It has two properties: data and next. The data property stores the value of the node, and the next property is a reference to the next node in the sequence.
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

    //LinkedList class
    //The LinkedList class represents a circular linked list. It has a property head, which is a reference to the first node in the list. The LinkedList class also has a method to add nodes to the list. The addNode method creates a new node with the given data and appends it to the end of the list.
    class LinkedList {
        constructor() {
          this.head = null;
        }
      
        addNode(data) {
          const newNode = new Node(data);
      
          if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
          } else {
            let current = this.head;
            while (current.next !== this.head) {
              current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
          }
        }
      }

        //Another way to implement LinkedList class

        class LinkedList {
            constructor() {
              this.head = null; // Start of the list
              this.size = 0;    // Number of nodes in the list
            }
          
            // Add a node at the end of the list
            append(data) {
              const newNode = new Node(data);
              if (this.head === null) {
                this.head = newNode;
                newNode.next = this.head;
              } else {
                let current = this.head;
                while (current.next !== this.head) {
                  current = current.next;
                }
                current.next = newNode;
                newNode.next = this.head;
              }
              this.size++;
            }
          
            // Display the list
            display() {
              if (this.head === null) return;
          
              let current = this.head;
              let result = '';
              do {
                result += current.data + ' -> ';
                current = current.next;
              } while (current !== this.head);
              console.log(result + 'null');
            }
          }

            //Example Usage
            const lists = new LinkedList();

lists.append(1);  // List: 1 -> null
lists.append(2);  // List: 1 -> 2 -> null
lists.append(3);  // List: 1 -> 2 -> 3 -> null

console.log('Original list:');
lists.display();  // Output: 1 -> 2 -> 3 -> null

//Explanation of the Circular LinkedList Operations

// Append:
// Create a new node.
// If the list is empty, set the new node as the head and make it point to itself.
// Otherwise, traverse the list to find the end and attach the new node, making it point back to the head.

// Display:
// Traverse the list from the head to the end, collecting the data from each node to display. Continue until the current node is the head again.

//Advantages of Linked Lists
//Dynamic Size: Linked lists can grow or shrink in size as needed, making them more flexible than arrays.
//Efficient Insertion and Deletion: Inserting or deleting elements in a linked list is more efficient than in an array, especially for large lists.
//No Contiguous Memory Requirement: Linked lists do not require contiguous memory locations, allowing them to be easily expanded or contracted.
//Disadvantages of Linked Lists
//Slower Access Time: Accessing elements in a linked list is slower than in an array because it requires traversing the list from the head to the desired element.
//Extra Memory Usage: Linked lists require additional memory to store the references to the next nodes, increasing memory usage compared to arrays.
//Complexity: Implementing linked lists can be more complex than arrays due to the need to manage node references and pointers.
//Applications of Linked Lists
//Linked lists are commonly used in various applications, including:
//Dynamic Data Structures: Linked lists are used to implement dynamic data structures such as stacks, queues, and graphs.
//File Systems: Linked lists are used to represent file systems, where each file or directory is a node connected to other nodes.
//Memory Management: Linked lists are used in memory management systems to allocate and deallocate memory blocks.
//Text Editors: Linked lists are used in text editors to represent the text as a series of nodes connected by pointers.
//Summary
//Linked lists are a data structure consisting of nodes connected by pointers, allowing for dynamic insertion and deletion of elements.
//Singly linked lists have nodes that point to the next node in the sequence, while doubly linked lists have nodes that point to both the next and previous nodes.
//Circular linked lists have the last node pointing back to the first node, forming a circular structure.
//Linked lists are more flexible than arrays for dynamic data structures but have slower access times and increased memory usage.
//Linked lists are commonly used in applications such as dynamic data structures, file systems, memory management, and text
//editors.

//Time Complexity of Linked List Operations
//The time complexity of common operations on linked lists is as follows:
//Accessing an element by index: O(n)
//Inserting an element at the beginning: O(1)
//Inserting an element at the end: O(1) for singly linked lists, O(n) for doubly linked lists
//Inserting an element in the middle: O(n)
//Removing an element from the beginning: O(1)
//Removing an element from the end: O(1) for singly linked lists, O(n) for doubly linked lists
//Removing an element from the middle: O(n) 
//Traversing the list: O(n)
//Searching for an element by value: O(n)
//These time complexities are based on the assumption that the list is not sorted. If the list is sorted, some operations may have different time complexities, such as searching for an element by value (O(n) for an unsorted list, O(log n) for a sorted list).

//Space Complexity of Linked List Operations
//The space complexity of linked list operations is O(n), where n is the number of nodes in the list. This space complexity is due to the need to store the nodes and their references in memory. The space complexity of linked lists is linear with respect to the number of nodes in the list.

//Conclusion
//Linked lists are a fundamental data structure in computer science that provide flexibility for dynamic data structures. By understanding the components and operations of linked lists, you can leverage this data structure in various applications to efficiently manage and manipulate data. Whether you are implementing a stack, queue, graph, or file system, linked lists can be a powerful tool in your programming toolkit.

      
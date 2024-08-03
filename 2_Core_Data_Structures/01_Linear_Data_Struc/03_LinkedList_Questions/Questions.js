//1. What is LinkedList?
//Answer:
//A linked list is a linear data structure where each element (node) contains a reference to the next element in the sequence. It allows for efficient insertion and deletion of elements compared to arrays. There are several types of linked lists, including singly linked lists, doubly linked lists, and circular linked lists.

//What is the difference between Array and LinkedList?
//Answer:
//Arrays and linked lists are both linear data structures, but they have some key differences. Arrays store elements in contiguous memory locations, allowing for random access to elements using an index. Linked lists, on the other hand, store elements in nodes that contain a reference to the next element in the sequence. This allows for efficient insertion and deletion of elements compared to arrays.


//2. How do you traverse a linked list?
//Answer:
//To traverse a linked list, you typically start at the head node and iterate through the list by following the references from one node to the next until you reach the end of the list. During traversal, you can perform operations such as printing the node's data or performing calculations.

// Here is an example of how you might traverse a singly linked list in JavaScript:

// Define the Node class
class Node {
    constructor(data) { // Constructor to initialize the new node object
      this.data = data; // The value stored in the node
      this.next = null; // Reference to the next node
    }
  }

  // Define the LinkedList class
  class LinkedList {
    constructor() {  // Initializes an empty linked list with:
      this.head = null; // The starting point of the list, initially null.
      this.size = 0;    // The number of nodes in the list, initially 0
    }
  
    // Add a node at the end of the list
    append(data) { //Adds a new node with the given data to the end of the linked list.
      const newNode = new Node(data); // Create a new node with the given data
      if (this.head === null) { // If the list is empty, set the new node as the head
        this.head = newNode; // Set the new node as the head
      } else { // Otherwise, traverse the list to find the last node and append the new node
        let current = this.head; // Start at the head of the list
        while (current.next !== null) { // Traverse the list until the last node is reached
          current = current.next; // Move to the next node
        }
        current.next = newNode; // Set the next reference of the last node to the new node
      }
      this.size++; // Increment the size of the list
    }
  
    // Traverse the list and print the data
    traverse() { //Traverses the linked list and prints the data of each node.
      let current = this.head; // Start at the head of the list
      while (current !== null) { // Traverse the list until the end is reached
        console.log(current.data); // Print the data of the current node
        current = current.next; // Move to the next node
      }
    }
  }

  // Create a new linked list
const list = new LinkedList(); // Create a new linked list

// Add nodes to the list
list.append(1); 
list.append(2); 
list.append(3);
list.append(4);

// Traverse and print the list
console.log('Linked List contents:');
list.traverse(); // Output: 1 2 3 4

//3. How do you find the length of a linked list?
//Answer:
//To find the length of a linked list, you can traverse the list and count the number of nodes. Here is an example of how you might find the length of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
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
  
    // Find the length of the list
    length() {
      return this.size;
    }
  }

    // Create a new linked list
const lists = new LinkedList();

// Add nodes to the list
lists.append(1);
lists.append(2);
lists.append(3);
lists.append(4);

// Find the length of the list
console.log('Length of the linked list:', list.length()); // Output: 4

//4. How do you insert an element at the beginning of a linked list?

//Answer:
//To insert an element at the beginning of a linked list, you can create a new node with the given data and set it as the head of the list. Here is an example of how you might insert an element at the beginning of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node at the beginning of the list
    prepend(data) {
      const newNode = new Node(data);
      newNode.next = this.head; // Set the next reference of the new node to the current head
      this.head = newNode; // Set the new node as the head
      this.size++;
    }
  }

  // Create a new linked list
const listes = new LinkedList();

// Add nodes to the list
listes.append(2);
listes.append(3);
listes.append(4);

// Insert a node at the beginning of the list
listes.prepend(1);

// Traverse and print the list
console.log('Linked List contents:');
listes.traverse(); // Output: 1 2 3 4

//5. How do you insert an element at a specific position in a linked list?
//Answer:
//To insert an element at a specific position in a linked list, you can traverse the list to find the node at the desired position and insert the new node before it. Here is an example of how you might insert an element at a specific position in a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Add a node at a specific position in the list
    insertAt(data, position) {
      if (position < 0 || position > this.size) { // Check if the position is valid
        return false;
      }
      const newNode = new Node(data);
      if (position === 0) { // If the position is 0, insert at the beginning
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let index = 0;
        while (index < position - 1) { // Traverse the list to find the node before the desired position
          current = current.next;
          index++;
        }
        newNode.next = current.next; // Insert the new node before the node at the desired position
        current.next = newNode;
      }
      this.size++;
      return true;
    }
  }

  // Create a new linked list
const lister = new LinkedList();

// Add nodes to the list
lister.append(1);
lister.append(3);
lister.append(4);

// Insert a node at a specific position in the list
lister.insertAt(2, 1);

// Traverse and print the list
console.log('Linked List contents:');
lister.traverse(); // Output: 1 2 3 4

//6. How do you delete an element from the beginning of a linked list?
//Answer:
//To delete an element from the beginning of a linked list, you can simply update the head of the list to point to the next node. Here is an example of how you might delete an element from the beginning of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Delete the first node in the list
    deleteFirst() {
      if (this.head !== null) { // Check if the list is not empty
        this.head = this.head.next; // Update the head to point to the next node
        this.size--;
        return true;
      }
      return false;
    }
  }

  // Create a new linked list
const listers = new LinkedList();

// Add nodes to the list
listers.append(1);
listers.append(2);
listers.append(3);
listers.append(4);

// Delete the first node in the list
listers.deleteFirst();

// Traverse and print the list
console.log('Linked List contents:');
listers.traverse(); // Output: 2 3 4

//7. How do you delete an element from the end of a linked list?
//Answer:
//To delete an element from the end of a linked list, you can traverse the list to find the last node and update its next reference to null. Here is an example of how you might delete an element from the end of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Delete the last node in the list
    deleteLast() {
      if (this.head === null) { // Check if the list is empty
        return false;
      }
      if (this.head.next === null) { // Check if the list has only one node
        this.head = null;
      } else {
        let current = this.head;
        while (current.next.next !== null) { // Traverse the list to find the second-to-last node
          current = current.next;
        }
        current.next = null; // Set the next reference of the second-to-last node to null
      }
      this.size--;
      return true;
    }
  }

  // Create a new linked list
const listerz = new LinkedList();

// Add nodes to the list
listerz.append(1);
listerz.append(2);
listerz.append(3);
listerz.append(4);

// Delete the last node in the list
listerz.deleteLast();

// Traverse and print the list
console.log('Linked List contents:');
listerz.traverse(); // Output: 1 2 3

//8. How do you delete an element from a specific position in a linked list?
//Answer:
//To delete an element from a specific position in a linked list, you can traverse the list to find the node at the desired position and update the next reference of the previous node to skip the node to be deleted. Here is an example of how you might delete an element from a specific position in a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Delete a node at a specific position in the list
    deleteAt(position) {
      if (position < 0 || position >= this.size) { // Check if the position is valid
        return false;
      }
      if (position === 0) { // If the position is 0, delete the first node
        this.head = this.head.next;
      } else {
        let current = this.head;
        let index = 0;
        while (index < position - 1) { // Traverse the list to find the node before the desired position
          current = current.next;
          index++;
        }
        current.next = current.next.next; // Update the next reference of the previous node to skip the node to be deleted
      }
      this.size--;
      return true;
    }
  }

  // Create a new linked list
const listerx = new LinkedList();

// Add nodes to the list
listerx.append(1);
listerx.append(2);
listerx.append(3);
listerx.append(4);

// Delete a node at a specific position in the list
listerx.deleteAt(1);

// Traverse and print the list
console.log('Linked List contents:');
listerx.traverse(); // Output: 1 3 4

//9. How do you reverse a linked list?
//Answer:
//To reverse a linked list, you can traverse the list and update the next reference of each node to point to the previous node. Here is an example of how you might reverse a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Reverse the list
    reverse() {
      let prev = null;
      let current = this.head;
      while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }

  // Create a new linked list
const listerq = new LinkedList();

// Add nodes to the list
listerq.append(1);
listerq.append(2);
listerq.append(3);
listerq.append(4);

// Reverse the list
listerq.reverse();

// Traverse and print the list
console.log('Linked List contents:');
listerq.traverse(); // Output: 4 3 2 1

//10. How do you detect a cycle in a linked list?
//Answer:
//To detect a cycle in a linked list, you can use Floyd's cycle-finding algorithm, also known as the tortoise and hare algorithm. This algorithm involves using two pointers, one moving at twice the speed of the other, to detect if the pointers meet at some point in the list. If the pointers meet, it indicates the presence of a cycle in the list.Floyd's algorithm is efficient and has a time complexity of O(n) and a space complexity of O(1). Here is an example of how you might detect a cycle in a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Detect a cycle in the list
    hasCycle() {
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          return true;
        }
      }
      return false;
    }
  }

  // Create a new linked list with a cycle
const listerw = new LinkedList();

// Add nodes to the list
listerw.append(1);
listerw.append(2);
listerw.append(3);
listerw.append(4);

// Create a cycle in the list
listerw.head.next.next.next.next = listerw.head.next;

// Detect a cycle in the list
console.log('Does the linked list have a cycle?', listerw.hasCycle()); // Output: true

//11. How do you find the starting node of a cycle in a linked list?
//Answer:
//To find the starting node of a cycle in a linked list, you can use Floyd's cycle-finding algorithm to detect the cycle and then find the starting node by moving one pointer to the head of the list and incrementing both pointers until they meet at the starting node of the cycle. Here is an example of how you might find the starting node of a cycle in a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Find the starting node of a cycle in the list
    cycleStart() {
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
          slow = this.head;
          while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
          }
          return slow;
        }
      }
      return null;
    }
  }

  // Create a new linked list with a cycle
const listera = new LinkedList();

// Add nodes to the list
listera.append(1);
listera.append(2);
listera.append(3);
listera.append(4);

// Create a cycle in the list
listera.head.next.next.next.next = listera.head.next;

// Find the starting node of the cycle
console.log('Starting node of the cycle:', listera.cycleStart().data); // Output: 2

//12. How do you find the intersection point of two linked lists?
//Answer:
//To find the intersection point of two linked lists, you can calculate the difference in lengths between the two lists and then traverse the longer list by the difference. After that, you can traverse both lists in parallel until you find the intersection point. Here is an example of how you might find the intersection point of two singly linked lists in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Find the intersection point of two lists
    intersectionPoint(list) {
      const lengthA = this.size;
      const lengthB = list.size;
      let currentA = this.head;
      let currentB = list.head;
      let diff = Math.abs(lengthA - lengthB);
      if (lengthA > lengthB) {
        for (let i = 0; i < diff; i++) {
          currentA = currentA.next;
        }
      } else {
        for (let i = 0; i < diff; i++) {
          currentB = currentB.next;
        }
      }
      while (currentA !== null && currentB !== null) {
        if (currentA === currentB) {
          return currentA;
        }
        currentA = currentA.next;
        currentB = currentB.next;
      }
      return null;
    }
  }

  // Create two linked lists with an intersection point
const list1 = new LinkedList();
const list2 = new LinkedList();

// Add nodes to the first list
list1.append(1);
list1.append(2);

// Add nodes to the second list
list2.append(3);
list2.append(4);

// Create an intersection point
const intersectionNode = new Node(5);
list1.head.next.next = intersectionNode;
list2.head.next = intersectionNode;

// Find the intersection point of the two lists
console.log('Intersection point of the two lists:', list1.intersectionPoint(list2).data); // Output: 5

//13. How do you merge two sorted linked lists?
//Answer:
//To merge two sorted linked lists, you can create a new list and traverse both lists in parallel, comparing the nodes at each position and adding the smaller node to the new list. Here is an example of how you might merge two sorted singly linked lists in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Merge two sorted lists
    merge(list) {
      const mergedList = new LinkedList();
      let currentA = this.head;
      let currentB = list.head;
      while (currentA !== null && currentB !== null) {
        if (currentA.data < currentB.data) {
          mergedList.append(currentA.data);
          currentA = currentA.next;
        } else {
          mergedList.append(currentB.data);
          currentB = currentB.next;
        }
      }
      while (currentA !== null) {
        mergedList.append(currentA.data);
        currentA = currentA.next;
      }
      while (currentB !== null) {
        mergedList.append(currentB.data);
        currentB = currentB.next;
      }
      return mergedList;
    }
  }

  // Create two sorted linked lists
const list1 = new LinkedList();
const list2 = new LinkedList();

// Add nodes to the first list
list1.append(1);
list1.append(3);
list1.append(5);

// Add nodes to the second list
list2.append(2);
list2.append(4);
list2.append(6);

// Merge the two lists
const mergedList = list1.merge(list2);

// Traverse and print the merged list
console.log('Merged list contents:');
mergedList.traverse(); // Output: 1 2 3 4 5 6

//14. How do you remove duplicates from a linked list?
//Answer:
//To remove duplicates from a linked list, you can use a hash table to keep track of the unique elements as you traverse the list. When you encounter a duplicate element, you can skip it by updating the next reference of the previous node. Here is an example of how you might remove duplicates from a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Remove duplicates from the list
    removeDuplicates() {
      const set = new Set();
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (set.has(current.data)) {
          previous.next = current.next;
          this.size--;
        } else {
          set.add(current.data);
          previous = current;
        }
        current = current.next;
      }
    }
  }

  // Create a linked list with duplicates
const list3 = new LinkedList();

// Add nodes to the list
list3.append(1);
list3.append(2);
list3.append(1);
list3.append(3);
list3.append(2);

// Remove duplicates from the list
list3.removeDuplicates();

// Traverse and print the list
console.log('Linked List contents:');
list3.traverse(); // Output: 1 2 3

//15. How do you find the nth node from the end of a linked list?
//Answer:
//To find the nth node from the end of a linked list, you can use two pointers, one moving n nodes ahead of the other. When the first pointer reaches the end of the list, the second pointer will be at the nth node from the end. Here is an example of how you might find the nth node from the end of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Find the nth node from the end of the list
    nthFromEnd(n) {
      let slow = this.head;
      let fast = this.head;
      for (let i = 0; i < n; i++) {
        if (fast === null) {
          return null;
        }
        fast = fast.next;
      }
      while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  // Create a linked list
const list4 = new LinkedList();

// Add nodes to the list
list4.append(1);
list4.append(2);
list4.append(3);
list4.append(4);

// Find the nth node from the end of the list
const nthNode = list4.nthFromEnd(2);
console.log('Nth node from the end:', nthNode.data); // Output: 3

//16. How do you split a linked list into two equal parts?
//Answer:
//To split a linked list into two equal parts, you can use the tortoise and hare algorithm to find the middle node of the list. Once you have the middle node, you can split the list at that point. Here is an example of how you might split a singly linked list into two equal parts in JavaScript:

// Define the LinkedList class

class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Split the list into two equal parts
    split() {
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      const firstHalf = new LinkedList();
      const secondHalf = new LinkedList();
      firstHalf.head = this.head;
      secondHalf.head = slow.next;
      this.size = 0;
      return [firstHalf, secondHalf];
    }
  }

    // Create a linked list
const list5 = new LinkedList();

// Add nodes to the list
list5.append(1);
list5.append(2);
list5.append(3);
list5.append(4);
list5.append(5);

// Split the list into two equal parts
const [firstHalf, secondHalf] = list5.split();

// Traverse and print the first half of the list
console.log('First half of the list:');
firstHalf.traverse(); // Output: 1 2

// Traverse and print the second half of the list
console.log('Second half of the list:');
secondHalf.traverse(); // Output: 3 4 5

//17. How do you sort a linked list?
//Answer:
//To sort a linked list, you can use a sorting algorithm such as merge sort or quicksort. Here is an example of how you might sort a singly linked list using merge sort in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Sort the list using merge sort
    sort() {
      this.head = this.mergeSort(this.head);
    }
  
    // Merge sort implementation
    mergeSort(head) {
      if (head === null || head.next === null) {
        return head;
      }
      const middle = this.getMiddle(head);
      const nextToMiddle = middle.next;
      middle.next = null;
      const left = this.mergeSort(head);
      const right = this.mergeSort(nextToMiddle);
      return this.merge(left, right);
    }
  
    // Merge two sorted lists
    merge(left, right) {
      let result = null;
      if (left === null) {
        return right;
      }
      if (right === null) {
        return left;
      }
      if (left.data <= right.data) {
        result = left;
        result.next = this.merge(left.next, right);
      } else {
        result = right;
        result.next = this.merge(left, right.next);
      }
      return result;
    }
  
    // Get the middle node of the list
    getMiddle(head) {
      let slow = head;
      let fast = head;
      while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  }

  // Create a linked list
const list6 = new LinkedList();

// Add nodes to the list
list6.append(3);
list6.append(1);
list6.append(4);
list6.append(2);

// Sort the list
list6.sort();

// Traverse and print the sorted list
console.log('Sorted list contents:');
list6.traverse(); // Output: 1 2 3 4

//18. How do you find the middle element of a linked list?
//Answer:
//To find the middle element of a linked list, you can use the tortoise and hare algorithm to find the middle node. Here is an example of how you might find the middle element of a singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Find the middle element of the list
    middle() {
      let slow = this.head;
      let fast = this.head;
      while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
      }
      return slow;
    }
  }

  // Create a linked list
const list7 = new LinkedList();

// Add nodes to the list
list7.append(1);
list7.append(2);
list7.append(3);
list7.append(4);
list7.append(5);

// Find the middle element of the list
const middleNode = list7.middle();
console.log('Middle element of the list:', middleNode.data); // Output: 3

//19. How do you remove duplicates from an unsorted linked list?
//Answer:
//To remove duplicates from an unsorted linked list, you can use a hash table to keep track of the unique elements as you traverse the list. When you encounter a duplicate element, you can skip it by updating the next reference of the previous node. Here is an example of how you might remove duplicates from an unsorted singly linked list in JavaScript:

// Define the LinkedList class
class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // Remove duplicates from the list
    removeDuplicates() {
      const set = new Set();
      let current = this.head;
      let previous = null;
      while (current !== null) {
        if (set.has(current.data)) {
          previous.next = current.next;
          this.size--;
        } else {
          set.add(current.data);
          previous = current;
        }
        current = current.next;
      }
    }
  }

  // Create a linked list with duplicates
const list8 = new LinkedList();

// Add nodes to the list
list8.append(1);
list8.append(2);
list8.append(1);
list8.append(3);
list8.append(2);

// Remove duplicates from the list
list8.removeDuplicates();

// Traverse and print the list
console.log('Linked List contents:');
list8.traverse(); // Output: 1 2 3











  

document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("linked")
  let li = document.createElement("li")
  li.innerText = "01_singlyLinkedLists.js"
  ul.append(li);
});
/*
========================================
Singly Linked Lists - Intro
========================================
+ An ordered data structure - has HEAD, TAIL, LENGTH properties
+ NOT INDEXED - consists of nodes, which has a value and points to/ references the next node (or null if it's the final node)
  + No indices gives SLLs an advantage over arrays when it comes to insertion/ deletion --> you don't have to reindex

head                  tail, length = 4
[4] -> [6] -> [8] -> [2]

+ Random access is not allowed - To access a node, you need to start at the head and traverse it until you get the node you want
+ Called a SINGLY LINKED LIST because each node is connected unidirectionally to the next node
*/
/*
====================
Nodes
====================
+ Linked Lists are collections of nodes, so define a Node class

+ Needs to store data and a reference to the next node
*/

class Node {
  constructor(val){
    this.val = val, 
    this.next = null
  }
}

//Helper function to create a SLL from a collection of nodes (string or array)
function addToSLL(SSL, nodeList){
  for (let i=0; i<nodeList.length; i++){
    SSL.push(nodeList[i])
  }
}

/*
_____ Singly Linked List and methods _____ 

====================
PSEUDO CODE for .push() method
====================
___ Accept a value
___ Create a new Node using that value
___ If there isn't a head, set the head and the tail equal to that new node
___ Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
___ increment the length by one

====================
PSEUDO CODE for .pop()
====================
___ if there are no nodes in the list, return undefined
___ Loop through the entire list until you reach the tail
___ Set the `next` prop of the penultimate node to null
___ Set tail to penult node
___ Decrement length 
___ return removed node

====================
PSEUDO CODE for .shift()
====================
___ if no nodes, return undefined
___ Store the current head property in a variable
___ Set the head to be the current head's `next` property
___ Decrement length
___ return the value removed

====================
PSEUDO CODE for .unshift()
====================
___ accept 1 argument: a new Node
___ create new Node and store in a variable `newNode`
___ if no nodes, set head and tail to newNode
___ Otherwise, store current head in a variable `oldHead`
___ set head to newNode and head.next to `oldHead`
___ increment length
___ return newNode

====================
PSEUDO CODE for .get()
====================
___ function that accepts an index
___ if index > length || < 0, return null
___ Loop through the list until you get to that index, return the node at that index

*/

class SinglyLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0
  }

  push(val){
    let newNode = new Node(val)

    if (!this.head && !this.tail){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //set the .next property on the current tail to the node you're creating
      this.tail = newNode; //reset the tail to the new tail 
    }

    this.length++;
    return newNode;
  }

  pop(){
  if (!this.length) return undefined; 

  let current = this.head;
  let newTail = current;

  while (current.next){
    newTail = current;
    current = current.next;
  }

  this.tail = newTail;
  this.tail.next = null;
  this.length--;

  if (this.length===0){
    this.head = null;
    this.tail = null;
  }

  return current;
  }

  shift(){
    if (!this.length) return undefined;

    let oldHead = this.head;

    this.head = oldHead.next;
    this.length--;

    if(this.length===0){
      this.head = null;
      this.tail = null;
    }

    return oldHead;
  }

  unshift(val){
    let newNode = new Node(val);

    if (!this.length){
      this.head = newNode;
      this.tail = this.head;

    } else {
      let oldHead = this.head;
      this.head = newNode;
      this.head.next = oldHead;
    }

    this.length++;

    return newNode;
  }

  get(index){
    if (index > this.length || index < 0 || index === undefined) return null;

    let count = 0;
    let node = this.head;

    while (count < index){
      node = node.next;
      count++;
    }

    return node;
  }
} 

//List to play with
let testList = new SinglyLinkedList;





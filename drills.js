class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  display() {
    if (this.key === null) {
      return;
    }

    console.log({
      key: this.key,
      value:this.value,
      parent: this.parent ? this.parent.key : null,
      left: this.left ? this.left.key : null,
      right: this.right ? this.right.key : null
    });

    if (this.left !== null) {
      this.left.display();
    }

    if (this.right !== null) {
      this.right.display();
    }
  }

  insert(key, value) {
    if (this.key === null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left === null) {
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  dsfPostOrder() {
    if (this.left) {
        this.left.dsfPostOrder();
    }
    if (this.right) {
        this.right.dsfPostOrder();
    }
    console.log(this.key);
}

dsfPreOrder(){
  // Pre-order
  console.log(this.key);
  if (this.left) {
      this.left.dsfPreOrder();
  }
  if (this.right) {
      this.right.dsfPreOrder();
  }
}
}

// let string = `35 25 15 14 19 27 89 79 91 90`;
let string = `8 6 5 7 10 9 11`;
  let arr = string.split(' ');
  let insertVals = [];
  arr.forEach(number => {
    insertVals.push(Number(number));
  })
  console.log(insertVals)
let bst1 = new BST(8);

for (let i = 1; i < insertVals.length; i++) {
  bst1.insert(insertVals[i]);
}

// bst1.dsfPreOrder();

const library= [{ author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
{ author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
{ author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
{ author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
{ author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
{ author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
{ author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
{ author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
{ author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
{ author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function find_book(library,dewey,title){
 let start=0;end =0;
 for(let i=0; i<library.length;i++){
   if(dewey <library[i].dewey){
     return false;
   }
   if(library[i].dewey === dewey){
     for(let j=i;j<library.length;j++){
       if (library[j].title === title){
         return library[j]
       }
       if(library[j].dewey != dewey){
         return false;
       }
     }
   }
  
 }

   
 
 return false;
}

// console.log(find_book(library,'005.133','The REXX Language'))
 const bst = new BST('E','Captain Picard')
bst.insert('C','Commander Riker');
bst.insert('B','Lt Cmdr Worf');
bst.insert('A','Lieutant Security-officer');
bst.insert('D','Cmdr LaForge');
bst.insert('F','Commander Data' );
bst.insert('H','Lt Cmdr Crusher');
bst.insert('G','Lieutant Selar');

 //console.log(bst.display())



// console.log(bfs(bst,values=[]))

class _Node {
  constructor(value) {
      this.value=value,
      this.next=null,
      this.prev=null;
  }
}
class Queue{
  constructor() {
      this.first = null;
      this.last = null;
  }
  enqueue(data) {
      //create a node with the data that you want to add to the queue
      const node = new _Node(data);
      //if the queue is empty, 
      //make the node the first node on the queue
      if (this.first === null) {
          this.first = node;
      }
      //if there is something on the queue already
      //then take the node that is currently at the end of the queue
      //and link it to the new node
      if (this.last) {
          node.prev = this.last;
          this.last.next = node;
      }
      //make the new node the last item on the queue
      this.last = node;
  }
  dequeue() {
       //if the queue is empty, there is nothing to return
      if (this.first === null) {
          return;
      }
      //make the first item on the queue to be the 
      //the item that is next on the line 
      // the item after the current first item
      const node = this.first;
      this.first = node.next;
       //if this is the last item in the queue
      if (node === this.last) {
          this.last = null;
      }
      return node.value;
  }
}

function bfs(tree, values = []) {
  const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
  const node = tree;
  
  queue.enqueue(node);
  // console.log(queue)
  while (queue.first) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
          queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
          queue.enqueue(node.right); // add right child to the queue
      }
  }

  return values;
}

// console.log(bfs(bst,values=[]))

const arr = [128, 97, 121, 123, 98, 97, 105]
function maxProfit(arr){

}

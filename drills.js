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

 console.log(bst.display())



// console.log(bfs(bst,values=[]))



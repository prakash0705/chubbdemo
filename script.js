console.log("Chunk function");

//function to divide array into chunks
const chunk = (arr,size)=>
	Array.from({length:Math.ceil(arr.length/size)},(v,i)=>
	arr.slice(i*size,i*size+size)
);
console.log(chunk([1,2,3,4,5,6,7,8,9,10],2));

console.log("Pull function");
//Function to remove passed value from array
let array=[2,4,6,8,10,12];
let ele=[2,4]
console.log("Remove array element");
Pull=(array,element)=>{
	
	for(let i=0;i<ele.length;i++)
	{
		for(let j=0;j<array.length;j++)
		{
			if(array[i]==ele[i])
			{
				array.splice(j,1);
			}
		}
	}
	return array;
} 
console.log(Pull(array),ele);

console.log("difference function ");
//difference of two array result will be printed as one array
let array1=[1,2,3,4,5];
let array2=[3,4,5,6,7];
difference=(array1,array2)=>{
	const temp=[];
	array1=array1.toString().split(',').map(Number);
	array2=array2.toString().split(',').map(Number);
	for(var i in array1){
	if(!array2.includes(array1[i]))	
		temp.push(array1[i]);
	}
	for(var j in array2){
	if(!array1.includes(array2[j]))	
		temp.push(array2[j]);
	}
	return temp.sort((a,b)=>a-b);
}
console.log(difference(array1,array2));

console.log("Take function");
let arr=["orange","mango","banana","sugar","tea"];
console.log("slice of array with n elements taken from beginning")
let take=(arr,n)=>{
	console.log(arr.slice(0,n));
	
}
console.log("Original array before slice");
console.log(arr);
console.log("After slicing");
take(arr,2);

console.log("Filter function");
//filter array based on value 
let arr1=[{ 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }]
let result=arr1.filter(arr1=>arr1.user=="barney");
console.log(result);

console.log("Find function");
//find the particular element in array
let users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];
console.log(users.find(k=>k.age>36));

console.log("Sum function");
let numbers=[10,20,30,40]   //sum to 100
let sumArray=(numbers)=>{
	const add=(a,b)=>a+b
	const sum=numbers.reduce(add)
	return sum;
}
console.log(sumArray(numbers));

console.log("Reduce function");
let total=[1,2,3,4,5,6];
let reducearray=(total)=>{
	let sum_of_array=total.reduce((a,b)=>{return a+b;});
	return sum_of_array;
}
console.log("total is "+reducearray(total));

console.log("gte function");
let num1=20;
let num2=30;
let NumberGreaterorEqual=(num1,num2)=>{
	let c=(num1>=num2)?num1:num2;
	return c; 
}
console.log(NumberGreaterorEqual(num1,num2));

console.log("keys function");
let check=['X','Y','Z'];
let arrayKeys=(check)=>{
	let arr=Object.keys(check);
	return arr;
}
console.log(arrayKeys(check));

console.log("values function");
const array3=['a','b','c'];
console.log("initial array "+array3);
let arrayValues=()=>{
	const iterator=array3.values();
	return iterator;
}
console.log("after performing values, array is separated to individual values")
for(const value of arrayValues(array3))
{
	console.log(value);
}

console.log("camelcase function");
let name="Prakash kumaran";
let toCamelCase=(str)=>{
  return str.split(' ').map(function(word,index){
    if(index == 0){
      return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}
console.log(toCamelCase(name));

console.log("endswith function");
const title='Jack and Jill Went Up the Hill';
console.log("original string"+title);
let StringEndsWith=(title,match)=>{
	return title.endsWith(match);
}
console.log("if end with given string/char it will return boolean result");
console.log(StringEndsWith(title,"Hill"));

console.log("tail function");
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Initial array "+fruits);
let RemoveFirstElement=()=>{
	let res=fruits.shift();
	console.log("removed first elements "+res);
	return fruits;
}
console.log("Array after removing first element");
console.log(RemoveFirstElement());

console.log("union function");
let a1=[1,2,3];
let a2=[4,3,2];
console.log("Initial Two array values");
console.log("Array 1: "+a1+" Array 2: "+a2);
let unionArray=(a1,a2)=>{
	let c=new Set(a1);
	let d=new Set(a2);
	return new Set([...c,...d]);
}
console.log("Array after union");
console.log(unionArray(a1,a2));


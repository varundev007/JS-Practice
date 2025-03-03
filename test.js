var a = "Global";

{
    var a = "Block"; // Shadows the outer 'a' within this block
    console.log(a); // Output: "Block"
}

console.log(a); // Output: "Global"
let height = undefined;
let result;

function checkTheValue  (result) { 
return result ?? "Height is not defined";
}

result=checkTheValue(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

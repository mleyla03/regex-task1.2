var phone= "+994516497403"
var pattern=/^((\+994((50|51|55|70|77)))?|(050|051|055|070|077)?){1}[0-9]{7}$/gi
 var isMatch=pattern.test(phone)
console.log(isMatch);



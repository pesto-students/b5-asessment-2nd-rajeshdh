
function balancedBraces(args) {
  let str = args.split('');
  let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }
    for(item of str) { 
      // if starting brace
      if(open[item]){
        stack.push(item)
      } else if(closed[item]){
        let lastItem = stack.pop()
        // if the item doesn't match last open braces return;
        if (open[lastItem] !== item){
          return false;
        } 
      }
      // console.log(stack);
    }
    return stack.length === 0;
}

// console.log(balancedBraces('for[(i=0;i<xi];i++){if(x[i]<10){b++;}else{b+=10;}}'))

module.exports = balancedBraces;

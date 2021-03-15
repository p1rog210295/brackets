module.exports =
    function check(str, bracketsConfig) {
        brackets = new Map();

        for (config of bracketsConfig) {
            brackets.set(config[0], config[1]);
        }

        stack = [];

        for (symbol of str) {
            if (stack.length > 0) {
                let closingBracket = brackets.get(stack[stack.length - 1]);

                if (symbol === closingBracket) {
                    stack.pop();
                    continue;
                }
            }

            if (brackets.has(symbol)) {
                stack.push(symbol);
                continue;
            }
            return false;
        }
        return stack.length === 0;

    }
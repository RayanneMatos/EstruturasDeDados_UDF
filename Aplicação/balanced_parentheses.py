def is_balanced(expression):
    # Pilha para armazenar os símbolos de abertura
    stack = []
    
    # Dicionário para mapear os símbolos de fechamento aos de abertura
    matching_brackets = {')': '(', '}': '{', ']': '['}
    
    # Iterando sobre os caracteres da expressão
    for char in expression:
        if char in matching_brackets.values():  # Se for símbolo de abertura
            stack.append(char)
        elif char in matching_brackets.keys():  # Se for símbolo de fechamento
            if stack and stack[-1] == matching_brackets[char]:  # Verificar correspondência
                stack.pop()
            else:
                return False  # Não corresponde ou pilha vazia
    return len(stack) == 0  # Se a pilha estiver vazia, a expressão é balanceada

# Teste da função com uma expressão
expression = "(a + b) * {c + [d - e]}"
print("A expressão está balanceada?" , is_balanced(expression))

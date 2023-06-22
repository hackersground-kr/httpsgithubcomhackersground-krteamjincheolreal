from random import *

def randnum():
    num1 = randint(1, 9)
    num2 = randint(1, 9)
    num3 = randint(1, 9)
    op = ["+", "-"]
    opn1 = randint(0, 1)
    opn2 = randint(0, 1)

    return op[opn1], op[opn2], num1, num2, num3

if __name__ == "__main__":
    count = 1    
    while count <= 10:
        o1, o2, n1, n2, n3 = randnum()
        ques = str(n1)+"x^2"+o1+str(n2)+"x"+o2+str(n3)

        a = n1
        if o1 == "+":
            b = n2
        else:
            b = -n2
        if o2 == "+":
            c = n3
        else:
            c = -n3
        d = b**2-4*a*c
        if d < 0:
            ans = 0
        elif d == 0:
            ans = 1
        else:
            ans = 2
        print(str(count)+"번째 문제 : 이차방정식 "+ques+"의 해의 갯수는? 답 : "+str(ans)+"개")
        count += 1

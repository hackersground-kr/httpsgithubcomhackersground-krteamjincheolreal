from random import *

def randr():
    r = randint(1, 9)
    PI = 3.14
    dap = r*r*PI

    return r, dap

if __name__ == "__main__":
    count = 1
    while count <= 10:
        p, d = randr()
        print(str(count)+"번째 문제 : 반지름 "+str(p)+"의 원 넓이는? 답 : "+str(d))
        count += 1

    
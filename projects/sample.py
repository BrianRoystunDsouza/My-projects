import turtle

# daddy.color('red','yellow')
# daddy.begin_fill()
# for i in range(100):
#     daddy.forward(200)
#     daddy.left(170)
# daddy.end_fill()
turtle.speed(0)
turtle.Screen().bgcolor('black')
turtle.color('green')
turtle.penup()
turtle.goto(50,200)
turtle.pendown()
a = 0
b = 0
while True:
    turtle.fd(a)
    turtle.rt(b)
    a+=3
    b+=1
    if b == 190:
        break
    
 


turtle.done()

                        
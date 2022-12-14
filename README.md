# Small Lang

Uses nearly and node to generate AST that explain the language. 
This language is small, as its name suggests. But it is also powerful
as it follows the example of LISP in leveraging the expressive power of
lambda functions.

## Features

* numbers
* strings
* variables
* functions
* lambda functions
* other data types (like arrays and dictionaries) can be supported via
adding runtime functions

## Code Example

The following code example contains all of the features of the language:

```
print("Hello, world")
print("3 + 5 =" add(3 5))

hello = (subject) => {
    print(concat("Hello, " subject))
    print(concat("Hello, " subject))
}

doIt = () => {
    print("Do it!")
}

doIt()

hello("Brother")

classmates = split("Jerry Jordan Johnny Jack Jeffery" " ")

each(classmates (peep) =>
    print(concat("Hello " peep))
)

fib = (n) =>
    if(eq(n 1)
        () => 1
        () =>
            if(eq(n 2)
                () => 1
                () =>
                    add(
                        fib(subtract(n 1))
                        fib(subtract(n 2))
                    )
            )
        )

print(fib(9))
```


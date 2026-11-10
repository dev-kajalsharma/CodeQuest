/* CodeQuest question bank.
   Each question has: question, options[4], answer (0=A, 1=B, 2=C, 3=D).
   The option order is shuffled deterministically so correct answers are distributed across A-D. */
const QUESTION_BANK = {
  "C++": {
    "easy": [
      {
        "question": "Which of the following is used to declare a variable in C++?",
        "options": [
          "int",
          "var",
          "define",
          "variable"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol is used to end a statement in C++?",
        "options": [
          ";",
          ",",
          ".",
          ":"
        ],
        "answer": 0
      },
      {
        "question": "Which function is the entry point of a C++ program?",
        "options": [
          "begin()",
          "execute()",
          "start()",
          "main()"
        ],
        "answer": 3
      },
      {
        "question": "Which header file is commonly used for cout and cin?",
        "options": [
          "<string.h>",
          "<stdio.h>",
          "<conio.h>",
          "<iostream>"
        ],
        "answer": 3
      },
      {
        "question": "Which operator is used for output in C++?",
        "options": [
          ">>",
          "<>",
          "<<",
          "=="
        ],
        "answer": 2
      },
      {
        "question": "Which operator is used for input with cin?",
        "options": [
          ">>",
          "==",
          "&&",
          "<<"
        ],
        "answer": 0
      },
      {
        "question": "Which of the following is a valid C++ variable name?",
        "options": [
          "2value",
          "class",
          "myValue",
          "my-value"
        ],
        "answer": 2
      },
      {
        "question": "What is the size of a char in C++?",
        "options": [
          "8 bytes",
          "1 byte",
          "2 bytes",
          "4 bytes"
        ],
        "answer": 1
      },
      {
        "question": "Which keyword is used to create a class in C++?",
        "options": [
          "class",
          "struct",
          "object",
          "define"
        ],
        "answer": 0
      },
      {
        "question": "Which concept allows the same function name to have different parameters?",
        "options": [
          "Encapsulation",
          "Abstraction",
          "Function overloading",
          "Inheritance"
        ],
        "answer": 2
      },
      {
        "question": "Which of the following is NOT an OOP concept?",
        "options": [
          "Inheritance",
          "Encapsulation",
          "Compilation",
          "Polymorphism"
        ],
        "answer": 2
      },
      {
        "question": "Which keyword is used to create an object dynamically?",
        "options": [
          "malloc",
          "object",
          "create",
          "new"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword is used to release dynamically allocated memory?",
        "options": [
          "remove",
          "delete",
          "free",
          "clear"
        ],
        "answer": 1
      },
      {
        "question": "Which operator is used to compare two values for equality?",
        "options": [
          "==",
          "===",
          "!=",
          "="
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nint x = 5;\ncout << x++;",
        "options": [
          "6",
          "Error",
          "4",
          "5"
        ],
        "answer": 3
      },
      {
        "question": "Which loop is guaranteed to execute at least once?",
        "options": [
          "while",
          "for",
          "Nested loop",
          "do-while"
        ],
        "answer": 3
      },
      {
        "question": "Which statement is used to exit a loop immediately?",
        "options": [
          "skip",
          "break",
          "continue",
          "exitloop"
        ],
        "answer": 1
      },
      {
        "question": "Which access specifier makes class members accessible from anywhere the object is visible?",
        "options": [
          "protected",
          "public",
          "internal",
          "private"
        ],
        "answer": 1
      },
      {
        "question": "What is the default access specifier of a C++ class?",
        "options": [
          "public",
          "friend",
          "protected",
          "private"
        ],
        "answer": 3
      },
      {
        "question": "Which feature allows a derived class to acquire properties of a base class?",
        "options": [
          "Abstraction",
          "Polymorphism",
          "Encapsulation",
          "Inheritance"
        ],
        "answer": 3
      }
    ],
    "medium": [
      {
        "question": "What will be the output?\nint x = 10;\nint y = ++x;\ncout << x << \" \" << y;",
        "options": [
          "10 11",
          "11 11",
          "11 10",
          "10 10"
        ],
        "answer": 1
      },
      {
        "question": "What will be the output?\nint a = 5;\ncout << a++ + ++a;",
        "options": [
          "10",
          "12",
          "Undefined/unspecified behavior",
          "11"
        ],
        "answer": 2
      },
      {
        "question": "Which function is automatically called when an object of a class is created?",
        "options": [
          "Constructor",
          "Operator function",
          "Destructor",
          "Main function"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nint a = 10;\nint *p = &a;\n*p = 20;\ncout << a;",
        "options": [
          "10",
          "20",
          "Address of a",
          "Error"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about a constructor is correct?",
        "options": [
          "Its name must be the same as the class name",
          "It must be declared static",
          "It can be inherited like a normal member function",
          "It must have a return type"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nclass Test {\npublic:\n    Test() {\n        cout << \"A\";\n    }\n    ~Test() {\n        cout << \"B\";\n    }\n};\n\nint main() {\n    Test t;\n}",
        "options": [
          "A",
          "B",
          "AB",
          "BA"
        ],
        "answer": 2
      },
      {
        "question": "Which concept allows a derived class to provide a specific implementation of a function already defined in the base class?",
        "options": [
          "Function overriding",
          "Function overloading",
          "Constructor overloading",
          "Encapsulation"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nint x = 10;\nint &r = x;\nr = 25;\ncout << x;",
        "options": [
          "Address of x",
          "10",
          "25",
          "Error"
        ],
        "answer": 2
      },
      {
        "question": "Which of the following correctly declares a pointer to an integer?",
        "options": [
          "int *p;",
          "*int p;",
          "pointer int p;",
          "int p*;"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nint arr[] = {10, 20, 30, 40};\ncout << *(arr + 2);",
        "options": [
          "40",
          "10",
          "30",
          "20"
        ],
        "answer": 2
      },
      {
        "question": "Which type of inheritance is represented by this declaration?\nclass C : public A, public B {\n};",
        "options": [
          "Single inheritance",
          "Hierarchical inheritance",
          "Multilevel inheritance",
          "Multiple inheritance"
        ],
        "answer": 3
      },
      {
        "question": "What is the purpose of a virtual function?",
        "options": [
          "To achieve runtime polymorphism",
          "To create constructors",
          "To allocate memory dynamically",
          "To prevent inheritance"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nclass A {\npublic:\n    void show() {\n        cout << \"A\";\n    }\n};\n\nclass B : public A {\npublic:\n    void show() {\n        cout << \"B\";\n    }\n};\n\nint main() {\n    B obj;\n    obj.show();\n}",
        "options": [
          "Error",
          "B",
          "AB",
          "A"
        ],
        "answer": 1
      },
      {
        "question": "Which operator cannot normally be overloaded in C++?",
        "options": [
          "::",
          "+",
          "[]",
          "=="
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nint x = 3;\n\nif (x = 0)\n    cout << \"True\";\nelse\n    cout << \"False\";",
        "options": [
          "0",
          "False",
          "True",
          "Error"
        ],
        "answer": 1
      },
      {
        "question": "What does the this pointer point to?",
        "options": [
          "The current object",
          "The parent class object",
          "The next object",
          "The class itself"
        ],
        "answer": 0
      },
      {
        "question": "Which statement about a pure virtual function is correct?",
        "options": [
          "It can only exist outside a class",
          "It cannot be overridden",
          "It must always have a body",
          "It is declared using = 0"
        ],
        "answer": 3
      },
      {
        "question": "What will be the output?\nint a = 5, b = 2;\ncout << a / b;",
        "options": [
          "2.0",
          "3",
          "2.5",
          "2"
        ],
        "answer": 3
      },
      {
        "question": "What is the main purpose of a destructor?",
        "options": [
          "Initialize an object",
          "Allocate memory",
          "Overload functions",
          "Destroy an object and perform cleanup"
        ],
        "answer": 3
      },
      {
        "question": "What will be the output?\nint x = 10;\n\n{\n    int x = 20;\n    cout << x << \" \";\n}\n\ncout << x;",
        "options": [
          "20 10",
          "10 10",
          "20 20",
          "10 20"
        ],
        "answer": 0
      }
    ],
    "hard": [
      {
        "question": "What is the output?\nint x = 5;\ncout << x++ << \" \" << ++x;",
        "options": [
          "5 6",
          "5 7",
          "Undefined/unspecified behavior",
          "6 7"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nint a = 10;\nint *p = &a;\nint q = &p;\n\nq = 25;\n\ncout << a;",
        "options": [
          "Address of a",
          "10",
          "25",
          "Compilation error"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nint a = 10;\nconst int *p = &a;\n\na = 20;\n\ncout << *p;",
        "options": [
          "Error",
          "20",
          "Garbage value",
          "10"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nint a = 10;\nint b = 20;\n\nint *p = &a;\np = &b;\n\ncout << *p;",
        "options": [
          "Error",
          "10",
          "Address of b",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "Which declaration means that p is a constant pointer to an integer?",
        "options": [
          "int const *p;",
          "const int *p;",
          "int *const p;",
          "const int *const p;"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nclass A {\npublic:\n    A() { cout << \"A\"; }\n};\n\nclass B : public A {\npublic:\n    B() { cout << \"B\"; }\n};\n\nint main() {\n    B obj;\n}",
        "options": [
          "A",
          "AB",
          "BA",
          "B"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nclass A {\npublic:\n    ~A() { cout << \"A\"; }\n};\n\nclass B : public A {\npublic:\n    ~B() { cout << \"B\"; }\n};\n\nint main() {\n    B obj;\n}",
        "options": [
          "BA",
          "B",
          "A",
          "AB"
        ],
        "answer": 0
      },
      {
        "question": "Which is required to achieve runtime polymorphism in the following situation?\nclass Base {\npublic:\n    virtual void show();\n};\n\nclass Derived : public Base {\npublic:\n    void show();\n};",
        "options": [
          "Constructor",
          "Static function",
          "Friend function",
          "Virtual function"
        ],
        "answer": 3
      },
      {
        "question": "What is the output?\nclass A {\npublic:\n    virtual void show() {\n        cout << \"A\";\n    }\n};\n\nclass B : public A {\npublic:\n    void show() {\n        cout << \"B\";\n    }\n};\n\nint main() {\n    A *p = new B;\n    p->show();\n}",
        "options": [
          "B",
          "Compilation error",
          "A",
          "AB"
        ],
        "answer": 0
      },
      {
        "question": "What happens if a derived object is deleted through a base-class pointer whose destructor is not virtual?",
        "options": [
          "Always compilation error",
          "Only derived destructor is called",
          "Undefined behavior / incomplete destruction may occur",
          "Both destructors are guaranteed to execute"
        ],
        "answer": 2
      },
      {
        "question": "What will be the output?\nclass Test {\n    static int count;\n\npublic:\n    Test() {\n        count++;\n    }\n\n    static int getCount() {\n        return count;\n    }\n};\n\nint Test::count = 0;\n\nint main() {\n    Test a, b, c;\n    cout << Test::getCount();\n}",
        "options": [
          "2",
          "3",
          "1",
          "0"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about a static member function is TRUE?",
        "options": [
          "It can be called using the class name",
          "It must always be virtual",
          "It can directly access non-static data members",
          "It requires an object to be called"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nint a = 10;\n\nint &x = a;\nint &y = x;\n\ny = 50;\n\ncout << a;",
        "options": [
          "50",
          "10",
          "Error",
          "Address of a"
        ],
        "answer": 0
      },
      {
        "question": "Which statement about references is correct?",
        "options": [
          "A reference can be NULL",
          "A reference can be reassigned to another variable",
          "A reference must be initialized when declared",
          "A reference requires new"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nvoid fun(int x) {\n    cout << \"int\";\n}\n\nvoid fun(double x) {\n    cout << \"double\";\n}\n\nint main() {\n    fun(10.5f);\n}",
        "options": [
          "double",
          "float",
          "Compilation error",
          "int"
        ],
        "answer": 0
      },
      {
        "question": "Which feature allows an operator such as + to work with user-defined objects?",
        "options": [
          "Function overriding",
          "Dynamic binding",
          "Constructor overloading",
          "Operator overloading"
        ],
        "answer": 3
      },
      {
        "question": "Which operator cannot be overloaded in C++?",
        "options": [
          "::",
          "+",
          "[]",
          "()"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\ntemplate <class T>\nT maximum(T a, T b) {\n    return (a > b) ? a : b;\n}\n\nint main() {\n    cout << maximum(10, 20);\n}",
        "options": [
          "30",
          "20",
          "10",
          "Compilation error"
        ],
        "answer": 1
      },
      {
        "question": "Which statement is TRUE about an abstract class in C++?",
        "options": [
          "It must contain at least one pure virtual function",
          "It cannot contain normal member functions",
          "It cannot contain constructors",
          "It can always be instantiated directly"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nclass A {\npublic:\n    void show() {\n        cout << \"A\";\n    }\n};\n\nclass B : public A {\npublic:\n    void show() {\n        cout << \"B\";\n    }\n};\n\nint main() {\n    B obj;\n    A *ptr = &obj;\n    ptr->show();\n}",
        "options": [
          "A",
          "AB",
          "Compilation error",
          "B"
        ],
        "answer": 0
      }
    ]
  },
  "Java": {
    "easy": [
      {
        "question": "Who developed Java?",
        "options": [
          "Bjarne Stroustrup",
          "Guido van Rossum",
          "James Gosling",
          "Dennis Ritchie"
        ],
        "answer": 2
      },
      {
        "question": "Which of these is not a feature of Java?",
        "options": [
          "Pointer-based",
          "Robust",
          "Object-oriented",
          "Platform independent"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword is used to create an object in Java?",
        "options": [
          "object",
          "class",
          "create",
          "new"
        ],
        "answer": 3
      },
      {
        "question": "Which method is the entry point of a Java program?",
        "options": [
          "start()",
          "run()",
          "main()",
          "execute()"
        ],
        "answer": 2
      },
      {
        "question": "Which of the following is a valid Java data type?",
        "options": [
          "real",
          "float",
          "decimal",
          "integer"
        ],
        "answer": 1
      },
      {
        "question": "What is the size of an int in Java?",
        "options": [
          "2 bytes",
          "Depends on the system",
          "8 bytes",
          "4 bytes"
        ],
        "answer": 3
      },
      {
        "question": "Which symbol is used to end a statement in Java?",
        "options": [
          ",",
          ":",
          ".",
          ";"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword is used to inherit a class in Java?",
        "options": [
          "extends",
          "inherits",
          "implement",
          "super"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword is used to implement an interface?",
        "options": [
          "implements",
          "inherit",
          "interface",
          "extends"
        ],
        "answer": 0
      },
      {
        "question": "Which of the following is used to handle exceptions?",
        "options": [
          "try-catch",
          "switch-case",
          "for-while",
          "if-else"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword is used to declare a constant in Java?",
        "options": [
          "const",
          "static",
          "constant",
          "final"
        ],
        "answer": 3
      },
      {
        "question": "Which class is the parent of all classes in Java?",
        "options": [
          "Main",
          "Class",
          "Object",
          "Parent"
        ],
        "answer": 2
      },
      {
        "question": "Which package contains the Scanner class?",
        "options": [
          "java.lang",
          "java.net",
          "java.util",
          "java.io"
        ],
        "answer": 2
      },
      {
        "question": "Which operator is used for logical AND?",
        "options": [
          "||",
          "!",
          "&",
          "&&"
        ],
        "answer": 3
      },
      {
        "question": "Which loop is guaranteed to execute at least once?",
        "options": [
          "while",
          "for",
          "enhanced for",
          "do-while"
        ],
        "answer": 3
      },
      {
        "question": "Which of the following is used to compare two strings based on their content?",
        "options": [
          "==",
          "equals()",
          "=",
          "compare"
        ],
        "answer": 1
      },
      {
        "question": "What is encapsulation?",
        "options": [
          "Hiding data and providing controlled access",
          "Creating multiple objects",
          "Converting data types",
          "Inheriting a class"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword refers to the current object?",
        "options": [
          "self",
          "object",
          "this",
          "current"
        ],
        "answer": 2
      },
      {
        "question": "Which of the following is used to define a class?",
        "options": [
          "object",
          "define",
          "class",
          "struct"
        ],
        "answer": 2
      },
      {
        "question": "Which component executes Java bytecode?",
        "options": [
          "JVM",
          "JRE",
          "JDK",
          "JAR"
        ],
        "answer": 0
      }
    ],
    "medium": [
      {
        "question": "What will be the output?\nint x = 5;\nSystem.out.println(x++ + ++x);",
        "options": [
          "12",
          "10",
          "13",
          "11"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nString s1 = \"Java\";\nString s2 = \"Java\";\nSystem.out.println(s1 == s2);",
        "options": [
          "Runtime error",
          "false",
          "true",
          "Compilation error"
        ],
        "answer": 2
      },
      {
        "question": "Which statement about method overloading is correct?",
        "options": [
          "Methods must have the same name but different parameter lists",
          "Methods must have different return types",
          "Methods must have different names",
          "Only static methods can be overloaded"
        ],
        "answer": 0
      },
      {
        "question": "What happens when an exception is not handled in Java?",
        "options": [
          "Exception is ignored",
          "Program terminates abnormally",
          "Compiler automatically handles it",
          "Program continues normally"
        ],
        "answer": 1
      },
      {
        "question": "Which of the following cannot be overridden?",
        "options": [
          "Protected method",
          "Instance method",
          "Abstract method",
          "Static method"
        ],
        "answer": 3
      },
      {
        "question": "What will be the output?\nint a = 10;\nif (a > 5)\n    if (a > 15)\n        System.out.println(\"A\");\n    else\n        System.out.println(\"B\");",
        "options": [
          "A",
          "B",
          "Compilation error",
          "No output"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about constructors is FALSE?",
        "options": [
          "Constructors can be overloaded",
          "Constructors have the same name as the class",
          "Constructors have no return type",
          "Constructors can be inherited"
        ],
        "answer": 3
      },
      {
        "question": "What will be the output?\nString s = \"Hello\";\ns.concat(\" World\");\nSystem.out.println(s);",
        "options": [
          "World",
          "Hello",
          "Compilation error",
          "Hello World"
        ],
        "answer": 1
      },
      {
        "question": "Which access modifier provides the widest accessibility?",
        "options": [
          "public",
          "private",
          "default",
          "protected"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nint[] a = {10, 20, 30};\nSystem.out.println(a.length);",
        "options": [
          "2",
          "Compilation error",
          "3",
          "4"
        ],
        "answer": 2
      },
      {
        "question": "Which keyword is used to prevent a class from being inherited?",
        "options": [
          "constant",
          "final",
          "static",
          "private"
        ],
        "answer": 1
      },
      {
        "question": "What will happen here?\nint x = 10;\nint y = 0;\nSystem.out.println(x / y);",
        "options": [
          "Compilation error",
          "Infinity",
          "ArithmeticException",
          "0"
        ],
        "answer": 2
      },
      {
        "question": "Which of the following statements about String is correct?",
        "options": [
          "String cannot be compared",
          "String objects are mutable",
          "String is a primitive data type",
          "String objects are immutable"
        ],
        "answer": 3
      },
      {
        "question": "What will be the output?\nclass Test {\n    static int x = 10;\n\n    public static void main(String[] args) {\n        Test t1 = new Test();\n        Test t2 = new Test();\n        t1.x = 20;\n        System.out.println(t2.x);\n    }\n}",
        "options": [
          "Compilation error",
          "20",
          "10",
          "0"
        ],
        "answer": 1
      },
      {
        "question": "Which concept allows a single interface to be used for different implementations?",
        "options": [
          "Polymorphism",
          "Encapsulation",
          "Compilation",
          "Serialization"
        ],
        "answer": 0
      },
      {
        "question": "What will be the output?\nint x = 10;\nSystem.out.println(x > 5 ? \"Yes\" : \"No\");",
        "options": [
          "Compilation error",
          "true",
          "No",
          "Yes"
        ],
        "answer": 3
      },
      {
        "question": "Which exception occurs when accessing an array outside its valid index range?",
        "options": [
          "NumberFormatException",
          "ArithmeticException",
          "NullPointerException",
          "ArrayIndexOutOfBoundsException"
        ],
        "answer": 3
      },
      {
        "question": "Which statement about an abstract class is correct?",
        "options": [
          "It cannot have constructors",
          "It can contain abstract and non-abstract methods",
          "Objects of an abstract class can always be created directly",
          "It must contain only abstract methods"
        ],
        "answer": 1
      },
      {
        "question": "What will be the output?\nint a = 5;\nint b = 2;\nSystem.out.println(a / b);",
        "options": [
          "2",
          "2.5",
          "3",
          "2.0"
        ],
        "answer": 0
      },
      {
        "question": "Which of the following is true about Java's finally block?",
        "options": [
          "It generally executes whether an exception occurs or not",
          "It executes only when no exception occurs",
          "It is mandatory with every try block",
          "It executes only when an exception occurs"
        ],
        "answer": 0
      }
    ],
    "hard": [
      {
        "question": "What is the output?\nint x = 5;\nSystem.out.println(x++ + ++x + x++);",
        "options": [
          "16",
          "18",
          "17",
          "19"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nString a = new String(\"Java\");\nString b = new String(\"Java\");\n\nSystem.out.println(a == b);\nSystem.out.println(a.equals(b));",
        "options": [
          "false, false",
          "true, false",
          "false, true",
          "true, true"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nclass Test {\n    static int x = 10;\n\n    public static void main(String[] args) {\n        Test t = new Test();\n        t.x = 20;\n        Test t2 = new Test();\n        System.out.println(t2.x);\n    }\n}",
        "options": [
          "10",
          "Compilation error",
          "0",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "What happens when this code executes?\ntry {\n    int x = 10 / 0;\n}\ncatch (ArithmeticException e) {\n    System.out.println(\"A\");\n}\ncatch (Exception e) {\n    System.out.println(\"B\");\n}",
        "options": [
          "Compilation error",
          "A",
          "B",
          "A B"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nclass A {\n    void show() {\n        System.out.println(\"A\");\n    }\n}\n\nclass B extends A {\n    void show() {\n        System.out.println(\"B\");\n    }\n}\n\npublic class Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.show();\n    }\n}",
        "options": [
          "A B",
          "B",
          "A",
          "Compilation error"
        ],
        "answer": 1
      },
      {
        "question": "Which method is selected at compile time in Java?",
        "options": [
          "Overloaded method",
          "Constructor",
          "Abstract method",
          "Overridden method"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nString s = \"Java\";\ns = s + \" Programming\";\n\nSystem.out.println(s);",
        "options": [
          "Java",
          "Java Programming",
          "Compilation error",
          "Programming"
        ],
        "answer": 1
      },
      {
        "question": "What will happen?\nfinal int x = 10;\nx = 20;",
        "options": [
          "x remains 10",
          "Compilation error",
          "x becomes 20",
          "Runtime error"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nint a = 10;\n\nif (a++ > 10 && ++a > 11)\n    System.out.println(a);\nelse\n    System.out.println(a);",
        "options": [
          "10",
          "11",
          "12",
          "13"
        ],
        "answer": 1
      },
      {
        "question": "Which statement is TRUE about Java interfaces?",
        "options": [
          "Interface fields are implicitly public, static, and final",
          "An interface cannot contain methods",
          "An interface can contain instance variables",
          "An interface can be instantiated directly"
        ],
        "answer": 0
      },
      {
        "question": "What is the output?\nclass Test {\n    static {\n        System.out.println(\"Static\");\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Main\");\n    }\n}",
        "options": [
          "Static",
          "Main",
          "Main Static",
          "Static Main"
        ],
        "answer": 3
      },
      {
        "question": "What happens here?\nclass A {\n    private void show() {\n        System.out.println(\"A\");\n    }\n}\n\nclass B extends A {\n    void show() {\n        System.out.println(\"B\");\n    }\n}",
        "options": [
          "A's method is overloaded",
          "B overrides A's show()",
          "B's method is unrelated to A's private method",
          "Compilation error"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nint x = 10;\n\nswitch (x) {\n    case 10:\n        System.out.println(\"A\");\n    case 20:\n        System.out.println(\"B\");\n    default:\n        System.out.println(\"C\");\n}",
        "options": [
          "A",
          "A B C",
          "A B",
          "C"
        ],
        "answer": 1
      },
      {
        "question": "Which of the following can cause a compilation error?",
        "options": [
          "Dividing an integer by zero using variables",
          "Dividing an integer literal by zero",
          "Catching Exception",
          "Calling an overloaded method"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nclass Test {\n    static int count = 0;\n\n    Test() {\n        count++;\n    }\n\n    public static void main(String[] args) {\n        new Test();\n        new Test();\n        new Test();\n        System.out.println(count);\n    }\n}",
        "options": [
          "0",
          "3",
          "2",
          "1"
        ],
        "answer": 1
      },
      {
        "question": "What will happen?\nObject obj = null;\nSystem.out.println(obj.toString());",
        "options": [
          "Object",
          "null",
          "Compilation error",
          "NullPointerException"
        ],
        "answer": 3
      },
      {
        "question": "What is the output?\nint[] a = {1, 2, 3, 4};\n\nfor (int i : a) {\n    if (i == 3)\n        break;\n    System.out.print(i + \" \");\n}",
        "options": [
          "1 2 3 4",
          "1 2 3",
          "1 2",
          "2 3"
        ],
        "answer": 2
      },
      {
        "question": "Which statement about this and super is correct?",
        "options": [
          "super refers to the current object",
          "Both refer to the current object",
          "this refers to the current object and super refers to the immediate parent class",
          "this refers to the parent object"
        ],
        "answer": 2
      },
      {
        "question": "What is the output?\nclass A {\n    int x = 10;\n}\n\nclass B extends A {\n    int x = 20;\n\n    void display() {\n        System.out.println(x);\n        System.out.println(super.x);\n    }\n}\n\nIf display() is called on a B object, what is printed?",
        "options": [
          "10 10",
          "20 10",
          "10 20",
          "20 20"
        ],
        "answer": 1
      },
      {
        "question": "What is the output?\nclass Test {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"A\");\n            return;\n        }\n        finally {\n            System.out.println(\"B\");\n        }\n    }\n}",
        "options": [
          "B",
          "Compilation error",
          "A",
          "A B"
        ],
        "answer": 3
      }
    ]
  },
  "DSA": {
    "easy": [
      {
        "question": "Which data structure follows the LIFO principle?",
        "options": [
          "Linked List",
          "Queue",
          "Tree",
          "Stack"
        ],
        "answer": 3
      },
      {
        "question": "Which data structure follows the FIFO principle?",
        "options": [
          "Queue",
          "Tree",
          "Stack",
          "Graph"
        ],
        "answer": 0
      },
      {
        "question": "What is the time complexity of accessing an element by index in an array?",
        "options": [
          "O(log n)",
          "O(n²)",
          "O(1)",
          "O(n)"
        ],
        "answer": 2
      },
      {
        "question": "Which data structure uses nodes connected by pointers?",
        "options": [
          "Array",
          "Hash Table",
          "Stack",
          "Linked List"
        ],
        "answer": 3
      },
      {
        "question": "Which operation adds an element to the top of a stack?",
        "options": [
          "Enqueue",
          "Push",
          "Pop",
          "Peek"
        ],
        "answer": 1
      },
      {
        "question": "Which operation removes an element from a stack?",
        "options": [
          "Pop",
          "Insert",
          "Push",
          "Enqueue"
        ],
        "answer": 0
      },
      {
        "question": "Which operation is used to insert an element into a queue?",
        "options": [
          "Enqueue",
          "Dequeue",
          "Pop",
          "Push"
        ],
        "answer": 0
      },
      {
        "question": "Which operation removes an element from the front of a queue?",
        "options": [
          "Push",
          "Insert",
          "Dequeue",
          "Enqueue"
        ],
        "answer": 2
      },
      {
        "question": "Which traversal visits the root before its subtrees?",
        "options": [
          "Postorder",
          "Level order",
          "Inorder",
          "Preorder"
        ],
        "answer": 3
      },
      {
        "question": "Which traversal of a Binary Search Tree produces elements in sorted order?",
        "options": [
          "Inorder",
          "Preorder",
          "Postorder",
          "Level order"
        ],
        "answer": 0
      },
      {
        "question": "Which data structure is commonly used to implement BFS?",
        "options": [
          "Heap",
          "Array only",
          "Queue",
          "Stack"
        ],
        "answer": 2
      },
      {
        "question": "Which data structure is commonly used for DFS?",
        "options": [
          "Stack",
          "Hash Table",
          "Queue",
          "Heap"
        ],
        "answer": 0
      },
      {
        "question": "What is the worst-case time complexity of linear search?",
        "options": [
          "O(log n)",
          "O(n)",
          "O(n²)",
          "O(1)"
        ],
        "answer": 1
      },
      {
        "question": "Binary search requires the data to be:",
        "options": [
          "Random",
          "Duplicated",
          "Unsorted",
          "Sorted"
        ],
        "answer": 3
      },
      {
        "question": "What is the average time complexity of binary search?",
        "options": [
          "O(log n)",
          "O(n²)",
          "O(1)",
          "O(n)"
        ],
        "answer": 0
      },
      {
        "question": "Which sorting algorithm repeatedly selects the smallest/largest element and places it in its correct position?",
        "options": [
          "Selection Sort",
          "Heap Sort",
          "Quick Sort",
          "Merge Sort"
        ],
        "answer": 0
      },
      {
        "question": "Which sorting algorithm repeatedly compares adjacent elements?",
        "options": [
          "Selection Sort",
          "Merge Sort",
          "Quick Sort",
          "Bubble Sort"
        ],
        "answer": 3
      },
      {
        "question": "Which data structure is used to represent hierarchical relationships?",
        "options": [
          "Stack",
          "Tree",
          "Queue",
          "Array"
        ],
        "answer": 1
      },
      {
        "question": "A graph consists primarily of:",
        "options": [
          "Roots and leaves only",
          "Stacks and queues",
          "Arrays and indexes",
          "Nodes and edges"
        ],
        "answer": 3
      },
      {
        "question": "What is the maximum number of children a node can have in a binary tree?",
        "options": [
          "1",
          "4",
          "2",
          "3"
        ],
        "answer": 2
      }
    ],
    "medium": [
      {
        "question": "What is the worst-case time complexity of inserting an element at the beginning of an array of size `n`?",
        "options": [
          "O(1)",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        "answer": 2
      },
      {
        "question": "In a singly linked list, what is the time complexity of inserting a node at the beginning when the head pointer is available?",
        "options": [
          "O(log n)",
          "O(n²)",
          "O(n)",
          "O(1)"
        ],
        "answer": 3
      },
      {
        "question": "Which data structure is most suitable for evaluating a postfix expression?",
        "options": [
          "Binary Tree",
          "Graph",
          "Queue",
          "Stack"
        ],
        "answer": 3
      },
      {
        "question": "What is the postfix form of the expression `A + B * C`?",
        "options": [
          "`AB+C*`",
          "`ABC+*`",
          "`ABC*+`",
          "`A+BC*`"
        ],
        "answer": 2
      },
      {
        "question": "Which traversal of a binary tree uses a queue for its standard implementation?",
        "options": [
          "Level Order",
          "Preorder",
          "Inorder",
          "Postorder"
        ],
        "answer": 0
      },
      {
        "question": "In a Binary Search Tree, where is a value smaller than the root generally placed?",
        "options": [
          "Parent node",
          "Right subtree",
          "Leaf only",
          "Left subtree"
        ],
        "answer": 3
      },
      {
        "question": "What is the worst-case search complexity of an ordinary Binary Search Tree?",
        "options": [
          "O(n)",
          "O(1)",
          "O(n log n)",
          "O(log n)"
        ],
        "answer": 0
      },
      {
        "question": "Which data structure guarantees that the height remains O(log n) after insertions and deletions?",
        "options": [
          "Ordinary Binary Tree",
          "Stack",
          "AVL Tree",
          "Singly Linked List"
        ],
        "answer": 2
      },
      {
        "question": "What is the balance factor of an AVL tree node?",
        "options": [
          "Height of node − number of children",
          "Height of left subtree − height of right subtree",
          "Height of right subtree − height of left subtree",
          "Number of left nodes − number of right nodes"
        ],
        "answer": 1
      },
      {
        "question": "Which rotation is required when an AVL tree becomes unbalanced due to insertion in the left subtree of the left child?",
        "options": [
          "Right-Left Rotation",
          "Right Rotation",
          "Left-Right Rotation",
          "Left Rotation"
        ],
        "answer": 1
      },
      {
        "question": "What is the time complexity of merging two sorted arrays containing `m` and `n` elements?",
        "options": [
          "O(log(m+n))",
          "O(m + n)",
          "O(m² + n²)",
          "O(mn)"
        ],
        "answer": 1
      },
      {
        "question": "What is the worst-case time complexity of Quick Sort?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n log n)",
          "O(n²)"
        ],
        "answer": 3
      },
      {
        "question": "Which sorting algorithm has O(n log n) worst-case time complexity and generally requires additional O(n) auxiliary space?",
        "options": [
          "Selection Sort",
          "Bubble Sort",
          "Quick Sort",
          "Merge Sort"
        ],
        "answer": 3
      },
      {
        "question": "What is the time complexity of inserting an element into a binary heap?",
        "options": [
          "O(1)",
          "O(n log n)",
          "O(log n)",
          "O(n)"
        ],
        "answer": 2
      },
      {
        "question": "Which data structure is most appropriate for implementing a priority queue efficiently?",
        "options": [
          "Circular Queue",
          "Linked List only",
          "Heap",
          "Stack"
        ],
        "answer": 2
      },
      {
        "question": "In a max-heap, which statement is always true?",
        "options": [
          "The smallest element is at the root",
          "Every parent is smaller than its children",
          "Elements are completely sorted",
          "The largest element is at the root"
        ],
        "answer": 3
      },
      {
        "question": "What is the time complexity of BFS using an adjacency-list representation of a graph with `V` vertices and `E` edges?",
        "options": [
          "O(E²)",
          "O(V²)",
          "O(V + E)",
          "O(log V)"
        ],
        "answer": 2
      },
      {
        "question": "Which algorithm is commonly used to find the shortest path from a source vertex in a graph with non-negative edge weights?",
        "options": [
          "Dijkstra's Algorithm",
          "Kruskal's Algorithm",
          "DFS",
          "Prim's Algorithm"
        ],
        "answer": 0
      },
      {
        "question": "Which algorithm is primarily used to find a Minimum Spanning Tree?",
        "options": [
          "KMP Algorithm",
          "Kruskal's Algorithm",
          "Dijkstra's Algorithm",
          "Binary Search"
        ],
        "answer": 1
      },
      {
        "question": "What is the time complexity of accessing the `k`-th element of a singly linked list?",
        "options": [
          "O(1)",
          "O(n²)",
          "O(log n)",
          "O(n)"
        ],
        "answer": 3
      }
    ],
    "hard": [
      {
        "question": "Consider the following sequence inserted into an empty BST:\n\n`50, 30, 70, 20, 40, 60, 80`\n\nWhat will be the inorder traversal?",
        "options": [
          "50, 30, 20, 40, 70, 60, 80",
          "50, 70, 80, 60, 30, 40, 20",
          "20, 40, 30, 60, 80, 70, 50",
          "20, 30, 40, 50, 60, 70, 80"
        ],
        "answer": 3
      },
      {
        "question": "What is the maximum number of nodes in a binary tree of height `h`, where the root is at height 0?",
        "options": [
          "`2^(h-1) - 1`",
          "`2^h`",
          "`2h`",
          "`2^(h+1) - 1`"
        ],
        "answer": 3
      },
      {
        "question": "Which traversal can uniquely reconstruct a binary tree when paired with inorder traversal, assuming all node values are distinct?",
        "options": [
          "Reverse inorder",
          "Level order only",
          "Preorder",
          "Postorder only"
        ],
        "answer": 2
      },
      {
        "question": "A full binary tree has 15 internal nodes. How many leaf nodes does it have?",
        "options": [
          "15",
          "30",
          "16",
          "14"
        ],
        "answer": 2
      },
      {
        "question": "Which AVL rotation is required when a node becomes unbalanced because insertion occurs in the right subtree of its left child?",
        "options": [
          "Left Rotation",
          "Left-Right Rotation",
          "Right-Left Rotation",
          "Right Rotation"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about a min-heap is correct?",
        "options": [
          "The minimum element is always at the root",
          "The maximum element is always at the root",
          "Every parent node is greater than its children",
          "The elements are stored in completely sorted order"
        ],
        "answer": 0
      },
      {
        "question": "What is the worst-case time complexity of building a heap using the bottom-up heap construction method?",
        "options": [
          "O(n log n)",
          "O(log n)",
          "O(n²)",
          "O(n)"
        ],
        "answer": 3
      },
      {
        "question": "Which sorting algorithm is stable by its standard implementation?",
        "options": [
          "Selection Sort",
          "Quick Sort",
          "Heap Sort",
          "Merge Sort"
        ],
        "answer": 3
      },
      {
        "question": "If Quick Sort always chooses the smallest element as its pivot, what is its worst-case recurrence approximately?",
        "options": [
          "`T(n) = T(n-1) + O(n)`",
          "`T(n) = T(n/2) + O(n)`",
          "`T(n) = T(n/2) + O(1)`",
          "`T(n) = 2T(n/2) + O(n)`"
        ],
        "answer": 0
      },
      {
        "question": "What is the worst-case time complexity of searching in a hash table using chaining?",
        "options": [
          "O(n)",
          "O(log n)",
          "O(n log n)",
          "O(1)"
        ],
        "answer": 0
      },
      {
        "question": "In hashing, what is a collision?",
        "options": [
          "When a key is deleted",
          "When the table becomes empty",
          "When two keys generate the same hash index",
          "When a key cannot be converted to an integer"
        ],
        "answer": 2
      },
      {
        "question": "Which collision-resolution technique stores multiple elements in a linked structure at the same hash index?",
        "options": [
          "Quadratic probing",
          "Separate chaining",
          "Double hashing",
          "Linear probing"
        ],
        "answer": 1
      },
      {
        "question": "Consider the recurrence:\n\n`T(n) = 2T(n/2) + n`\n\nWhat is its asymptotic complexity?",
        "options": [
          "O(log n)",
          "O(n log n)",
          "O(n²)",
          "O(n)"
        ],
        "answer": 1
      },
      {
        "question": "What is the maximum number of comparisons required by binary search on a sorted array of 31 elements in the worst case?",
        "options": [
          "6",
          "5",
          "31",
          "16"
        ],
        "answer": 1
      },
      {
        "question": "Which algorithm can detect a negative-weight cycle in a weighted directed graph?",
        "options": [
          "Binary Search",
          "Bellman-Ford Algorithm",
          "Prim's Algorithm",
          "Kruskal's Algorithm"
        ],
        "answer": 1
      },
      {
        "question": "Which algorithm is not suitable for graphs containing negative edge weights?",
        "options": [
          "Floyd-Warshall",
          "DFS",
          "Dijkstra's Algorithm",
          "Bellman-Ford"
        ],
        "answer": 2
      },
      {
        "question": "What is the main purpose of topological sorting?",
        "options": [
          "Sorting elements of an array",
          "Ordering vertices of a directed acyclic graph according to dependencies",
          "Finding the shortest path in any graph",
          "Finding cycles in an undirected graph only"
        ],
        "answer": 1
      },
      {
        "question": "Which traversal is commonly used to detect a cycle in an undirected graph when combined with parent tracking?",
        "options": [
          "Binary Search",
          "Selection Sort",
          "DFS",
          "Inorder"
        ],
        "answer": 2
      },
      {
        "question": "Suppose a stack is initially empty. The operations are:\n\n`PUSH(10), PUSH(20), POP(), PUSH(30), PUSH(40), POP()`\n\nWhat is the final top element?",
        "options": [
          "10",
          "20",
          "30",
          "40"
        ],
        "answer": 2
      },
      {
        "question": "Consider the following nested loops:\n\n```text\nfor(i = 1; i <= n; i++)\n    for(j = 1; j <= i; j++)\n        for(k = 1; k <= j; k++)\n            constant_operation();\n```\n\nWhat is the overall time complexity?",
        "options": [
          "O(n³)",
          "O(log n)",
          "O(n²)",
          "O(n)"
        ],
        "answer": 0
      }
    ]
  },
  "CSS": {
    "easy": [
      {
        "question": "What does CSS stand for?",
        "options": [
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Syntax",
          "Colorful Style Sheets"
        ],
        "answer": 0
      },
      {
        "question": "Which HTML tag is used to link an external CSS file?",
        "options": [
          "<css>",
          "<link>",
          "<style>",
          "<script>"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to change the text color?",
        "options": [
          "text-color",
          "font-color",
          "color",
          "foreground"
        ],
        "answer": 2
      },
      {
        "question": "Which property is used to change the background color of an element?",
        "options": [
          "bgcolor",
          "color-background",
          "background-style",
          "background-color"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS property is used to change the font size?",
        "options": [
          "font-size",
          "font-style",
          "text-size",
          "size"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol is used to select an element by its id in CSS?",
        "options": [
          ".",
          "#",
          "*",
          "@"
        ],
        "answer": 1
      },
      {
        "question": "Which symbol is used to select elements by their class?",
        "options": [
          "#",
          ":",
          ".",
          "@"
        ],
        "answer": 2
      },
      {
        "question": "Which CSS property is used to make text bold?",
        "options": [
          "text-weight",
          "font-bold",
          "bold",
          "font-weight"
        ],
        "answer": 3
      },
      {
        "question": "Which property is used to align text horizontally?",
        "options": [
          "text-align",
          "align-text",
          "text-position",
          "horizontal-align"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property controls the space inside an element's border?",
        "options": [
          "margin",
          "padding",
          "spacing",
          "border-space"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property controls the space outside an element's border?",
        "options": [
          "padding",
          "outside-space",
          "margin",
          "border-margin"
        ],
        "answer": 2
      },
      {
        "question": "Which property is used to add a border to an element?",
        "options": [
          "outline",
          "line",
          "element-border",
          "border"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS property is used to change the width of an element?",
        "options": [
          "width",
          "element-width",
          "size-width",
          "length"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is used to change the height of an element?",
        "options": [
          "element-height",
          "height",
          "size",
          "vertical-size"
        ],
        "answer": 1
      },
      {
        "question": "Which value of the position property positions an element relative to its normal position?",
        "options": [
          "absolute",
          "fixed",
          "relative",
          "static"
        ],
        "answer": 2
      },
      {
        "question": "Which CSS property is used to control the stacking order of positioned elements?",
        "options": [
          "stack",
          "layer",
          "position-index",
          "z-index"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS property is used to make an element invisible while still occupying its space?",
        "options": [
          "visibility: hidden",
          "display: none",
          "opacity: 0",
          "hidden: true"
        ],
        "answer": 0
      },
      {
        "question": "Which CSS property is commonly used to change the type of cursor displayed when it is over an element?",
        "options": [
          "mouse",
          "cursor",
          "pointer-type",
          "mouse-pointer"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS property is used to round the corners of an element?",
        "options": [
          "corner-radius",
          "radius",
          "border-radius",
          "round-border"
        ],
        "answer": 2
      },
      {
        "question": "Which CSS property is used to add a shadow around an element?",
        "options": [
          "element-shadow",
          "shadow",
          "border-shadow",
          "box-shadow"
        ],
        "answer": 3
      }
    ],
    "medium": [
      {
        "question": "Which CSS selector has the highest specificity?",
        "options": [
          ".menu li",
          "#menu li",
          "div.menu",
          "li.active"
        ],
        "answer": 1
      },
      {
        "question": "What does box-sizing: border-box do?",
        "options": [
          "Removes the element's border",
          "Makes the element's width equal to its content width",
          "Includes padding and border within the declared width and height",
          "Includes only padding within the declared width"
        ],
        "answer": 2
      },
      {
        "question": "What is the default value of the position property?",
        "options": [
          "relative",
          "absolute",
          "fixed",
          "static"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS unit is relative to the font size of the root <html> element?",
        "options": [
          "rem",
          "em",
          "%",
          "vh"
        ],
        "answer": 0
      },
      {
        "question": "What does the following selector target?\ndiv > p",
        "options": [
          "All <p> elements inside any <div>",
          "Only <p> elements that are direct children of a <div>",
          "All <div> elements inside <p>",
          "The first <p> inside each <div>"
        ],
        "answer": 1
      },
      {
        "question": "Which pseudo-class selects an element when the mouse pointer is positioned over it?",
        "options": [
          ":active",
          ":focus",
          ":hover",
          ":visited"
        ],
        "answer": 2
      },
      {
        "question": "Which property determines whether an element establishes a flex container?",
        "options": [
          "flex-direction",
          "flex-container",
          "container-type",
          "display"
        ],
        "answer": 3
      },
      {
        "question": "In a flex container with flex-direction: row, which property aligns items along the main axis?",
        "options": [
          "justify-content",
          "align-items",
          "align-content",
          "justify-items"
        ],
        "answer": 0
      },
      {
        "question": "What does flex: 1 generally allow a flex item to do?",
        "options": [
          "Prevent it from shrinking",
          "Grow to occupy available space according to the flex rules",
          "Make its width exactly 1px",
          "Position it absolutely"
        ],
        "answer": 1
      },
      {
        "question": "Which CSS declaration creates a two-column grid where each column takes an equal fraction of the available space?",
        "options": [
          "grid-columns: 50% 50%;",
          "grid-template: 2 columns;",
          "grid-template-columns: 1fr 1fr;",
          "grid-column-size: equal equal;"
        ],
        "answer": 2
      },
      {
        "question": "What is the effect of overflow: hidden?",
        "options": [
          "It makes the element transparent",
          "It automatically adds a scrollbar",
          "It removes the element from the layout",
          "Content extending outside the element's box is clipped"
        ],
        "answer": 3
      },
      {
        "question": "Which pseudo-element is commonly used to insert generated content before an element's actual content?",
        "options": [
          "::before",
          ":before only",
          "::first",
          "::prepend"
        ],
        "answer": 0
      },
      {
        "question": "Which declaration takes precedence when competing declarations have the same specificity?",
        "options": [
          "The declaration appearing first",
          "The declaration appearing later in the stylesheet/source order",
          "The declaration with the shorter property name",
          "The declaration with the smaller value"
        ],
        "answer": 1
      },
      {
        "question": "What does position: absolute position an element relative to?",
        "options": [
          "Always the viewport",
          "Always the <body> element",
          "Its nearest positioned ancestor, when one exists",
          "The nearest flex item only"
        ],
        "answer": 2
      },
      {
        "question": "Which CSS function is useful for selecting the smaller of two or more values?",
        "options": [
          "max()",
          "small()",
          "less()",
          "min()"
        ],
        "answer": 3
      },
      {
        "question": "What does opacity: 0 do to an element?",
        "options": [
          "Makes it invisible while it generally still occupies space",
          "Removes it from the document flow",
          "Disables all CSS properties",
          "Changes its display value to none"
        ],
        "answer": 0
      },
      {
        "question": "Which media query correctly applies styles when the viewport width is 768px or less?",
        "options": [
          "@media (width > 768px)",
          "@media (max-width: 768px)",
          "@media screen-width <= 768px",
          "@media (viewport: 768px)"
        ],
        "answer": 1
      },
      {
        "question": "What does calc() allow you to do in CSS?",
        "options": [
          "Execute JavaScript inside CSS",
          "Calculate only integer values",
          "Perform calculations when determining CSS property values",
          "Automatically calculate HTML elements"
        ],
        "answer": 2
      },
      {
        "question": "Which declaration makes an element a flex container and allows its children to wrap onto multiple lines?",
        "options": [
          "display: block; flex: wrap;",
          "display: flex-wrap;",
          "flex-container: wrap;",
          "display: flex; flex-wrap: wrap;"
        ],
        "answer": 3
      },
      {
        "question": "Consider:\np { color: red; }\n.text { color: blue; }\n#para { color: green; }\n\n<p id=\"para\" class=\"text\">Hello</p>\n\nWhat color will the text be?",
        "options": [
          "Green",
          "Red",
          "Blue",
          "Black"
        ],
        "answer": 0
      }
    ],
    "hard": [
      {
        "question": "Consider the following CSS:\np { color: red; }\n.content p { color: blue; }\n#main p { color: green; }\n\nFor:\n<div id=\"main\" class=\"content\">\n    <p>Hello</p>\n</div>\n\nWhat will be the color of the paragraph?",
        "options": [
          "Red",
          "Blue",
          "Green",
          "Depends on declaration order"
        ],
        "answer": 2
      },
      {
        "question": "Which selector has the highest specificity?",
        "options": [
          "div p",
          ".container p",
          "p:first-child",
          "#container p"
        ],
        "answer": 3
      },
      {
        "question": "What happens when display: none is applied to an element?",
        "options": [
          "The element is removed from the layout",
          "The element becomes transparent but keeps its space",
          "Only its text disappears",
          "The element becomes absolutely positioned"
        ],
        "answer": 0
      },
      {
        "question": "Which property controls whether an element can become a flex container?",
        "options": [
          "flex-direction",
          "display",
          "flex-container",
          "flex-flow"
        ],
        "answer": 1
      },
      {
        "question": "Consider:\n.container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\nAlong which axis does justify-content operate?",
        "options": [
          "Horizontal axis",
          "Cross axis",
          "Main axis, which is vertical here",
          "Both axes equally"
        ],
        "answer": 2
      },
      {
        "question": "Which property controls alignment along the cross axis in a flex container?",
        "options": [
          "justify-content",
          "flex-direction",
          "align-axis",
          "align-items"
        ],
        "answer": 3
      },
      {
        "question": "What does flex-shrink: 0 generally mean?",
        "options": [
          "The item will not shrink due to flex shrinking",
          "The item cannot grow",
          "The item is removed when space is insufficient",
          "The item's width becomes zero"
        ],
        "answer": 0
      },
      {
        "question": "Consider:\n.box {\n    width: 200px;\n    padding: 20px;\n    border: 5px solid black;\n    box-sizing: border-box;\n}\n\nWhat is the total outer width of the element?",
        "options": [
          "230px",
          "200px",
          "250px",
          "180px"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about em and rem is correct?",
        "options": [
          "Both are always relative to the viewport",
          "em is relative to the root font size, while rem is relative to the parent",
          "em can depend on the inherited/parent font size, while rem is relative to the root element's font size",
          "Both always represent exactly the same size"
        ],
        "answer": 2
      },
      {
        "question": "What does the following selector select?\nul li:nth-child(2)",
        "options": [
          "Every second <li> in the document",
          "Every <li> whose value is 2",
          "Only the second <ul>",
          "The second <li> child of each matching <ul>"
        ],
        "answer": 3
      },
      {
        "question": "Which statement about position: fixed is generally correct?",
        "options": [
          "The element is positioned relative to the viewport and does not move with normal document scrolling",
          "The element remains positioned relative to the normal document flow",
          "The element can only be positioned inside a flex container",
          "The element always behaves exactly like position: absolute"
        ],
        "answer": 0
      },
      {
        "question": "What is the primary purpose of z-index?",
        "options": [
          "To change an element's size",
          "To control the stacking order of positioned/stacking-context elements",
          "To change the opacity",
          "To control horizontal alignment"
        ],
        "answer": 1
      },
      {
        "question": "Which declaration creates three equal-width Grid columns?",
        "options": [
          "grid-columns: 1fr 1fr 1fr;",
          "grid-template: columns(3);",
          "grid-template-columns: 1fr 1fr 1fr;",
          "grid-column: repeat(3);"
        ],
        "answer": 2
      },
      {
        "question": "What does gap: 20px do in a CSS Grid or Flexbox container?",
        "options": [
          "Adds a 20px border around the container",
          "Adds spacing between the container and its children",
          "Adds 20px padding to every child",
          "Adds spacing between rows and/or columns/items"
        ],
        "answer": 3
      },
      {
        "question": "Which CSS function allows a value to be constrained between a minimum and maximum while using a preferred value?",
        "options": [
          "clamp()",
          "limit()",
          "range()",
          "restrict()"
        ],
        "answer": 0
      },
      {
        "question": "Consider:\n.box {\n    width: min(80%, 500px);\n}\n\nWhat does this mean?",
        "options": [
          "The width will always be 500px",
          "The browser chooses the smaller of 80% and 500px",
          "The width will always be 80%",
          "The browser chooses the larger of 80% and 500px"
        ],
        "answer": 1
      },
      {
        "question": "Which pseudo-class matches an element when it receives keyboard focus?",
        "options": [
          ":active",
          ":hover",
          ":focus",
          ":visited"
        ],
        "answer": 2
      },
      {
        "question": "What does inherit mean when used as a CSS property value?",
        "options": [
          "Use the browser's default value",
          "Use the value from the root element only",
          "Reset the property completely",
          "Use the value from the parent element"
        ],
        "answer": 3
      },
      {
        "question": "Which statement about CSS custom properties is correct?",
        "options": [
          "They are declared using -- and commonly accessed using var()",
          "They can only store colors",
          "They cannot be inherited",
          "They must always be declared inside JavaScript"
        ],
        "answer": 0
      },
      {
        "question": "Consider the following CSS:\np {\n    color: red !important;\n}\n\n#text {\n    color: blue;\n}\n\n<p id=\"text\">Hello</p>\n\nWhat will be the color of the text?",
        "options": [
          "Blue because an ID selector has higher specificity",
          "Red because !important overrides the normal declaration",
          "Purple because the colors are combined",
          "Depends on which rule appears first"
        ],
        "answer": 1
      }
    ]
  },
  "HTML": {
    "easy": [
      {
        "question": "What does HTML stand for?",
        "options": [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyperlink Text Management Language",
          "Home Tool Markup Language"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is used to create a paragraph in HTML?",
        "options": [
          "<paragraph>",
          "<text>",
          "<p>",
          "<para>"
        ],
        "answer": 2
      },
      {
        "question": "Which tag is used to create the largest heading?",
        "options": [
          "<h1>",
          "<head>",
          "<heading>",
          "<h6>"
        ],
        "answer": 0
      },
      {
        "question": "Which HTML tag is used to insert an image?",
        "options": [
          "<image>",
          "<picture>",
          "<img>",
          "<src>"
        ],
        "answer": 2
      },
      {
        "question": "Which attribute specifies the URL of a hyperlink?",
        "options": [
          "href",
          "link",
          "src",
          "url"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is used to create a hyperlink?",
        "options": [
          "<a>",
          "<href>",
          "<url>",
          "<link>"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is used to create an unordered list?",
        "options": [
          "<ol>",
          "<list>",
          "<ul>",
          "<li>"
        ],
        "answer": 2
      },
      {
        "question": "Which tag is used to create a numbered list?",
        "options": [
          "<ol>",
          "<ul>",
          "<li>",
          "<list>"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is used to insert a line break?",
        "options": [
          "<lb>",
          "<break>",
          "<br>",
          "<newline>"
        ],
        "answer": 2
      },
      {
        "question": "Which tag defines a table row?",
        "options": [
          "<tr>",
          "<row>",
          "<th>",
          "<td>"
        ],
        "answer": 0
      },
      {
        "question": "Which tag defines a table header cell?",
        "options": [
          "<thead>",
          "<th>",
          "<td>",
          "<header>"
        ],
        "answer": 1
      },
      {
        "question": "Which tag is used to create a form in HTML?",
        "options": [
          "<fieldset>",
          "<form>",
          "<input>",
          "<formbox>"
        ],
        "answer": 1
      },
      {
        "question": "Which attribute is used to uniquely identify an HTML element?",
        "options": [
          "id",
          "class",
          "name",
          "unique"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is used to define the title displayed in the browser tab?",
        "options": [
          "<caption>",
          "<header>",
          "<title>",
          "<head>"
        ],
        "answer": 2
      },
      {
        "question": "Which HTML element is used to create a text input field?",
        "options": [
          "<input type=\"text\">",
          "<textfield>",
          "<text>",
          "<textbox>"
        ],
        "answer": 0
      },
      {
        "question": "Which tag is commonly used to create a clickable button?",
        "options": [
          "<inputbutton>",
          "<click>",
          "<button>",
          "<btn>"
        ],
        "answer": 2
      },
      {
        "question": "Which attribute provides alternative text for an image?",
        "options": [
          "alt",
          "src",
          "title",
          "text"
        ],
        "answer": 0
      },
      {
        "question": "Which HTML tag is used to define important/bold text semantically?",
        "options": [
          "<strong>",
          "<bolder>",
          "<important>",
          "<bold>"
        ],
        "answer": 0
      },
      {
        "question": "Which declaration is used to specify that an HTML document uses HTML5?",
        "options": [
          "<html5>",
          "<doctype HTML5>",
          "<!DOCTYPE html>",
          "<HTML VERSION=\"5\">"
        ],
        "answer": 2
      },
      {
        "question": "Which tag contains the visible content of an HTML document?",
        "options": [
          "<body>",
          "<head>",
          "<html>",
          "<title>"
        ],
        "answer": 0
      }
    ],
    "medium": [
      {
        "question": "Which HTML5 element is most appropriate for content that is indirectly related to the main content, such as a sidebar?",
        "options": [
          "<nav>",
          "<aside>",
          "<article>",
          "<section>"
        ],
        "answer": 1
      },
      {
        "question": "What is the default value of the method attribute of an HTML <form> element?",
        "options": [
          "GET",
          "POST",
          "DELETE",
          "PUT"
        ],
        "answer": 0
      },
      {
        "question": "Which attribute prevents a form control from being submitted with the form?",
        "options": [
          "blocked",
          "readonly",
          "disabled",
          "inactive"
        ],
        "answer": 2
      },
      {
        "question": "Which HTML element is specifically designed to represent an independent, self-contained piece of content?",
        "options": [
          "<section>",
          "<div>",
          "<article>",
          "<main>"
        ],
        "answer": 2
      },
      {
        "question": "What is the purpose of the srcset attribute in an <img> element?",
        "options": [
          "To add alternative text",
          "To specify image alignment",
          "To provide multiple image sources for different display conditions",
          "To define image dimensions"
        ],
        "answer": 2
      },
      {
        "question": "Which attribute makes an <input> field mandatory before form submission?",
        "options": [
          "mustfill",
          "required",
          "mandatory",
          "validate"
        ],
        "answer": 1
      },
      {
        "question": "Which element is used to associate a visible label with a form control?",
        "options": [
          "<caption>",
          "<label>",
          "<name>",
          "<legend>"
        ],
        "answer": 1
      },
      {
        "question": "What does the defer attribute do when used with an external <script>?",
        "options": [
          "Downloads the script asynchronously and executes it after parsing",
          "Prevents the script from executing",
          "Executes the script before HTML parsing begins",
          "Executes the script only after a user click"
        ],
        "answer": 0
      },
      {
        "question": "Which attribute allows an <iframe> to restrict the capabilities of its embedded content?",
        "options": [
          "sandbox",
          "restrict",
          "protect",
          "secure"
        ],
        "answer": 0
      },
      {
        "question": "Which HTML element is used to provide a caption for a <figure>?",
        "options": [
          "<description>",
          "<caption>",
          "<figurecaption>",
          "<figcaption>"
        ],
        "answer": 3
      },
      {
        "question": "Which input type provides built-in browser validation for email format?",
        "options": [
          "mail",
          "validate-email",
          "email",
          "text-email"
        ],
        "answer": 2
      },
      {
        "question": "What is the primary purpose of the <meta charset=\"UTF-8\"> declaration?",
        "options": [
          "To specify the character encoding",
          "To enable JavaScript",
          "To define the webpage language",
          "To define the page title"
        ],
        "answer": 0
      },
      {
        "question": "Which element represents the dominant content of the <body> of a document?",
        "options": [
          "<body-content>",
          "<main>",
          "<primary>",
          "<content>"
        ],
        "answer": 1
      },
      {
        "question": "What is the effect of the autocomplete=\"off\" attribute on a form control?",
        "options": [
          "It requests that the browser not automatically fill previously entered values",
          "It disables the control",
          "It prevents form submission",
          "It prevents the control from accepting user input"
        ],
        "answer": 0
      },
      {
        "question": "Which HTML element is appropriate for marking up a date or time in a machine-readable way?",
        "options": [
          "<timestamp>",
          "<datetime>",
          "<date>",
          "<time>"
        ],
        "answer": 3
      },
      {
        "question": "Which statement about the id attribute is correct?",
        "options": [
          "An id should uniquely identify an element within a document",
          "Multiple elements must have the same id",
          "id can only be used with forms",
          "id is used only for styling"
        ],
        "answer": 0
      },
      {
        "question": "Which attribute of an <a> element can specify that the linked resource should be downloaded rather than navigated to?",
        "options": [
          "downloadable",
          "file",
          "download",
          "save"
        ],
        "answer": 2
      },
      {
        "question": "Which HTML element is used to represent a scalar measurement within a known range?",
        "options": [
          "<measure>",
          "<meter>",
          "<progress>",
          "<range>"
        ],
        "answer": 1
      },
      {
        "question": "What is the purpose of the <datalist> element?",
        "options": [
          "To create a database table",
          "To provide predefined suggestions for an input control",
          "To create an ordered list",
          "To store JavaScript data"
        ],
        "answer": 1
      },
      {
        "question": "Which statement correctly distinguishes <strong> from <b>?",
        "options": [
          "Both have exactly the same semantic meaning",
          "<strong> is semantic, while <b> primarily indicates stylistic attention",
          "<b> is semantic, while <strong> is only visual",
          "<strong> can only be used inside headings"
        ],
        "answer": 1
      }
    ],
    "hard": [
      {
        "question": "What happens when an HTML form uses method=\"get\"?",
        "options": [
          "Form data is encrypted automatically",
          "Form data is appended to the URL as a query string",
          "Form data is sent only through headers",
          "Form data is stored in cookies"
        ],
        "answer": 1
      },
      {
        "question": "Which attribute on <script> allows the script to be downloaded without blocking HTML parsing, while execution occurs as soon as the script is ready?",
        "options": [
          "defer",
          "nonblocking",
          "async",
          "parallel"
        ],
        "answer": 2
      },
      {
        "question": "Consider: <input type=\"number\" min=\"10\" max=\"50\" step=\"5\"> Which value is valid according to the specified constraints?",
        "options": [
          "23",
          "35",
          "48",
          "12"
        ],
        "answer": 1
      },
      {
        "question": "Which attribute is used to specify the relationship between the current document and the linked resource?",
        "options": [
          "type",
          "relationship",
          "rel",
          "href"
        ],
        "answer": 2
      },
      {
        "question": "What is the primary purpose of the aria-label attribute?",
        "options": [
          "To validate a form field",
          "To change the visible text of an element",
          "To provide an accessible name for an element",
          "To apply a CSS label"
        ],
        "answer": 2
      },
      {
        "question": "Which statement about the defer attribute is correct for external scripts?",
        "options": [
          "Deferred scripts generally execute after parsing is complete and preserve document order",
          "Deferred scripts execute only when the page is clicked",
          "Deferred scripts execute before the HTML document is parsed",
          "Deferred scripts cannot access the DOM"
        ],
        "answer": 0
      },
      {
        "question": "What does the novalidate attribute on a <form> do?",
        "options": [
          "Disables the browser's built-in constraint validation during submission",
          "Disables JavaScript validation only",
          "Removes all input values",
          "Prevents the form from being submitted"
        ],
        "answer": 0
      },
      {
        "question": "Which element is most appropriate for a group of navigation links?",
        "options": [
          "<nav>",
          "<links>",
          "<menuitem>",
          "<navigate>"
        ],
        "answer": 0
      },
      {
        "question": "Consider: <input type=\"text\" name=\"username\" disabled value=\"Kajal\"> What happens to this control's value when the form is submitted?",
        "options": [
          "Only the name is submitted",
          "The disabled control is not submitted",
          "Kajal is submitted normally",
          "The value is submitted only with POST"
        ],
        "answer": 1
      },
      {
        "question": "Which statement correctly describes the readonly attribute?",
        "options": [
          "A readonly input cannot be focused",
          "A readonly input cannot be submitted",
          "A readonly input generally cannot be edited by the user but can be submitted",
          "A readonly input is automatically disabled"
        ],
        "answer": 2
      },
      {
        "question": "What is the purpose of the pattern attribute on an <input> element?",
        "options": [
          "To determine the input's default value",
          "To define the input's placeholder",
          "To specify a regular expression for constraint validation",
          "To define a CSS pattern"
        ],
        "answer": 2
      },
      {
        "question": "Which HTML element is used to represent a disclosure widget whose contents can be shown or hidden?",
        "options": [
          "<toggle>",
          "<summary-box>",
          "<details>",
          "<collapse>"
        ],
        "answer": 2
      },
      {
        "question": "In <details><summary>More Information</summary><p>Additional content</p></details>, what is the role of <summary>?",
        "options": [
          "It provides the visible label used to toggle the <details> element",
          "It defines the hidden content",
          "It defines a page heading",
          "It creates a hyperlink"
        ],
        "answer": 0
      },
      {
        "question": "Which attribute can be used on an <iframe> to restrict what the embedded document is allowed to do?",
        "options": [
          "permissions",
          "sandbox",
          "security",
          "restriction"
        ],
        "answer": 1
      },
      {
        "question": "What is the purpose of the autocomplete attribute in HTML forms?",
        "options": [
          "It controls whether the browser may suggest or fill previously entered information",
          "It validates the form using JavaScript",
          "It automatically generates passwords",
          "It automatically submits the form"
        ],
        "answer": 0
      },
      {
        "question": "Which element is semantically appropriate for content that represents a standalone composition, such as a blog post?",
        "options": [
          "<article>",
          "<aside>",
          "<content>",
          "<section>"
        ],
        "answer": 0
      },
      {
        "question": "Consider <a href=\"document.pdf\" download=\"notes.pdf\">Download</a>. What does download=\"notes.pdf\" primarily indicate?",
        "options": [
          "The PDF is converted into HTML",
          "The PDF should open in a new tab",
          "The browser should attempt to download the resource using the suggested filename notes.pdf",
          "The server must rename the file"
        ],
        "answer": 2
      },
      {
        "question": "Which element is designed to provide multiple sources or formats for media content?",
        "options": [
          "<format>",
          "<source>",
          "<media>",
          "<src>"
        ],
        "answer": 1
      },
      {
        "question": "Which statement about the <template> element is correct?",
        "options": [
          "Its contents are inert until they are instantiated or used by script",
          "It automatically creates an iframe",
          "It can contain only CSS",
          "Its contents are immediately rendered as normal page content"
        ],
        "answer": 0
      },
      {
        "question": "Consider a form with <input name=\"age\" type=\"number\" required>. What happens if the user submits the form without entering a value?",
        "options": [
          "The form is submitted with age=0",
          "The browser's constraint validation prevents normal submission",
          "The input is ignored and the form is submitted",
          "The browser automatically inserts the current age"
        ],
        "answer": 1
      }
    ]
  },
  "C": {
    "easy": [
      {
        "question": "Who developed C?",
        "options": [
          "Guido van Rossum",
          "James Gosling",
          "Bjarne Stroustrup",
          "Dennis Ritchie"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword declares an integer variable?",
        "options": [
          "integer",
          "int",
          "float",
          "num"
        ],
        "answer": 1
      },
      {
        "question": "Which symbol ends a C statement?",
        "options": [
          ";",
          ":",
          ".",
          ","
        ],
        "answer": 0
      },
      {
        "question": "Which function displays formatted output?",
        "options": [
          "print()",
          "scanf()",
          "printf()",
          "input()"
        ],
        "answer": 2
      },
      {
        "question": "Which function is used for formatted input?",
        "options": [
          "read()",
          "scanf()",
          "input()",
          "printf()"
        ],
        "answer": 1
      },
      {
        "question": "Which format specifier is used for an integer?",
        "options": [
          "%f",
          "%s",
          "%c",
          "%d"
        ],
        "answer": 3
      },
      {
        "question": "Which loop is guaranteed to execute at least once?",
        "options": [
          "do-while",
          "while",
          "for",
          "None"
        ],
        "answer": 0
      },
      {
        "question": "Which operator represents logical AND?",
        "options": [
          "&&",
          "!",
          "||",
          "&"
        ],
        "answer": 0
      },
      {
        "question": "What is the first index of an array?",
        "options": [
          "0",
          "-1",
          "2",
          "1"
        ],
        "answer": 0
      },
      {
        "question": "Which statement returns a value from a function?",
        "options": [
          "exit",
          "continue",
          "break",
          "return"
        ],
        "answer": 3
      },
      {
        "question": "Which is a valid variable name?",
        "options": [
          "2value",
          "my-value",
          "my_value",
          "float"
        ],
        "answer": 2
      },
      {
        "question": "Which operator gives the remainder?",
        "options": [
          "//",
          "\\",
          "%",
          "/"
        ],
        "answer": 2
      },
      {
        "question": "What is the output of printf(\"%d\", 5+3)?",
        "options": [
          "8",
          "53",
          "5",
          "3"
        ],
        "answer": 0
      },
      {
        "question": "Which keyword declares a constant?",
        "options": [
          "const",
          "constant",
          "static",
          "fixed"
        ],
        "answer": 0
      },
      {
        "question": "Which type stores a single character?",
        "options": [
          "int",
          "char",
          "float",
          "string"
        ],
        "answer": 1
      },
      {
        "question": "What does a pointer store?",
        "options": [
          "An address",
          "A character",
          "A keyword",
          "A value only"
        ],
        "answer": 0
      },
      {
        "question": "Which symbol gets the address of a variable?",
        "options": [
          "*",
          "@",
          "&",
          "#"
        ],
        "answer": 2
      },
      {
        "question": "Which statement terminates a loop or switch?",
        "options": [
          "exit",
          "stop",
          "continue",
          "break"
        ],
        "answer": 3
      },
      {
        "question": "Which data structure stores multiple values of the same type?",
        "options": [
          "Pointer",
          "Function",
          "Array",
          "Operator"
        ],
        "answer": 2
      },
      {
        "question": "Which keyword defines a structure?",
        "options": [
          "struct",
          "record",
          "structure",
          "class"
        ],
        "answer": 0
      }
    ],
    "medium": [
      {
        "question": "int a=5; printf(\"%d\", a++ + ++a); gives what?",
        "options": [
          "11",
          "Undefined behavior",
          "10",
          "12"
        ],
        "answer": 1
      },
      {
        "question": "int x=10; printf(\"%d %d\", x++, ++x); gives what?",
        "options": [
          "10 12",
          "11 12",
          "10 11",
          "Undefined behavior"
        ],
        "answer": 3
      },
      {
        "question": "For int a[]={10,20,30,40}, what is *(a+2)?",
        "options": [
          "30",
          "40",
          "20",
          "10"
        ],
        "answer": 0
      },
      {
        "question": "int x=10; int *p=&x; *p=20; printf(\"%d\",x); outputs?",
        "options": [
          "Address of x",
          "Garbage",
          "10",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "int a=5; int *p=&a; printf(\"%d\",*p+2); outputs?",
        "options": [
          "7",
          "5",
          "Address",
          "10"
        ],
        "answer": 0
      },
      {
        "question": "If x=5, x<<1 equals?",
        "options": [
          "5",
          "20",
          "10",
          "2"
        ],
        "answer": 2
      },
      {
        "question": "If x=8, x>>2 equals?",
        "options": [
          "4",
          "16",
          "1",
          "2"
        ],
        "answer": 3
      },
      {
        "question": "For x=10,y=20, x>y?x:y returns?",
        "options": [
          "10",
          "0",
          "1",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "What does for(i=0;i<5;i++) print?",
        "options": [
          "1 2 3 4",
          "1 2 3 4 5",
          "0 1 2 3 4",
          "0 1 2 3 4 5"
        ],
        "answer": 2
      },
      {
        "question": "With i=1 and break when i==3, while loop prints?",
        "options": [
          "2 3",
          "1 2 3",
          "1 2",
          "1 2 3 4"
        ],
        "answer": 2
      },
      {
        "question": "A loop from 1 to 5 with continue at 3 prints?",
        "options": [
          "1 2 4 5",
          "3 4 5",
          "1 2",
          "1 2 3 4 5"
        ],
        "answer": 0
      },
      {
        "question": "What is sizeof(\"HELLO\")?",
        "options": [
          "5",
          "4",
          "Depends",
          "6"
        ],
        "answer": 3
      },
      {
        "question": "For int a[5]={1,2}, what is a[3]?",
        "options": [
          "Garbage",
          "0",
          "1",
          "2"
        ],
        "answer": 1
      },
      {
        "question": "If **q is used with a double pointer to x=10, **q is?",
        "options": [
          "Pointer",
          "Address",
          "10",
          "Garbage"
        ],
        "answer": 2
      },
      {
        "question": "What happens to a static local variable between function calls?",
        "options": [
          "It is deleted",
          "It becomes global",
          "It retains its value",
          "It is recreated"
        ],
        "answer": 2
      },
      {
        "question": "If x=5 and code is if(x=0), does the condition execute as true?",
        "options": [
          "Always true",
          "Compilation error",
          "Yes",
          "No"
        ],
        "answer": 3
      },
      {
        "question": "What does *(p+1) mean for an int pointer p?",
        "options": [
          "Current value",
          "Value at next integer location",
          "Previous value",
          "Address of p"
        ],
        "answer": 1
      },
      {
        "question": "What is 10/3 using integer operands?",
        "options": [
          "4",
          "3.33",
          "3",
          "0"
        ],
        "answer": 2
      },
      {
        "question": "Which is a function pointer declaration returning int?",
        "options": [
          "(*int p)()",
          "int (*p)()",
          "pointer int p()",
          "int *p()"
        ],
        "answer": 1
      },
      {
        "question": "For a=5,b=10, what is a&b?",
        "options": [
          "15",
          "0",
          "10",
          "5"
        ],
        "answer": 1
      }
    ],
    "hard": [
      {
        "question": "What is the result category of ++x * x++?",
        "options": [
          "25",
          "Implementation-defined",
          "Undefined behavior",
          "Always 25"
        ],
        "answer": 2
      },
      {
        "question": "If p points to a=10, printf(\"%d\",(*p)++); printf(\"%d\",a); prints?",
        "options": [
          "11 10",
          "11 11",
          "10 10",
          "10 11"
        ],
        "answer": 3
      },
      {
        "question": "For int a[]={10,20,30,40}, *(p+3)-*(p+1) is?",
        "options": [
          "10",
          "40",
          "20",
          "30"
        ],
        "answer": 2
      },
      {
        "question": "What does int (*p)[5] declare?",
        "options": [
          "Array of 5 pointers",
          "Pointer to int",
          "Pointer to an array of 5 ints",
          "Function returning array"
        ],
        "answer": 2
      },
      {
        "question": "For nested if with x=10 and conditions x>5 then x>8, which branch is reached?",
        "options": [
          "None",
          "Inner false branch",
          "Outer false branch",
          "Inner true branch"
        ],
        "answer": 3
      },
      {
        "question": "A switch on x=2 with cases B,C,D and no breaks prints?",
        "options": [
          "BCD",
          "A only",
          "Nothing",
          "B only"
        ],
        "answer": 0
      },
      {
        "question": "For x=5, x==5 && x!=10 evaluates to?",
        "options": [
          "10",
          "1",
          "0",
          "5"
        ],
        "answer": 1
      },
      {
        "question": "For x=4, x++ + 2 evaluates to?",
        "options": [
          "5",
          "4",
          "6",
          "7"
        ],
        "answer": 2
      },
      {
        "question": "A recursive function printing before recursive call for n=4 prints?",
        "options": [
          "1 3 4",
          "4 2 1",
          "4 3 2 1",
          "1 2 3 4"
        ],
        "answer": 2
      },
      {
        "question": "A recursive function printing after recursive call for n=4 prints?",
        "options": [
          "1 2 3 4",
          "4 2 3 1",
          "4 3 2 1",
          "2 3 4"
        ],
        "answer": 0
      },
      {
        "question": "5<<2 equals?",
        "options": [
          "10",
          "5",
          "25",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "12&5 equals?",
        "options": [
          "1",
          "8",
          "4",
          "0"
        ],
        "answer": 2
      },
      {
        "question": "Which function pointer takes two ints and returns int?",
        "options": [
          "int (*p)(int,int)",
          "int p*(int,int)",
          "pointer(int,int)",
          "int *p(int,int)"
        ],
        "answer": 0
      },
      {
        "question": "For char str[]=\"ABC\" and p=str, *(p+1) is?",
        "options": [
          "A",
          "Null",
          "C",
          "B"
        ],
        "answer": 3
      },
      {
        "question": "For a 2D array, *(*(a+2)+1) accesses which element?",
        "options": [
          "a[1][1]",
          "a[1][2]",
          "a[2][0]",
          "a[2][1]"
        ],
        "answer": 3
      },
      {
        "question": "What does malloc return?",
        "options": [
          "Only stack memory",
          "Uninitialized dynamically allocated memory",
          "Initialized memory",
          "A file pointer"
        ],
        "answer": 1
      },
      {
        "question": "Which statement compares malloc and calloc correctly?",
        "options": [
          "malloc initializes, calloc does not",
          "Neither allocates memory",
          "calloc initializes to zero, malloc does not",
          "Both initialize to zero"
        ],
        "answer": 2
      },
      {
        "question": "Inner x=20 shadows outer x=10; printing inner then outer gives?",
        "options": [
          "10 20",
          "20 20",
          "10 10",
          "20 10"
        ],
        "answer": 3
      },
      {
        "question": "const int x=10 means x?",
        "options": [
          "Cannot be modified through normal assignment",
          "Is a pointer",
          "Can be assigned freely",
          "Must be global"
        ],
        "answer": 0
      },
      {
        "question": "For a=10,b=20,c=30, what is the result of a>b?a:b>c?b:c?",
        "options": [
          "10",
          "20",
          "30",
          "Compilation error"
        ],
        "answer": 2
      }
    ]
  },
  "Python": {
    "easy": [
      {
        "question": "Who created Python?",
        "options": [
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "Guido van Rossum",
          "James Gosling"
        ],
        "answer": 2
      },
      {
        "question": "Which symbol starts a single-line comment?",
        "options": [
          "#",
          "--",
          "/*",
          "//"
        ],
        "answer": 0
      },
      {
        "question": "Which is a valid variable name?",
        "options": [
          "my-value",
          "class-name",
          "2value",
          "my_value"
        ],
        "answer": 3
      },
      {
        "question": "Which function outputs text?",
        "options": [
          "echo()",
          "print()",
          "display()",
          "write()"
        ],
        "answer": 1
      },
      {
        "question": "Which function gets user input?",
        "options": [
          "read()",
          "get()",
          "input()",
          "scan()"
        ],
        "answer": 2
      },
      {
        "question": "Which value is an integer?",
        "options": [
          "\"25\"",
          "25j",
          "25",
          "25.0"
        ],
        "answer": 2
      },
      {
        "question": "10+5 gives?",
        "options": [
          "15",
          "10",
          "105",
          "20"
        ],
        "answer": 0
      },
      {
        "question": "Which operator performs exponentiation?",
        "options": [
          "^",
          "//",
          "**",
          "%%"
        ],
        "answer": 2
      },
      {
        "question": "10//3 gives?",
        "options": [
          "3.33",
          "4",
          "1",
          "3"
        ],
        "answer": 3
      },
      {
        "question": "Which is immutable?",
        "options": [
          "List",
          "Tuple",
          "Dictionary",
          "Set"
        ],
        "answer": 1
      },
      {
        "question": "Which brackets create a list?",
        "options": [
          "<>",
          "{}",
          "()",
          "[]"
        ],
        "answer": 3
      },
      {
        "question": "Which method adds an item to the end of a list?",
        "options": [
          "push()",
          "append()",
          "add()",
          "insertEnd()"
        ],
        "answer": 1
      },
      {
        "question": "What is the first list index?",
        "options": [
          "1",
          "Depends",
          "-1",
          "0"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword defines a function?",
        "options": [
          "func",
          "def",
          "define",
          "function"
        ],
        "answer": 1
      },
      {
        "question": "Which keyword returns a value?",
        "options": [
          "yieldonly",
          "give",
          "return",
          "send"
        ],
        "answer": 2
      },
      {
        "question": "Which keyword starts a decision?",
        "options": [
          "when",
          "if",
          "case",
          "choose"
        ],
        "answer": 1
      },
      {
        "question": "Which loop commonly iterates over a sequence?",
        "options": [
          "iterate",
          "loop",
          "for",
          "repeat"
        ],
        "answer": 2
      },
      {
        "question": "len(\"Python\") is?",
        "options": [
          "8",
          "7",
          "5",
          "6"
        ],
        "answer": 3
      },
      {
        "question": "Which statement exits a loop?",
        "options": [
          "stop",
          "continue",
          "exitloop",
          "break"
        ],
        "answer": 3
      },
      {
        "question": "Which structure handles exceptions?",
        "options": [
          "switch-case",
          "try-except",
          "if-else",
          "catch-only"
        ],
        "answer": 1
      }
    ],
    "medium": [
      {
        "question": "a=[1,2]; b=a; b.append(3); a is?",
        "options": [
          "Error",
          "[1,2]",
          "[3]",
          "[1,2,3]"
        ],
        "answer": 3
      },
      {
        "question": "2 ** 3 ** 2 equals?",
        "options": [
          "64",
          "36",
          "512",
          "256"
        ],
        "answer": 2
      },
      {
        "question": "For x=[10,20,30,40,50], x[1:4] is?",
        "options": [
          "[20,30,40]",
          "[20,30,40,50]",
          "[10,20,30]",
          "[30,40]"
        ],
        "answer": 0
      },
      {
        "question": "a,b=10,20; a,b=b,a gives?",
        "options": [
          "10 10",
          "20 10",
          "20 20",
          "10 20"
        ],
        "answer": 1
      },
      {
        "question": "[1,2,3]*2 gives?",
        "options": [
          "[1,1,2,2,3,3]",
          "[2,4,6]",
          "Error",
          "[1,2,3,1,2,3]"
        ],
        "answer": 3
      },
      {
        "question": "\"Python\"[::-1] gives?",
        "options": [
          "Error",
          "nohtyP",
          "Python",
          "Pnohty"
        ],
        "answer": 1
      },
      {
        "question": "bool([]), bool([0]) are?",
        "options": [
          "False False",
          "True True",
          "False True",
          "True False"
        ],
        "answer": 2
      },
      {
        "question": "len({1,2,2,3,3}) is?",
        "options": [
          "5",
          "4",
          "3",
          "2"
        ],
        "answer": 2
      },
      {
        "question": "d={\"a\":10}; d.get(\"b\",30) returns?",
        "options": [
          "None",
          "30",
          "10",
          "0"
        ],
        "answer": 1
      },
      {
        "question": "Nested if with x=10 where x>5 and x>8 prints?",
        "options": [
          "A",
          "B",
          "Nothing",
          "C"
        ],
        "answer": 0
      },
      {
        "question": "range(2,10,2) produces?",
        "options": [
          "0 2 4 6 8",
          "2 4 6 8",
          "2 4 6 8 10",
          "1 3 5 7 9"
        ],
        "answer": 1
      },
      {
        "question": "[x*x for x in range(5)] gives?",
        "options": [
          "[0,1,4,9,16]",
          "[1,4,9,16,25]",
          "[0,2,4,6,8]",
          "[0,1,2,3,4]"
        ],
        "answer": 0
      },
      {
        "question": "def f(x=5): return x+10; f() returns?",
        "options": [
          "Error",
          "5",
          "15",
          "10"
        ],
        "answer": 2
      },
      {
        "question": "def fun(x): return x*3; fun(5) returns?",
        "options": [
          "8",
          "20",
          "10",
          "15"
        ],
        "answer": 3
      },
      {
        "question": "try: 10/0 except ZeroDivisionError: print(\"Error\") prints?",
        "options": [
          "Infinity",
          "Error",
          "0",
          "Nothing"
        ],
        "answer": 1
      },
      {
        "question": "t=(1,2,3); t += (4,5) gives?",
        "options": [
          "[1,2,3,4,5]",
          "(1,2,3,4,5)",
          "Error",
          "(1,2,3)"
        ],
        "answer": 1
      },
      {
        "question": "Dictionary keys generally must be?",
        "options": [
          "Lists only",
          "Mutable",
          "Strings only",
          "Hashable"
        ],
        "answer": 3
      },
      {
        "question": "For x=[1,2,3,4], x[-2] is?",
        "options": [
          "1",
          "3",
          "2",
          "4"
        ],
        "answer": 1
      },
      {
        "question": "A child class overriding a parent method demonstrates?",
        "options": [
          "Inheritance only",
          "Encapsulation",
          "Method overriding/polymorphism",
          "Compilation"
        ],
        "answer": 2
      },
      {
        "question": "global x; x=20 changes the global variable to?",
        "options": [
          "Error",
          "0",
          "20",
          "10"
        ],
        "answer": 2
      }
    ],
    "hard": [
      {
        "question": "a=[1,2,3]; b=a.copy(); b.append(4). What is a?",
        "options": [
          "[1,2,3,4]",
          "[1,2,3]",
          "[4]",
          "Error"
        ],
        "answer": 1
      },
      {
        "question": "a=[1,2,3]; b=a; c=a.copy(); b.append(4). What is a?",
        "options": [
          "[4]",
          "Error",
          "[1,2,3,4]",
          "[1,2,3]"
        ],
        "answer": 2
      },
      {
        "question": "Local x=20 and global x=10; print(x) inside function then outside gives?",
        "options": [
          "20 20",
          "10 10",
          "10 20",
          "20 10"
        ],
        "answer": 3
      },
      {
        "question": "global x=5; inside function x += 10 results in global x?",
        "options": [
          "10",
          "5",
          "Error",
          "15"
        ],
        "answer": 3
      },
      {
        "question": "def f(a=[]): a.append(1); print(a); f(); f() outputs?",
        "options": [
          "[1], [1]",
          "[1,1], [1,1]",
          "[1], [1,1]",
          "Error"
        ],
        "answer": 2
      },
      {
        "question": "For x, x is x and x == x are?",
        "options": [
          "True False",
          "False True",
          "False False",
          "True True"
        ],
        "answer": 3
      },
      {
        "question": "a=[1,2]; b=[1,2]; a==b and a is b are?",
        "options": [
          "True True",
          "False True",
          "True False",
          "False False"
        ],
        "answer": 2
      },
      {
        "question": "{x:x*x for x in range(1,4)} gives?",
        "options": [
          "Error",
          "{1:1,2:4,3:9}",
          "{0:0,1:1,2:4}",
          "[1,4,9]"
        ],
        "answer": 1
      },
      {
        "question": "[x for x in range(10) if x%2==0] gives?",
        "options": [
          "[2,4,6,8,10]",
          "[0,2,4,6,8]",
          "[1,3,5,7,9]",
          "[0,1,2,3,4]"
        ],
        "answer": 1
      },
      {
        "question": "[x for x in range(5) if x] gives?",
        "options": [
          "[1,2,3,4]",
          "[]",
          "[0,2,4]",
          "[0,1,2,3,4]"
        ],
        "answer": 0
      },
      {
        "question": "t=(1,2,[3,4]); t[2].append(5) results in?",
        "options": [
          "Error",
          "(1,2,[3,4,5])",
          "(1,2,3,4,5)",
          "(1,2,[3,4])"
        ],
        "answer": 1
      },
      {
        "question": "{1,2,3} & {3,4} gives?",
        "options": [
          "{3}",
          "set()",
          "{1,2}",
          "{4}"
        ],
        "answer": 0
      },
      {
        "question": "t=(1,2); t[0]=9 raises?",
        "options": [
          "ValueError",
          "TypeError",
          "IndexError",
          "NameError"
        ],
        "answer": 1
      },
      {
        "question": "nonlocal x inside nested function can modify the nearest enclosing x to?",
        "options": [
          "A class attribute only",
          "No value",
          "A value in enclosing scope",
          "Only global"
        ],
        "answer": 2
      },
      {
        "question": "finally return overrides try return; try returns 10 and finally returns 20. Result?",
        "options": [
          "None",
          "Error",
          "10",
          "20"
        ],
        "answer": 3
      },
      {
        "question": "class A: x=10; a=A(); b=A(); a.x=20. Then a.x,b.x are?",
        "options": [
          "20 20",
          "10 10",
          "10 20",
          "20 10"
        ],
        "answer": 3
      },
      {
        "question": "super().__init__ sets x=10 then self.x+=5. Result?",
        "options": [
          "10",
          "5",
          "15",
          "Error"
        ],
        "answer": 2
      },
      {
        "question": "For x=[1,2,3,4,5], x[::2] is?",
        "options": [
          "[2,4]",
          "[1,3,5]",
          "[5,3,1]",
          "[1,2,3]"
        ],
        "answer": 1
      },
      {
        "question": "it=iter([10,20,30]); next(it), next(it) returns?",
        "options": [
          "30 20",
          "10 30",
          "20 30",
          "10 20"
        ],
        "answer": 3
      },
      {
        "question": "list(map(lambda x:x*2,[1,2])) gives?",
        "options": [
          "[1,2]",
          "[1,4]",
          "[2,4]",
          "[2,3]"
        ],
        "answer": 2
      }
    ]
  },
  "SQL": {
    "easy": [
      {
        "question": "Which command retrieves data?",
        "options": [
          "SELECT",
          "INSERT",
          "DELETE",
          "UPDATE"
        ],
        "answer": 0
      },
      {
        "question": "Which command creates a table?",
        "options": [
          "MAKE TABLE",
          "BUILD TABLE",
          "CREATE",
          "NEW TABLE"
        ],
        "answer": 2
      },
      {
        "question": "Which clause filters rows?",
        "options": [
          "ORDER BY",
          "WHERE",
          "GROUP BY",
          "HAVING"
        ],
        "answer": 1
      },
      {
        "question": "Which key uniquely identifies a record?",
        "options": [
          "Foreign key",
          "Index only",
          "Primary key",
          "Candidate only"
        ],
        "answer": 2
      },
      {
        "question": "Which command adds a record?",
        "options": [
          "CREATE",
          "INSERT",
          "ADD",
          "APPEND TABLE"
        ],
        "answer": 1
      },
      {
        "question": "Which command modifies existing records?",
        "options": [
          "UPDATE",
          "ALTER",
          "CHANGE",
          "MODIFY ROW"
        ],
        "answer": 0
      },
      {
        "question": "Which command removes records?",
        "options": [
          "DELETE",
          "CLEAR",
          "DROP ROW",
          "REMOVE"
        ],
        "answer": 0
      },
      {
        "question": "Which clause sorts results?",
        "options": [
          "GROUP BY",
          "SORT",
          "ARRANGE",
          "ORDER BY"
        ],
        "answer": 3
      },
      {
        "question": "Which aggregate counts rows?",
        "options": [
          "AVG",
          "TOTAL",
          "SUM",
          "COUNT"
        ],
        "answer": 3
      },
      {
        "question": "Which aggregate finds average?",
        "options": [
          "AVG",
          "MEAN",
          "AVERAGE",
          "MID"
        ],
        "answer": 0
      },
      {
        "question": "Which clause groups rows with same values?",
        "options": [
          "COLLECT BY",
          "HAVING",
          "GROUP",
          "GROUP BY"
        ],
        "answer": 3
      },
      {
        "question": "Which clause filters groups?",
        "options": [
          "FILTER",
          "GROUP WHERE",
          "WHERE",
          "HAVING"
        ],
        "answer": 3
      },
      {
        "question": "Which operator performs pattern matching?",
        "options": [
          "LIKE",
          "MATCH",
          "SIMILAR",
          "PATTERN"
        ],
        "answer": 0
      },
      {
        "question": "Which wildcard represents any sequence in LIKE?",
        "options": [
          "_",
          "*",
          "%",
          "?"
        ],
        "answer": 2
      },
      {
        "question": "Which constraint prevents NULL?",
        "options": [
          "CHECK",
          "NOT NULL",
          "DEFAULT",
          "UNIQUE"
        ],
        "answer": 1
      },
      {
        "question": "Which constraint requires all values to be different?",
        "options": [
          "UNIQUE",
          "CHECK",
          "PRIMARY",
          "DISTINCT"
        ],
        "answer": 0
      },
      {
        "question": "Which command removes a table?",
        "options": [
          "TRUNCATE TABLE",
          "DELETE TABLE",
          "DROP TABLE",
          "REMOVE TABLE"
        ],
        "answer": 2
      },
      {
        "question": "Which join returns matching rows from both tables?",
        "options": [
          "FULL JOIN",
          "RIGHT JOIN",
          "LEFT JOIN",
          "INNER JOIN"
        ],
        "answer": 3
      },
      {
        "question": "Which command changes table structure?",
        "options": [
          "UPDATE",
          "CHANGE ROW",
          "MODIFY DATA",
          "ALTER"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword removes duplicate rows from a result?",
        "options": [
          "UNIQUE",
          "DIFFERENT",
          "ONLY",
          "DISTINCT"
        ],
        "answer": 3
      }
    ],
    "medium": [
      {
        "question": "COUNT(salary) with WHERE salary>50000 returns?",
        "options": [
          "Average salary",
          "Number of matching employees",
          "Highest salary",
          "Total salary"
        ],
        "answer": 1
      },
      {
        "question": "Which clause filters groups after GROUP BY?",
        "options": [
          "ORDER BY",
          "SELECT",
          "HAVING",
          "WHERE"
        ],
        "answer": 2
      },
      {
        "question": "How can you find the second-highest marks using a subquery?",
        "options": [
          "COUNT twice",
          "AVG below MAX",
          "MIN below MIN",
          "MAX below MAX"
        ],
        "answer": 3
      },
      {
        "question": "A primary key is?",
        "options": [
          "Nullable and duplicated",
          "Unique and non-null",
          "Always composite",
          "Only an index"
        ],
        "answer": 1
      },
      {
        "question": "Which query returns departments whose average salary >50000?",
        "options": [
          "ORDER BY AVG(salary)",
          "GROUP BY department HAVING AVG(salary)>50000",
          "WHERE AVG(salary)>50000",
          "SELECT MAX(salary)"
        ],
        "answer": 1
      },
      {
        "question": "Which join returns all rows from the left table and matching rows from the right?",
        "options": [
          "LEFT JOIN",
          "FULL JOIN",
          "RIGHT JOIN",
          "INNER JOIN"
        ],
        "answer": 0
      },
      {
        "question": "Names starting with A use?",
        "options": [
          "LIKE \"_A\"",
          "LIKE \"%A\"",
          "LIKE \"%A%\"",
          "LIKE \"A%\""
        ],
        "answer": 3
      },
      {
        "question": "Which key establishes a relationship between tables?",
        "options": [
          "Primary key only",
          "Index",
          "Foreign key",
          "Unique key only"
        ],
        "answer": 2
      },
      {
        "question": "Departments with more than 5 employees use?",
        "options": [
          "GROUP BY department HAVING COUNT(*)>5",
          "ORDER BY COUNT(*)",
          "WHERE COUNT(*)>5",
          "SELECT COUNT(*)"
        ],
        "answer": 0
      },
      {
        "question": "Which statement is correct?",
        "options": [
          "HAVING sorts rows",
          "WHERE filters rows and HAVING groups",
          "Both only filter rows",
          "WHERE filters groups and HAVING rows"
        ],
        "answer": 1
      },
      {
        "question": "Which normal form removes partial dependency?",
        "options": [
          "3NF",
          "1NF",
          "4NF",
          "2NF"
        ],
        "answer": 3
      },
      {
        "question": "Which normal form removes transitive dependency?",
        "options": [
          "4NF",
          "2NF",
          "1NF",
          "3NF"
        ],
        "answer": 3
      },
      {
        "question": "Which keyword removes duplicates?",
        "options": [
          "DISTINCT",
          "UNIQUE",
          "GROUP",
          "ONLY"
        ],
        "answer": 0
      },
      {
        "question": "COUNT(column) generally?",
        "options": [
          "Returns average",
          "Counts only duplicates",
          "Ignores NULLs",
          "Counts NULLs"
        ],
        "answer": 2
      },
      {
        "question": "Which condition selects salary from 30000 through 50000 inclusive?",
        "options": [
          "RANGE 30000 TO 50000",
          "IN 30000,50000",
          "BETWEEN 30000 AND 50000",
          ">30000 AND <50000"
        ],
        "answer": 2
      },
      {
        "question": "UNION generally?",
        "options": [
          "Keeps all duplicates",
          "Combines compatible results and removes duplicates",
          "Requires same table",
          "Joins columns only"
        ],
        "answer": 1
      },
      {
        "question": "DROP TABLE does what?",
        "options": [
          "Removes duplicates",
          "Deletes rows only",
          "Removes table and its structure",
          "Clears indexes only"
        ],
        "answer": 2
      },
      {
        "question": "salary > ALL(subquery) means salary is?",
        "options": [
          "Equal to all values",
          "Greater than every value returned",
          "Less than every value",
          "Greater than at least one value"
        ],
        "answer": 1
      },
      {
        "question": "TRUNCATE generally?",
        "options": [
          "Changes columns",
          "Removes all rows while retaining table structure",
          "Removes one row",
          "Drops table"
        ],
        "answer": 1
      },
      {
        "question": "To get maximum salary per department after filtering salary>30000, use?",
        "options": [
          "GROUP BY department with MAX after WHERE",
          "DISTINCT salary",
          "ORDER BY salary only",
          "HAVING salary>30000 without GROUP"
        ],
        "answer": 0
      }
    ],
    "hard": [
      {
        "question": "Which query returns departments having more than 2 employees?",
        "options": [
          "WHERE COUNT(*)>2",
          "SELECT COUNT(*)",
          "ORDER BY COUNT(*)",
          "GROUP BY department HAVING COUNT(*)>2"
        ],
        "answer": 3
      },
      {
        "question": "How do you find employees earning above overall average salary?",
        "options": [
          "salary = AVG(salary)",
          "salary > AVG(salary) directly",
          "salary > MAX(salary)",
          "salary > (SELECT AVG(salary) FROM employee)"
        ],
        "answer": 3
      },
      {
        "question": "What does EXISTS check?",
        "options": [
          "Table exists physically",
          "Column is NULL",
          "Subquery returns at least one row",
          "Index exists"
        ],
        "answer": 2
      },
      {
        "question": "salary = NULL evaluates to?",
        "options": [
          "FALSE",
          "0",
          "UNKNOWN",
          "TRUE"
        ],
        "answer": 2
      },
      {
        "question": "Which condition correctly tests NULL?",
        "options": [
          "salary = NULL",
          "salary == NULL",
          "salary EQUAL NULL",
          "salary IS NULL"
        ],
        "answer": 3
      },
      {
        "question": "An INNER JOIN returns rows where?",
        "options": [
          "Join condition matches",
          "All rows",
          "Only left rows",
          "Only right rows"
        ],
        "answer": 0
      },
      {
        "question": "UNION vs UNION ALL?",
        "options": [
          "Both remove duplicates",
          "UNION removes duplicates; UNION ALL retains them",
          "UNION retains duplicates; ALL removes",
          "Neither combines results"
        ],
        "answer": 1
      },
      {
        "question": "Which condition finds salary greater than every HR salary?",
        "options": [
          "= ALL(HR salaries)",
          "IN HR",
          "> ANY(HR salaries)",
          "> ALL(HR salaries)"
        ],
        "answer": 3
      },
      {
        "question": "Which condition finds salary greater than at least one HR salary?",
        "options": [
          "< ALL(HR salaries)",
          "IN HR",
          "> ALL(HR salaries)",
          "> ANY(HR salaries)"
        ],
        "answer": 3
      },
      {
        "question": "Which normal form handles multivalued dependency?",
        "options": [
          "3NF",
          "2NF",
          "4NF",
          "BCNF"
        ],
        "answer": 2
      },
      {
        "question": "Which normal form removes partial dependency?",
        "options": [
          "1NF",
          "3NF",
          "2NF",
          "4NF"
        ],
        "answer": 2
      },
      {
        "question": "Which key enforces referential integrity?",
        "options": [
          "Primary key only",
          "Foreign key",
          "Composite key only",
          "Candidate key"
        ],
        "answer": 1
      },
      {
        "question": "Which clause is logically evaluated first among these?",
        "options": [
          "SELECT",
          "HAVING",
          "FROM",
          "ORDER BY"
        ],
        "answer": 2
      },
      {
        "question": "Which logical query order is correct?",
        "options": [
          "WHERE FROM SELECT GROUP BY HAVING ORDER BY",
          "SELECT FROM WHERE GROUP BY HAVING ORDER BY",
          "FROM WHERE GROUP BY HAVING SELECT ORDER BY",
          "FROM SELECT WHERE HAVING GROUP BY ORDER BY"
        ],
        "answer": 2
      },
      {
        "question": "A LEFT JOIN with no match on right returns?",
        "options": [
          "Left row with NULL right columns",
          "No row",
          "Only right row",
          "Only NULL row"
        ],
        "answer": 0
      },
      {
        "question": "An index can?",
        "options": [
          "Improve retrieval but add storage/write overhead",
          "Prevent NULLs",
          "Eliminate need for tables",
          "Always speed every operation"
        ],
        "answer": 0
      },
      {
        "question": "Which ACID property means all-or-nothing?",
        "options": [
          "Consistency",
          "Atomicity",
          "Durability",
          "Isolation"
        ],
        "answer": 1
      },
      {
        "question": "Which ACID property means committed changes survive failures?",
        "options": [
          "Consistency",
          "Durability",
          "Atomicity",
          "Isolation"
        ],
        "answer": 1
      },
      {
        "question": "Which command permanently saves transaction changes?",
        "options": [
          "SAVE",
          "COMMIT",
          "STORE",
          "APPLY"
        ],
        "answer": 1
      },
      {
        "question": "To show departments ordered by maximum salary descending, use?",
        "options": [
          "SORT MAX DESC without GROUP",
          "HAVING MAX(salary) DESC",
          "ORDER BY salary DESC before GROUP",
          "ORDER BY MAX(salary) DESC"
        ],
        "answer": 3
      }
    ]
  },
  "JavaScript": {
    "easy": [
      {
        "question": "What is JavaScript primarily used for?",
        "options": [
          "Creating hardware drivers",
          "Interactivity and dynamic behavior",
          "Database storage",
          "Styling pages"
        ],
        "answer": 1
      },
      {
        "question": "Which declaration is block-scoped and can be reassigned?",
        "options": [
          "let",
          "const",
          "define",
          "static"
        ],
        "answer": 0
      },
      {
        "question": "Which starts a single-line comment?",
        "options": [
          "#",
          "/*",
          "//",
          "--"
        ],
        "answer": 2
      },
      {
        "question": "How do you print to the browser console?",
        "options": [
          "writeConsole()",
          "console.log()",
          "log.console()",
          "print()"
        ],
        "answer": 1
      },
      {
        "question": "Which is a JavaScript data type?",
        "options": [
          "Byte",
          "Boolean",
          "DecimalOnly",
          "Character"
        ],
        "answer": 1
      },
      {
        "question": "Which operator performs strict equality?",
        "options": [
          "==",
          "=",
          "===",
          "!="
        ],
        "answer": 2
      },
      {
        "question": "Which keyword defines a function?",
        "options": [
          "function",
          "def",
          "func",
          "method"
        ],
        "answer": 0
      },
      {
        "question": "Which method adds to the end of an array?",
        "options": [
          "insert()",
          "add()",
          "append()",
          "push()"
        ],
        "answer": 3
      },
      {
        "question": "Which method removes the last array element?",
        "options": [
          "pop()",
          "shift()",
          "remove()",
          "deleteLast()"
        ],
        "answer": 0
      },
      {
        "question": "typeof \"Hello\" returns?",
        "options": [
          "char",
          "text",
          "string",
          "StringType"
        ],
        "answer": 2
      },
      {
        "question": "Which variable declaration cannot normally be reassigned?",
        "options": [
          "const",
          "var",
          "let",
          "value"
        ],
        "answer": 0
      },
      {
        "question": "Which object represents the HTML document?",
        "options": [
          "domObject",
          "page",
          "document",
          "window.html"
        ],
        "answer": 2
      },
      {
        "question": "Which method selects an element by ID?",
        "options": [
          "findId()",
          "selectId()",
          "getElementById()",
          "queryById()"
        ],
        "answer": 2
      },
      {
        "question": "Which loop is commonly used when iterations are known?",
        "options": [
          "for",
          "whileOnly",
          "forever",
          "repeat-until"
        ],
        "answer": 0
      },
      {
        "question": "An unassigned variable has value?",
        "options": [
          "undefined",
          "null",
          "0",
          "false"
        ],
        "answer": 0
      },
      {
        "question": "Which converts a string to an integer?",
        "options": [
          "int()",
          "toInteger()",
          "parseNumberOnly()",
          "parseInt()"
        ],
        "answer": 3
      },
      {
        "question": "Which converts an object to a JSON string?",
        "options": [
          "stringify.JSON()",
          "JSON.parse()",
          "JSON.object()",
          "JSON.stringify()"
        ],
        "answer": 3
      },
      {
        "question": "Which structure handles a condition?",
        "options": [
          "if...else",
          "when",
          "try...catch only",
          "switchless"
        ],
        "answer": 0
      },
      {
        "question": "Which operator is logical AND?",
        "options": [
          "&&",
          "||",
          "&",
          "!"
        ],
        "answer": 0
      },
      {
        "question": "Which method removes the first array element?",
        "options": [
          "unshift()",
          "pop()",
          "removeFirst()",
          "shift()"
        ],
        "answer": 3
      }
    ],
    "medium": [
      {
        "question": "let x=10; let y=\"10\"; x==y is?",
        "options": [
          "true",
          "error",
          "false",
          "undefined"
        ],
        "answer": 0
      },
      {
        "question": "typeof null is?",
        "options": [
          "null",
          "object",
          "undefined",
          "None"
        ],
        "answer": 1
      },
      {
        "question": "A const variable after initialization?",
        "options": [
          "Becomes global",
          "Must be deleted",
          "Can always be reassigned",
          "Cannot be reassigned"
        ],
        "answer": 3
      },
      {
        "question": "After [1,2,3].push(4), length is?",
        "options": [
          "5",
          "1",
          "3",
          "4"
        ],
        "answer": 3
      },
      {
        "question": "Which array method transforms every element into a new array?",
        "options": [
          "reduce()",
          "filter()",
          "forEachOnly()",
          "map()"
        ],
        "answer": 3
      },
      {
        "question": "2+\"3\"+4 evaluates to?",
        "options": [
          "9",
          "24",
          "234",
          "\"7\""
        ],
        "answer": 2
      },
      {
        "question": "=== means?",
        "options": [
          "Strict equality without implicit conversion",
          "Assignment",
          "Not equal",
          "Loose equality"
        ],
        "answer": 0
      },
      {
        "question": "filter() returns?",
        "options": [
          "A new array containing elements that pass a test",
          "A string",
          "The original array only",
          "One number"
        ],
        "answer": 0
      },
      {
        "question": "let x=5; { let x=10; } outside block x is?",
        "options": [
          "error",
          "10",
          "5",
          "undefined"
        ],
        "answer": 2
      },
      {
        "question": "A function retaining access to its outer variables is a?",
        "options": [
          "Prototype",
          "Closure",
          "Promise",
          "Generator"
        ],
        "answer": 1
      },
      {
        "question": "Boolean(0) is?",
        "options": [
          "false",
          "undefined",
          "0",
          "true"
        ],
        "answer": 0
      },
      {
        "question": "Which removes the first array item?",
        "options": [
          "shift()",
          "slice()",
          "delete()",
          "pop()"
        ],
        "answer": 0
      },
      {
        "question": "Accessing a let variable before declaration in its block causes?",
        "options": [
          "ReferenceError due to TDZ",
          "0",
          "undefined",
          "null"
        ],
        "answer": 0
      },
      {
        "question": "var is primarily?",
        "options": [
          "Block-scoped",
          "Function-scoped",
          "Class-scoped",
          "Module-only"
        ],
        "answer": 1
      },
      {
        "question": "JSON.parse() converts JSON text into?",
        "options": [
          "HTML",
          "CSS",
          "A JSON string",
          "A JavaScript value/object"
        ],
        "answer": 3
      },
      {
        "question": "typeof NaN is?",
        "options": [
          "undefined",
          "object",
          "NaN",
          "number"
        ],
        "answer": 3
      },
      {
        "question": "Which method returns a shallow copied portion of an array?",
        "options": [
          "spliceAll()",
          "slice()",
          "segment()",
          "copy()"
        ],
        "answer": 1
      },
      {
        "question": "Which method attaches an event handler?",
        "options": [
          "listen()",
          "attachClickOnly()",
          "addEventListener()",
          "event()"
        ],
        "answer": 2
      },
      {
        "question": "1+2*3 equals?",
        "options": [
          "7",
          "6",
          "5",
          "9"
        ],
        "answer": 0
      },
      {
        "question": "A Promise represents?",
        "options": [
          "A future asynchronous result",
          "A DOM element",
          "A loop",
          "A CSS rule"
        ],
        "answer": 0
      }
    ],
    "hard": [
      {
        "question": "var a; console.log(a); gives?",
        "options": [
          "undefined",
          "null",
          "ReferenceError",
          "10"
        ],
        "answer": 0
      },
      {
        "question": "let a=10; {let a=20; console.log(a)} console.log(a) gives?",
        "options": [
          "Error",
          "20 10",
          "20 20",
          "10 20"
        ],
        "answer": 1
      },
      {
        "question": "Accessing let before declaration results in?",
        "options": [
          "undefined",
          "0",
          "null",
          "ReferenceError"
        ],
        "answer": 3
      },
      {
        "question": "a=[1,2,3]; b=a; b.push(4); a is?",
        "options": [
          "[1,2,3,4]",
          "[4]",
          "[1,2,3]",
          "Error"
        ],
        "answer": 0
      },
      {
        "question": "A function returning an inner function that uses an outer variable demonstrates?",
        "options": [
          "Casting",
          "Inheritance",
          "Hoisting only",
          "Closure"
        ],
        "answer": 3
      },
      {
        "question": "\"5\"-2 gives?",
        "options": [
          "\"3\"",
          "52",
          "Error",
          "3"
        ],
        "answer": 3
      },
      {
        "question": "\"5\"+2 gives?",
        "options": [
          "\"7\"",
          "3",
          "7",
          "\"52\""
        ],
        "answer": 3
      },
      {
        "question": "Arrow functions use what for this?",
        "options": [
          "Lexical this",
          "Dynamic this",
          "Global only",
          "No this ever"
        ],
        "answer": 0
      },
      {
        "question": "const obj={x:10,show(){return this.x}}; obj.show() returns?",
        "options": [
          "Error",
          "this",
          "undefined",
          "10"
        ],
        "answer": 3
      },
      {
        "question": "Object.freeze(obj) generally?",
        "options": [
          "Copies it deeply",
          "Makes it a string",
          "Deletes properties",
          "Prevents modification of own properties"
        ],
        "answer": 3
      },
      {
        "question": "[] == false is?",
        "options": [
          "false",
          "true",
          "error",
          "undefined"
        ],
        "answer": 1
      },
      {
        "question": "Which API schedules a callback later?",
        "options": [
          "delayNow()",
          "setTimeout()",
          "wait()",
          "later()"
        ],
        "answer": 1
      },
      {
        "question": "Normal console.log then Promise.then usually outputs?",
        "options": [
          "Random always",
          "Normal then Promise",
          "Only Promise",
          "Promise then Normal"
        ],
        "answer": 1
      },
      {
        "question": "The event loop runs queued async callbacks after?",
        "options": [
          "Never",
          "The call stack is available",
          "Only after refresh",
          "Before current code starts"
        ],
        "answer": 1
      },
      {
        "question": "[1,2,3,4].filter(x=>x%2===0) gives?",
        "options": [
          "[1,3]",
          "[1,2,3,4]",
          "[2,4]",
          "[2,3]"
        ],
        "answer": 2
      },
      {
        "question": "reduce() generally produces?",
        "options": [
          "A CSS selector",
          "A Promise only",
          "A single accumulated result",
          "A DOM node"
        ],
        "answer": 2
      },
      {
        "question": "Which syntax copies object properties into a new object?",
        "options": [
          "object.copyOnly()",
          "Copy(obj) only",
          "clone(obj)",
          "Spread syntax {...obj}"
        ],
        "answer": 3
      },
      {
        "question": "Prototype inheritance allows objects to?",
        "options": [
          "Store only strings",
          "Inherit properties/methods",
          "Disable methods",
          "Avoid all objects"
        ],
        "answer": 1
      },
      {
        "question": "After return; console.log(\"x\") in same function, the console.log is?",
        "options": [
          "Converted to undefined output",
          "Unreachable",
          "Executed",
          "Looped"
        ],
        "answer": 1
      },
      {
        "question": "Given synchronous logs A,D and two queued callbacks C,B, typical output order is?",
        "options": [
          "A D C B",
          "A B C D",
          "C B A D",
          "D A B C"
        ],
        "answer": 0
      }
    ]
  }
};

const TOPICS = [
  {
    "key": "HTML",
    "icon": "🌐",
    "description": "Web page structure"
  },
  {
    "key": "CSS",
    "icon": "🎨",
    "description": "Styling & design"
  },
  {
    "key": "JavaScript",
    "icon": "⚡",
    "description": "Web programming"
  },
  {
    "key": "Java",
    "icon": "☕",
    "description": "Object-oriented programming"
  },
  {
    "key": "Python",
    "icon": "🐍",
    "description": "Programming & logic"
  },
  {
    "key": "SQL",
    "icon": "🗄️",
    "description": "Database queries"
  },
  {
    "key": "DSA",
    "icon": "🌳",
    "description": "Data structures & algorithms"
  },
  {
    "key": "C",
    "icon": "©️",
    "description": "C programming"
  },
  {
    "key": "C++",
    "icon": "⚙️",
    "description": "C++ programming"
  }
];
const LEVELS = ["easy", "medium", "hard"];

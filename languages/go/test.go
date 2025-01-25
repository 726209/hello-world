package main // 包声明：main包是程序的入口点

import "fmt" // 引入包：fmt包提供了格式化I/O函数
import "flag"

func main() { // 主函数：程序的执行入口
	/* 这是我的第一个简单的程序 */
	fmt.Println("Hello, World!"  + "Run oob")

  // var x int = 10
  // fmt.Println(x)
  // const Pi float64 = 3.14159265358979323846

  // var fruit = ""
  // var apples = "apples"
  // var oranges = "oranges"
  // fruit = apples + oranges;
  // fmt.Println(fruit)
  // if x > 0 {
  //   // do something
  // } else {
  //   // do something else
  // }
  // 定义命令行参数
  add := flag.Bool("add", false, "add two numbers")
  sub := flag.Bool("sub", false, "subtract two numbers")
  x := flag.Float64("x", 0, "first number")
  y := flag.Float64("y", 0, "second number")
  // 解析命令行参数
  flag.Parse()
  // 根据命令行参数执行相应的操作
  if *add {
    fmt.Printf("Result of addition: %.2f\n", *x+*y)
  } else if *sub {
    fmt.Printf("Result of subtraction: %.2f\n", *x-*y)
    } else {
      fmt.Println("No valid operation provided. Use --add or --sub")
  }
}

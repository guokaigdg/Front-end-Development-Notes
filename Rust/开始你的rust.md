<!--
 * @Author: guokai05
 * @Date: 2021-09-27 14:52:50
 * @LastEditors: guokai05
 * @LastEditTime: 2021-09-27 15:41:11
-->

#  Rust
[官网](https://www.rust-lang.org/learn/get-started)
## 安装
#####  安装程序和版本管理工具
 ```
 // 在macOS、 Linux 或类 unix 操作系统下载 Rustup 并安装 Rust，请在您的终端中运行以下命令，然后按照屏幕上的说明进行操作。
 // 如果使用 Windows，请参阅“其他安装方法”。

 curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
 ```
## 更新
```
rustup update
```

## 版本查看
```
cargo --version
```

## Cargo: rust 建立工具和包管理器

##### 安装 Rustup 的时候，会得到最新的稳定版本的 Rust 构建工具和软件包管理器，称为 Cargo。
Cargo 可以做很多事情:

`cargo build`    建立项目
`cargo run `     运行项目
`cargo test `    测试项目
`cargo doc`      构建文档
`cargo publish ` 项目发布出到crates.io


## 创建一个新项目

##### 用Rust开发环境编写一个小型应用程序。首先，我们将使用 Cargo 为我们制作一个新项目。

```
cargo new hello-rust
```
##### 将生成一个名为 hello-rust 的新目录，其中包含以下文件:
```
hello-rust
|- Cargo.toml  // 清单文件，用于保存项目的元数据以及依赖项
|- src
  |- main.rs  // 编写应用程序代码的地方
```


## 运行你的rust 
##### hello-rust根目录下运行
```
cargo run
```
##### 运行结果
```
Compiling hello-rust v0.1.0 (/Users/guokai/Desktop/GUOKAI/Front-end-Development-Notes/Rust/hello-rust)
Finished dev [unoptimized + debuginfo] target(s) in 1.63s
    Running `target/debug/hello-rust`
Hello, world!
```

## 添加依赖项
> 让我们向应用程序添加一个依赖项。您可以在 crates.io 上找到各种类型的库，这是 Rust 的包注册表。在rust中，我们经常把包装称为“crates”
#####  在你的项目中添加 ferris-says。
hello-rust/Cargo.toml 文件中添加
```
[dependencies]
ferris-says = "0.2"
```
##### 接下来可以安装依赖
- 创建了一个新文件 Cargo.lock。此文件是本地使用的依赖项的确切版本的日志。
```
cargo build
```
- 安装完成
```
    Updating crates.io index
warning: spurious network error (2 tries remaining): error sending data: Broken pipe; class=Net (12)
  Downloaded ferris-says v0.2.1
  Downloaded smawk v0.3.1
  Downloaded unicode-width v0.1.9
  Downloaded smallvec v0.4.5
  Downloaded textwrap v0.13.4
  Downloaded 5 crates (97.7 KB) in 3.52s
   Compiling unicode-width v0.1.9
   Compiling smawk v0.3.1
   Compiling smallvec v0.4.5
   Compiling textwrap v0.13.4
   Compiling ferris-says v0.2.1
   Compiling hello-rust v0.1.0 (/Users/guokai/Desktop/GUOKAI/Front-end-Development-Notes/Rust/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 3m 10s
```

## 使用依赖
- 要使用这个依赖项，我们可以打开 main.rs，删除其中的所有内容，然后添加以下行:
```
use ferris_says::say;
```
以上代码意思是 使用say函数


## 创建一个小的Rust程序
- main.rs 增加以下代码
```
use ferris_says::say; // from the previous step
use std::io::{stdout, BufWriter};

fn main() {
    let stdout = stdout();
    let message = String::from("Hello fellow Rustaceans!");
    let width = message.chars().count();

    let mut writer = BufWriter::new(stdout.lock());
    say(message.as_bytes(), width, &mut writer).unwrap();
}
```
#### 保存并且运行
```
cargo run 
```

#### 运行成功结果

假设一切进展顺利，屏幕上打印如下内容:
```
    Finished dev [unoptimized + debuginfo] target(s) in 0.02s
     Running `target/debug/hello-rust`
 __________________________
< Hello fellow Rustaceans! >
 --------------------------
        \
         \
            _~^~^~_
        \) /  o o  \ (/
          '_   -   _'
          / '-----' \
```

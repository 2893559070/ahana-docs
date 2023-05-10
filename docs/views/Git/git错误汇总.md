# git错误汇总

## Git提交时出现Merge branch 'master' of ...
1. 如果远程分支超前于本地分支，并且本地也没有commit操作，此时pull会采用’fast-forward’模式，该模式不会产生合并节点，也即不产生"Merge branch ‘master’ of …"信息。
2. 如果本地有commit提交，此时若存在冲突，pull拉取代码时远程和本地会出现分叉，会进行分支合并，就会产生"Merge branch ‘master’ of …"信息。
- 解决方法
```git
    git config --global pull.rebase true
```
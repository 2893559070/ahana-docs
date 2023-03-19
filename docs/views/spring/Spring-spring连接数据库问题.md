# spring连接数据库问题

## Data truncation: Data too long for column 'xxx' at row 1

错误的原因就是 'xxx' 字段设置的长度太小了，或者说你给这个字段赋值的内容太长了。在数据库中把把段的长度或类型改一下；



## create connection holder errorjava.sql.SQLException: Unknown system variable ‘tx_isolation‘

Druid版本问题 切换成 Druid1.1.16



## Unknown system variable 'tx_read_only'

Unknown system variable 'tx_read_only'出现了问题是驱动版本的问题。mysql版本和驱动版本不匹配，使用驱动mysql-connector-java-5.0.8-bin.jar版本，就会避免这种异常出现。使用mysql-connector-java-5.1.38-bin.jar版本时，会出现上述异常与警告。

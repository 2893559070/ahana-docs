# Mybatis

## xml
### 一对一查询
```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE mapper
            PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
            "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

    <!-- 一对一 -->
    <mapper namespace="com.my.mapper.oneMapper">
        <resultMap id="OneFindAll" type="card">
            <id column="cid" property="id" />
            <result column="number" property="number"/>

            <!--被包含项-->
            <association property="person" javaType="Person">
                <id column="pid" property="id"/>
                <result column="name" property="name"/>
                <result column="age" property="age"/>
            </association>
        </resultMap>

        <select id="OneFindAll" resultMap="OneFindAll">
            select c.id cid, p.id pid, c.number, p.name, p.age from card c, person p where c.id = p.id
        </select>

        <select id="findByid" resultType="com.my.bean.Card">
            select * from person where
            <foreach collection="list" open="id in(" close=")" item="id" index="i" separator=",">
                #{id}
            </foreach>
        </select>
    </mapper>
```
### 一对多查询
```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE mapper
            PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
            "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

    <mapper namespace="com.my.mapper.oneDuoMapper">
        <resultMap id="one" type="com.my.bean.Classes">
            <id column="cid" property="id" />
            <result column="cname" property="name"/>

            <collection property="students" ofType="com.my.bean.Student">
                <id column="sid" property="id"/>
                <result column="sname" property="name"/>
                <result column="sage" property="age"/>
            </collection>
        </resultMap>

        <select id="selectAll" resultMap="one">
            SELECT c.id cid,c.name cname,s.id sid,s.name sname,s.age sage FROM classes c,student s WHERE c.id=s.cid
        </select>
    </mapper>
```

### 多对多查询
```xml
    <?xml version="1.0" encoding="UTF-8" ?>
    <!DOCTYPE mapper
            PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
            "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

    <mapper namespace="com.my.mapper.DuoMapper">
        <resultMap id="one" type="com.my.bean.Student">
            <id column="sid" property="id" />
            <result column="sname" property="name"/>
            <result column="sage" property="age"/>

            <collection property="course" ofType="com.my.bean.Course">
                <id column="cid" property="id"/>
                <result column="cname" property="name"/>
            </collection>
        </resultMap>

        <select id="selectAll" resultMap="one">
            SELECT sc.sid,s.name sname,s.age sage,sc.cid,c.name cname FROM students s,course c,stu_cr sc WHERE sc.sid=s.id AND sc.cid=c.id
        </select>
    </mapper>
```

## 注解版
### 一对一查询
```java
    package com.my.mapper;

    import com.my.bean.one_to_one.Card;
    import com.my.bean.one_to_one.Person;
    import org.apache.ibatis.annotations.One;
    import org.apache.ibatis.annotations.Result;
    import org.apache.ibatis.annotations.Results;
    import org.apache.ibatis.annotations.Select;

    import java.util.List;

    public interface one_to_one_mapper {
        @Select("select * from card")
        @Results({
                @Result(column = "id", property = "id"),
                @Result(column = "number", property = "number"),
                @Result(
                        property = "person", // 变量名 及 数据库名
                        javaType = Person.class, // 被包含对象的实际类型属性
                        column = "pid", // 根据 card pid 查询 person 的id
                        /**
                        *  One 是 一对一的固定写法
                        *  select 指定调用哪个接口中的哪个方法
                        * */
                        one = @One(select = "com.my.mapper.one_to_one_mapper.selectPersonById")
                )
        })
        List<Card> selectAll();

        // person 根据id表查询
        @Select("select * from person where id=#{id}")
        Person selectPersonById(Integer id);
    }
```
### 一对多查询
```java
    package com.my.mapper;

    import com.my.bean.Student;
    import com.my.bean.one_to_many.Classes;
    import com.my.bean.one_to_many.Students;
    import com.my.bean.one_to_one.Card;
    import org.apache.ibatis.annotations.*;

    import java.util.List;

    public interface one_to_many {
        @Select("select * from classes")
        @Results({
                @Result(column = "id", property = "id"),
                @Result(column = "name", property = "name"),
                @Result(
                        property = "students",
                        javaType = List.class,
                        column = "id",
                        /**
                        *  many、@Many 一对多查询的固定写法
                        *  select 指定调用哪个接口中的哪个方法
                        * */
                        many = @Many(
                                select = "com.my.mapper.one_to_many.selectStudentById"
                        )
                ),
        })
        List<Classes> selectAll();

        // Student 根据cid表查询 学生表
        @Select("select * from students where cid=#{id}")
        List<Students> selectStudentById(Integer cid);
    }
```
### 多对多查询
```java
    package com.my.mapper;

    import com.my.bean.one_to_many.Course;
    import com.my.bean.one_to_many.Students;
    import org.apache.ibatis.annotations.Many;
    import org.apache.ibatis.annotations.Result;
    import org.apache.ibatis.annotations.Results;
    import org.apache.ibatis.annotations.Select;

    import java.util.List;

    public interface many_to_many {
        @Select("select distinct s.id, s.name, s.age, s.cid from students s")
        @Results(value = {
                @Result(
                        column = "id",
                        property = "id"
                ),
                @Result(
                        column = "name",
                        property = "name"
                ),
                @Result(
                        property = "course",
                        javaType = List.class,
                        column = "id",
                        many = @Many(
                                select = "com.my.mapper.many_to_many.selectById"
                        )
                )
        })
        List<Students> selectAll();

        /**
        * 多对多 中间表进行关联 中间表不参与类显示
        * */
        @Select("select * from stu_cr sc, course c where sc.cid=c.id and sc.sid=#{id} ")
        List<Course> selectById(Integer id);
    }
```
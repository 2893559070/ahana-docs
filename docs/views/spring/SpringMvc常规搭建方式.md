# 常规搭建方式

## 常规搭建方式
### 文件层级
```bash
    - src
        - main
            - java
                - com.mvc
                    - controller
                        - grops
                            - Grops
                        - AjaxController
                        - CheckController
                        - FestController
                        - FileUploadController
                        - InterceptorController
                        - RequestController
                        - ResponsesController
                        - ServletController
                    - domain
                        - Address
                        - AjaxUser
                        - Book
                        - Checkyee
                        - User
                    - exception
                        - BusinessException
                        - ExceptionAdvice
                        - ExceptionResolver
                        - projectExceptionAdvice
                        - SystemException
                    - service
                        - impl
                            - UserServiceImpl
                        - UserService
                    - interceptor
                        - MyInterceptor
                        - MyInterceptor2
                        - MyInterceptor3
                    - web
                        - UserServlet
            - resources
                - spring-mvc.xml
            - webapp
                - img
                - WEB-INF
                    - lib (插件 暂不清楚 为啥会在到这)
                    - page
                        - check.jsp
                        - checkSuccess.jsp
                        - error.jsp
                        - page.jsp
                        - upload.jsp
                    - web.xml
                - index.jsp
                - require.jsp
                - springmvc.jsp
                - success.jsp
        - test
    - pom.xml
```
- src
    - main
        - java
            - com.mvc
                - controller
                    - grops
                        - Grops
                            ```java
                                package com.mvc.controller.grops;

                                // 空接口 校验分组使用
                                public interface Grops {
                                }
                            ```
                    - AjaxController
                        ```java
                            package com.mvc.controller;

                            import com.mvc.domain.AjaxUser;
                            import com.mvc.exception.BusinessException;
                            import org.springframework.stereotype.Controller;
                            import org.springframework.web.bind.annotation.RequestBody;
                            import org.springframework.web.bind.annotation.RequestMapping;
                            import org.springframework.web.bind.annotation.ResponseBody;

                            import java.util.ArrayList;
                            import java.util.List;

                            @Controller
                            public class AjaxController {

                                /**
                                * 异步请求
                                * */
                                // post 请求 data: "ajax message",
                                @RequestMapping("/ajaxController")
                                public String ajaxController(@RequestBody String message) {
                                    System.out.println("ajaxController " + message);
                                    return "index";
                                }

                                // post 请求 data: '{"name": "Jock", "age": 22}',
                                @RequestMapping("/ajaxPojoToController")
                                public String ajaxPojoToController(@RequestBody AjaxUser user) {
                                    System.out.println("ajaxPojoToController " + user);

                                    System.out.println(user.getName().length());
                                    if(user.getName().length() < 10) {
                                        throw new BusinessException("名字长度最低为10 !");
                                    }else if(user.getAge() > 100 || user.getAge() < 0) {
                                        throw new BusinessException("年龄范围 1 - 100之间 !");
                                    }

                                    return "index";
                                }

                                // post 请求 data: '[{"name": "Jock", "age": 22}, {"name": "Jock", "age": 22}]',
                                @RequestMapping("/ajaxLIstToController")
                                public String ajaxLIstToController(@RequestBody List<AjaxUser> userList) {
                                    System.out.println("ajaxLIstToController " + userList);
                                    return "index";
                                }

                                /**
                                * 异步请求 返回响应数据
                                * */
                                @RequestMapping("/ajaxReturnString")
                                @ResponseBody
                                public String ajaxReturnString() {
                                    System.out.println("ajaxReturnString");
                                    return "index";
                                }

                                @RequestMapping("/ajaxReturnJson")
                                @ResponseBody
                                public AjaxUser ajaxReturnJson() {
                                    System.out.println("ajaxReturnJson");

                                    AjaxUser user = new AjaxUser();
                                    user.setName("张三");
                                    user.setAge(22);

                                    return user;
                                }

                                @RequestMapping("/ajaxReturnJsonList")
                                @ResponseBody
                                public List ajaxReturnJsonList() {
                                    System.out.println("ajaxReturnJsonList");

                                    AjaxUser user1 = new AjaxUser();
                                    user1.setName("张三");
                                    user1.setAge(22);

                                    AjaxUser user2 = new AjaxUser();
                                    user2.setName("李四");
                                    user2.setAge(21);

                                    ArrayList<AjaxUser> list = new ArrayList<AjaxUser>();
                                    list.add(user1);
                                    list.add(user2);

                                    return list;
                                }

                                @RequestMapping("/cross")
                                public void cross() {
                                    System.out.println("cross");
                                }
                            }
                        ```
                    - CheckController
                        ```java
                            package com.mvc.controller;

                            import com.mvc.controller.grops.Grops;
                            import com.mvc.domain.Checkyee;
                            import org.springframework.stereotype.Controller;
                            import org.springframework.ui.Model;
                            import org.springframework.validation.Errors;
                            import org.springframework.validation.FieldError;
                            import org.springframework.validation.annotation.Validated;
                            import org.springframework.web.bind.annotation.RequestMapping;

                            import javax.validation.Valid;
                            import java.util.List;

                            @Controller
                            public class CheckController {

                                @RequestMapping(value = "/toCheck")
                                public String toCheck() {
                                        return "check";
                                }

                                // 分组校验
                                @RequestMapping(value = "/check1")
                                public String addCheck1(@Validated({Grops.class}) Checkyee checkyee, Errors errors, Model m) {
                                    if(errors.hasErrors()) {
                                        List<FieldError> fieldErrors = errors.getFieldErrors();
                                        for(FieldError f : fieldErrors) {
                                            System.out.println(f.getField());
                                            System.out.println(f.getDefaultMessage());
                                            m.addAttribute(f.getField(), f.getDefaultMessage());
                                        }
                                        return "check";
                                    }
                                    checkyee.setName(null);
                                    checkyee.setAge(null);
                                    return "checkSuccess";
                                }

                                @RequestMapping(value = "/check2")
                                public String addCheck2(@Valid Checkyee checkyee, Errors errors, Model m) {
                                    if(errors.hasErrors()) {
                                        List<FieldError> fieldErrors = errors.getFieldErrors();
                                        for(FieldError f : fieldErrors) {
                                            System.out.println(f.getField());
                                            System.out.println(f.getDefaultMessage());
                                            m.addAttribute(f.getField(), f.getDefaultMessage());
                                        }
                                        return "check";
                                    }
                                    checkyee.setName(null);
                                    checkyee.setAge(null);
                                    return "checkSuccess";
                                }
                            }
                        ```
                    - FestController
                        ```java
                            import org.springframework.web.bind.annotation.PathVariable;
                            import org.springframework.web.bind.annotation.RequestMapping;
                            import org.springframework.web.bind.annotation.RequestMethod;
                            import org.springframework.web.bind.annotation.RestController;

                            @RestController
                            @RequestMapping("/user/")
                            public class FestController {

                                @RequestMapping(value = "to/{id}", method = RequestMethod.GET)
                                public String userGet(@PathVariable Integer id) {
                                    System.out.println("userGet id: " + id);
                                    return "success.jsp";
                                }

                                @RequestMapping(value = "{id}", method = RequestMethod.POST)
                                public String userPost(@PathVariable Integer id) {
                                    System.out.println("userPost id: " + id);
                                    return "success.jsp";
                                }

                                @RequestMapping(value = "{id}", method = RequestMethod.PUT)
                                public String userPut(@PathVariable Integer id) {
                                    System.out.println("userPut id: " + id);
                                    return "success.jsp";
                                }
                            }
                        ```
                    - FileUploadController
                        ```java
                            package com.mvc.controller;

                            import org.omg.IOP.ServiceContext;
                            import org.springframework.stereotype.Controller;
                            import org.springframework.web.bind.annotation.RequestMapping;
                            import org.springframework.web.multipart.MultipartFile;

                            import javax.servlet.http.HttpServletRequest;
                            import java.io.File;
                            import java.io.IOException;

                            @Controller
                            public class FileUploadController {

                                /**
                                * 文件上传下载
                                *
                                * */

                                @RequestMapping(value = "/toUpload")
                                public String toUpload() {
                                    System.out.println("进入 upload 页面...");
                                    return "upload";
                                }

                                // 上传
                                @RequestMapping(value = "/fileUpload")
                                public String fileUpload(MultipartFile file, HttpServletRequest request) throws IOException {
                                    System.out.println("fileUpload running ..." + file);
                                    // 判断非空
                                    if(!file.isEmpty()) {
                                        // 获取文件名
                                        String filName = file.getOriginalFilename();

                                        // 设置保存的路径 (原理从当前文件夹下找img文件夹 可通过 ide Project Structure - Artifacts - Output directory) 设置
                                        String path = request.getServletContext().getRealPath("img");
                                        System.out.println(path);
                                        file.transferTo(new File(path, filName));
                                    }
                                    return "page";
                                }

                                // 下载 （暂时不做）
                            }
                        ```
                    - InterceptorController
                        ```java
                            package com.mvc.controller;

                            import org.springframework.stereotype.Controller;
                            import org.springframework.web.bind.annotation.RequestMapping;

                            @Controller
                            public class InterceptorController {
                                /**
                                * 过滤器
                                * */

                                @RequestMapping("/handleRun")
                                public String handleRun() {
                                    System.out.println("业务处理器正在运行");
                                    return "page";
                                }
                            }
                        ```
                    - RequestController
                        ```java
                            package com.mvc.controller;

                            import com.mvc.domain.User;
                            import org.springframework.format.annotation.DateTimeFormat;
                            import org.springframework.stereotype.Controller;
                            import org.springframework.web.bind.annotation.RequestMapping;
                            import org.springframework.web.bind.annotation.RequestParam;

                            import java.util.Date;
                            import java.util.List;

                            @Controller
                            //@RequestMapping("/user")
                            public class RequestController {

                                /**
                                *  请求 request
                                *
                                * 参数传递类型
                                * 普通
                                * POJO引用
                                * 数组
                                * 集合
                                *
                                * 类型转换
                                * */

                                /**
                                * 普通 规定参数 传参方式
                                * @RequestParam 注解区分参数
                                */
                                @RequestMapping("/save1")
                                public String save1(@RequestParam(value = "userName", required = true) String name) {
                                    System.out.println("save1 ... " + name);
                                    return "success.jsp";
                                }

                                /**
                                * POJO引用
                                *
                                * 使用 @RequestParam 注解区分参数 将实例类与外部形参相同的进行区分
                                * */
                                @RequestMapping("/save2")
                                public String save2(User user) {
                                    System.out.println("save2 ... " + user);
                                    return "success.jsp";
                                }

                                /**
                                * 数组
                                *
                                * 使用 @RequestParam 注解区分参数 将实例类与外部形参相同的进行区分
                                * */

                                /** 1.
                                * save3_1?nick=zhangsan&nick=lisi
                                * zhangsan lisi
                                * */
                                @RequestMapping("/save3_1")
                                public String save3_1(String[] nick) {
                                    System.out.println("save3_1 ... ");
                                    for(String i : nick) {
                                        System.out.print(i);
                                    }
                                    return "success.jsp";
                                }
                                /** 2.
                                * save3_2?nick=zhangsan&nick=lisi
                                * zhangsan lisi
                                * */
                                @RequestMapping("/save3_2")
                                public String save3_2(@RequestParam("nick") List<String> nick) {
                                    System.out.println("save3_2 ... ");
                                    for(String i : nick) {
                                        System.out.print(i + " ");
                                    }
                                    return "success.jsp";
                                }

                                /** 类型转换
                                *  在 mvc 配置中设置 格式转换器 定义类型规则 或者 注解定义（推荐）
                                * */
                                @RequestMapping("/save4")
                                public String save4(@DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
                                    System.out.println("save4 ... " + date);
                                    return "success.jsp";
                                }
                            }
                        ```
                    - ResponsesController
                        ```java
                            package com.mvc.controller;

                            import com.fasterxml.jackson.core.JsonProcessingException;
                            import com.fasterxml.jackson.databind.ObjectMapper;
                            import com.mvc.domain.Book;
                            import org.springframework.stereotype.Controller;
                            import org.springframework.ui.Model;
                            import org.springframework.web.bind.annotation.CrossOrigin;
                            import org.springframework.web.bind.annotation.RequestMapping;
                            import org.springframework.web.bind.annotation.ResponseBody;
                            import org.springframework.web.servlet.ModelAndView;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;
                            import java.io.IOException;
                            import java.util.ArrayList;
                            import java.util.List;

                            @Controller
                            //@RequestMapping("/response")
                            public class ResponsesController {
                                /**
                                *  响应 response
                                * */

                                /**
                                * 无参
                                * */
                                @RequestMapping("/showPage1")
                                public String showPage1() {
                                    System.out.println("response showPage1 running ...");
                                    return "/WEB-INF/page/page.jsp";
                                }

                                // 转发到一个请求方法，可以跟参数
                                @RequestMapping("/showPage2")
                                public String showPage2() {
                                    System.out.println("response showPage2 running ...");
                                    return "forward:/WEB-INF/page/page.jsp";
                                }

                                // 重定向到一个请求方法，可以跟参数 WEB-INF下使用不了redirect
                                @RequestMapping("/showPage3")
                                public String showPage3() {
                                    System.out.println("response showPage3 running ...");
                                    return "redirect:/WEB-INF/page/page.jsp";
                                }

                                // ResourceViewResolver视图解析器 （ 推荐 ）
                                @RequestMapping("/showPage4")
                                public String showPage4() {
                                    System.out.println("response showPage4 running ...");
                                    return "page";
                                }

                                // 无参跳转 简略写法 （ 了解 ）
                                @RequestMapping("/page")
                                public void showPage5() {
                                    System.out.println("response showPage5 running ...");
                                }

                                /**
                                * 带参
                                * */
                                // 使用 setAttribute
                                @RequestMapping("/pageParams1")
                                public String paramsPage1(HttpServletRequest request) {
                                    request.setAttribute("name", "zhangSan");
                                    return "page";
                                }

                                // 使用 Model
                                @RequestMapping("/pageParams2")
                                public String paramsPage2(Model model) {
                                    model.addAttribute("name", "zhangSan");

                                    Book book = new Book();
                                    book.setName("Spring入门案例");
                                    book.setPrice(66.66d);
                                    model.addAttribute("book", book);
                                    return "page";
                                }

                                // 使用 ModelAndView
                                @RequestMapping("/pageParams3")
                                public ModelAndView paramsPage3(ModelAndView modelAndView) {
                            //        ModelAndView mav = new ModelAndView(); 可以替换形参的参数
                                    modelAndView.addObject("name", "Jockme");

                                    Book book = new Book();
                                    book.setName("Spring入门案例");
                                    book.setPrice(66.66d);
                                    modelAndView.addObject("book", book);

                                    // 相当于 return "page";
                                    modelAndView.setViewName("page");

                                    return modelAndView;
                                }

                                /**
                                * 返回数据
                                * */
                                // HttpServletResponse 尽量断开与HttpServletResponse的联系
                                @RequestMapping("/showData1")
                                public void showData1(HttpServletResponse response) throws IOException {
                                    response.getWriter().write("message1");
                                }

                                // ResponseBody 形式返回数据
                                @RequestMapping("/showData2")
                                @ResponseBody
                                public String showData2() {
                                    return "message2";
                                }

                                // 转json形式返回数据 1
                                @RequestMapping("/showData3")
                                @ResponseBody
                                public String showData3() throws JsonProcessingException {
                                    Book book = new Book();
                                    book.setName("Spring入门案例");
                                    book.setPrice(66.66d);

                                    ObjectMapper om = new ObjectMapper();
                                    String s = om.writeValueAsString(book);
                                    return s;
                                }

                                // 转json形式返回数据 2  <mvc:annotation-driven/> 可以自动转换成json对象 （推荐）
                                @RequestMapping("/showData4")
                                @ResponseBody
                                public Book showData4() {
                                    Book book = new Book();
                                    book.setName("Spring入门案例");
                                    book.setPrice(66.66d);
                                    return book;
                                }

                                // 返回集合的json数据
                                @RequestMapping("/showData5")
                                @ResponseBody
                                // 支持跨域访问
                                @CrossOrigin
                                public List showData5() {
                                    Book book1 = new Book();
                                    book1.setName("Spring入门案例");
                                    book1.setPrice(66.66d);

                                    Book book2 = new Book();
                                    book2.setName("Spring入门案例");
                                    book2.setPrice(66.66d);

                                    ArrayList<Book> al =new ArrayList<Book>();
                                    al.add(book1);
                                    al.add(book2);

                                    return al;
                                }
                            }
                        ```
                    - ServletController
                        ```java
                            package com.mvc.controller;

                            import org.springframework.stereotype.Controller;
                            import org.springframework.ui.Model;
                            import org.springframework.web.bind.annotation.*;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;
                            import javax.servlet.http.HttpSession;

                            @Controller

                            // 设置可存放的session
                            @SessionAttributes(names = {"age", "gender"})
                            public class ServletController {
                                /**
                                * Servlet 相关 (了解)
                                * */

                                //
                                @RequestMapping("/servletApi")
                                public String servletApi(HttpServletRequest request, HttpServletResponse response, HttpSession session) {
                                    System.out.println(request);
                                    System.out.println(response);
                                    System.out.println(session);
                                    return "page";
                                }

                                // 请求标头 @RequestHeader
                                @RequestMapping("/headApi")
                                public String headApi(@RequestHeader("Accept") String accept) {
                                    System.out.println(accept);
                                    return "page";
                                }

                                // Cookie @CookieValue
                                @RequestMapping("/cookieApi")
                                public String cookieApi(@CookieValue("Idea-8296e76f") String jsessionid) {
                                    System.out.println(jsessionid);
                                    return "page";
                                }

                                // session 存 session
                                @RequestMapping("/setSessionData")
                                public String setSessionData(HttpSession session) {
                                    session.setAttribute("name", "zhangsan");
                                    return "page";
                                }

                                // session 取 session
                                @RequestMapping("/sessionApi")
                                public String sessionApi(
                                        @SessionAttribute("name") String name,
                                        @SessionAttribute("age") int age,
                                        @SessionAttribute("gender") String gender
                                ) {
                                    System.out.println(name);

                                    // 取 setSessionData2 设置的session值
                                    System.out.println(age);
                                    System.out.println(gender);
                                    return "page";
                                }

                                // session 存 session 配合上面使用 @SessionAttributes(names = {"age", "gender"})
                                @RequestMapping("/setSessionData2")
                                public String setSessionData2(Model model) {
                                    model.addAttribute("age", 39);
                                    model.addAttribute("gender", "男");
                                    return "page";
                                }
                            }
                        ```
                - domain
                    - Address
                        ```java
                            package com.mvc.domain;

                            import javax.validation.constraints.NotBlank;

                            public class Address {
                                @NotBlank(message = "请输入省份")
                                private String province;
                                @NotBlank(message = "请输入城市")
                                private String city;
                                @NotBlank(message = "请输入详细地址")
                                private String address;

                                public String getProvince() {
                                    return province;
                                }

                                public void setProvince(String province) {
                                    this.province = province;
                                }

                                public String getCity() {
                                    return city;
                                }

                                public void setCity(String city) {
                                    this.city = city;
                                }

                                public String getAddress() {
                                    return address;
                                }

                                public void setAddress(String address) {
                                    this.address = address;
                                }

                                @Override
                                public String toString() {
                                    return "Address{" +
                                            "province='" + province + '\'' +
                                            ", city='" + city + '\'' +
                                            ", address='" + address + '\'' +
                                            '}';
                                }
                            }
                        ```
                    - AjaxUser
                        ```java
                            package com.mvc.domain;

                            public class AjaxUser {
                                private String name;
                                private int age;

                                public String getName() {
                                    return name;
                                }

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public int getAge() {
                                    return age;
                                }

                                public void setAge(int age) {
                                    this.age = age;
                                }

                                @Override
                                public String toString() {
                                    return "AjaxUser{" +
                                            "name='" + name + '\'' +
                                            ", age=" + age +
                                            '}';
                                }
                            }
                        ```
                    - Book
                        ```java
                            package com.mvc.domain;

                            public class Book {
                                private String name;
                                private Double price;

                                public String getName() {
                                    return name;
                                }

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public Double getPrice() {
                                    return price;
                                }

                                public void setPrice(Double price) {
                                    this.price = price;
                                }

                                @Override
                                public String toString() {
                                    return "Book{" +
                                            "name='" + name + '\'' +
                                            ", price=" + price +
                                            '}';
                                }
                            }
                        ```
                    - Checkyee
                        ```java
                            package com.mvc.domain;

                            import com.mvc.controller.grops.Grops;

                            import javax.validation.Valid;
                            import javax.validation.constraints.Max;
                            import javax.validation.constraints.Min;
                            import javax.validation.constraints.NotBlank;
                            import javax.validation.constraints.NotNull;

                            public class Checkyee {

                                /**
                                * 表单验证
                                * */
                                @NotBlank(message = "姓名不能为空", groups = {Grops.class})
                                private String name;
                                @NotNull(message = "年龄不能为空", groups = {Grops.class})
                                @Max(value = 60, message = "最大年龄为60岁")
                                @Min(value = 18, message = "最小年龄为18岁")
                                private Integer age;
                                @Valid
                                private Address address;

                                public String getName() {
                                    return name;
                                }

                                public Address getAddress() {
                                    return address;
                                }

                                public void setAddress(Address address) {
                                    this.address = address;
                                }

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public Integer getAge() {
                                    return age;
                                }

                                public void setAge(Integer age) {
                                    this.age = age;
                                }

                                @Override
                                public String toString() {
                                    return "Checkyee{" +
                                            "name='" + name + '\'' +
                                            ", age=" + age +
                                            ", address=" + address +
                                            '}';
                                }
                            }
                        ```
                    - User
                        ```java
                            package com.mvc.domain;

                            import java.util.List;
                            import java.util.Map;

                            public class User {
                                private String name;
                                private Integer age;

                                /**
                                * save2?address.city=beijing&address.address=tianqiao
                                *
                                * User{name='null', age=null,
                                * address=Address{province='null', city='beijing', address='tianqiao'},
                                * nick=null, addresses=null}
                                * */
                                private Address address;

                                /**
                                * save2?nick=1&nick=2
                                *
                                * User{name='null', age=null, address=null, nick=[1, 2]}
                                * */
                                private List<String> nick;

                                /** 数组
                                * save2?addresses[0].city=beijing&addresses[1].city=hebei
                                *
                                * User{name='null', age=null, address=null, nick=null,
                                * addresses=[
                                * Address{province='null', city='beijing', address='null'},
                                * Address{province='null', city='hebei', address='null'}
                                * ]}
                                * */
                                private List<Address> addresses;

                                /** 集合
                                * save2?addressMap["job"].city=shanghai&addressMap["home"].city=nanjing
                                *
                                * User{name='null', age=null, address=null, nick=null, addresses=null,
                                * addressMap={
                                * home=Address{province='null', city='nanjing', address='null'},
                                * job=Address{province='null', city='shanghai', address='null'}
                                * }
                                * }
                                * */
                                private Map<String,Address> addressMap;

                                public Map<String, Address> getAddressMap() {
                                    return addressMap;
                                }

                                public void setAddressMap(Map<String, Address> addressMap) {
                                    this.addressMap = addressMap;
                                }

                                public List<Address> getAddresses() {
                                    return addresses;
                                }

                                public void setAddresses(List<Address> addresses) {
                                    this.addresses = addresses;
                                }

                                public List<String> getNick() {
                                    return nick;
                                }

                                public void setNick(List<String> nick) {
                                    this.nick = nick;
                                }

                                public Address getAddress() {
                                    return address;
                                }

                                public void setAddress(Address address) {
                                    this.address = address;
                                }

                                public String getName() {
                                    return name;
                                }

                                public void setName(String name) {
                                    this.name = name;
                                }

                                public Integer getAge() {
                                    return age;
                                }

                                public void setAge(Integer age) {
                                    this.age = age;
                                }

                                @Override
                                public String toString() {
                                    return "User{" +
                                            "name='" + name + '\'' +
                                            ", age=" + age +
                                            ", address=" + address +
                                            ", nick=" + nick +
                                            ", addresses=" + addresses +
                                            ", addressMap=" + addressMap +
                                            '}';
                                }
                            }
                        ```
                - exception
                    - BusinessException
                        ```java
                            package com.mvc.exception;

                            public class BusinessException extends RuntimeException {
                                /**
                                * 业务异常
                                * */

                                public BusinessException() {
                                    super();
                                }

                                public BusinessException(String message) {
                                    super(message);
                                }

                                public BusinessException(String message, Throwable cause) {
                                    super(message, cause);
                                }

                                public BusinessException(Throwable cause) {
                                    super(cause);
                                }

                                protected BusinessException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                }
                            }
                        ```
                    - ExceptionAdvice
                        ```java
                            package com.mvc.exception;

                            import org.springframework.web.bind.annotation.ExceptionHandler;
                            import org.springframework.web.bind.annotation.ResponseBody;

                            public class ExceptionAdvice {
                                /**
                                *  注解 异常处理
                                * */
                                @ExceptionHandler(NullPointerException.class)
                                @ResponseBody
                                public String doNullException(Exception e) {
                                    return "空指针异常";
                                }

                                @ExceptionHandler(ArithmeticException.class)
                                @ResponseBody
                                public String doArithmeticException(Exception e) {
                                    return "算数运算异常";
                                }

                                @ExceptionHandler(Exception.class)
                                @ResponseBody
                                public String doException(Exception e) {
                                    return "未知的异常";
                                }
                            }
                        ```
                    - ExceptionResolver
                        ```java
                            package com.mvc.exception;

                            import org.springframework.stereotype.Component;
                            import org.springframework.web.bind.annotation.ResponseBody;
                            import org.springframework.web.servlet.HandlerExceptionResolver;
                            import org.springframework.web.servlet.ModelAndView;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;

                            //@Component
                            public class ExceptionResolver implements HandlerExceptionResolver {
                                /**
                                * 异常处理
                                * */
                                @Override
                                @ResponseBody
                                public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {
                                    System.out.println("捕获到 错误啦");

                                    ModelAndView view = new ModelAndView();
                                    String error;

                                    if(e instanceof NullPointerException) {
                                        error = "空指针异常";
                                    }else if(e instanceof ArithmeticException) {
                                        error = "算数运算异常";
                                    }else {
                                        error = "未知的异常";
                                    }

                                    view.addObject("msg", error);
                                    view.setViewName("error");
                                    return view;
                                }
                            }
                        ```
                    - projectExceptionAdvice
                        ```java
                            package com.mvc.exception;

                            import org.springframework.stereotype.Component;
                            import org.springframework.ui.Model;
                            import org.springframework.web.bind.annotation.ControllerAdvice;
                            import org.springframework.web.bind.annotation.ExceptionHandler;
                            import org.springframework.web.bind.annotation.ResponseBody;

                            @Component
                            @ControllerAdvice
                            public class projectExceptionAdvice {
                                /**
                                *  自定义 异常处理
                                * */
                                @ExceptionHandler(BusinessException.class)
                                public String doBusinessException(Exception e, Model model) {
                                    System.out.println("出错了 " + e.getMessage());
                                    model.addAttribute("msg", e.getMessage());
                                    return "error";
                                }

                                @ExceptionHandler(SystemException.class)
                                public String doSystemException(Exception e, Model model) {
                                    model.addAttribute("msg", e.getMessage());
                                    return "error";
                                }

                                @ExceptionHandler(Exception.class)
                                public String doException(Exception e, Model model) {
                                    model.addAttribute("msg", e.getMessage());
                                    return "error";
                                }
                            }
                        ```
                    - SystemException
                        ```java
                            package com.mvc.exception;

                            public class SystemException extends RuntimeException {
                                /**
                                * 系统异常
                                * */

                                public SystemException() {
                                    super();
                                }

                                public SystemException(String message) {
                                    super(message);
                                }

                                public SystemException(String message, Throwable cause) {
                                    super(message, cause);
                                }

                                public SystemException(Throwable cause) {
                                    super(cause);
                                }

                                protected SystemException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
                                    super(message, cause, enableSuppression, writableStackTrace);
                                }
                            }
                        ```
                - interceptor
                    - MyInterceptor
                        ```java
                            package com.mvc.interceptor;

                            import org.springframework.web.servlet.HandlerInterceptor;
                            import org.springframework.web.servlet.ModelAndView;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;

                            public class MyInterceptor implements HandlerInterceptor {
                                /**
                                * 拦截器类
                                * */

                                // 运行前
                                @Override
                                public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                                    System.out.println("运行前");
                                    return true;
                                    // true 向下放行（走handleRun接口）， false 关闭放行（不走handleRun接口）
                                }

                                // 运行后
                                @Override
                                public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
                                    System.out.println("运行后");
                                }

                                // 完成后
                                @Override
                                public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
                                    System.out.println("完成后");
                                }
                            }
                        ```
                    - MyInterceptor2
                        ```java
                            package com.mvc.interceptor;

                            import org.springframework.web.servlet.HandlerInterceptor;
                            import org.springframework.web.servlet.ModelAndView;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;

                            public class MyInterceptor2 implements HandlerInterceptor {
                                /**
                                * 拦截器类2
                                * */

                                // 运行前
                                @Override
                                public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                                    System.out.println("运行前 2");
                                    return true;
                                    // true 向下放行（走handleRun接口）， false 关闭放行（不走handleRun接口）
                                }

                                // 运行后
                                @Override
                                public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
                                    System.out.println("运行后 2");
                                }

                                // 完成后
                                @Override
                                public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
                                    System.out.println("完成后 2");
                                }
                            }
                        ```
                    - MyInterceptor3
                        ```java
                            package com.mvc.interceptor;

                            import org.springframework.web.servlet.HandlerInterceptor;
                            import org.springframework.web.servlet.ModelAndView;

                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;

                            public class MyInterceptor3 implements HandlerInterceptor {
                                /**
                                * 拦截器类3
                                * */

                                // 运行前
                                @Override
                                public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
                                    System.out.println("运行前 3");
                                    return true;
                                    // true 向下放行（走handleRun接口）， false 关闭放行（不走handleRun接口）
                                }

                                // 运行后
                                @Override
                                public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
                                    System.out.println("运行后 3");
                                }

                                // 完成后
                                @Override
                                public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
                                    System.out.println("完成后 3");
                                }
                            }
                        ```
                - web
                    - UserServlet
                        ```java
                            package com.mvc.web;

                            import javax.servlet.ServletException;
                            import javax.servlet.http.HttpServlet;
                            import javax.servlet.http.HttpServletRequest;
                            import javax.servlet.http.HttpServletResponse;
                            import java.io.IOException;

                            public class UserServlet extends HttpServlet {
                                @Override
                                protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
                                    System.out.println("UserServlet running...");
                                    req.getRequestDispatcher("success.jsp").forward(req, res);
                                }

                                @Override
                                protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
                                    super.doPost(req, res);
                                }
                            }
                        ```
        - resources
            - spring-mvc.xml
                ```xml
                    <?xml version="1.0" encoding="UTF-8"?>
                    <beans xmlns="http://www.springframework.org/schema/beans"
                        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                        xmlns:context="http://www.springframework.org/schema/context"
                        xmlns:mvc="http://www.springframework.org/schema/mvc"
                        xsi:schemaLocation="http://www.springframework.org/schema/beans
                            http://www.springframework.org/schema/beans/spring-beans.xsd
                            http://www.springframework.org/schema/context
                            https://www.springframework.org/schema/context/spring-context.xsd
                            http://www.springframework.org/schema/mvc
                            https://www.springframework.org/schema/mvc/spring-mvc.xsd">

                        <!--注解驱动 提供扩展功能 解决进入controller 及 json数据转换 （和其他扩展功能）-->
                        <mvc:annotation-driven/>
                        <!--读取com.mvc下所标记的bean-->
                        <context:component-scan base-package="com.mvc" annotation-config="true">
                            <!--加载的控制-->
                            <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
                        </context:component-scan>
                        
                        <!--配置文件放行 不启用DispatcherServlet进行拦截-->
                    <!--    <mvc:resources mapping="/img/**" location="/img/"/>-->
                        <!--放行所有静态资源 不启用DispatcherServlet进行拦截-->
                        <mvc:default-servlet-handler/>

                        <!--配置拦截器-->
                        <mvc:interceptors>
                            <mvc:interceptor>
                                <!--拦截哪个接口-->
                                <mvc:mapping path="/handleRun"/>
                                <!--全部接口-->
                                <mvc:mapping path="/**"/>
                                <!--排除b开头的接口-->
                                <mvc:exclude-mapping path="/b*"/>
                                <!--拦截工作的类-->
                                <bean class="com.mvc.interceptor.MyInterceptor"/>
                            </mvc:interceptor>

                            <!--配置拦截器2-->
                            <mvc:interceptor>
                                <!--拦截哪个接口-->
                                <mvc:mapping path="/*"/>
                                <!--拦截工作的类-->
                                <bean class="com.mvc.interceptor.MyInterceptor2"/>
                            </mvc:interceptor>

                            <!--配置拦截器3-->
                            <mvc:interceptor>
                                <!--拦截哪个接口-->
                                <mvc:mapping path="/*"/>
                                <!--拦截工作的类-->
                                <bean class="com.mvc.interceptor.MyInterceptor3"/>
                            </mvc:interceptor>
                        </mvc:interceptors>

                        <!--定义格式转换器  <mvc:annotation-driven conversion-service="conversionService" /> -->
                    <!--    <bean id="conversionService" class="org.springframework.format.support.FormattingConversionServiceFactoryBean">-->
                    <!--        <property name="formatters">-->
                    <!--            <set>-->
                    <!--                <bean class="org.springframework.format.datetime.DateFormatter">-->
                    <!--                    <property name="pattern" value="yyyy-MM-dd"/>-->
                    <!--                </bean>-->
                    <!--            </set>-->
                    <!--        </property>-->
                    <!--    </bean>-->

                        <!--ResourceViewResolver视图解析器-->
                        <bean class="org.springframework.web.servlet.view.InternalResourceViewResolver">
                            <property name="prefix" value="/WEB-INF/page/"/>
                            <property name="suffix" value=".jsp"/>
                        </bean>

                    <!--    配置文件上传-->
                        <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
                            <property name="maxUploadSize" value="1024000000"/>
                        </bean>

                    </beans>
                ```
        - webapp
            - img
                上传图片存放的地方
            - WEB-INF
                - lib (插件 暂不清楚 为啥会在到这)
                - page
                    - check.jsp
                        ```jsp
                            <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                            <html>
                            <head>
                                <title>校验</title>
                            </head>
                            <body>
                                <form action="/check1" method="post">
                                    员工姓名: <input type="text" name="name" /><span style="color: red">${name}</span> <br />
                                    员工年龄: <input type="text" name="age" /><span style="color: red">${age}</span> <br />
                                    省份地址: <input type="text" name="address.province" /><span style="color: red">${requestScope["address.province"]}</span> <br />
                                    <input type="submit" value="提交">
                                </form>

                                <form action="/check2" method="post">
                                    员工姓名: <input type="text" name="name" /><span style="color: red">${name}</span> <br />
                                    员工年龄: <input type="text" name="age" /><span style="color: red">${age}</span> <br />
                                    省份地址: <input type="text" name="address.province" /><span style="color: red">${requestScope["address.province"]}</span> <br />
                                    <input type="submit" value="提交">
                                </form>
                            </body>
                            </html>
                        ```
                    - checkSuccess.jsp
                        ```jsp
                            <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                            <html>
                            <head>
                                <title>提交成功</title>
                            </head>
                            <body>
                                <h1>提交成功</h1>
                            </body>
                            </html>
                        ```
                    - error.jsp
                        ```jsp
                            <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                            ${msg}
                        ```
                    - page.jsp
                        ```jsp
                            <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                            <html>
                            <head>
                                <title>Page</title>
                                <h1>正在转发中...</h1>
                                <p>${name}</p>
                                <p>书名：${book.name} --- 价格：${book.price}</p>
                            </head>
                            <body>

                            </body>
                            </html>
                        ```
                    - upload.jsp
                        ```jsp
                            <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                            <html>
                            <head>
                                <title>文件上传</title>
                            </head>
                            <body>
                                <form action="/fileUpload" method="post" enctype="multipart/form-data">
                                    上传LOGO: <input type="file" name="file" /> <br />
                                    <input type="submit" value="上传" />
                                </form>
                            </body>
                            </html>
                        ```
                - web.xml
                    ```xml
                        <?xml version="1.0" encoding="UTF-8"?>
                        <web-app xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                xmlns="http://java.sun.com/xml/ns/javaee"
                                xsi:schemaLocation="http://java.sun.com/xml/ns/javaee
                            http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
                                version="3.0">

                            <!--处理中文乱码问题-->
                            <filter>
                                <filter-name>CharacterEncodingFilter</filter-name>
                                <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
                                <init-param>
                                    <param-name>encoding</param-name>
                                    <param-value>UTF-8</param-value>
                                </init-param>
                            </filter>
                            <filter-mapping>
                                <filter-name>CharacterEncodingFilter</filter-name>
                                <url-pattern>/*</url-pattern>
                            </filter-mapping>

                            <!--rest处理put请求-->
                            <filter>
                                <filter-name>HiddenHttpMethodFilter</filter-name>
                                <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
                            </filter>
                            <filter-mapping>
                                <filter-name>HiddenHttpMethodFilter</filter-name>
                                <servlet-name>DispatcherServlet</servlet-name>
                            </filter-mapping>

                            <!--拦截所有的请求-->
                            <servlet>
                                <servlet-name>DispatcherServlet</servlet-name>
                                <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
                                <!--加载配置文件-->
                                <init-param>
                                    <param-name>contextConfigLocation</param-name>
                                    <param-value>classpath:**/spring-mvc.xml</param-value>
                                </init-param>
                                <!--启动级别 1 表示服务器启动，这个项目也跟着启动-->
                                <load-on-startup>1</load-on-startup>
                            </servlet>
                            <servlet-mapping>
                                <servlet-name>DispatcherServlet</servlet-name>
                                <url-pattern>/</url-pattern>
                            </servlet-mapping>
                        </web-app>
                    ```
            - index.jsp
                ```jsp
                    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                    <body>
                    <button id="testAjax1">访问springmvc后台controller</button> <br />
                    <button id="testAjax2">访问springmvc后台controller, 传递Json格式POJO</button> <br />
                    <button id="testAjax3">访问springmvc后台controller, 传递Json格式List</button> <br />
                    <button id="testAjax4">访问springmvc后台controller, 返回字符串数据</button> <br />
                    <button id="testAjax5">访问springmvc后台controller, 返回json数据</button> <br />
                    <button id="testAjax6">访问springmvc后台controller, 返回json数组数据</button> <br />
                    <button id="testAjax7">跨越</button>
                    </body>

                    <script src="https://cdn.staticfile.org/jquery/1.10.2/jquery.min.js">
                    </script>
                    <script>
                        // testAjax1
                        $("#testAjax1").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxController",
                                data: "ajax message",
                                dataType: "text",
                                contentType: "application/text"
                            })
                        })

                        // testAjax2 传递Json格式POJO
                        $("#testAjax2").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxPojoToController",
                                data: '{"name": "Jock", "age": 22}',
                                dataType: "text",
                                contentType: "application/json",
                                success: (res) => {
                                    console.log(res)
                                }
                            })
                        })


                        // testAjax3 传递Json格式List
                        $("#testAjax3").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxLIstToController",
                                data: '[{"name": "Jock", "age": 22}, {"name": "Jock", "age": 22}]',
                                dataType: "text",
                                contentType: "application/json"
                            })
                        })

                        // testAjax4 返回字符串数据
                        $("#testAjax4").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxReturnString",
                                data: 'ajax message',
                                dataType: "text",
                                contentType: "application/json",
                                success: (res) => {
                                    console.log(res)
                                }
                            })
                        })

                        // testAjax5 返回json数据
                        $("#testAjax5").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxReturnJson",
                                data: 'ajax message',
                                dataType: "text",
                                contentType: "application/json",
                                success: (res) => {
                                    console.log(res)
                                }
                            })
                        })


                        // testAjax6 返回json数组数据
                        $("#testAjax6").click(() => {
                            $.ajax({
                                type: "POST",
                                url: "ajaxReturnJsonList",
                                data: 'ajax message',
                                dataType: "text",
                                contentType: "application/json",
                                success: (res) => {
                                    console.log(res)
                                    alert(res)
                                }
                            })
                        })
                    </script>
                ```
            - require.jsp
                ```jsp
                    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                    <html>
                    <head>
                        <title>Rest规则请求</title>
                    </head>
                    <body>
                        <!-- get请求 -->
                        <form action="/user/to/1" method="get">
                            <input type="submit" />
                        </form>

                        <!-- post请求 -->
                        <form action="/user/1" method="post">
                            <input type="submit" />
                        </form>

                        <!-- put请求 -->
                        <form action="/user/1" method="post">
                            <input type="hidden" name="_method" value="PUT" />
                            <input type="submit" />
                        </form>
                    </body>
                    </html>
                ```
            - springmvc.jsp
                ```jsp
                    <%@ page contentType="text/html;charset=UTF-8" language="java" %>
                    <html>
                    <head>
                        <img src="img/dx.png" />
                    </head>
                    <body>

                    </body>
                    </html>
                ```
            - success.jsp
                ```jsp
                    <%@page pageEncoding="UTF-8" language="java" contentType="text/html; UTF-8" %>

                    <html>
                        <body>
                            <h1>第一个spring-mvc页面</h1>
                        </body>
                    </html>
                ```
    - test
- pom.xml

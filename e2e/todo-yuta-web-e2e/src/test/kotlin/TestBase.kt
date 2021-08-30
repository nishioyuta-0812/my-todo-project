import com.codeborne.selenide.Condition
import com.codeborne.selenide.Condition.exist
import com.codeborne.selenide.Condition.text
import com.codeborne.selenide.Selenide.*
import com.thoughtworks.gauge.BeforeScenario
import com.thoughtworks.gauge.Step
import io.github.bonigarcia.wdm.WebDriverManager

class TestBase {

    @BeforeScenario
    fun setUp(){
        WebDriverManager.chromedriver().setup()
    }

    @Step("todoアプリにアクセスする")
    fun accessTodo(){
        open("http://localhost:3001/")
    }

    @Step("Topページを見ることができる")
    fun displayTopPage(){
        `$`(".page-title").shouldHave(text("TODO APP"))
    }

    @Step("やることの一覧が表示されている")
    fun displayTodoItems(){
        `$`(".todo-items").should(exist)
    }

    @Step("一つ目のやることのタイトルに<title>と表示されている")
    fun displayTodoTitle(title: String){
        `$$`(".todo-title")[0].shouldHave(text(title))
    }

    @Step("一つ目のやることにアイコンが表示されている")
    fun displayTodoIcon(){
        `$$`(".todo-item")[0].`$`(".todo-icon").should(exist)
    }

    @Step("タスクの新規作成のボタンが表示されている")
    fun displayCreateTaskButton(){
        `$`(".create-task-button").should(exist)
    }

    @Step("タスクのDoneボタンが表示されている")
    fun displayDoneTaskButton(){
        `$$`(".todo-item")[0].`$`(".done-task-button").should(exist)
    }

}
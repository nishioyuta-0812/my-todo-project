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
        `$`(".page-title").shouldHave(text("今日のやることリスト"))
    }

    @Step("やることの一覧が表示されている")
    fun displayTodolist(){
        `$`(".todo-list").should(exist)
    }
}
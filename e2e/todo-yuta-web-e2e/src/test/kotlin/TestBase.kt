import com.codeborne.selenide.Condition.exist
import com.codeborne.selenide.Condition.text
import com.codeborne.selenide.Selenide.*
import com.thoughtworks.gauge.BeforeScenario
import com.thoughtworks.gauge.Step
import io.github.bonigarcia.wdm.WebDriverManager
import org.amshove.kluent.*

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

    @Step("タスクの新規作成ボタンをクリックする")
    fun clickCreateTaskButton(){
        `$`(".create-task-button").click()
    }

    @Step("タスクの新規作成画面が表示されている")
    fun displayCreateTask(){
        `$`(".create-task").should(exist)
    }

    @Step("戻るボタンをクリックする")
    fun clickBackTopButton(){
        `$`(".back-top-button").click()
    }

    @Step("ラベルに<text>が表示されている")
    fun displayLabelWithText(text: String){
        `$`(".label").shouldHave(text(text))
    }

    @Step("タイトルの入力欄が表示されている")
    fun displayTitleInput(){
        `$`(".title-input").should(exist)
    }

    @Step("タイトルに<text>と入力する")
    fun inputTitleText(text: String){
        `$`(".input-title").value = text
    }

    @Step("タイトル入力欄に<text>と表示されている")
    fun titleInputShouldContainText(text: String){
        `$`(".input-title").should(exist).value.shouldBeEqualTo(text)
    }



}
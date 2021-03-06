import com.codeborne.selenide.Condition.exist
import com.codeborne.selenide.Condition.text
import com.codeborne.selenide.Selenide.*
import com.thoughtworks.gauge.BeforeScenario
import com.thoughtworks.gauge.Step
import io.github.bonigarcia.wdm.WebDriverManager
import org.amshove.kluent.*
import org.dbunit.Assertion
import java.sql.Connection
import java.sql.DriverManager
import org.dbunit.database.DatabaseConnection

import org.dbunit.database.IDatabaseConnection
import org.dbunit.dataset.csv.CsvDataSet
import org.dbunit.dataset.filter.DefaultColumnFilter

import java.io.File


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

    @Step("タイトルのラベルに<text>が表示されている")
    fun displayTitleLabelWithText(text: String){
        `$`(".title .label").shouldHave(text(text))
    }

    @Step("タイトルの入力欄が表示されている")
    fun displayTitleInput(){
        `$`(".input-title").should(exist)
    }

    @Step("タイトルに<text>と入力する")
    fun inputTitleText(text: String){
        `$`(".input-title").value = text
    }

    @Step("タイトル入力欄に<text>と表示されている")
    fun titleInputShouldContainText(text: String){
        `$`(".input-title").should(exist).value.shouldBeEqualTo(text)
    }

    @Step("詳細のラベルに<text>と表示されている")
    fun displayDescriptionLabelWithText(text: String){
        `$`(".description .label").shouldHave(text(text))
    }

    @Step("詳細の入力欄が表示されている")
    fun displayInputDescription(){
        `$`(".input-description").should(exist)
    }

    @Step("詳細入力欄に<text>と入力する")
    fun inputDescriptionText(text: String){
        `$`(".input-description").value = text
    }

    @Step("詳細入力欄に<text>と表示されている")
    fun descriptionInputShouldContainText(text: String){
        `$`(".input-description").should(exist).value.shouldBeEqualTo(text)
    }

    @Step("タスクの登録ボタンをクリックする")
    fun clickRegisterTaskButton(){
        `$`(".register-task-button").click()
    }

    @Step("DBに<scenario>のデータが登録されたこと")
    fun verifyDd(scenario: String){
        val conn = DriverManager.getConnection("jdbc:postgresql://localhost:15432/ytodo", "admin", "admin")
        val filterColumns = arrayOf("created_at")
        val dbconn: IDatabaseConnection = DatabaseConnection(conn,"ytodo")
        val expect = CsvDataSet(File("src/test/resources/expect/${scenario}/")).getTable("task").let {
            DefaultColumnFilter.excludedColumnsTable(it,filterColumns)
        }
        val result = dbconn.createDataSet().getTable("task").let {
            DefaultColumnFilter.excludedColumnsTable(it,filterColumns)
        }
        Assertion.assertEquals(expect, result)
        dbconn.close()
    }

}